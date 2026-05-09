# Style: Award-winning Animated / WebGL / Scroll-storytelling

References: Lando Norris by OFF+BRAND (Awwwards SOTY 2025), Active Theory, Studio375, Ruinart Digital Fresco, Cartier Watches & Wonders 2026 (Immersive Garden), Obys, Bruno Simon, ASTRODITHER.

The most ambitious tier on the open web — Awwwards Site of the Year-class experiences where the page itself is the product. Built around R3F/Three.js scenes, GSAP timelines, Lenis smooth scroll, and choreographed audio.

## Visual Identity
Three dominant directions:
1. **Cinematic noir** — pitch-black canvas (`#0B0B0B`) with one electric accent (Active Theory: neon cyan; Lando Norris: McLaren papaya/neon yellow on black). Lets full-bleed WebGL "detonate" with color.
2. **Otherworld vivid** — saturated purples/golds, sunset gradients, alien greens (Moon on My Wall, sci-fi portfolios, Prometheus Fuels).
3. **Pristine luxury white** — bone-white canvas with hyper-detailed photoreal 3D product models and hairline type (Cartier, Ruinart, Hotel 1 Place Vendôme).

Three oklch palettes:
- Cinematic noir: `--bg: oklch(0.12 0 0)` / `--fg: oklch(0.97 0 0)` / `--accent: oklch(0.78 0.19 85)` (papaya)
- Vivid otherworld: `--bg: oklch(0.18 0.05 290)` / `--fg: oklch(0.95 0.04 90)` / `--accent: oklch(0.68 0.22 320)` (magenta) / `--accent2: oklch(0.82 0.16 95)` (gold)
- Pristine luxury: `--bg: oklch(0.98 0.005 80)` / `--fg: oklch(0.18 0.01 60)` / `--accent: oklch(0.55 0.13 25)` (terracotta)

**Typography:** XXL variable display fonts that morph weight/width on scroll — Monument Grotesk, PP Editorial New, Migra, Söhne — paired with mono-sans body (JetBrains Mono, Söhne Mono) that nods to console output. Display is often paired *unified* (single family at multiple optical sizes). Kinetic scramble/morph on hero word.

**Texture:** custom GLSL noise, particle systems, distortion shaders, Draco-compressed meshes, KTX2 textures. Preloader is part of the experience: 0–100 counter with click/tick audio cue and logo morph.

## Hero Patterns
- Cinematic intro: logo SVG morphs into 3D scene, audio swell, ambient pad fades in.
- Scroll-driven camera dolly through a continuous 3D scene (chapter scenes connected by camera path).
- Mouse-tracking 3D objects (subtle parallax tilt or full orbit).
- Cursor-as-light-source revealing dark content beneath.
- Title sequence reveal with split-text + mask animations.

## Section Inventory
Preloader/intro → Canvas3D Hero → Scroll-jacked chapters (each = distinct scene/lighting) → Custom transitions (page-flip, ink wash, RGB-split distortion) → Work/case-study reveal with 3D thumbs (WebGL image distortion on hover) → Manifesto with kinetic typography → Dramatic contact (form fields as 3D objects, send = explosion) → Easter eggs (konami code, audio-triggered scenes).

## Distinctive Components Needed
`Preloader` (counter → 100, audio tick), `Canvas3DHero` (R3F `<Canvas>` shell), `ScrollDrivenCamera` (camera position bound to ScrollTrigger progress), `WebGLImageDistortion` (shader-based hover), `ChapterTransition` (full-screen overlay with shader reveal), `KineticTypography` (GSAP SplitText + scramble), `CustomCursorAdvanced` (shader trail with gl-cursor), `AudioCue` (Howler.js wrapper + global mute toggle), `ParallaxLayered3D`, `LenisSmooth` (Lenis provider syncing with ScrollTrigger.update + gsap.ticker).

## Animation Patterns
Heavy GSAP timelines + ScrollTrigger pinning, Lenis raf loop synced to gsap.ticker, R3F `useFrame` for per-frame shader uniforms, custom GLSL fragment shaders, audio sync via Howler, page-transition choreography with view-transition fallback, cursor as protagonist.

## Performance Budget
**Severe LCP risk.** Mandatory: Draco/Meshopt mesh compression, KTX2 textures, lazy `requestIdleCallback` for hero video, preload critical .glb in `<link rel="preload" as="fetch">`, low-end fallback (detect `navigator.hardwareConcurrency < 4` or `prefers-reduced-motion` → static poster + simple GSAP). Target LCP ~1.3s desktop / 1.7s 4G (Active Theory bench). Always ship an a11y "skip animation" toggle and respect `prefers-reduced-motion: reduce`.

## Hebrew RTL Adaptations
- R3F `<Text>` (troika-three-text) **does** ship a `direction="rtl"` prop and HarfBuzz-based shaping is partial — but bidi handling for mixed strings is fragile; pre-shape Hebrew strings with a bidi pass (`bidi-js`) before passing to troika.
- Variable Hebrew fonts in WebGL: use Rubik Variable, Heebo Variable, or Ploni — must convert to MSDF atlas (`msdf-bmfont-xml`) and preload glyph sets including final-form letters (ך/ם/ן/ף/ץ).
- Scroll direction: DOM reads `dir="rtl"`, but scroll progress in Lenis is still 0 → 1; chapter ordering layout flips horizontally for any horizontal scroll-jack.
- Custom cursor trail must mirror; test text-mask shaders for Hebrew baseline (sits higher than Latin x-height).
- Body must be `<html dir="rtl" lang="he">`; punctuation/numerals require `unicode-bidi: isolate` on inline foreign tokens.

## Top 5 Reference Sites
1. **Lando Norris** (OFF+BRAND) — Awwwards SOTY 2025, neon-papaya cinematic F1 storytelling
2. **Active Theory** — agency portfolio, dark canvas + WebGL reels + AI navigation chat
3. **Ruinart — Digital Fresco** — luxury heritage, AR + global webgl experience
4. **Studio375** — SOTD Apr 2026, scroll-driven brand storytelling
5. **Sébastien Lempens / Jordan Breton portfolios** — R3F + Theatre.js scroll cinematic camera tours

Honorable: Cartier Watches & Wonders 2026 (Immersive Garden), Obys, Bruno Simon, ASTRODITHER.

## Recommended Tokens + Dependencies
**Deps:** `gsap` (+ ScrollTrigger, SplitText, Flip), `lenis` (`@studio-freight/lenis`), `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `troika-three-text`, `bidi-js`, `howler`, `theatre` (optional), `meshoptimizer`, `ktx2-loader`.

**Tokens:** `--canvas-bg`, `--cursor-shader-color`, `--transition-fade-duration`, `--chapter-pin-distance`, `--audio-master-volume`, `--lenis-lerp` (0.1), `--reduced-motion-fallback`, `--rtl-flip-x` (-1 / 1), `--hero-loader-counter-color`.

## Best Fit For (Hebrew/Israeli Market)
Premium Tel Aviv creative agencies (e.g., portfolio sites mirroring Active Theory tier), branding-house showcases, luxury-brand activations (Israeli wineries, jewelry like H. Stern equivalent, fashion houses), art exhibitions / museum microsites (Tel Aviv Museum of Art, Design Museum Holon), immersive product launches (mobility/auto, premium consumer tech), film studio and music album sites, high-end real-estate developments. Small high-margin niche — these are six-figure builds where the experience *is* the marketing. Hebrew RTL handling makes it a genuine technical moat, since most international agencies ship LTR-only WebGL templates.
