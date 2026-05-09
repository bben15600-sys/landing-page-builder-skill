---
name: lpb-photography
description: "Build Hebrew RTL Photography Portfolio landing pages for wedding / portrait / fashion / commercial photographers. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: FullBleedSlideshow, MasonryGalleryWithLightbox, SeriesDetailScroll, ImageEssayBlock, InquiryForm with event-aware fields, PrintStorePreview, CinematicCursor, HorizontalScrollGallery, InstagramGrid. Triggers: 'create photography portfolio', 'wedding photographer site', 'create site for [צלם / צלמת / צלם חתונות / צלם אופנה]'."
---

# Photography Portfolio — Hebrew RTL

For Israeli wedding photographers (חתונה / חינה / בר מצווה / ברית), family/newborn, fashion, commercial, real estate/architecture photographers.

> **Full research:** see `../../research/09-photography.md`

## When to Use

User is a working photographer and wants the inverse of typical landing pages: UI fades to background, images dominate. References: **Sanz Lena, Mack Eveland, Corbin Gurkin, Jonathan Gregson, Stephen Wilkes, Levon Biss, Format featured**.

## Required Information from User

### 1. Photographer Identity
- Hebrew name + English transliteration
- Specialty (weddings / portrait / fashion / commercial / fine art)
- Statement (1-2 paragraphs)
- Headshot / self-portrait

### 2. Theme Direction
- **A — Pure gallery white** (most common, photo-first)
- **B — Off-white editorial / warm cream** (luxury wedding feel)
- **C — Charcoal gallery** (B&W moody)

### 3. Hero Pattern
- Full-bleed signature photo with name as small mark
- Auto-advancing crossfade slideshow (5-8 hero shots)
- Massive thumbnail grid (2-4 cols)
- Horizontal-scroll signature reel
- Sticky-scroll story mode

### 4. Selected Work / Series
Categories (e.g., Weddings, Portrait, Editorial, Commercial, Personal). For each category: 6-30 hero images.

### 5. Series Detail (long-form essays — 2-5 series)
Per series: hero photo + 20-50 photos arranged in mixed rhythm (full-bleed → 2-up → single → 3-up) + caption per shot

### 6. About / Artist Statement
Single portrait + 2-3 short paragraphs

### 7. Press / Publications
"Featured in" wordmark row — Vogue, Harper's, At Magazine, Calcalist Style, Globes Women, etc.

### 8. Inquiry Form (for hireable photographers)
Event date + ceremony/shoot location + hours needed + guest count + budget range + how-they-heard

### 9. Print Store (optional)
Image + size + price (LTR)

### 10. Instagram
Handle for embedded grid (last 6 posts)

## Visual Identity

### Token Palette (Theme A — Pure Gallery)
```css
:root {
  --image-bg: oklch(0.97 0 0);
  --caption-fade: oklch(0.55 0 0);
  --lightbox-overlay: oklch(0.05 0 0 / 0.96);
  --cursor-mark: oklch(0.18 0 0);
  --hairline: oklch(0.92 0 0);
  --accent-press: oklch(0.65 0 0);
  --hover-zoom: 1.05;
  --crossfade-ms: 800;
  --snap-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Typography
- Hebrew: **Frank Ruhl Libre** (display, photographer name) + **Heebo** (UI/captions)
- Latin: GT Sectra / Tiempos / Canela (display) + Söhne / Apercu / GT America / Inter (UI 12-14px)
- Tracking on labels: `letter-spacing: 0.12em`, uppercase
- UI is minimal — let photos breathe

## Page Architecture

```
app/page.tsx
├── (No header initially — hero is full-bleed)
├── FullBleedSlideshow OR ThumbnailGrid OR Reel
├── (Floating minimal nav bottom-left or top-right)
├── SeriesIndex (categorized work)
├── PressLogosRow (small wordmarks)
├── ContactInline
└── Footer (single line)

app/[category]/page.tsx
├── CategoryHero (name + count)
├── MasonryGallery (clickable to lightbox)
└── BackToHome

app/series/[slug]/page.tsx
├── SeriesHeroImage
├── SeriesTitle + intro
├── ImageEssay (mixed rhythm: full-bleed → grid → single)
├── SeriesEnd (next/prev series)

app/about/page.tsx
├── PortraitImage
├── ArtistStatement (2-3 paragraphs)
├── PressMentions
└── ContactCTA

app/booking/page.tsx
├── InquiryForm (event-aware fields)
├── ProcessExplanation
├── FAQ
└── SamplePackages
```

## Distinctive Components

- `FullBleedSlideshow` — crossfade, autoplay, dot indicators
- `MasonryGalleryWithLightbox` — cinematic open, edge-swipe, ESC close
- `SeriesDetailScroll` — long vertical with caption alignment to image edge
- `ImageEssayBlock` — full-bleed → 2-up grid → single → 3-up rhythm
- `InquiryForm` — event date / ceremony location / hours / guest count / budget
- `PrintStorePreview` — image + size + price, no clutter
- `CinematicCursor` — small dot that morphs to "View"/"Drag"/"+" pill
- `HorizontalScrollGallery` — parallax-scaled neighbors
- `PressLogosRow` — single-line, grayscale wordmarks
- `InstagramGrid` (from shared/) — 3×3 or 4×2 latest

## Animation Patterns

- 600-900ms crossfade slideshow transitions
- Slow 1.05-1.1× zoom on thumbnail hover (1200ms ease-out)
- Click-to-fullscreen lightbox with cinematic black overlay fade-in
- Edge-swipe / arrow-key navigation in lightbox
- Scroll-snap on series pages
- Parallax: hero image translates at 0.5× scroll speed
- Custom cursor follows mouse with 100ms lerp; expands on image hover

## Hebrew RTL Adaptations

- Hebrew photographer name primary (e.g., דנה לוי) + English transliteration as smaller secondary mark
- Hebrew display serif: Frank Ruhl Libre or David Libre for names; Heebo / Assistant for UI
- Captions in Hebrew: `25 ביוני 2025 · תל אביב · חתונה`
- Israeli wedding event types: חתונה, חינה, בר/בת מצווה, ברית, אירוסין, סדנת צילום משפחתית
- Inquiry form labels: תאריך האירוע, מיקום, מספר אורחים, חבילה, טווח תקציב
- Image lightbox arrows mirrored (next = left in RTL)
- Press row labels in Hebrew (פורסם ב־)

## Reference Sites

1. **Sanz Lena** (sanzlena.com) — fashion / editorial; sparse, atmospheric
2. **Mack Eveland** — pure B&W minimalism, full-screen image-first
3. **Corbin Gurkin** — luxury wedding; soft cream palette, editorial typography
4. **Jonathan Gregson** — food/commercial; massive thumbnail grid
5. **Stephen Wilkes** — fine art "Day to Night"; story-driven sticky-scroll

## Best Fit For (Hebrew/Israeli market)

Israeli wedding photographers (חתונות, חינה, בר/בת מצווה, ברית), family/newborn/maternity photographers (צלמי משפחה, ניובורן), fashion & editorial photographers serving Israeli magazines, commercial / product photographers for Israeli brands, real estate & architecture photographers (צילום נדל״ן ואדריכלות), videographers and content creators, fine artists, illustrators, and visual artists with image-heavy portfolios, tattoo artists and ceramicists, art galleries and collective exhibition sites.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
