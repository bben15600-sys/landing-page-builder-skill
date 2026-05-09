---
name: lpb-restaurant
description: "Build Hebrew RTL Restaurant / Cafe / Hospitality F&B landing pages in the Noma/Eleven Madison Park/local cafe style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: atmospheric video hero, ReservationWidget (Tock/OpenTable embed), MenuSection with kashrut + dietary icons, HoursBlock with Sabbath-aware indicator, ChefBio with signature, GalleryMasonry + lightbox, InstagramGrid, PressStrip, EventInquiryForm. Triggers: 'create restaurant site', 'cafe website', 'bakery landing page', 'wine bar site', 'create site for [restaurant / cafe / bistro / hummusiya]'."
---

# Restaurant / Cafe / Hospitality F&B — Hebrew RTL

For Israeli restaurants, cafes, wine bars, bakeries, specialty coffee, ice cream, hummusiyot, breweries, kosher fine-dining.

> **Full research:** see `../../research/04-restaurant.md`

## When to Use

User runs an F&B business and wants the atmospheric polish of **Noma, Eleven Madison Park, Sweetgreen, Blue Bottle**. Photography-heavy, reservation-prominent, menu and hours always visible.

## Required Information from User

### 1. Venue Identity
- Restaurant name (Hebrew + English transliteration)
- Cuisine type / concept (modern Mediterranean / specialty coffee / etc.)
- Tagline / philosophy (1 sentence)
- Story (2-3 paragraphs)

### 2. Theme Direction
- **A — Warm Earthy** (terracotta + olive + cream — cafe / bakery / hummusiya)
- **B — Moody Fine Dining** (deep green / burgundy / charcoal — chef-driven, wine bar)
- **C — Fresh Clean** (sage + butter + white — specialty coffee / brunch)

### 3. Hero Visual
- Full-bleed atmospheric photo OR
- Slow ken-burns video (kitchen, pour, fire from grill)
- Or 4-6 image carousel

### 4. Hours
- Sun-Thu primary, Fri close-time, Sat motzash or closed
- Special hours for חגים

### 5. Location
- Address (Hebrew format) + Waze + Google Maps embed coords
- Public transit / parking notes

### 6. Menu Structure
Categories (e.g., starters, mains, desserts, drinks, wine list)
For each item: Hebrew name + English transliteration + price + dietary tags (V/GF/Kosher)

### 7. Chef Bio
Portrait + signature script + story (200-300 words)

### 8. Gallery (15-30 photos)
Mix food + interior + chef-at-work

### 9. Press / Awards (5-15 logos)
Time Out Tel Aviv, Haaretz, Calcalist, etc.

### 10. Reservation Integration
- Tock / OpenTable / Resy account, OR
- Custom WhatsApp inquiry form

### 11. Instagram Handle
For embedded grid (last 6 posts)

### 12. Private Events / Catering
If applicable: capacity, sample packages

## Visual Identity

### Token Palette (Theme A — Warm Earthy)
```css
:root {
  --warm-paper: oklch(0.96 0.02 80);
  --surface: oklch(0.92 0.03 75);
  --ink: oklch(0.25 0.04 50);
  --accent: oklch(0.55 0.13 40);   /* terracotta */
  --olive: oklch(0.58 0.08 110);
  --muted: oklch(0.70 0.04 70);
  --menu-divider: oklch(0.70 0.05 60 / 0.4);
  --hours-active: oklch(0.55 0.13 40);
  --hours-closed: oklch(0.60 0.02 80);
  --reserve-cta: oklch(0.32 0.12 25);
  --kashrut-badge: oklch(0.45 0.10 145);
  --photo-overlay: oklch(0.16 0.02 150 / 0.35);
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre**
- Hebrew body: **Heebo** or Assistant
- Latin display: Cormorant Garamond / Canela / Tiempos Headline
- Latin body: Inter / Söhne

## Page Architecture

```
app/page.tsx
├── Header (with Hours+Open chip + Reserve CTA always visible)
├── AtmosphericVideoHero (or photo carousel)
├── AboutChef (portrait + story)
├── MenuPreview (top 6-9 dishes with photos)
├── ReservationWidget (Tock/OpenTable embed OR WhatsApp inquiry)
├── GalleryMasonry (15-30 photos with lightbox)
├── PressStrip (grayscale marquee)
├── HoursLocation (Hours block + Map + Waze button)
├── InstagramGrid (last 6 posts)
├── PrivateEventsCTA
├── Newsletter
└── Footer

app/menu/page.tsx
├── MenuSection ×N (categories with full items)

app/private-events/page.tsx
├── EventInquiryForm (date + party-size + budget + style)
```

## Distinctive Components

- `ReservationWidget` — date/time/party-size, embeds Tock/OpenTable/Resy or custom WhatsApp deep-link
- `MenuSection` — categories, prices, dietary icons (V, GF, kosher, vegan)
- `HoursBlock` — current-day highlight, "open now / closed" pill, special hours for חגים
- `GalleryMasonry` — mixed sizes + lightbox with arrow navigation
- `ChefBioBlock` — portrait + signature script + story
- `LocationMap` — Mapbox/Google embed with directions CTA + Waze button
- `InstagramGrid` — last 6 posts via Instagram Basic Display API
- `AtmosphericVideoHero` — poster fallback + reduced-motion honor
- `PressStrip` — grayscale logo wall
- `MenuPdfDownloadButton` + iframe preview
- `EventInquiryForm` — for private dining
- `KashrutBadge` (from shared/) — 4-tier indicator

## Animation Patterns

Slow ken-burns (8-12s), soft 600-900ms crossfade between hero images, parallax on scroll for plate photos, sticky nav with reservation CTA always visible, subtle word-by-word fade-in on serif headlines, marquee press-logo strip, 3D book flip for menu PDF preview.

## Hebrew RTL Adaptations

- Bilingual menu: Hebrew dish name (Frank Ruhl Libre) + English transliteration + dietary/origin tags
- Hours: Sun-Thu primary (Israeli work week), Friday early close, Saturday motzash — Sabbath-aware indicators
- Kashrut badges: כשר למהדרין / כשר רבנות / לא כשר / טבעוני / צמחוני
- Producer/origin notes ("חיטה מבית הבד", "דג מנמל יפו")
- Phone tel: link in IL format (03-, 052-)
- **Waze button** alongside Google Maps (Israeli default)
- RTL-mirror all carousels, navigation order, gallery direction
- Reservation party-size labels in Hebrew (זוג / משפחה / קבוצה)

## Reference Sites

1. **noma.dk** — minimalist editorial, full-bleed carousel
2. **elevenmadisonpark.com** — Resy embed, 19-slide carousel, Relais & Châteaux badge
3. **damaria-roma.webflow.io** — warm earth tones, magazine plating
4. **haven-annecy.fr** — brunch/cafe, hand-drawn SVG illustrations
5. Awwwards-honored hospitality (rumbekeplatse.be, paputmenorca.com)

## Best Fit For (Hebrew/Israeli market)

Israeli restaurants (Eyal Shani-style modern Mediterranean), neighborhood cafes (Tel Aviv/Jerusalem third-wave), wine bars, bakeries (לחמים, bourekas), specialty coffee roasters, ice cream/gelato (Anita), modern hummusiyot (Shlomo & Doron), neo-bistros, breweries (Dancing Camel, BeerBazaar), kosher fine-dining, vegan/Tel Aviv health-bowl spots, shuk/market stalls with online presence, catering kitchens, food-hall vendors, patisseries.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
