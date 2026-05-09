# Style: Hotel / Resort / Hospitality

References: Aman, Soho House, Ace Hotel, Six Senses, Belmond, La Réserve, Amirey Hagalil.

## Visual Identity
"Quiet luxury" — minimalist canvases that let cinematic photography dominate. Three palette families recur:

- **Muted earthy** (Aman, Six Senses, Israeli צימרים): sand, olive, oat, cream, weathered stone
- **Moody luxury** (Belmond, La Réserve, Peninsula): deep navy/charcoal + brass/gold + ivory
- **Tropical / Mediterranean** (Soho House Ibiza, Ace Athens, Eilat resorts): terracotta, jungle green, ochre, ivory

```
--sand:    oklch(0.92 0.02 85);   --olive: oklch(0.55 0.05 110);  --cream:    oklch(0.96 0.015 90);
--navy:    oklch(0.22 0.04 250);  --brass: oklch(0.72 0.11 80);   --ivory:    oklch(0.95 0.012 85);
--terracotta: oklch(0.62 0.13 40); --jungle: oklch(0.42 0.07 150); --bone:    oklch(0.94 0.018 75);
```

Typography: editorial display serif (Canela, GT Sectra, Recoleta, Saol, Tiempos) paired with refined humanist sans (Inter Tight, Söhne, Untitled Sans). Generous tracking on small caps for nav and section labels. Subtle textures: linen weave, paper grain, soft sand overlay at 4–8% opacity.

## Hero Patterns
- Full-bleed video loop or single hero photo, golden-hour or blue-hour
- Hotel name in serif, restrained tagline beneath ("Soul-soothing escapes," "A home for creatives")
- Booking widget either floating-bottom-center, sticky-top-after-scroll, or anchored as a horizontal bar
- Subtle arrow / "scroll" cue, often animated on a slow loop
- Cursor changes (Le Mirabeau spotlight effect) increasingly common on luxury tier

## Section Inventory
- Booking widget (destination / dates / guests / rooms / promo code)
- Rooms & suites grid → individual room detail with gallery
- Dining / restaurants (each restaurant feels like its own micro-brand)
- Spa & wellness menu
- Experiences / activities / location guide
- Editorial journal / stories
- Special offers / packages
- Gallery (often masonry or scroll-driven)
- Reviews aggregate (TripAdvisor, Booking, Google badge row)
- Newsletter / loyalty program
- Arrival info (transport, parking, check-in times, kosher kitchen, accessibility)

## Distinctive Components Needed
- `BookingWidget` — date range, guest+children-with-ages, rooms, promo, corporate/group codes
- `RoomTypeGrid` — image, size in sqm, max guests, view, price-from
- `RoomDetailScroll` — full-bleed gallery, amenities checklist, floor plan, sticky book CTA
- `ExperiencesCarousel` — off-property activities with map
- `DiningCard` — restaurant within hotel, chef, cuisine, hours
- `SpaMenuBlock` — treatments grid with duration/price
- `StoryArticleCard` — editorial journal layout
- `ArrivalInfoBlock` — transport, parking, check-in
- `ReviewAggregateBadge` — TripAdvisor/Booking/Google star row
- `OfferPackageCard` — package with inclusions list
- `LocationMapBlock` — interactive map with nearby points

## Animation Patterns
Cinematic hero video, slow ken-burns on hero stills, parallax photography on scroll, scroll-driven editorial reveals, smooth date-picker interactions, fade-and-rise text, carousel inertia, cursor spotlight on luxury tier, image-mask scroll transitions.

## Hebrew RTL Adaptations
- Israeli holiday calendar — peak rates around פסח, ראש השנה, סוכות, חנוכה; widget should auto-flag חג blocks
- Kosher kitchen badge (כשרות הרבנות / מהדרין) with certifying authority
- Shabbat-friendly rooms — מעלית שבת, mechanical key, Shabbat clock for AC, no electronic key cards
- Regional flavor systems: Galilee/Golan (stone, wood, vineyards), Negev/Eilat (desert ochre, glass), Dead Sea (mineral whites/blues), Tel Aviv urban (bauhaus white + brass), Jerusalem (limestone + olive)
- צימר vernacular: jacuzzi spa, breakfast tray ארוחת בוקר, BBQ pinat mangal
- Hebrew editorial serif pairing — Frank Ruhl Libre or Heebo Display + Assistant body

## Top 5 Reference Sites
1. **aman.com** — gold standard for editorial-as-brochure, multi-destination journeys
2. **sohohouse.com** — membership + house carousel + lifestyle quantification
3. **acehotel.com** — accessible boutique, location-as-character, strong booking widget
4. **sixsenses.com** — wellness-first IA, sustainability storytelling
5. **belmond.com** + **lareserve-paris.com** — moody luxury, journal-driven, brass accents
6. **en.amirey-hagalil.com** — Israeli boutique reference for Galilee market

## Recommended Tokens
```
--hotel-cream, --hotel-sand, --hotel-stone, --hotel-brass, --hotel-ink
--booking-widget-bg, --booking-widget-border, --booking-widget-shadow
--editorial-pull, --editorial-rule, --editorial-caption
--room-card-radius, --gallery-gap, --hero-overlay
--rating-gold, --kosher-badge, --shabbat-badge
```

## Best Fit For (Hebrew/Israeli market)
Israeli boutique hotels (Tel Aviv, Jerusalem, Haifa), צימרים in Galilee/Golan/Negev/Judean Hills, kibbutz guesthouses (חוות, אכסניות), Eilat and Red Sea resorts, Dead Sea hotels, Mitzpe Ramon desert lodges, vineyard/winery stays, Druze and Galilee village B&Bs, urban design hotels, vacation rental collections (Airbnb-alternative brands).
