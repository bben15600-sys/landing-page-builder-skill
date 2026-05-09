---
name: lpb-ecommerce-dtc
description: "Build Hebrew RTL E-commerce DTC Premium landing pages in the Aesop/Glossier/Allbirds/Magic Spoon style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: ProductHero with variant picker, Bestsellers tile grid, Editorial 50/50 story blocks, Press badge marquee, ReviewWall with photos, Sticky add-to-cart on mobile, color/size swatches, BundleBuilder, founder story. Triggers: 'build DTC site for [brand]', 'Aesop-style site', 'Glossier-style site', 'create ecommerce landing page', 'cosmetics / skincare / food / fashion brand site'."
---

# E-commerce DTC Premium — Hebrew RTL

For Israeli DTC brands: cosmetics, skincare, supplements, premium food (olive oil, wine, tahini, coffee), fashion, home fragrance, sustainable goods.

> **Full research:** see `../../research/03-ecommerce-dtc.md`

## When to Use

User has a direct-to-consumer brand and wants the editorial polish of **Aesop, Glossier, Allbirds, Hims, Warby Parker, Magic Spoon, Outdoor Voices**. Hallmarks: warm neutrals, editorial serif headlines, hero product photography, sticky mobile cart.

## Required Information from User

### 1. Brand Identity
- Brand name + product category (skincare / supplements / food / fashion / etc.)
- Mission / brand story (2-3 sentences)
- Hero copy direction (product-led OR editorial-led)

### 2. Theme Direction
- **A — Aesop earth** (warm cream + clay + ink black)
- **B — Glossier soft** (paper white + millennial pink + black)
- **C — Magic Spoon vibrant** (saturated brand color blocks)

### 3. Hero Pattern
- Product hero photo + minimal copy + price + Add-to-Bag
- Full-bleed editorial photo with overlaid headline
- Auto-rotating product carousel
- Video-bg lifestyle hero

### 4. Bestsellers (3-6 products)
For each: name, price, hero photo, short description, available variants

### 5. Editorial Story Blocks (1-3)
50/50 image+text: "Our process", "Our materials", "What's inside" — image + 100-150 words

### 6. Press Strip (10-20 grayscale logos)
Vogue, Forbes, NYT, Israeli press (Calcalist Style, At Magazine, Globes Women)

### 7. Founder Block
Portrait + 2-3 paragraphs of brand story

### 8. Reviews (12-20)
Star + customer photo + name + verified purchase badge + 2-3 sentences

### 9. Values Triptych (3 icon columns)
Sustainability / Ethics / Craft (with icon + 1-line each)

### 10. FAQ (8-12 items)
Shipping, returns, ingredients, etc.

## Visual Identity

### Token Palette (Theme A — Aesop earth)
```css
:root {
  --warm-cream: oklch(0.93 0.02 85);
  --paper-white: oklch(0.99 0.005 20);
  --ink-black: oklch(0.20 0.01 60);
  --accent-clay: oklch(0.45 0.06 60);
  --product-card-radius: 4px;
  --hero-radius: 0px;
  --space-editorial: clamp(80px, 12vw, 160px);
  --track-tight: -0.02em;
  --swatch-size: 28px;
  --sticky-cart-h: 72px;
}
```

### Typography
- Hebrew display serif: **Frank Ruhl Libre**
- Hebrew body sans: **Heebo**
- Latin display: GT Sectra / Tiempos Headline / Canela
- Latin body: Söhne / Apercu / GT America
- Hero size: clamp 56-112px, tracking -0.02em, often lowercase or sentence case

## Page Architecture

```
app/page.tsx
├── PromoBar (free shipping over ₪250)
├── Header
├── Hero (product OR editorial)
├── BestsellersGrid (3-6 tiles)
├── EditorialStoryBlock (50/50 image+text)
├── PressBadgeStrip (grayscale marquee)
├── FounderStoryBlock (portrait + paragraphs)
├── ReviewWall (masonry with photos)
├── ValuesTriptych (3 icons)
├── FAQAccordion
├── NewsletterCapture
└── Footer

app/products/[slug]/page.tsx
├── ProductHero (gallery + variant + qty + Add-to-Bag)
├── IngredientCallouts (annotated photo)
├── HowToUse
├── ReviewsForProduct
└── RelatedProducts

(StickyAddToCart on mobile across all product pages)
```

## Distinctive Components

- `ProductHero` — image gallery (thumbs left/below) + title + price + variant picker + qty stepper + Add-to-Bag + accordion details
- `ProductTileGrid` — image, name, swatches, price, quick-add
- `EditorialStoryBlock` — 50/50 image/text, optional pull-quote
- `PressBadgeStrip` — grayscale logo marquee
- `ReviewWall` — 3-col masonry, star + customer photo + verified badge
- `StickyAddToCart` — mobile bottom bar with mini product + CTA
- `ColorVariantSwatch` — circle swatches with active ring
- `SizeSelectorGrid` — pill or square buttons, sold-out striked
- `BundleBuilder` (Magic Spoon style) — multi-product picker with running total
- `IngredientCallouts` — annotated product photo with hotspots

## Animation Patterns

- Image zoom on hover (scale 1.04, 400ms ease-out)
- Soft fade-up on scroll (y: 16px, 600ms)
- Press logo marquee (infinite linear, 30s)
- Product image swap on color change (crossfade 200ms)
- Cursor-icon swap on hover (Glossier signature)
- Sticky CTA slide-up after hero exits viewport

## Hebrew RTL Adaptations

- Mirror 50/50 image-text blocks; `flex-row-reverse` for explicit ordering
- Currency: `₪` AFTER number per Israeli convention (`89 ₪`); `Intl.NumberFormat('he-IL', {currency:'ILS'})`
- Mixed Hebrew product names + English ingredient lists with `<bdi>` wrappers
- Right-aligned thumbnails; flip carousel arrow direction (next = ←)
- Stars and rating numerals stay LTR inside RTL
- Hebrew serif: Frank Ruhl Libre + Heebo to mimic GT Sectra + Söhne

## Reference Sites

1. **Aesop** — gold standard editorial restraint, monochromatic warmth
2. **Glossier** — soft minimalism + millennial pink + UGC reviews
3. **Allbirds** — sustainability-led, color-grid storytelling
4. **Magic Spoon** — playful saturated DTC food
5. **Outdoor Voices** — clean activewear, material-led nav

## Best Fit For (Hebrew/Israeli market)

Israeli DTC categories: skincare/cosmetics (Maelys, Lavido, Sabon-style), supplements & vitamins, premium food & beverage (olive oil, wine, tahini, coffee), fashion & swimwear, home fragrance, sustainable household goods, baby/kids brands. Most Israeli brands today rely on basic Shopify RTL themes that lack editorial polish — premium DTC template fills a clear gap, especially for brands targeting both local and US/EU export markets.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
