---
name: lpb-hotel-hospitality
description: "Build Hebrew RTL Hotel / Resort / Boutique B&B / צימר landing pages in the Aman/Soho House/Ace Hotel/Six Senses style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: BookingWidget (date+guests+rooms+promo), RoomTypeGrid, RoomDetailScroll, ExperiencesCarousel, DiningCard, SpaMenuBlock, StoryArticleCard, ArrivalInfoBlock, ReviewAggregateBadge, kosher + shabbat indicators. Triggers: 'create hotel site', 'boutique hotel landing page', 'create site for [צימר / מלון בוטיק / אכסניה]', 'resort website'."
---

# Hotel / Resort / Hospitality — Hebrew RTL

For Israeli boutique hotels (Tel Aviv, Jerusalem, Haifa), צימרים in Galilee/Golan/Negev/Judean Hills, kibbutz guesthouses, Eilat/Red Sea resorts, Dead Sea hotels, Mitzpe Ramon desert lodges, vineyard stays.

> **Full research:** see `../../research/11-hotel-hospitality.md`

## When to Use

User runs hospitality property and wants the cinematic, "quiet luxury" polish of **Aman, Soho House, Ace Hotel, Six Senses, Belmond, La Réserve, Amirey Hagalil**.

## Required Information from User

### 1. Property Identity
- Property name (Hebrew + English)
- Type (boutique hotel / resort / צימר / kibbutz guesthouse / urban / desert / beachfront)
- Location/region (Galilee / Negev / Eilat / Tel Aviv / Jerusalem / Dead Sea / etc.)
- Tagline (1 sentence — "Soul-soothing escapes")
- Story (3-5 paragraphs, editorial)

### 2. Theme Direction
- **A — Muted Earthy** (sand + olive + cream — Aman / צימרים)
- **B — Moody Luxury** (deep navy + brass + ivory — Belmond)
- **C — Tropical/Mediterranean** (terracotta + jungle + ochre — Soho House Ibiza / Eilat)

### 3. Rooms / Suites (3-15 types)
For each: name + size sqm + max guests + view + 5-10 photos + amenities checklist + price-from + book CTA

### 4. Booking Integration
- Channel manager (Booking.com / Expedia / Direct)
- Or custom widget (date range + guests + children-with-ages + rooms + promo + corporate code)

### 5. Dining (if hotel has restaurants — 1-5)
For each: chef + cuisine + hours + photos + menu link

### 6. Spa / Wellness Menu (if applicable)
Treatments grid with duration + price

### 7. Experiences / Off-property Activities
Hiking, wineries, beaches, etc. — with map

### 8. Editorial Journal / Stories (5-15 articles)
"Things to do in autumn", "Our farm-to-table journey", etc.

### 9. Special Offers / Packages
e.g., "Honeymoon package", "Pesach 5-night", "Romantic getaway"

### 10. Gallery (30-80 photos)
Mix interior, exterior, food, surroundings

### 11. Reviews
TripAdvisor / Booking / Google star aggregate badge

### 12. Arrival Info
Transport (bus/train/car), parking, check-in/out times, kosher kitchen, accessibility, mechanical key option

## Visual Identity

### Token Palette (Theme A — Muted Earthy)
```css
:root {
  --hotel-cream: oklch(0.96 0.015 90);
  --hotel-sand: oklch(0.92 0.02 85);
  --hotel-olive: oklch(0.55 0.05 110);
  --hotel-ink: oklch(0.22 0.04 60);
  --hotel-brass: oklch(0.72 0.11 80);
  --booking-widget-bg: oklch(0.99 0.005 90);
  --booking-widget-shadow: 0 12px 40px -12px oklch(0.20 0.02 60 / 0.25);
  --hero-overlay: oklch(0.16 0.02 60 / 0.35);
  --rating-gold: oklch(0.78 0.12 85);
  --kosher-badge: oklch(0.45 0.10 145);
  --shabbat-badge: oklch(0.65 0.08 250);
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre** or Heebo Display
- Hebrew body: **Heebo** or Assistant
- Latin display: Canela / GT Sectra / Recoleta / Saol / Tiempos
- Latin body: Inter Tight / Söhne / Untitled Sans
- Generous tracking on small caps for nav and section labels

## Page Architecture

```
app/page.tsx
├── Header (sticky, glass-blur on scroll, language switcher, book CTA)
├── HeroVideoOrPhoto (full-bleed cinematic)
├── BookingWidget (sticky-bottom or sticky-top after scroll)
├── AboutProperty (story + 1-2 hero shots)
├── RoomTypeGrid (3-15 rooms)
├── DiningSection (if applicable, 1-5 cards)
├── SpaWellnessMenu
├── ExperiencesCarousel (off-property)
├── EditorialJournal (5-15 stories)
├── SpecialOffers
├── GalleryMasonry (30-80 photos)
├── ReviewAggregate (TripAdvisor/Booking/Google)
├── ArrivalInfo
├── Newsletter
└── Footer

app/rooms/[slug]/page.tsx
├── RoomHeroGallery
├── RoomDescription
├── AmenitiesChecklist
├── FloorPlan (optional)
├── BookingWidgetForThisRoom
└── SimilarRooms
```

## Distinctive Components

- `BookingWidget` — date range + guests+children + rooms + promo + group code
- `RoomTypeGrid` — image, sqm, max guests, view, price-from
- `RoomDetailScroll` — full-bleed gallery + amenities + floor plan + sticky book CTA
- `ExperiencesCarousel` — off-property activities with map
- `DiningCard` — restaurant within hotel
- `SpaMenuBlock`
- `StoryArticleCard` — editorial journal layout
- `ArrivalInfoBlock` — transport, parking, check-in
- `ReviewAggregateBadge` — TripAdvisor/Booking/Google star row
- `OfferPackageCard` — package with inclusions list
- `LocationMapBlock`
- `KashrutBadge` (from shared/)
- `ShabbatBadge`

## Animation Patterns

Cinematic hero video, slow ken-burns on hero stills, parallax photography on scroll, scroll-driven editorial reveals, smooth date-picker interactions, fade-and-rise text, carousel inertia, cursor spotlight on luxury tier, image-mask scroll transitions.

## Hebrew RTL Adaptations

- Israeli holiday calendar — peak rates around פסח, ראש השנה, סוכות, חנוכה
- Kosher kitchen badge (כשרות הרבנות / מהדרין) with certifying authority
- Shabbat-friendly rooms — מעלית שבת, mechanical key, Shabbat clock for AC
- Regional flavor: Galilee/Golan (stone, wood, vineyards), Negev/Eilat (desert ochre, glass), Dead Sea (mineral whites/blues), Tel Aviv urban (bauhaus white + brass), Jerusalem (limestone + olive)
- צימר vernacular: jacuzzi spa, breakfast tray ארוחת בוקר, BBQ pinat mangal
- Hebrew editorial serif pairing — Frank Ruhl Libre + Assistant body

## Reference Sites

1. **aman.com** — gold standard for editorial-as-brochure
2. **sohohouse.com** — membership + house carousel
3. **acehotel.com** — accessible boutique, location-as-character
4. **sixsenses.com** — wellness-first IA, sustainability storytelling
5. **belmond.com** + **lareserve-paris.com** — moody luxury, journal-driven
6. **en.amirey-hagalil.com** — Israeli boutique reference for Galilee market

## Best Fit For (Hebrew/Israeli market)

Israeli boutique hotels (Tel Aviv, Jerusalem, Haifa), צימרים in Galilee/Golan/Negev/Judean Hills, kibbutz guesthouses (חוות, אכסניות), Eilat and Red Sea resorts, Dead Sea hotels, Mitzpe Ramon desert lodges, vineyard/winery stays, Druze and Galilee village B&Bs, urban design hotels, vacation rental collections (Airbnb-alternative brands).

## Status

🟡 SKILL spec complete. Templates and demo site pending.
