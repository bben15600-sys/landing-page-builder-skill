---
name: lpb-creative-agency
description: "Build Hebrew RTL Creative Agency / Design Studio landing pages in the Pentagram/Locomotive/Active Theory/Hello Monday style. Stack: Next.js 16 + Tailwind v4 + base-ui + GSAP + Lenis. Includes: HugeTextHero with marquee, WorkGrid with hover-video cards, CaseStudyScrollytelling, CustomCursor, HoverPeek, AwardsReel, ManifestoBlock, GetInTouchHero. Triggers: 'create design studio site', 'creative agency site', 'branding house portfolio', 'Pentagram-style site'."
---

# Creative Agency / Design Studio — Hebrew RTL

For Tel Aviv branding houses, design studios, brand consultancies, digital product studios, motion designers, video production, architecture firms with editorial sensibility.

> **Full research:** see `../../research/08-creative-agency.md`

## When to Use

User runs a creative agency or studio and wants the high-craft, kinetic, award-winning feel of **Pentagram, Locomotive (6× Awwwards Agency of the Year), Hello Monday, Active Theory, Resn, Studio Lutalica, Immersive Garden**.

## Required Information from User

### 1. Studio Identity
- Studio name (English preferred — short, design-forward)
- Manifesto / positioning statement (1-3 sentences, brutal-honest)
- Founding year (heritage)
- City / cities

### 2. Theme Direction
- **A — Brutalist Mono** (pure black + lime accent)
- **B — Editorial Cream** (warm cream + ink + brick accent)
- **C — Studio Noir** (deep blue-black + magenta)

### 3. Selected Work (8-30 projects)
For each: client name + project title + tagline + 3-5 hero images + autoplay video reel (silent) + role tags ("Branding / Web / Motion") + year + awards earned

### 4. Case Study Scrollytelling (top 5-10 projects)
Long-form per project with sticky media + flowing text:
- Brief / challenge
- Process imagery
- Selected screenshots / mockups
- Outcomes / metrics

### 5. Services / Capabilities (10-20 as text list)
Numbered list, hover-reveals image peek

### 6. Manifesto Block
Massive type-only spread, 100-200 words

### 7. Awards (Awwwards, FWA, Webby, Cannes, D&AD, ADC)
Counts + recent wins

### 8. Clients Logo Cloud (20-50 logos)
Often as marquee

### 9. Get-in-Touch
- Big mailto link as hero CTA, magnetic
- Office addresses (Tel Aviv, optional NYC/Berlin/etc.)
- Careers page

## Visual Identity

### Token Palette (Theme A — Brutalist Mono)
```css
:root {
  --bg: oklch(0.08 0 0);
  --fg: oklch(0.97 0.01 90);
  --accent: oklch(0.85 0.27 130);   /* lime */
  --cursor-color: oklch(0.85 0.27 130);
  --cursor-size-default: 12px;
  --cursor-size-hover: 96px;
  --huge-display: clamp(4rem, 18vw, 22rem);
  --display-leading: 0.88;
  --display-tracking: -0.04em;
  --case-study-bg: oklch(0.08 0 0);
  --marquee-speed: 40s;
  --magnetic-strength: 0.35;
  --page-transition-duration: 800ms;
  --scroll-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Typography
- Hebrew display: **Heebo Variable** + **Karantina** for poster moments
- Hebrew body: Heebo
- Latin display: PP Editorial New / GT Walsheim Pro / GT Sectra / Söhne / Migra
- Hero text often 12-22vw / 200-360px
- Mixed serif display + neo-grotesk body

## Page Architecture

```
app/page.tsx
├── HugeTextHero (massive type, marquee, word-rotation, custom cursor)
├── ShowReel (full-bleed silent video, 30-60s loop)
├── SelectedWorkGrid (2-up asymmetric, hover-video on cards)
├── ManifestoBlock (massive type-only)
├── ServicesList (numbered, hover-peek to image)
├── AwardsReel (Awwwards/FWA/D&AD count + badges)
├── ClientsMarquee (50+ logos)
├── GetInTouchHero (huge mailto link, magnetic)
└── Footer (offices + careers + social + language toggle)

app/work/[slug]/page.tsx
├── HeroImage (full-bleed)
├── ProjectMeta (client / role / year / awards)
├── BriefBlock
├── ProcessGallery (sticky-media + scroll text)
├── OutcomesMetrics
├── NextProjectCTA
└── BackToIndex

app/about/page.tsx
├── ManifestoBlock
├── TeamGrid
└── ProcessPhilosophy
```

## Distinctive Components

- `HugeTextHero` — marquee + word-rotation
- `WorkGrid` — hover-video cards (silent webm/mp4)
- `CaseStudyScrollytelling` — sticky media column + flowing text
- `CustomCursor` — morphs based on data-cursor attr on hover target
- `HoverPeek` — project thumbnail follows cursor on link hover
- `AwardsReel` — rows of award orgs + counts
- `ManifestoBlock` — massive typography, no imagery
- `GetInTouchHero` — huge mailto link with magnetic hover
- `MarqueeStrip` (from shared/) — bidi-aware infinite scroll
- `ServicesList` — numbered ordered list, hover reveals image peek
- `LanguageSwitcher` (from shared/)

## Animation Patterns

- WebGL/canvas hero (R3F, OGL, vanilla shader — distortion, plane waves)
- Scroll-jacking via Lenis (preferred) or Locomotive Scroll v5
- GSAP timelines with ScrollTrigger; SplitText for letter/word reveals
- Cursor morph (FLIP between cursor states)
- Magnetic hover on CTAs/work cards
- Image lift + zoom on hover, masked reveals on scroll-in
- Kinetic typography (variable font weight axis tied to scroll velocity)
- Page transitions (curtain wipe, scale-down + fade)

## Hebrew RTL Adaptations

- Bidi-aware kinetic type: `direction: rtl` on root, but per-line GSAP `xPercent` reversed; marquee animates left-to-right (positive translateX) to read naturally in Hebrew
- Hebrew variable fonts: Heebo Variable, Frank Ruhl Libre Variable, Karantina (3-weight display), Adi for poster moments
- Numbers stay LTR (case study indices `01 / 02 / 03`)
- Custom cursor labels in Hebrew need wider hit area
- Right-aligned hero with reading flow right-to-left; CTAs anchor bottom-right
- Reverse arrow icons (←  ↗ becomes →  ↖) and chevrons in nav/breadcrumbs

## Reference Sites

1. **pentagram.com** — editorial grid, restraint
2. **locomotive.ca** — 6× Awwwards Agency of the Year, scroll mastery
3. **hellomonday.com** — "We make digital (and magical)" — booster-rocket positioning
4. **activetheory.net** — WebGL-heavy immersive case studies
5. **immersive-g.com** — Awwwards Agency of the Year 2025

## Best Fit For (Hebrew/Israeli market)

Israeli creative agencies (Tel Aviv branding houses like Open, Koniak, Studio Adam&Co), independent design studios, brand consultancies, digital product studios, photographers/art directors/illustrators portfolios, motion designers, 3D artists, video/film production houses and post studios, architecture and interior design firms with editorial sensibility, fashion/beauty creative directors, stylists, independent typographers and Hebrew type foundries.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
