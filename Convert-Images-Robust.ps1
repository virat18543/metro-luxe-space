param(
  [string]$Root = ".",
  [string]$Assets = "public/assets",
  [ValidateSet("webp","avif")] [string]$Format = "webp",
  [int]$Quality = 82,
  [switch]$LosslessPng,
  [switch]$UpdateRefs,
  [switch]$DeleteOriginals,
  [switch]$RasterizeSvg,
  [int]$SvgWidth = 1600,
  [int]$SvgDpi = 144,
  [string]$SvgBackground = "none",
  [string]$MagickPath
)

$ErrorActionPreference = "Stop"

function Find-Magick {
  param([string]$Hint)
  if ($Hint -and (Test-Path $Hint)) { return (Resolve-Path $Hint).Path }
  $c = Get-Command magick -ErrorAction SilentlyContinue
  if ($c) { return $c.Source }
  $cands = @()
  foreach ($r in @("C:\Program Files","$env:LOCALAPPDATA\Programs")) {
    if (Test-Path $r) {
      $cands += Get-ChildItem -Path $r -Filter "magick.exe" -Recurse -Depth 2 -ErrorAction SilentlyContinue |
                Select-Object -Expand FullName
    }
  }
  foreach ($p in $cands) { if (Test-Path $p) { return $p } }
  return $null
}

$MagickExe = Find-Magick -Hint:$MagickPath
if (-not $MagickExe) {
  Write-Error "Could not locate magick.exe. Pass -MagickPath 'C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe'."
  exit 1
}

$RootPath   = (Resolve-Path $Root).Path
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

# Candidates by extension (we’ll probe real format next)
$imgExts = @("*.jpg","*.jpeg","*.png","*.svg")
$images = Get-ChildItem -Path $AssetsPath -Recurse -File -Include $imgExts | Where-Object { -not (Is-Excluded $_) }
if (-not $images) { Write-Host "No images found to convert."; exit 0 }

function Get-RealFormat([string]$path) {
  try {
    $fmt = & "$MagickExe" identify -quiet -format "%m" -- "$path" 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $fmt) { return $null }
    return $fmt.Trim().ToUpper()
  } catch { return $null }
}

$converted = New-Object System.Collections.Generic.List[Object]
$skipped   = New-Object System.Collections.Generic.List[Object]
$failed    = New-Object System.Collections.Generic.List[Object]

foreach ($img in $images) {
  $real = Get-RealFormat $img.FullName
  if (-not $real) {
    $failed.Add([pscustomobject]@{ Path=$img.FullName; Reason="identify-failed" })
    continue
  }

  $ext = ([IO.Path]::GetExtension($img.FullName)).ToLower()
  $newPath = [IO.Path]::ChangeExtension($img.FullName, $Format)

  if ($real -in @("JPEG","JPG","PNG")) {
    # Raster → WEBP/AVIF
    $args = @($img.FullName)
    if ($Format -eq "webp") {
      if ($LosslessPng -and $ext -eq ".png") {
        $args += ("-quality", $Quality, "-define", "webp:lossless=true")
      } else {
        $args += ("-quality", $Quality, "-define", "webp:method=6")
      }
    } else {
      $args += ("-quality", $Quality)  # AVIF
    }
    $args += $newPath

    try {
      & "$MagickExe" @args
      if ($LASTEXITCODE -eq 0 -and (Test-Path $newPath)) {
        $converted.Add([pscustomobject]@{
          OldAbs=$img.FullName; NewAbs=$newPath
          OldRel=(Resolve-Path -Relative $img.FullName)
          NewRel=($newPath -replace [regex]::Escape($RootPath), "" -replace "^[\\/]", "")
        })
        if ($DeleteOriginals) { Remove-Item -Force -- $img.FullName }
      } else {
        $failed.Add([pscustomobject]@{ Path=$img.FullName; Reason="convert-failed ($real)" })
      }
    } catch {
      $failed.Add([pscustomobject]@{ Path=$img.FullName; Reason="convert-exception ($($_.Exception.Message))" })
    }

  } elseif ($real -eq "SVG") {
    if (-not $RasterizeSvg) {
      $skipped.Add([pscustomobject]@{ Path=$img.FullName; Reason="svg (kept as vector)" })
      continue
    }
    # Rasterize SVG → WEBP/AVIF
    $args = @(
      "-background", $SvgBackground,
      "-density", $SvgDpi, $img.FullName,
      "-resize", "${SvgWidth}x", $newPath
    )
    try {
      & "$MagickExe" @args
      if ($LASTEXITCODE -eq 0 -and (Test-Path $newPath)) {
        $converted.Add([pscustomobject]@{
          OldAbs=$img.FullName; NewAbs=$newPath
          OldRel=(Resolve-Path -Relative $img.FullName)
          NewRel=($newPath -replace [regex]::Escape($RootPath), "" -replace "^[\\/]", "")
        })
        if ($DeleteOriginals) { Remove-Item -Force -- $img.FullName }
      } else {
        $failed.Add([pscustomobject]@{ Path=$img.FullName; Reason="svg-rasterize-failed" })
      }
    } catch {
      $failed.Add([pscustomobject]@{ Path=$img.FullName; Reason="svg-rasterize-exception ($($_.Exception.Message))" })
    }

  } else {
    $skipped.Add([pscustomobject]@{ Path=$img.FullName; Reason="unsupported real format: $real" })
  }
}

# Write mapping only for successfully converted files
$csvPath = Join-Path $RootPath "image-mapping.csv"
$converted | Select-Object OldRel, NewRel | Export-Csv -NoTypeInformation -Encoding UTF8 $csvPath
Write-Host "Wrote mapping: $csvPath"

# Also write skipped/failed logs (for visibility)
($skipped | Out-String) | Out-File -Encoding UTF8 (Join-Path $RootPath "skipped-images.log")
($failed  | Out-String) | Out-File -Encoding UTF8 (Join-Path $RootPath "failed-images.log")

# Update references only for converted entries
if ($UpdateRefs -and $converted.Count -gt 0) {
  $codeExts = "*.js","*.jsx","*.ts","*.tsx","*.html","*.css","*.md","*.astro","*.vue","*.svelte","*.json"
  $codeFiles = Get-ChildItem -Path $RootPath -Recurse -File -Include $codeExts | Where-Object { -not (Is-Excluded $_) }
  $logPath = Join-Path $RootPath "ref-update.log"
  if (Test-Path $logPath) { Remove-Item $logPath -Force }
  New-Item -ItemType File -Path $logPath -Force | Out-Null

  $byStem = @{}
  foreach ($m in $converted) {
    $oldName = [IO.Path]::GetFileName($m.OldAbs)
    $newName = [IO.Path]::GetFileName($m.NewAbs)
    $stem    = [IO.Path]::GetFileNameWithoutExtension($oldName).ToLower()
    if (-not $byStem.ContainsKey($stem)) { $byStem[$stem] = @() }
    $byStem[$stem] += @{ old=$oldName; new=$newName }
  }

  # By full relative path (safer)
  $byRel = @{}
  foreach ($m in $converted) { $byRel[$m.OldRel] = $m.NewRel }

  foreach ($cf in $codeFiles) {
    $text = Get-Content -Raw -Encoding UTF8 $cf.FullName
    $orig = $text

    foreach ($oldRel in $byRel.Keys) {
      $oldRelEsc = [regex]::Escape($oldRel)
      $newRelVal = $byRel[$oldRel]
      $text = [regex]::Replace($text, $oldRelEsc, { param($m) $newRelVal })
    }

    $regex = '(?<prefix>["''\(\s])(?<fname>(?<stem>[^"''\s\)]+?)\.(?<ext>jpg|jpeg|png|svg))(?<suffix>["''\)\s])'
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
