---
name: lpb-brutalist
description: "Build Hebrew RTL Brutalist / Bold / Maximalist landing pages in the Gumroad/MSCHF/Are.na/Bloomberg-Terminal style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: BrutalistMarquee, ListBlock (raw), HardBorderCard (3px solid + 6px hard offset shadow), TableBlock, AnchorLinkRail, StickerOverlay, GridIntentionallyMisaligned, BlinkingCursor, InvertOnHover, NumberedDirectory. System fonts, no border-radius, no gradients. Triggers: 'create brutalist site', 'maximalist landing page', 'Gumroad-style site', 'edgy statement brand site'."
---

# Brutalist / Bold / Maximalist — Hebrew RTL

For Tel Aviv design studios with attitude, indie creators and zine publishers, edgy fashion brands, Israeli music artists and labels, independent art galleries, statement personal brands, anti-establishment tech (privacy tools, crypto), indie publishers, protest/activist sites, underground events.

> **Full research:** see `../../research/19-brutalist.md`

## When to Use

User explicitly wants attitude — anti-design, raw HTML feel, system fonts, harsh borders, intentional ugliness, statement brand. References: **Gumroad, Are.na, MSCHF, Bloomberg Terminal pages, Brutalist Websites archive**.

## Required Information from User

### 1. Brand Identity
- Brand name (often UPPERCASE or Lowercase; both work)
- Manifesto / statement (this IS the hero — 30-100 words, ragged-right)
- What you sell / make / believe

### 2. Theme Direction
- **A — Yellow Slap** (white bg + black + electric yellow)
- **B — Neon Riot** (black bg + white + lime + red-orange)
- **C — Ugly Editorial** (cream + brown + pea-green + red — intentional ugly)

### 3. Hero Content
Pick one:
- Wall-of-text headline filling viewport
- Solid color-block (full yellow / full black) + tiny copy
- Marquee scrolling band
- Numbered list-as-hero (MSCHF directory)
- Anti-grid: deliberately misaligned

### 4. Work / Drops / Catalog (numbered list)
Each item: number + title + date + tags + status (sold-out / live / preview)

### 5. Editorial Pieces (1-3 longform)
Embedded mid-page

### 6. Email Capture
Raw form, no fancy styling — just `<input>` and `<button>` with default browser styling

### 7. Footer Metadata
Timestamp, build number, IP if you're feeling weird, "made in" line

## Visual Identity

### Token Palette (Theme A — Yellow Slap)
```css
:root {
  --bg: oklch(0.98 0 0);
  --fg: oklch(0.15 0 0);
  --accent: oklch(0.92 0.21 100);    /* electric yellow */
  --border: oklch(0 0 0);
  --hard-border: 3px solid oklch(0 0 0);
  --hard-shadow: 6px 6px 0 oklch(0 0 0);
  --marquee-speed: 18s;
  --inverse-hover-bg: oklch(0 0 0);
  --inverse-hover-fg: oklch(0.98 0 0);
  --anti-radius: 0;
  --snap-duration: 80ms;
  --blink-duration: 1.06s;
  --headline-tracking: -0.04em;
  --headline-leading: 0.85;
}

* { border-radius: 0 !important; }
```

### Typography
- System stacks: `Times New Roman, Helvetica Neue Bold, Courier, ui-monospace`
- Hebrew display: **Karantina** (3 weights), **Suez One**, **Bigshot One**, **Gveret-Levin**
- Hebrew body: **Miriam Libre Bold** for chunky body
- Headlines oversized (clamp 4rem-12rem), tight tracking, leading 0.85
- Default underlined links in default blue (#0000EE)
- Default browser bullet lists

## Page Architecture

```
app/page.tsx
├── BrutalistMarquee (kinetic strip — claims, dates, latest drops)
├── ManifestoHero (large prose, ragged-right, no images)
├── NumberedDirectory (work/drops as raw <ol>)
├── TableBlock (data dense, alternating row inversion)
├── EditorialBlock (longform piece embedded)
├── EmailCaptureRaw (default form styling)
├── FooterMetadata (timestamp + build + made-in)
```

## Distinctive Components

- `BrutalistMarquee` — kinetic scrolling text, configurable direction/speed
- `ListBlock` — raw `<ol>`/`<ul>`, default bullets, no card chrome
- `HardBorderCard` — 3px solid border, 6px hard offset shadow, no radius
- `TableBlock` — bordered HTML table with alternating row inversion
- `AnchorLinkRail` — vertical default-blue underlined `<a>` list
- `StickerOverlay` — rotated absolutely-positioned text stamp
- `GridIntentionallyMisaligned` — CSS grid with negative margins
- `BlinkingCursor` — `::after` `|` that blinks 1s step-end
- `InvertOnHover` — bg/fg swap on hover (no transition)
- `NumberedDirectory` — MSCHF-style enumerated link list

## Animation Patterns

Fast snaps (60-100ms), no easing curves (linear or step-end). Marquee infinite scroll. Blinking cursor. Hover invert (instant bg/fg swap). Color flashes on click. Jitter on hover (slight rotate/translate). No fade-ins, no parallax, no smooth scroll. Optional glitch/RGB-split text effect on headlines.

## Hebrew RTL Adaptations

- Hebrew display fonts: **Karantina** (3 weights, brutal display), **Suez One** (Hebrew+Latin serif, calligraphic-modern), **Bigshot One**, **Gveret-Levin** (typewriter feel), **Miriam Libre Bold** for chunky body
- Marquee direction reverses naturally with `dir="rtl"`; English fragments scroll inside Hebrew band for jolt aesthetic
- Mixed-script intentional clash: Hebrew headline in Karantina Bold with inline English in Courier creates the brutalist "typesetting accident" feel
- Hebrew quotation marks (גרשיים) and maqaf used as raw punctuation
- Number lists (1., 2., 3.) work in both directions; keep Latin numerals for catalog feel
- Letter-spacing must be set to `0` or negative (Hebrew breaks with Latin tracking)

## Reference Sites

1. **gumroad.com** — bold headlines, coin SVGs, tile feature grid, statement copy
2. **mschf.com** — numbered directory of drops, list-as-hero
3. **are.na** — utilitarian, content-first, anti-commercial
4. **brutalistwebsites.com** — live curated index
5. **bloomberg.com** (terminal/business pages) — dense data, monospace, harsh dividers

## Best Fit For (Hebrew/Israeli market)

Tel Aviv design studios with attitude (e.g., קלע, Studio Adam&Co tier), indie creators and zine publishers, edgy fashion brands (סטרייטוור, vintage resale), Israeli music artists and labels (electronic, hip-hop, punk), independent art galleries, statement personal brands and writers, anti-establishment tech (privacy tools, crypto, hacker collectives), indie publishers and literary magazines, protest/activist sites, underground event series and parties.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
