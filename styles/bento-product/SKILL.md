---
name: lpb-bento-product
description: "Build Hebrew RTL Bento Grid Product Showcase pages in the Linear/Vercel/Raycast/Apple Intelligence style — where the bento grid IS the page. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: BentoGridContainer (CSS grid named-areas), BentoTileFeature, BentoTileMedium, BentoTileChip, BentoTileVideo, BentoTileChart, BentoTileCarousel, BentoTileInteractive, AnimatedGlowBorder, BentoTileCode. Triggers: 'create bento grid landing page', 'Apple Intelligence-style page', 'Linear-features-style page', 'capability deck website'."
---

# Bento Grid Product Showcase — Hebrew RTL

For Israeli SaaS startups (Monday-style capability decks), dev tools, fintech feature pages, B2B AI/ML products, cybersecurity feature reveals, marketing agencies displaying service portfolios as a single dense canvas, agency capability decks-as-website.

> **Full research:** see `../../research/18-bento-product.md`

## When to Use

User wants to fill the entire page with a bento grid where each tile tells its own capability story. References: **Linear features, Vercel, Raycast, Apple Intelligence / WWDC, Arc Browser**.

## Required Information from User

### 1. Product Identity
- Product name
- Tight headline ("Everything you need to ship", "What's new in v3")
- Optional eyebrow tag with version

### 2. Theme Direction
- **A — Obsidian + Aurora** (Linear/Vercel — dark + violet glow)
- **B — Carbon + Citrus** (Raycast/Arc — dark + warm orange)
- **C — Porcelain Bento** (Apple-style — white + each tile own color pair)

### 3. Tiles (8-20 total)
For each: title + 1-line description + visual type:
- **Hero feature tile** (large 2×2 or 3×2) — autoplay video / animated visual
- **Medium tile** (1×2 or 2×1) — icon + title + description + small visual
- **Small chip** (1×1) — single stat, capability badge, icon-only
- **Cross-section** (full row) — framework logos / testimonial moment
- **Code tile** — syntax-highlighted snippet
- **Chart tile** — animated counter / sparkline
- **Carousel tile** — cycling content within tile
- **Interactive tile** — hover/click changes state

## Visual Identity

### Token Palette (Theme A — Obsidian + Aurora)
```css
:root {
  --bg: oklch(0.13 0.01 270);
  --tile-bg: oklch(0.18 0.02 270);
  --tile-bg-hover: oklch(0.21 0.025 270);
  --tile-border: oklch(0.28 0.03 270 / 0.6);
  --tile-border-hover: oklch(0.45 0.08 295 / 0.8);
  --tile-glow: oklch(0.72 0.18 295 / 0.35);
  --tile-radius: 1.25rem;
  --bento-gap: clamp(0.75rem, 1.5vw, 1.25rem);
  --tile-shadow: 0 1px 0 oklch(1 0 0 / 0.04) inset, 0 20px 40px -20px oklch(0 0 0 / 0.5);
  --accent-cyan: oklch(0.78 0.15 200);
  --accent-violet: oklch(0.72 0.18 295);
}
```

### Typography
- Hebrew: **Heebo** or Rubik
- Latin: Inter / Geist / SF Pro
- Hero size restrained: clamp(2.5rem, 5vw, 4rem)
- Tile titles 18-22px semibold; micro-copy 13-14px at 60-70% opacity
- Code/numbers stay LTR in mono

## Page Architecture

```
app/page.tsx
├── Header (minimal)
├── CompactHero (40-60vh: eyebrow + headline + maybe sub)
├── BentoGridContainer (the entire page)
│   ├── BentoTileFeature (large)
│   ├── BentoTileMedium ×N
│   ├── BentoTileChip ×N
│   ├── BentoTileCode (syntax highlighting)
│   ├── BentoTileVideo (autoplay loop)
│   ├── BentoTileChart (animated counter)
│   ├── BentoTileCarousel
│   ├── BentoTileInteractive
│   └── ... (8-20 tiles total)
├── CrossSectionTile (full-width logos / testimonial)
├── FinalCTAStrip
└── Footer
```

## Distinctive Components

- `BentoGridContainer` — CSS grid, named areas, `grid-template-columns: repeat(12, 1fr)` desktop, gap 12-24px
- `BentoTileFeature` — large with autoplay video/animation
- `BentoTileMedium` — icon + title + description + decorative artifact
- `BentoTileChip` — compact stat/capability
- `BentoTileVideo` — autoplay loop, muted, masked edge fade
- `BentoTileChart` — animated counter or sparkline
- `BentoTileCarousel` — cycling content within tile
- `BentoTileInteractive` — hover/click changes state
- `AnimatedGlowBorder` — per-tile, conic-gradient rotating border
- `BentoTileCode` — syntax-highlighted snippet on dark

## Animation Patterns

Stagger-reveal tiles on scroll (50-80ms cascade), hover lift (translateY -2px) + glow intensify, animated icons inside tiles (Lottie or CSS), scroll-driven counters, conic-gradient borders that rotate (3-6s loop), shimmer/grain SVG textures, marquee rows for logos, mask-image edge fades on inner content, 0.75→0.9 scale on hover for embedded mockups.

## Hebrew RTL Adaptations

CSS Grid auto-flips content order under `dir=rtl` — keep this. Use logical properties (`padding-inline-start`, `margin-inline-end`) rather than left/right. Hebrew titles stay `text-align: start` (right in RTL); English UI labels (product names, version tags, code snippets, charts axis labels) explicitly wrapped in `<span dir="ltr">` and stay LTR. Charts/data viz remain LTR. Mix Heebo or Rubik for Hebrew with Inter/Geist for Latin technical text. Stat tiles like "2.4×" stay LTR but their Hebrew caption flips.

## Reference Sites

1. **linear.app/features** — minimalist dark glow, 8-tile grid, subtle borders
2. **vercel.com** — shared 1px borders, table-style bento, multi-section
3. **raycast.com** — playful warm palette, command/screenshot tiles
4. **apple.com/apple-intelligence** — colorful porcelain bento, sequential modules
5. **arc.net** + bentogrids.com gallery — themed dark with vivid accent

## Best Fit For (Hebrew/Israeli Market)

Israeli SaaS startups (Monday-style capability decks), dev tools and infra companies (Snyk, JFrog, Wix Studio), fintech feature pages (Rapyd, Payoneer feature tours), B2B AI/ML products, cybersecurity feature reveals (Check Point, Wiz showcasing capabilities at-a-glance), Israeli marketing agencies displaying service portfolios as a single dense canvas, and agency capability decks-as-website where a one-page bento replaces a slide deck. Particularly effective for Hebrew because the dense grid lets short Hebrew labels (which are typographically tighter than English) breathe inside individual tiles.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
