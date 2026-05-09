# Style: Bento Grid Product Showcase

References: Linear features, Vercel, Raycast, Apple Intelligence / WWDC, Arc Browser.

## Visual Identity
Defined by varied-size tiles that fill the entire page, each tile telling its own capability story. Two dominant aesthetic camps: **dark-with-glow** (Linear, Vercel, Raycast, Arc) and **rich-tonal multi-color** (Apple WWDC, Apple Intelligence, Stripe) where each tile owns a distinct color pair. Heavy use of subtle 3D, shimmer, gradient borders, and 1px shared borders.

Three oklch palettes:
- **Obsidian + Aurora** (Linear/Vercel feel): `oklch(0.13 0.01 270)` page bg, `oklch(0.18 0.02 270)` tile bg, `oklch(0.28 0.03 270)` border, glow `oklch(0.72 0.18 295)` violet, accent `oklch(0.78 0.15 200)` cyan.
- **Carbon + Citrus** (Raycast/Arc): bg `oklch(0.15 0.005 60)`, tile `oklch(0.21 0.01 60)`, glow `oklch(0.82 0.17 35)` warm orange, success `oklch(0.78 0.16 145)`.
- **Porcelain Bento** (Apple-style colorful): bg `oklch(0.97 0.005 90)`, tile A `oklch(0.92 0.04 240)` blue, tile B `oklch(0.88 0.08 50)` peach, tile C `oklch(0.9 0.06 150)` mint, ink `oklch(0.18 0.01 270)`.

Typography: clean modern geometric sans (Inter, Geist, SF Pro). Hero stays restrained at ~clamp(2.5rem, 5vw, 4rem); tile titles 18-22px semibold; micro-copy 13-14px at 60-70% opacity. Each tile pairs an icon/illustration/animation with terse text.

## Hero Patterns
Compact hero (smaller than typical landing — often only 40-60vh) with a single tight headline ("Everything you need to ship", "What's new in v3", "The platform for the modern web") leading directly into the bento grid which becomes the page. Eyebrow tag often pill-shaped with version label.

## Section Inventory
The bento grid IS the layout. Tile categories:
- **Hero feature tile** (large, 2x2 or 3x2 span) — autoplay video or animated visual + headline
- **Medium feature tiles** (1x2 or 2x1) — icon + title + description + small visual artifact
- **Small chip tiles** (1x1) — single stat, capability badge, or icon-only callout
- **Cross-section tiles** — span entire row width for a "framework logos" or testimonial moment
- Final full-width CTA strip below the grid

## Distinctive Components Needed
- `BentoGridContainer` (CSS grid, named areas, `grid-template-columns: repeat(12, 1fr)` desktop, gap 12-24px)
- `BentoTileFeature` (large with autoplay video/animation)
- `BentoTileMedium` (icon + title + description + decorative artifact)
- `BentoTileChip` (compact stat/capability)
- `BentoTileVideo` (autoplay loop, muted, masked edge fade)
- `BentoTileChart` (animated counter or sparkline data viz)
- `BentoTileCarousel` (cycling content within tile)
- `BentoTileInteractive` (hover/click changes state)
- `AnimatedGlowBorder` (per-tile, conic-gradient rotating border)
- `BentoTileCode` (syntax-highlighted snippet on dark)

## Animation Patterns
Stagger-reveal tiles on scroll (50-80ms cascade), hover lift (translateY -2px) + glow intensify, animated icons inside tiles (Lottie or CSS), scroll-driven counters, conic-gradient borders that rotate (3-6s loop), shimmer/grain SVG textures, marquee rows for logos, mask-image edge fades on inner content, 0.75→0.9 scale on hover for embedded mockups.

## Hebrew RTL Adaptations
CSS Grid auto-flips content order under `dir=rtl` — keep this. Use logical properties (`padding-inline-start`, `margin-inline-end`) rather than left/right. Hebrew titles stay `text-align: start` (right in RTL); English UI labels (product names, version tags, code snippets, charts axis labels) explicitly wrapped in `<span dir="ltr">` and stay LTR. Charts/data viz remain LTR. Mix Heebo or Rubik for Hebrew with Inter/Geist for Latin technical text. Quotation marks and parentheses need RTL-aware Unicode handling. Stat tiles like "2.4x" stay LTR but their Hebrew caption flips.

## Top 5 Reference Sites
1. **linear.app/features** — minimalist dark glow, 8-tile grid, subtle borders
2. **vercel.com** — shared 1px borders, table-style bento, multi-section
3. **raycast.com** — playful warm palette, command/screenshot tiles
4. **apple.com/apple-intelligence** — colorful porcelain bento, sequential modules
5. **arc.net** + **mockuuups.studio bento gallery** — themed dark with vivid accent

## Recommended Tokens
```
--tile-bg: oklch(0.18 0.02 270);
--tile-bg-hover: oklch(0.21 0.025 270);
--tile-border: oklch(0.28 0.03 270 / 0.6);
--tile-border-hover: oklch(0.45 0.08 295 / 0.8);
--tile-glow: oklch(0.72 0.18 295 / 0.35);
--tile-radius: 1.25rem;
--bento-gap: clamp(0.75rem, 1.5vw, 1.25rem);
--bento-cols: repeat(12, minmax(0, 1fr));
--tile-shadow: 0 1px 0 oklch(1 0 0 / 0.04) inset, 0 20px 40px -20px oklch(0 0 0 / 0.5);
```

## Best Fit For (Hebrew/Israeli Market)
Israeli SaaS startups (Monday-style capability decks), dev tools and infra companies (Snyk, JFrog, Wix Studio), fintech feature pages (Rapyd, Payoneer feature tours), B2B AI/ML products, cybersecurity feature reveals (Check Point, Wiz showcasing capabilities at-a-glance), Israeli marketing agencies displaying service portfolios as a single dense canvas, agency capability decks-as-website where a one-page bento replaces a slide deck. Particularly effective for Hebrew because dense grid lets short Hebrew labels (which are typographically tighter than English) breathe inside individual tiles.
