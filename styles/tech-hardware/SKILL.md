---
name: lpb-tech-hardware
description: "Build Hebrew RTL Tech Hardware Product / Apple-style product launch pages. Stack: Next.js 16 + Tailwind v4 + base-ui + GSAP ScrollTrigger. Includes: ScrollDrivenProductReveal (image-sequence canvas), StickyFeatureCallout, ProductColorwayPicker, SpecsTable, ConfigureBuyBlock, ARViewerEmbed (model-viewer), PressQuoteRail, FeatureExplodedDiagram, BigNumberStat, StickyBuyBar. Triggers: 'create hardware product page', 'gadget launch page', 'create site for [מוצר חומרה / מכשיר / גאדג'ט]', 'Apple-style product page'."
---

# Tech Hardware Product / Apple-style — Hebrew RTL

For Israeli hardware startups (drones, smart-home, wearables, IoT), home appliance importers, premium audio resellers, gadget e-commerce flagships, EV/e-mobility brands, smart-agri / precision-hardware B2B.

> **Full research:** see `../../research/14-tech-hardware.md`

## When to Use

User is launching a hardware product and wants the cinematic, scroll-storytelling polish of **Apple iPhone, Nothing, Bambu Lab, Dyson, Sonos, Tesla**. Image-sequence reveals, sticky feature pins, configure-and-buy.

## Required Information from User

### 1. Product Identity
- Product name (English preferred — "iPhone 17 Pro", "Bambu X1")
- Hebrew tagline (1-line)
- Category (phone / audio / drone / appliance / EV / sensor / etc.)
- Hero pitch (3-5 sentences)

### 2. Theme Direction
- **A — Pure Apple Studio** (white bg + product color accent)
- **B — Cinema Black Stage** (deep blacks + glow accents)
- **C — Nothing Mono Dot** (raw industrial, dot-matrix red)

### 3. Hero Visuals
- Product hero photo on solid bg (multiple angles for image-sequence)
- 60-240 frames if scroll-driven reveal desired
- Spec ticker info (price, weight, battery, key-stat)

### 4. Key Features (4-8)
For each: title + 1-line description + sticky media (video loop or image series)

### 5. Camera/Sound/Sensor Deep Dive (if applicable)
Image-sequence + spec callouts + lifestyle shots

### 6. Specs Table (15-30 specs)
Two-column key/value (Hebrew label / LTR value)

### 7. Compare Versions (2-4 models)
Comparison table with checkmarks

### 8. Configure & Buy
Color/storage/options + qty + price-rollup

### 9. Accessories (5-15)
Cards + price + "Add"

### 10. Sustainability / Materials Story
Editorial block about craft, recycled aluminum, etc.

### 11. AR / 3D Viewer
GLB file URL (for model-viewer embed)

### 12. Press Reviews (5-15)
Publication logo + star rating + quote

## Visual Identity

### Token Palette (Theme A — Pure Apple Studio)
```css
:root {
  --product-bg: oklch(0.99 0 0);
  --product-ink: oklch(0.18 0 0);
  --product-muted: oklch(0.55 0 0);
  --product-rule: oklch(0.92 0 0);
  --accent: oklch(0.62 0.22 28);   /* product color */
  --spec-divider: oklch(0.92 0 0);
  --spec-label: oklch(0.50 0 0);
  --spec-value: oklch(0.18 0 0);
  --colorway-active: oklch(0.18 0 0);
  --hero-numeric-size: clamp(80px, 14vw, 220px);
  --sticky-cta-bg: oklch(0.18 0 0);
  --sticky-cta-fg: oklch(0.99 0 0);
  --review-star: oklch(0.78 0.13 80);
}
```

### Typography
- Hebrew: **Heebo** (clean modern)
- Latin: SF Pro Display / Inter / Geist (display weights 600-700 only)
- Hero numerics: clamp(80px, 14vw, 220px), tabular figures
- Tight tracking on hero (-0.04em), generous on body

## Page Architecture

```
app/page.tsx
├── Header (minimal, sticky-on-scroll, buy CTA)
├── HeroProduct (massive product photo, 80vh+)
│   └── ScrollDrivenProductReveal (canvas image-sequence)
├── KeyFeatures (sticky-pin + scrolling copy) ×4-8
├── DeepDive (camera/sound/sensor with image-sequence)
├── SpecsTable (full technical readout)
├── CompareVersions
├── ConfigureBuyBlock
├── AccessoriesCarousel
├── SustainabilityCraftStory
├── ARViewer (model-viewer GLB)
├── PressQuoteRail (reviews with stars)
├── FAQAccordion (warranty, financing, returns)
└── Footer

(StickyBuyBar appears after hero scroll-out)
```

## Distinctive Components

- `ScrollDrivenProductReveal` — preloaded numbered frames drawn to `<canvas>` via GSAP ScrollTrigger scrub
- `StickyFeatureCallout` — sticky product media + scrolling captions
- `ProductColorwayPicker` — tabs that swap full palette + hero image (view-transition API)
- `SpecsTable` — two-column comparison, RTL labels / LTR numerics
- `ConfigureBuyBlock` — color + storage + qty + price-rollup + sticky add-to-cart
- `ARViewerEmbed` — `<model-viewer>` GLB with AR quick-look
- `PressQuoteRail` — review-publication logos with star ratings
- `FeatureExplodedDiagram` — SVG with hover-reveal callout pins
- `BigNumberStat` — hero numeric + tiny unit + caption
- `StickyBuyBar` — appears after hero scroll-out

## Animation Patterns

- Canvas image-sequence (Apple's signature trick) — 60-240 frames preloaded
- Sticky-pin sections with horizontal-or-fade copy beats
- Smooth colorway transitions (`view-transition-name` or framer-motion crossfade)
- Spec counters animating on intersect
- Subtle parallax on product, never on type
- Scroll-snap optional on feature stops

## Hebrew RTL Adaptations

- All chrome, navigation, copy → RTL; product names stay LTR ("iPhone 17 Pro")
- Numerics + units (`128GB`, `₪4,990`, `48MP`, `5000mAh`) wrapped in `<bdi dir="ltr">` inside Hebrew labels
- Configure/buy uses ₪ prefix; financing "החל מ־₪249/חודש" with LTR number isolation
- Spec table: Hebrew label right column, LTR value left column — mirror of Apple's English layout
- Sticky buy-bar CTA on right (RTL primary action position)
- Image-sequence reveal direction unchanged; scroll direction is vertical

## Reference Sites

1. **apple.com/iphone-17-pro** — gold standard scroll image-sequence + sticky feature pins
2. **nothing.tech** — dot-matrix typography, mono palette, raw industrial framing
3. **bambulab.com/x1** — engineering exploded views, spec showcases for prosumer hardware
4. **dyson.com** — cutaway tech diagrams + lifestyle blend
5. **sonos.com/era-300** — premium audio cinematic palette
6. **tesla.com/modely** — sticky configure-CTA, full-bleed product photography

## Best Fit For (Hebrew/Israeli market)

Israeli consumer-electronics startups (drones, smart-home, wearables, IoT — Lumus, Wiliot tags consumerized), home appliance importers (BSH, Electra premium lines), premium audio resellers / boutique distributors, gadget e-commerce flagships (KSP, Bug premium tier, Ivory), Israeli DTC inventors on Kickstarter graduating to a real storefront, EV / e-mobility brands selling in IL, smart-agri / precision-hardware B2B (Taranis sensors, SeeTree devices).

## Status

🟡 SKILL spec complete. Templates and demo site pending.
