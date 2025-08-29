# Asset Manifest

This document tracks all image assets used in the Metro Surfaces website for image optimization, SEO clarity, and editor reference.

## Product Images

| Filename | Path | Usage in Code/Component | Alt Text Pattern | Page(s) Used |
|----------|------|------------------------|------------------|---------------|
| `asa-sheet-brown.jpg` | `/src/assets/products/` | `ProductGallery.tsx` (products[0].sheetImage), `Products.tsx` (asaSheetBrown import) | `Sample of {product.name} ({product.category}) by Metro Surfaces — {product.internalCode}, features: {product.category}` | Home, Products |
| `Lam-in-MS.png` | `/src/assets/products/` | `Products.tsx` (premiumLaminatesImg import) | `Product photo of {category.name} by Metro Surfaces — {category.description}` | Products |
| `Lou-in-MS.png` | `/src/assets/products/` | `ProductGallery.tsx` (products[1].sheetImage), `Products.tsx` (decorativeLouversImg import) | `Sample of {product.name} ({product.category}) by Metro Surfaces — {product.internalCode}, features: {product.category}` | Home, Products |
| `Cane-in-MS.png` | `/src/assets/products/` | `Products.tsx` (caneWallpaperImg import) | `Product photo of {category.name} by Metro Surfaces — {category.description}` | Products |
| `louvers-cream.jpg` | `/src/assets/products/` | `Products.tsx` (louversCream import, unused variable) | `Product photo of {category.name} by Metro Surfaces — {category.description}` | Products (unused) |

## Application Showcase Images

| Filename | Path | Usage in Code/Component | Alt Text Pattern | Page(s) Used |
|----------|------|------------------------|------------------|---------------|
| `20250825_1334_Minimalist Workstation Design_remix_01k3g409jqehsvv8ybz8g2jr25.png` | `/src/assets/applications/` | `ProductGallery.tsx` (applications[0].image, applications[1].image) | `Showcase: {product.name} used for {app.title} — {product.category} by Metro Surfaces` | Home |
| `residential-feature-wall.jpg` | `/src/assets/applications/` | `ProductGallery.tsx` (applications[0].image) | `Showcase: {product.name} used for {app.title} — {product.category} by Metro Surfaces` | Home |
| `restaurant-louvers.jpg` | `/src/assets/applications/` | `ProductGallery.tsx` (applications[1].image) | `Showcase: {product.name} used for {app.title} — {product.category} by Metro Surfaces` | Home |
| `office-brown-panels.jpg` | `/src/assets/applications/` | Not currently used in code | N/A | None (available) |
| `ASAappinMS (2).png` | `/src/assets/applications/` | Not currently used in code | N/A | None (available) |
| `RENDER04 TEXTURE 867.png` | `/src/assets/applications/` | Not currently used in code | N/A | None (available) |

## Hero/Banner Images

| Filename | Path | Usage in Code/Component | Alt Text Pattern | Page(s) Used |
|----------|------|------------------------|------------------|---------------|
| `hero-ambient.jpg` | `/src/assets/` | `Hero.tsx` (heroAmbient import) | `Modern workspace interior with Metro Surfaces ASA Acrycore sheets in neutral tones — elegant premium decorative surfaces for architects` | Home |
| `contact-hero-new.jpg` | `/src/assets/` | Not currently used in code | N/A | None (available) |

## Image Usage Guidelines

### Alt Text Standards
- **Product images**: Include product name, category, brand, and key features
- **Application images**: Mention product name, application type, category, and brand
- **Hero images**: Describe scene, mention key products, target audience
- **SEO keywords**: Include "Metro Surfaces", product categories, architectural terms

### File Naming Convention
- Products: `{product-type}-{color/finish}.{ext}`
- Applications: `{application-type}-{product-type}.{ext}`
- Hero/Banner: `{page/section}-{descriptor}.{ext}`

### Technical Notes
- All images use `SmartImage` component for fallback handling
- Import statements use `@/assets/` alias path
- Standard dimensions: Product sheets are typically 8×4 feet reference
- Images are optimized for web use with appropriate compression

## Maintenance

- **Last Updated**: August 29, 2025
- **Review Frequency**: Monthly or when assets are added/modified
- **Responsible Team**: Development & Marketing
- **Related Documents**: `ASSET_MIGRATION_PLAN.md`
