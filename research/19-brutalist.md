# Style: Brutalist / Bold / Maximalist

References: Gumroad, Are.na, MSCHF, Bloomberg (Terminal pages), Brutalist Websites archive.

## Visual Identity
Brutalist sites reject polish. Three palette modes dominate: (1) **pure-contrast** (red+black+white, full yellow+black, white+black with one neon accent), (2) **electric/neon** (electric blue + lime + black, hot pink + yellow + white), and (3) **intentional ugly** (pea green + brown + cream, mustard + lavender + dirt-brown). Borders are heavy (2-4px solid black), `border-radius: 0`, drop-shadows are hard offset blocks (`4px 4px 0 #000`), no blur, no gradients.

**3 oklch palettes:**
- Yellow Slap: `--bg: oklch(0.98 0 0)` / `--fg: oklch(0.15 0 0)` / `--accent: oklch(0.92 0.21 100)` (electric yellow) / `--border: oklch(0 0 0)`
- Neon Riot: `--bg: oklch(0 0 0)` / `--fg: oklch(0.98 0 0)` / `--accent: oklch(0.85 0.28 135)` (lime) / `--alt: oklch(0.7 0.25 25)` (red-orange)
- Ugly Editorial: `--bg: oklch(0.93 0.04 90)` (cream) / `--fg: oklch(0.25 0.05 50)` (brown) / `--accent: oklch(0.7 0.15 130)` (pea-green) / `--hot: oklch(0.65 0.27 15)` (red)

**Typography:** System stacks (`Times New Roman`, `Helvetica Neue Bold`, `Courier`, `ui-monospace`). Headlines are oversized (clamp 4rem-12rem), tracking tight, leading 0.85. Often pair an aggressive serif (Times/Suez One) with brutal mono (JetBrains Mono, IBM Plex Mono). Body text feels like raw HTML—underlined links in default blue, default bullet lists.

## Hero Patterns
- **Wall-of-text headline** filling the viewport (Gumroad-style "Go from 0 to $1")
- **Solid color-block backgrounds** (full yellow or full black, no images)
- **Marquee scrolling** band across the top or middle
- **Numbered list-as-hero** (MSCHF-style 1., 2., 3. directory)
- **Anti-grid:** intentional misalignment, headline tilted, image overlapping text

## Section Inventory
- Manifesto / statement block (large prose, ragged-right)
- Work / portfolio as raw `<ol>` list with dates and tags
- Drops / launches — numbered, dated, with strikethrough on sold-out
- Editorial / longform piece embedded mid-page
- Email capture as raw `<form>` with default browser styling
- Footer with metadata (timestamp, build number, IP, "made in" line)

## Distinctive Components Needed
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
Fast snaps (60-100ms), no easing curves (linear or step-end). Marquee infinite scroll. Blinking cursor. Hover invert (instant bg/fg swap). Color flashes on click. Jitter on hover (slight rotate/translate). No fade-ins, no parallax, no smooth scroll. Optionally a glitch/RGB-split text effect on headlines.

## Hebrew RTL Adaptations
- Hebrew display fonts: **Karantina** (3 weights, brutal display), **Suez One** (Hebrew+Latin serif, calligraphic-modern), **Bigshot One**, **Gveret-Levin** (typewriter feel), **Miriam Libre Bold** for chunky body
- Marquee direction reverses naturally with `dir="rtl"`; English fragments scroll inside Hebrew band for jolt aesthetic
- Mixed-script intentional clash: Hebrew headline in Karantina Bold with inline English in Courier creates the brutalist "typesetting accident" feel
- Hebrew quotation marks (גרשיים) and maqaf used as raw punctuation
- Number lists (1., 2., 3.) work in both directions; keep Latin numerals for catalog feel
- Letter-spacing must be set to `0` or negative (Hebrew breaks with Latin tracking)

## Top 5 Reference Sites
1. **gumroad.com** — bold headlines, coin SVGs, tile feature grid, statement copy
2. **mschf.com** — numbered directory of drops, list-as-hero
3. **are.na** — utilitarian, content-first, anti-commercial
4. **brutalistwebsites.com** — live curated index of the genre
5. **bloomberg.com** (terminal/business pages) — dense data, monospace, harsh dividers, default-blue links

## Recommended Tokens
```
--brutalist-yellow: oklch(0.92 0.21 100);
--brutalist-lime: oklch(0.85 0.28 135);
--brutalist-red: oklch(0.65 0.27 15);
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
```

## Best Fit For (Hebrew/Israeli market)
Tel Aviv design studios with attitude (e.g., קלע, Studio Adam&Co tier), indie creators and zine publishers, edgy fashion brands (סטרייטוור, vintage resale), Israeli music artists and labels (electronic, hip-hop, punk), independent art galleries, statement personal brands and writers, anti-establishment tech (privacy tools, crypto, hacker collectives), indie publishers and literary magazines, protest/activist sites, underground event series and parties.
