# Style: Photography Portfolio

References: Sanz Lena, Mack Eveland, Corbin Gurkin, Jonathan Gregson, Stephen Wilkes, Levon Biss, Format featured photographers.

## Visual Identity
The inverse of dark service-business style: UI recedes so imagery dominates. Palette is almost always neutral so photos never compete with chrome. Three canonical palettes:

- **Pure gallery white**: `oklch(1 0 0)` background, `oklch(0.18 0 0)` text, `oklch(0.55 0 0)` muted captions, `oklch(0.95 0 0)` hairlines.
- **Off-white editorial / warm cream**: `oklch(0.97 0.008 85)` background, `oklch(0.22 0.01 60)` text, `oklch(0.65 0.015 60)` muted (Corbin Gurkin / John & Joseph "luxe" feel).
- **Charcoal gallery**: `oklch(0.14 0 0)` background, `oklch(0.93 0 0)` text, `oklch(0.62 0 0)` muted (Phil Penman / Anup Shah B&W mood).

**Typography:** A thin display serif (GT Sectra, Tiempos, Canela) for photographer name and series titles, paired with a neutral grotesk (Söhne, Apercu, GT America, Inter) at 12-14px for menus and captions. Tracking is wide on labels (`letter-spacing: 0.12em`, uppercase). Logos are wordmarks, never icons. Borders, shadows, gradients are essentially absent — separation comes from whitespace and edges of photos.

## Hero Patterns
1. **Full-bleed signature photo** with photographer name as a small mark in a corner (Mack Eveland, Sanz Lena).
2. **Auto-advancing crossfade slideshow** of 5-8 hero shots, 4-6s per slide (Hello Dolly, Lianne Mackay, Hitched Northwest).
3. **Massive thumbnail grid** of selected work — 2-4 columns of huge, edge-bleeding stills (Jonathan Gregson, Levon Biss).
4. **Horizontal-scroll signature reel** — landscape images snap-scroll sideways (Kate Weinstein, Haris Nukem, Parker Young).
5. **Sticky-scroll "story mode"** image takeover with photographer's name fixed and images cycling underneath (Stephen Wilkes, Ana Blagojevic).

## Section Inventory
- Selected work / series (categorized: Weddings, Portrait, Editorial, Commercial, Personal)
- Series detail page (long-form image essay, alternating full-bleed and grid)
- About / artist statement (single portrait + 2-3 short paragraphs)
- Press / publications ("Featured in" wordmark row — Vogue, Harper's, etc.)
- Booking / inquiry form (event-aware fields)
- Print store / shop
- Instagram grid (live or curated)
- Journal / blog (recent shoots)
- Contact

## Distinctive Components Needed
- `FullBleedSlideshow` (crossfade, autoplay, dot indicators)
- `MasonryGalleryWithLightbox` (cinematic open, edge-swipe, ESC close)
- `SeriesDetailScroll` (long vertical with caption alignment to image edge)
- `ImageEssayBlock` (full-bleed → 2-up grid → single → 3-up rhythm)
- `InquiryForm` specialized: event date, ceremony location, hours, guest count, budget range
- `PrintStorePreview` (image + size + price, no clutter)
- `CinematicCursor` (small dot that morphs to "View" / "Drag" / "+" pill on hover)
- `HorizontalScrollGallery` with parallax-scaled neighbors
- `PressLogosRow` (single-line, grayscale wordmarks)
- `InstagramGrid` (3x3 or 4x2 latest)

## Animation Patterns
- 600-900ms crossfade slideshow transitions
- Slow 1.05-1.1x zoom on thumbnail hover (1200ms ease-out)
- Click-to-fullscreen lightbox with cinematic black overlay fade-in (`backdrop-filter: blur(8px)`)
- Edge-swipe / arrow-key navigation in lightbox
- Scroll-snap on series pages (`scroll-snap-type: y mandatory`)
- Parallax: hero image translates at 0.5x scroll speed
- Custom cursor follows mouse with 100ms lerp; expands on image hover
- Caption fade-in on scroll-into-view (300ms, 20px translate)

## Hebrew RTL Adaptations
- Hebrew photographer name primary (e.g., דנה לוי, יואב כהן) with English transliteration as a smaller secondary mark
- Hebrew display serif: Frank Ruhl Libre or David Libre for names; Heebo / Assistant for UI
- Captions in Hebrew: `25 ביוני 2025 · תל אביב · חתונה`
- Israeli wedding event types: חתונה, חינה, בר/בת מצווה, ברית, אירוסין, סדנת צילום משפחתית
- Inquiry form labels: תאריך האירוע, מיקום, מספר אורחים, חבילה, טווח תקציב
- Image lightbox arrows mirrored (next = left in RTL)
- Press row labels in Hebrew (פורסם ב־)

## Top 5 Reference Sites
1. **Sanz Lena** (sanzlena.com) — fashion / editorial; sparse, atmospheric, text-light
2. **Mack Eveland** — pure B&W minimalism, full-screen image-first
3. **Corbin Gurkin** — luxury wedding; soft cream palette, editorial typography
4. **Jonathan Gregson** — food/commercial; massive thumbnail grid, brand collaborations
5. **Stephen Wilkes** — fine art "Day to Night"; story-driven sticky-scroll, video integration

## Recommended Tokens
```
--image-bg: oklch(0.97 0 0);
--caption-fade: oklch(0.55 0 0);
--lightbox-overlay: oklch(0.05 0 0 / 0.96);
--cursor-mark: oklch(0.18 0 0);
--hairline: oklch(0.92 0 0);
--accent-press: oklch(0.65 0 0);
--hover-zoom: 1.05;
--crossfade-ms: 800;
--snap-ease: cubic-bezier(0.22, 1, 0.36, 1);
```

## Best Fit For (Hebrew/Israeli market)
- Israeli wedding photographers (חתונות, חינה, בר/בת מצווה, ברית)
- Family / newborn / maternity photographers (צלמי משפחה, ניובורן)
- Fashion & editorial photographers serving Israeli magazines (Globes, Calcalist Style, At magazine)
- Commercial / product photographers for Israeli brands
- Real estate & architecture photographers (צילום נדל״ן ואדריכלות)
- Videographers and content creators
- Fine artists, illustrators, and visual artists with image-heavy portfolios
- Tattoo artists and ceramicists where the work is visual
- Art galleries and collective exhibition sites
