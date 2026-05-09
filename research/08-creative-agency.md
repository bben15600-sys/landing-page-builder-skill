# Style: Creative Agency / Design Studio

References: Pentagram, Locomotive, Hello Monday, Active Theory, Resn, Studio Lutalica, Immersive Garden (2025 Agency of the Year), OFF+BRAND (2025 Site of the Year).

## Visual Identity
- **Palette ethos**: pure black + single neon accent (lime, electric blue, hot orange); cream/off-white + ink black; monochrome with one saturated brand color. 100% saturation, never pastel.
- **3 oklch palettes**:
  - Brutalist Mono: `oklch(0.08 0 0)` bg / `oklch(0.97 0.01 90)` fg / `oklch(0.85 0.27 130)` lime accent
  - Editorial Cream: `oklch(0.96 0.02 85)` bg / `oklch(0.15 0.02 30)` ink / `oklch(0.55 0.22 25)` brick accent
  - Studio Noir: `oklch(0.12 0.01 250)` bg / `oklch(0.95 0 0)` fg / `oklch(0.7 0.25 320)` magenta accent
- **Typography**: massive variable display (PP Editorial New, GT Walsheim Pro, GT Sectra, Söhne, Neue Haas Grotesk Display, Migra). Hero text often 12-22vw / 200-360px desktop. Mixed serif display + neo-grotesk body. Kinetic / variable axis animation on scroll.
- **Edges**: brutalist (raw HTML edges, default underlines, system blue links) OR hyper-refined (perfect baseline grid, optical alignment).
- **Cursors**: custom morphing cursor (dot → blob → "View Project" pill → thumbnail peek). Magnetic hover everywhere.

## Hero Patterns
- Massive type, hero often a single sentence/manifesto split across multiple lines, animating word-by-word on load.
- Rotating word in hero ("We make digital / magical / immersive / unforgettable").
- Horizontal marquee strip with studio claims or client names.
- Custom cursor that morphs into work thumbnails on link hover.
- Full-bleed showreel video (muted, autoplay, loop) with scroll-driven case-study reveals stacking on top.

## Section Inventory
- Selected work grid (2-up, asymmetric, hover video preview).
- Long-form case study scrollytelling pages (sticky media + flowing text).
- Services / capabilities as a giant text list, not cards.
- Manifesto / about (huge type only, no images).
- Awards + recognition row (Awwwards, FWA, Webby, Cannes, D&AD, ADC).
- Clients logo cloud (often as a marquee).
- Get-in-touch section: massive `mailto:` link as hero, magnetic.
- Footer with offices, careers, social, language toggle (EN/FR/HE).

## Distinctive Components Needed
- `HugeTextHero` with marquee + word-rotation
- `WorkGrid` with hover-video cards (silent webm/mp4)
- `CaseStudyScrollytelling` (sticky media column + flowing text)
- `CustomCursor` (morphs based on data-cursor attr on hover target)
- `HoverPeek` (project thumbnail follows cursor on link hover)
- `AwardsReel` (rows of award orgs + counts)
- `ManifestoBlock` (massive typography, no imagery)
- `GetInTouchHero` (huge mailto link with magnetic hover)
- `MarqueeStrip` (bidi-aware infinite scroll)
- `ServicesList` (numbered ordered list, hover reveals image peek)

## Animation Patterns
- WebGL/canvas hero (R3F, OGL, vanilla shader — distortion, plane waves).
- Scroll-jacking via Lenis (preferred) or Locomotive Scroll v5.
- GSAP timelines with ScrollTrigger; SplitText for letter/word reveals.
- Cursor morph (FLIP between cursor states).
- Magnetic hover on CTAs/work cards.
- Image lift + zoom on hover, masked reveals on scroll-in.
- Kinetic typography (variable font weight axis tied to scroll velocity).
- Page transitions (curtain wipe, scale-down + fade).

## Hebrew RTL Adaptations
- Bidi-aware kinetic type: `direction: rtl` on root, but per-line GSAP `xPercent` reversed; marquee animates left-to-right (positive translateX) to read naturally in Hebrew.
- Hebrew variable fonts: Heebo Variable, Frank Ruhl Libre Variable, Karantina (3-weight display), Adi for poster moments. Mix Hebrew display + Latin neo-grotesk for client names.
- Numbers stay LTR (case study indices `01 / 02 / 03`).
- Custom cursor labels in Hebrew need wider hit area (Hebrew letterforms are wider on average).
- Right-aligned hero with reading flow right-to-left; CTAs anchor bottom-right.
- Reverse arrow icons (←  ↗ becomes →  ↖) and chevrons in nav/breadcrumbs.

## Top 5 Reference Sites
1. **pentagram.com** — editorial grid, restraint, world's largest independent studio
2. **locomotive.ca** — 6x Awwwards Agency of the Year, scroll mastery
3. **hellomonday.com** — "We make digital (and magical)" — booster-rocket positioning
4. **activetheory.net** — WebGL-heavy immersive case studies
5. **immersive-g.com** — Awwwards Agency of the Year 2025

## Recommended Tokens
```
--cursor-color: oklch(0.85 0.27 130);
--cursor-size-default: 12px;
--cursor-size-hover: 96px;
--huge-display: clamp(4rem, 18vw, 22rem);
--display-leading: 0.88;
--display-tracking: -0.04em;
--reel-aspect: 16 / 9;
--case-study-bg: oklch(0.08 0 0);
--case-study-fg: oklch(0.97 0.01 90);
--marquee-speed: 40s;
--magnetic-strength: 0.35;
--page-transition-duration: 800ms;
--scroll-ease: cubic-bezier(0.22, 1, 0.36, 1);
```

## Best Fit For (Hebrew/Israeli market)
Israeli creative agencies (Tel Aviv branding houses like Open, Koniak, Studio Adam&Co), independent design studios, brand consultancies, digital product studios, photographers/art directors/illustrators portfolios, motion designers, 3D artists, video/film production houses and post studios, architecture and interior design firms with editorial sensibility, fashion/beauty creative directors, stylists, independent typographers and Hebrew type foundries.
