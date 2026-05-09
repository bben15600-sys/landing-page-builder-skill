# Style: E-commerce DTC Premium

References: Aesop, Glossier, Allbirds, Hims, Warby Parker, Magic Spoon, Olipop, Outdoor Voices.

## Visual Identity
Three dominant approaches: (1) warm cream/sand neutrals + earth accent (Aesop, Allbirds), (2) ultra-minimal off-white + black + soft pastel accent (Glossier, Warby Parker), (3) saturated brand color blocks rotating per section (Magic Spoon, Olipop). Whitespace is a feature.

**3 oklch palettes:**
- **Aesop earth**: bg `oklch(0.93 0.02 85)` warm cream, ink `oklch(0.20 0.01 60)` near-black, accent `oklch(0.45 0.06 60)` clay
- **Glossier soft**: bg `oklch(0.99 0.005 20)` paper white, ink `oklch(0.15 0 0)` true black, accent `oklch(0.88 0.05 15)` millennial pink
- **Magic Spoon vibrant**: bg `oklch(0.92 0.06 300)` lavender, ink `oklch(0.18 0.05 280)` ink-purple, accent `oklch(0.72 0.20 25)` hot pink

**Typography:** Editorial serif display + sans body. Common stacks: Canela / Söhne (Glossier-era), GT Sectra / ABC Diatype, Söhne Breit, Optima/Suisse (Aesop's Optima-like custom). Hero uses tight tracking (-0.02em), large size (clamp 56px–112px), often lowercase or sentence case, never all-caps shouty. Generous whitespace, baseline grid alignment.

## Hero Patterns
1. **Product hero photo + minimal copy + price + Add to Bag** (left photo / right copy or reverse) — Glossier, Aesop product pages.
2. **Full-bleed editorial hero photo** with single overlaid serif headline + dual CTA (Allbirds Canvas Cruiser, Outdoor Voices OV Hike).
3. **Auto-rotating product carousel** with arrow navigation, soft crossfade (Glossier).
4. **Video-bg lifestyle hero** with playful headline (Magic Spoon "Childhood Classics. Grown-Up Ingredients").

## Section Inventory
- Shipping / promo top bar (free ship over $X)
- Hero (product or editorial)
- "Shop bestsellers" tile grid (3–6 across desktop)
- Editorial story 50/50 ("Our process", "Our materials", "What's inside")
- Press badge strip ("As seen in Vogue, Forbes, NYT") — grayscale logos
- Founder / brand-story block with portrait
- Reviews wall with customer photos (UGC mosaic)
- Sustainability / values triptych (3 icon columns)
- FAQ accordion
- Subscription value-prop row (4 icons: Save, Skip, Cancel, VIP)
- Newsletter capture band
- Sticky add-to-cart on mobile

## Distinctive Components Needed
- `ProductHero` — image gallery (thumbnails left/below) + title + price + variant picker + qty stepper + Add-to-Bag + accordion details
- `ProductTileGrid` — image, name, swatches, price, quick-add
- `EditorialStoryBlock` — 50/50 image/text, optional pull-quote
- `PressBadgeStrip` — grayscale logo marquee
- `ReviewWall` — 3-column masonry, star rating, customer photo, name, verified badge
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
- Mirror 50/50 image-text blocks; always `dir="rtl"` on root with `flex-row-reverse` for explicit ordering.
- Currency: shekel symbol `₪` placed AFTER number per Israeli convention (`89 ₪`); use `Intl.NumberFormat('he-IL', {style:'currency', currency:'ILS'})`.
- Hebrew product names paired with English ingredient lists / SKU codes — use mixed-direction inline with `<bdi>` wrappers.
- Right-aligned thumbnails in product gallery; flip carousel arrow direction (next = ←).
- Stars and rating numerals stay LTR inside RTL container.
- Hebrew serif options: Frank Ruhl Libre, David Libre for editorial; Heebo, Assistant, Rubik for sans body. Pair Frank Ruhl Libre + Heebo to mimic GT Sectra + Söhne.

## Top 5 Reference Sites
- **Aesop** — gold standard for editorial restraint, monochromatic warmth, three-column grid.
- **Glossier** — soft minimalism + millennial pink + carousel hero + UGC reviews.
- **Allbirds** — sustainability-led, color-grid storytelling, gendered category split.
- **Magic Spoon** — playful saturated DTC food, gradient sections, bundle builder.
- **Outdoor Voices** — clean activewear, material-led nav, color-variant tiles.

## Recommended Tokens
```
--warm-cream: oklch(0.96 0.015 85)
--paper-white: oklch(0.99 0.005 20)
--ink-black: oklch(0.18 0.005 60)
--accent-clay: oklch(0.55 0.08 50)
--accent-pink: oklch(0.85 0.06 15)
--product-card-radius: 4px
--hero-radius: 0px
--editorial-serif: "Frank Ruhl Libre", "GT Sectra", Georgia, serif
--body-sans: "Heebo", "Söhne", -apple-system, sans-serif
--space-editorial: clamp(80px, 12vw, 160px)
--track-tight: -0.02em
--swatch-size: 28px
--sticky-cart-h: 72px
```

## Best Fit For (Hebrew/Israeli market)
Massive growth segment. Strong fit for skincare/cosmetics (Maelys, Lavido, Sabon-style), supplements & vitamins, premium food & beverage (olive oil, wine, tahini, coffee), fashion & swimwear, home fragrance, sustainable household goods, baby/kids brands. Israel's DTC scene is rapidly maturing — most brands today rely on basic Shopify RTL themes that lack editorial polish. A premium DTC template fills a clear gap, especially for brands targeting both local and US/EU export markets.
