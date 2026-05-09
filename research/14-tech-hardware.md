# Style: Tech Hardware Product / Apple-style Product Launch

References: Apple iPhone, Nothing, Bambu Lab, Dyson, Sonos, Tesla, Rabbit r1, Humane Pin.

A premium, cinematic style centered on letting the physical product be the entire stage. Hero photography is reverent, scrolling is the primary narrative device, and every spec is a beat in a story.

## Visual Identity

**Three oklch palettes (colorway-driven, swappable):**

1. **Pure Apple / Studio** — `--bg: oklch(0.99 0 0)`, `--ink: oklch(0.18 0 0)`, `--muted: oklch(0.55 0 0)`, `--rule: oklch(0.92 0 0)`, `--accent: oklch(0.62 0.22 28)` (product color). White studio backdrop, near-black ink, single product-color accent.
2. **Cinema Black / Stage** — `--bg: oklch(0.08 0 0)`, `--ink: oklch(0.97 0 0)`, `--muted: oklch(0.65 0.01 250)`, `--rule: oklch(0.22 0 0)`, `--accent: oklch(0.78 0.18 200)`. Deep blacks, glow highlights — Tesla / Apple Pro Black mode.
3. **Nothing Mono Dot** — `--bg: oklch(0.96 0 0)`, `--ink: oklch(0.12 0 0)`, `--muted: oklch(0.50 0 0)`, `--rule: oklch(0.85 0 0)`, `--accent: oklch(0.72 0.18 35)` (dot-matrix red). Raw industrial.

**Typography:** SF Pro Display / Inter / Geist / Helvetica Now for headings; display weights 600–700 only, never 900. Massive hero numerics (`clamp(80px, 14vw, 220px)`) for spec showcases ("48MP", "₪4,990", "0–100"). Tight tracking on hero (`-0.04em`), generous on body.

**Photography:** Hero product on solid seamless backdrop, exploded-view diagrams with thin callout lines, lifestyle (hands holding device, in environment), factory/precision macro (CNC, sensor close-ups). Cinematic color grading — deep blacks, pristine highlights.

## Hero Patterns
- Massive product photo centered on solid bg, 80vh+ tall.
- Headline (product name, often EN) + Hebrew tagline + "קנה עכשיו" + "למד עוד".
- Scroll-driven: product rotates / parts assemble / camera pushes in via image-sequence canvas.
- Spec ticker pinned: price · weight · battery · key-stat.

## Section Inventory
1. Hero with scroll-driven product reveal
2. Key features — one per scroll-stop, sticky media + scrolling text
3. Deep-dive (camera / sound / sensor) with image-sequence
4. Specs table (full technical readout)
5. Compare versions / models
6. Configure & buy (color + storage + qty)
7. Accessories carousel
8. Sustainability / craft / materials story
9. AR / 3D viewer
10. Press reviews + ratings rail
11. FAQ + warranty + financing

## Distinctive Components Needed
- `ScrollDrivenProductReveal` — preloaded numbered frames drawn to `<canvas>` via GSAP ScrollTrigger scrub
- `StickyFeatureCallout` — sticky product media + scrolling captions
- `ProductColorwayPicker` — tabs that swap full palette + hero image
- `SpecsTable` — two-column comparison, RTL labels / LTR numerics
- `ConfigureBuyBlock` — color + storage + qty + price-rollup + sticky add-to-cart
- `ARViewerEmbed` — `<model-viewer>` GLB with AR quick-look
- `PressQuoteRail` — review-publication logos with star ratings
- `FeatureExplodedDiagram` — SVG with hover-reveal callout pins
- `BigNumberStat` — hero numeric + tiny unit + caption
- `StickyBuyBar` — appears after hero scroll-out

## Animation Patterns
- Canvas image-sequence (Apple's signature trick) — 60–240 frames preloaded
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

## Top 5 Reference Sites
1. **apple.com/iphone-17-pro** — gold standard scroll image-sequence + sticky feature pins
2. **nothing.tech / Phone (3)** — dot-matrix typography, mono palette, raw industrial framing
3. **bambulab.com/x1** — engineering exploded views, spec showcases for prosumer hardware
4. **dyson.com** — cutaway tech diagrams + lifestyle blend
5. **sonos.com/era-300** — premium audio cinematic palette
6. **tesla.com/modely** — sticky configure-CTA, full-bleed product photography

## Recommended Tokens
```
--product-bg, --product-ink, --product-muted
--spec-divider, --spec-label, --spec-value
--colorway-active, --colorway-accent
--hero-numeric-size (clamp 80px → 220px)
--sticky-cta-bg, --sticky-cta-fg
--exploded-line, --exploded-pin
--review-star, --review-badge-bg
```

## Best Fit For (Hebrew/Israeli market)
- Israeli consumer-electronics startups (drones, smart-home, wearables, IoT — Lumus, NSO-style pivots, Wiliot tags consumerized)
- Home appliance importers (BSH, Electra premium lines) localizing flagship product pages
- Premium audio resellers / boutique distributors (Bowers & Wilkins IL, Bang & Olufsen IL)
- Gadget e-commerce flagships (KSP, Bug premium tier, Ivory)
- Israeli DTC inventors on Kickstarter graduating to a real storefront
- EV / e-mobility brands selling in IL (scooters, e-bikes, charging hardware)
- Smart-agri / precision-hardware B2B selling a hero SKU (Taranis sensors, SeeTree devices)
