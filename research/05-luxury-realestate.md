# Style: Luxury Real Estate / Property

References: Compass, Sotheby's International Realty, Douglas Elliman, BARNES, single-property luxury sites, Awwwards.

## Visual Identity
"Quiet luxury" — restrained, gallery-like, photography-first.

**Palette options (oklch):**
- *Warm cream + charcoal + gold* (Sotheby's / BARNES / Caldera House):
  - `--background: oklch(0.96 0.012 85)` (architectural cream)
  - `--foreground: oklch(0.22 0.008 60)` (deep charcoal)
  - `--accent: oklch(0.68 0.11 75)` (muted gold leaf)
- *Monochrome editorial* (Elyse / Altman Brothers):
  - `--background: oklch(0.99 0 0)`
  - `--foreground: oklch(0.20 0 0)`
  - `--muted: oklch(0.55 0.005 90)` (taupe divider)
- *Earthy desert / terracotta* (Caesarea, Eilat, Negev):
  - `--background: oklch(0.93 0.025 60)` (sand)
  - `--accent: oklch(0.52 0.09 35)` (terracotta)
  - `--ink: oklch(0.28 0.02 50)` (umber)

**Typography:** High-contrast didone serif for headlines (GT Super Display, Bodoni Moda, Didot, Canela, Fraunces Display); refined humanist sans for body (Inter Tight, Söhne, Aktiv Grotesk, Suisse Int'l). Hebrew: Frank Ruhl Libre / Heebo body. Massive display sizes (clamp 4rem-9rem), tight tracking, all-lowercase trend on luxury developer sites. Whitespace is the loudest design element.

## Hero Patterns
1. **Full-bleed exterior/interior cinematic still or autoplay video** with property name in oversized serif overlay (bottom-left), tiny "schedule a tour" CTA top-right.
2. **Address-as-hero**: massive serif type ("46 FRISHMAN") with subhead neighborhood, no image above the fold — image revealed on scroll.
3. **Split hero**: full-height image left, fixed stats panel right (rooms, sqm, floor, price-on-request), thin gold divider.
4. **Slow-fade slideshow** of 4-5 hero images (BARNES, Douglas Elliman) with cross-dissolve every 6s.

## Section Inventory
- Property gallery (masonry grid + lightbox with arrow navigation)
- Floor plan viewer (interactive SVG, hover shows room dimensions)
- Specifications / features (designer kitchen brands, smart home, materials list)
- Neighborhood pitch + amenities map (POI categories: dining, schools, transit, beach)
- Walk-through video / Matterport 3D embed
- Architect / developer profile + credentials
- Schedule a viewing form (date picker + assigned agent)
- Similar / featured listings carousel
- Press / accolades strip

## Distinctive Components Needed
- `PropertyHero` with stats overlay (br/ba/sqm + price-on-request)
- `GalleryLightbox` (masonry + zoom + counter)
- `FloorPlanViewer` (SVG with hover labels per room)
- `VirtualTourEmbed` (Matterport iframe wrapper)
- `AmenitiesMap` (Mapbox with categorized POI pins)
- `ScheduleViewingForm` (calendar + time slots + agent assignment)
- `AgentProfileCard` (portrait + bio + multilingual badges + WhatsApp)
- `ListingComparisonTable` (stack columns on mobile)
- `SpecSheet` (two-column key/value with thin dividers)
- `NeighborhoodGuide` (editorial long-form with pull quotes)

## Animation Patterns
Heavy slow parallax on architectural photography (0.3-0.5 ratio), 800-1200ms ease-out image cross-fades, cursor-following hotspot indicators on floor plans, scroll-driven gallery reveals (clip-path inset), large display type fade-in with subtle y-translate, sticky address that shrinks into header on scroll, hover-zoom (scale 1.03) on listing cards.

## Hebrew RTL Adaptations
- **Metric units**: מ"ר not sqft, חדרים not bedrooms; floors as קומה X מתוך Y
- **Address format**: street name then number (רוטשילד 46), neighborhood/city below
- **Price**: ₪ prefix; often "מחיר לפי פנייה" for ultra-luxury
- **Phone**: +972 with mirrored grouping (054-360-0082)
- **Number alignment**: keep LTR digit runs in RTL flow with `dir="ltr"` spans
- **Floor plan labels**: translate cardinal directions (צפון/דרום/מזרח/מערב)
- **Right-aligned masonry gallery**, flip arrow icons in carousels
- **Date picker** localized (Hebrew calendar + Sun-first week)

## Top 5 Reference Sites
1. **sothebysrealty.com** — gold/cream/charcoal canon, serif typography
2. **douglaselliman.com** — editorial neighborhood guides + agent network
3. **compass.com** — clean search + new development + agent cards
4. **awwwards.com/sites/elyse-residence** — single-property masterclass
5. **barnes-israel.com** — already RTL/Hebrew-localized luxury template (DUO Tel Aviv, Eve North)

## Recommended Tokens
```
--architectural-cream: oklch(0.96 0.012 85)
--listing-divider: oklch(0.85 0.008 80)   /* hairline 1px gold-taupe */
--property-overlay: oklch(0.20 0.008 60 / 0.55)
--spec-label: oklch(0.50 0.008 70)
--gold-leaf: oklch(0.68 0.11 75)
--ink: oklch(0.22 0.008 60)
--gallery-gap: 0.5rem | 0.75rem | 1rem
--display-tracking: -0.03em
--serif-display: "GT Super Display", "Frank Ruhl Libre", Didot, serif
--sans-body: "Inter Tight", "Heebo", "Söhne", system-ui
```

## Best Fit For (Hebrew/Israeli market)
- Tel Aviv condos (רוטשילד, פרישמן, נווה צדק, פארק צמרת)
- Herzliya Pituach single-family homes and beachfront villas
- Caesarea estates (קיסריה — large garden lots)
- Eilat / Netanya penthouses
- New development projects ("פרויקט יוקרה", DUO Tel Aviv, Infinity Tower)
- Boutique developers and design-led builders ("יזם בוטיק")
- Architects, interior designers, kitchen/bath showrooms (Poliform, Boffi importers)
- Olim-focused brokerages (English/Hebrew/French toggle)
- Vacation home / second-home marketing (רמת הגולן / מצפה רמון)
