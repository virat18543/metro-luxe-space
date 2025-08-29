param(
  [string]$Root = ".",
  [string]$Assets = "public/assets",
  [ValidateSet("webp","avif")] [string]$Format = "webp",
  [int]$Quality = 82,
  [switch]$LosslessPng,
  [switch]$UpdateRefs,
  [string]$MagickPath  # NEW: explicitly point to magick.exe
)

$ErrorActionPreference = "Stop"

function Find-Magick {
  param([string]$Hint)
  if ($Hint -and (Test-Path $Hint)) { return (Resolve-Path $Hint).Path }

  $c = Get-Command magick -ErrorAction SilentlyContinue
  if ($c) { return $c.Source }

  # Look in common locations (recursively, shallow)
  $cands = @()
  $roots = @("C:\Program Files","$env:LOCALAPPDATA\Programs")
  foreach ($r in $roots) {
    if (Test-Path $r) {
      $cands += Get-ChildItem -Path $r -Filter "magick.exe" -Recurse -Depth 2 -ErrorAction SilentlyContinue | Select-Object -Expand FullName
    }
  }
  foreach ($p in $cands) { if (Test-Path $p) { return $p } }
  return $null
}

$MagickExe = Find-Magick -Hint:$MagickPath
if (-not $MagickExe) {
  Write-Error "Could not locate magick.exe. Pass -MagickPath 'C:\Program Files\ImageMagick-...\magick.exe'."
  exit 1
}

$RootPath   = Resolve-Path $Root
$AssetsPath = Join-Path $RootPath $Assets
if (-not (Test-Path $AssetsPath)) {
  Write-Warning "Assets path '$AssetsPath' not found. Scanning whole project."
  $AssetsPath = $RootPath
}

$exclude = @("\.git\", "\node_modules\", "\dist\", "\build\", "\.next\", "\out\", "\.vercel\")
function Is-Excluded($p) {
  $full = ($p | ForEach-Object { $_.FullName }) -replace '/', '\'
  foreach ($ex in $exclude) { if ($full -like "*$ex*") { return $true } }
  return $false
}

$imgExts = @("*.jpg","*.jpeg","*.png")
$images = Get-ChildItem -Path $AssetsPath -Recurse -File -Include $imgExts | Where-Object { -not (Is-Excluded $_) }
if (-not $images) { Write-Host "No images found to convert."; exit 0 }

$OutExt = ".$Format"
$mapping = @()
foreach ($img in $images) {
  $newPath = [System.IO.Path]::ChangeExtension($img.FullName, $Format)
  $oldRel = (Resolve-Path -Relative $img.FullName)
  $newRel = $newPath.Replace($RootPath, "").TrimStart("\","/")
  $mapping += [pscustomobject]@{
    OldAbs = $img.FullName; NewAbs = $newPath; OldRel = $oldRel; NewRel = $newRel
  }
}

foreach ($m in $mapping) {
  $dir = Split-Path $m.NewAbs
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

  $args = @($m.OldAbs)
  if ($Format -eq "webp") {
    if ($LosslessPng -and ([System.IO.Path]::GetExtension($m.OldAbs)).ToLower() -eq ".png") {
      $args += ("-quality", $Quality, "-define", "webp:lossless=true")
    } else {
      $args += ("-quality", $Quality, "-define", "webp:method=6")
    }
  } else {
    $args += ("-quality", $Quality) # avif
  }
  $args += $m.NewAbs

  & "$MagickExe" @args
}

$csvPath = Join-Path $RootPath "image-mapping.csv"
$mapping | Select-Object OldRel, NewRel | Export-Csv -NoTypeInformation -Encoding UTF8 $csvPath
Write-Host "Wrote mapping: $csvPath"

if ($UpdateRefs) {
  $codeExts = "*.js","*.jsx","*.ts","*.tsx","*.html","*.css","*.md","*.astro","*.vue","*.svelte","*.json"
  $codeFiles = Get-ChildItem -Path $RootPath -Recurse -File -Include $codeExts | Where-Object { -not (Is-Excluded $_) }
  $logPath = Join-Path $RootPath "ref-update.log"
  if (Test-Path $logPath) { Remove-Item $logPath -Force }
  New-Item -ItemType File -Path $logPath -Force | Out-Null

  $byStem = @{}
  foreach ($m in $mapping) {
    $oldName = [System.IO.Path]::GetFileName($m.OldAbs)
    $newName = [System.IO.Path]::GetFileName($m.NewAbs)
    $stem    = [System.IO.Path]::GetFileNameWithoutExtension($oldName).ToLower()
    if (-not $byStem.ContainsKey($stem)) { $byStem[$stem] = @() }
    $byStem[$stem] += @{ old=$oldName; new=$newName }
  }

  foreach ($cf in $codeFiles) {
    $text = Get-Content -Raw -Encoding UTF8 $cf.FullName
    $orig = $text

    foreach ($m in $mapping) {
      $oldRelEsc = [regex]::Escape($m.OldRel)
      $text = [regex]::Replace($text, $oldRelEsc, { param($match) $m.NewRel })
    }

    $regex = '(?<prefix>["''\(\s])(?<fname>(?<stem>[^"''\s\)]+?)\.(?<ext>jpg|jpeg|png))(?<suffix>["''\)\s])'
    $text = [regex]::Replace($text, $regex, {
      param($mch)
      $fname = $mch.Groups["fname"].Value
      $stem  = $mch.Groups["stem"].Value.ToLower()
      if ($byStem.ContainsKey($stem)) {
        foreach ($pair in $byStem[$stem]) {
          if ($pair.old -eq $fname) {
            return $mch.Groups["prefix"].Value + $pair.new + $mch.Groups["suffix"].Value
          }
        }
      }
      return $mch.Value
    }, "IgnoreCase")

    if ($text -ne $orig) {
      $bak = "$($cf.FullName).bak"
      if (-not (Test-Path $bak)) { $orig | Out-File -FilePath $bak -Encoding UTF8 }
      $text | Out-File -FilePath $cf.FullName -Encoding UTF8
      Add-Content -Path $logPath -Value ("UPDATED " + $cf.FullName)
    }
  }
  Write-Host "Wrote ref update log: $logPath"
}

Write-Host "Done."
