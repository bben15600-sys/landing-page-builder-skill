---
name: lpb-luxury-realestate
description: "Build Hebrew RTL Luxury Real Estate / Property landing pages in the Sotheby's/Compass/BARNES/single-property style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: PropertyHero with stats overlay, GalleryLightbox, FloorPlanViewer, VirtualTour Matterport embed, AmenitiesMap, ScheduleViewingForm, AgentProfileCard, NeighborhoodGuide, SpecSheet. Triggers: 'create real estate site', 'luxury property listing', 'create site for [property / project / development]', 'יזם בוטיק site', 'פרויקט יוקרה'."
---

# Luxury Real Estate / Property — Hebrew RTL

For Tel Aviv condos (רוטשילד, פרישמן, נווה צדק), Herzliya Pituach beachfront, Caesarea estates, Eilat penthouses, new development projects (DUO Tel Aviv, Infinity Tower).

> **Full research:** see `../../research/05-luxury-realestate.md`

## When to Use

User is selling a luxury property OR running a development project / boutique brokerage. Wants "quiet luxury" — restrained, gallery-like, photography-first. References: **Sotheby's International Realty, Compass, Douglas Elliman, BARNES, Awwwards luxury single-property sites**.

## Required Information from User

### 1. Property / Project Identity
- Address or project name ("46 Frishman" / "DUO Tel Aviv")
- Type (single property / development / portfolio)
- Tagline (1 sentence)
- Story (2-3 paragraphs)

### 2. Theme Direction
- **A — Warm cream + charcoal + gold** (Sotheby's canon)
- **B — Monochrome editorial** (Elyse / Altman)
- **C — Earthy desert** (terracotta / sand — Caesarea, Eilat)

### 3. Hero Pattern
- Full-bleed cinematic still or autoplay video
- Address-as-hero (massive serif type, image revealed on scroll)
- Split hero (image left + stats panel right)
- Slow-fade slideshow

### 4. Property Stats
- Bedrooms / bathrooms / size in sqm
- Floor / total floors
- Price (or "מחיר לפי פנייה")
- Year built / renovated

### 5. Gallery (20-50 photos)
Architecture photography, golden-hour exteriors, interior details

### 6. Floor Plan
SVG with hover-labels per room, OR static image with annotations

### 7. Virtual Tour
Matterport iframe URL (if available)

### 8. Specifications
Designer kitchen brand (Boffi/Poliform), smart home, materials list, view, floor finishes

### 9. Neighborhood Guide
POI map with categories: dining, schools, transit, beach, shopping

### 10. Agent Profile
Portrait + bio + languages spoken + WhatsApp + phone

### 11. Similar Listings (3-6)
Photo + key stats + price-from for cross-link

## Visual Identity

### Token Palette (Theme A — Warm cream)
```css
:root {
  --architectural-cream: oklch(0.96 0.012 85);
  --listing-divider: oklch(0.85 0.008 80);    /* hairline gold-taupe */
  --property-overlay: oklch(0.20 0.008 60 / 0.55);
  --spec-label: oklch(0.50 0.008 70);
  --gold-leaf: oklch(0.68 0.11 75);
  --ink: oklch(0.22 0.008 60);
  --gallery-gap: 0.75rem;
  --display-tracking: -0.03em;
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre** at clamp 4-9rem
- Hebrew body: **Heebo**
- Latin display: GT Super Display / Bodoni Moda / Didot
- Latin body: Inter Tight / Söhne

## Page Architecture

```
app/page.tsx (single property OR portfolio landing)
├── Header (minimal, language switcher prominent)
├── PropertyHero (full-bleed image + stats overlay + tour CTA)
├── About / Story (2-3 paragraphs editorial)
├── GalleryLightbox (masonry 20-50 photos)
├── FloorPlanViewer (SVG with hover labels)
├── SpecSheet (two-column key/value with thin dividers)
├── AmenitiesMap (Mapbox with categorized POIs)
├── NeighborhoodGuide (editorial long-form with pull-quotes)
├── VirtualTourEmbed (Matterport iframe)
├── AgentProfileCard
├── ScheduleViewingForm
├── SimilarListings (carousel, optional)
└── Footer (minimal)
```

## Distinctive Components

- `PropertyHero` with stats overlay (br/ba/sqm + price-on-request)
- `GalleryLightbox` (masonry + zoom + counter)
- `FloorPlanViewer` (SVG with hover labels per room)
- `VirtualTourEmbed` (Matterport iframe wrapper)
- `AmenitiesMap` (Mapbox with categorized POI pins)
- `ScheduleViewingForm` (calendar + time slots + agent assignment)
- `AgentProfileCard` (portrait + bio + multilingual badges + WhatsApp)
- `ListingComparisonTable` (stack on mobile)
- `SpecSheet` (two-column with thin dividers)
- `NeighborhoodGuide` (editorial long-form with pull quotes)

## Animation Patterns

Heavy slow parallax on architectural photography (0.3-0.5 ratio), 800-1200ms ease-out image cross-fades, cursor-following hotspot indicators on floor plans, scroll-driven gallery reveals (clip-path inset), large display type fade-in with subtle y-translate, sticky address that shrinks into header on scroll, hover-zoom (scale 1.03) on listing cards.

## Hebrew RTL Adaptations

- **Metric**: מ"ר not sqft, חדרים not bedrooms; קומה X מתוך Y
- **Address**: street name then number (רוטשילד 46), neighborhood + city below
- **Price**: ₪ prefix; often "מחיר לפי פנייה" for ultra-luxury
- **Phone**: +972 with mirrored grouping (054-360-0082)
- Number alignment: keep LTR digit runs in RTL flow with `dir="ltr"` spans
- Floor plan labels: צפון/דרום/מזרח/מערב; kitchen/bedroom/balcony in Hebrew
- Right-aligned masonry; flip arrow icons in carousels
- Date picker localized (Hebrew calendar + Sun-first week)
- Language switcher prominent (HE/EN, often FR/RU for olim/oligarchs)

## Reference Sites

1. **sothebysrealty.com** — gold/cream/charcoal canon
2. **douglaselliman.com** — editorial neighborhood guides + agent network
3. **compass.com** — clean search + new development
4. **awwwards.com/sites/elyse-residence** — single-property masterclass (#333 monochrome)
5. **barnes-israel.com** — RTL/Hebrew-localized luxury (DUO, Eve North)

## Best Fit For (Hebrew/Israeli market)

- Tel Aviv condos (רוטשילד, פרישמן, נווה צדק, פארק צמרת)
- Herzliya Pituach single-family homes and beachfront villas
- Caesarea estates (קיסריה — large garden lots)
- Eilat / Netanya penthouses
- New development projects ("פרויקט יוקרה", DUO Tel Aviv, Infinity Tower)
- Boutique developers and design-led builders ("יזם בוטיק")
- Architects, interior designers, kitchen/bath showrooms (Poliform, Boffi importers)
- Olim-focused brokerages (English/Hebrew/French toggle)
- Vacation home / second-home marketing

## Status

🟡 SKILL spec complete. Templates and demo site pending.
