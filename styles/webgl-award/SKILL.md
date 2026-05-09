---
name: lpb-webgl-award
description: "Build Hebrew RTL Award-winning Animated / WebGL / Scroll-storytelling sites in the Active Theory/Lando-Norris-by-OFF+BRAND/Studio375/Ruinart/Cartier style. Stack: Next.js 16 + Tailwind v4 + base-ui + GSAP ScrollTrigger + Lenis + R3F (Three.js) + drei + postprocessing + howler. Includes: Preloader, Canvas3DHero, ScrollDrivenCamera, WebGLImageDistortion, ChapterTransition, KineticTypography, CustomCursorAdvanced, AudioCue, ParallaxLayered3D, LenisSmooth. Hebrew bidi via troika-three-text + bidi-js + MSDF font atlas. Triggers: 'create awwwards site', 'WebGL landing page', 'immersive 3D experience', 'Awwwards SOTY-style site', 'create premium agency showcase site'."
---

# Award-winning Animated / WebGL / Scroll-storytelling — Hebrew RTL

For premium Tel Aviv creative agencies, branding-house showcases, luxury-brand activations (Israeli wineries, jewelry, fashion houses), art exhibitions / museum microsites (Tel Aviv Museum of Art, Design Museum Holon), immersive product launches, film studio and music album sites, high-end real-estate developments.

> **Full research:** see `../../research/20-webgl-award.md`

⚠️ **Most ambitious tier** — six-figure budgets. The experience IS the marketing.

## When to Use

User wants the most ambitious tier on the open web — Awwwards Site of the Year-class. References: **Lando Norris by OFF+BRAND (Awwwards SOTY 2025), Active Theory, Studio375, Ruinart Digital Fresco, Cartier Watches & Wonders 2026 (Immersive Garden), Obys, Bruno Simon, ASTRODITHER**.

## Required Information from User

### 1. Project Identity
- Brand / project name
- Concept (1-paragraph creative direction)
- Audio strategy (mute toggle is mandatory; should there be ambient pad? button-clicks?)

### 2. Theme Direction
- **A — Cinematic noir** (pitch-black + electric accent)
- **B — Otherworld vivid** (sunset gradients, alien greens)
- **C — Pristine luxury white** (bone-white + photoreal 3D models)

### 3. 3D Assets
- GLB / GLTF files (Draco/Meshopt compressed)
- KTX2 textures
- Polygon budget guidance

### 4. Chapters / Scenes (3-7)
Each: name + camera angle + lighting setup + interactive element + transition style

### 5. Preloader Strategy
- 0-100 counter
- Audio tick on each tick
- Logo morph
- Time-budget (max 3-5s perceived)

### 6. Performance Budget
- Target LCP: 1.3s desktop / 1.7s 4G
- Low-end fallback (detect `navigator.hardwareConcurrency < 4` or `prefers-reduced-motion`)
- Skip-animation toggle (a11y)

### 7. Audio Assets
- Ambient pad (loopable)
- UI sounds (hover tick, click, transition swoosh)
- Mute toggle persistence to localStorage

### 8. Content Beyond Animation
- Manifesto text (kinetic typography)
- Project/case studies
- Contact (often dramatic — form fields as 3D objects)

## Visual Identity

### Token Palette (Theme A — Cinematic noir)
```css
:root {
  --canvas-bg: oklch(0.12 0 0);
  --fg: oklch(0.97 0 0);
  --accent: oklch(0.78 0.19 85);          /* papaya */
  --cursor-shader-color: oklch(0.78 0.19 85);
  --transition-fade-duration: 800ms;
  --chapter-pin-distance: 100vh;
  --audio-master-volume: 0.4;
  --lenis-lerp: 0.1;
  --reduced-motion-fallback: 1;            /* set 0 if reduced-motion */
  --rtl-flip-x: -1;                        /* 1 in LTR */
  --hero-loader-counter-color: oklch(0.78 0.19 85);
}
```

### Typography
- Hebrew variable: **Heebo Variable** (web), preload glyph subset including final-form letters (ך/ם/ן/ף/ץ)
- Hebrew in WebGL: convert to MSDF atlas via `msdf-bmfont-xml`
- Latin: Monument Grotesk / PP Editorial New / Migra / Söhne (variable axis morph on scroll)
- Mono: JetBrains Mono / Söhne Mono (console feel)
- Hero: kinetic scramble/morph on load

## Page Architecture

```
app/page.tsx
├── Preloader (counter → 100, audio tick)
├── Canvas3DHero (R3F <Canvas> shell, full-bleed)
├── ChapterScrollytelling (each chapter = distinct scene)
│   ├── Chapter 1: Logo morph + intro
│   ├── Chapter 2: Hero scene with object orbit
│   ├── Chapter 3: Camera dolly through environment
│   ├── Chapter 4: Distortion-shader image gallery
│   └── Chapter 5: Manifesto kinetic type
├── CustomCursorAdvanced (shader trail)
├── AudioCue (mute toggle persistent)
├── WorkReveal (3D thumbnail grid with WebGL distortion on hover)
├── DramaticContact (form fields as 3D objects)
└── EasterEggs (konami code, hidden interactions)
```

## Distinctive Components

- `Preloader` (counter → 100, audio tick)
- `Canvas3DHero` (R3F `<Canvas>` shell)
- `ScrollDrivenCamera` (camera position bound to ScrollTrigger progress)
- `WebGLImageDistortion` (shader-based hover)
- `ChapterTransition` (full-screen overlay with shader reveal)
- `KineticTypography` (GSAP SplitText + scramble)
- `CustomCursorAdvanced` (shader trail with gl-cursor)
- `AudioCue` (Howler.js wrapper + global mute toggle)
- `ParallaxLayered3D`
- `LenisSmooth` (Lenis provider syncing with ScrollTrigger.update + gsap.ticker)

## Dependencies

```json
{
  "gsap": "latest",
  "@studio-freight/lenis": "latest",
  "three": "latest",
  "@react-three/fiber": "latest",
  "@react-three/drei": "latest",
  "@react-three/postprocessing": "latest",
  "troika-three-text": "latest",
  "bidi-js": "latest",
  "howler": "latest",
  "theatre": "latest (optional)",
  "meshoptimizer": "latest",
  "ktx2-loader": "latest"
}
```

## Animation Patterns

Heavy GSAP timelines + ScrollTrigger pinning, Lenis raf loop synced to gsap.ticker, R3F `useFrame` for per-frame shader uniforms, custom GLSL fragment shaders, audio sync via Howler, page-transition choreography with view-transition fallback, cursor as protagonist.

## Performance Budget

**Severe LCP risk.** Mandatory:
- Draco/Meshopt mesh compression
- KTX2 textures
- Lazy `requestIdleCallback` for hero video
- Preload critical .glb in `<link rel="preload" as="fetch">`
- Low-end fallback (detect `navigator.hardwareConcurrency < 4` or `prefers-reduced-motion` → static poster + simple GSAP)
- Target LCP ~1.3s desktop / 1.7s 4G
- A11y "skip animation" toggle and respect `prefers-reduced-motion: reduce`

## Hebrew RTL Adaptations

- R3F `<Text>` (troika-three-text) ships `direction="rtl"` prop — but bidi handling for mixed strings is fragile; pre-shape Hebrew strings with `bidi-js` before passing to troika
- Variable Hebrew fonts in WebGL: use Rubik Variable, Heebo Variable, or Ploni — must convert to MSDF atlas (`msdf-bmfont-xml`) and preload glyph sets including final-form letters (ך/ם/ן/ף/ץ)
- Scroll direction: DOM reads `dir="rtl"`, but scroll progress in Lenis is still 0 → 1; chapter ordering layout flips horizontally for any horizontal scroll-jack
- Custom cursor trail must mirror; test text-mask shaders for Hebrew baseline (sits higher than Latin x-height)
- Body must be `<html dir="rtl" lang="he">`; punctuation/numerals require `unicode-bidi: isolate` on inline foreign tokens

## Reference Sites

1. **Lando Norris** (OFF+BRAND) — Awwwards SOTY 2025, neon-papaya cinematic F1
2. **Active Theory** — agency portfolio, dark canvas + WebGL reels + AI navigation chat
3. **Ruinart — Digital Fresco** — luxury heritage, AR + global webgl experience
4. **Studio375** — SOTD Apr 2026, scroll-driven brand storytelling
5. **Sébastien Lempens / Jordan Breton portfolios** — R3F + Theatre.js scroll cinematic camera

## Best Fit For (Hebrew/Israeli Market)

Premium Tel Aviv creative agencies (portfolio sites mirroring Active Theory tier), branding-house showcases, luxury-brand activations (Israeli wineries, jewelry like H. Stern equivalent, fashion houses), art exhibitions / museum microsites (Tel Aviv Museum of Art, Design Museum Holon), immersive product launches (mobility/auto, premium consumer tech), film studio and music album sites, high-end real-estate developments. Small high-margin niche — six-figure builds where the experience IS the marketing. Hebrew RTL handling is a genuine technical moat — most international agencies ship LTR-only WebGL templates.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
