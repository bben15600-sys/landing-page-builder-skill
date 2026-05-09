# Style: Restaurant / Cafe / Hospitality F&B

References: Noma, Eleven Madison Park, Sweetgreen, Blue Bottle Coffee, neighborhood cafes from Awwwards.

## Visual Identity

**Three Distinct Palette Modes:**

**1. Warm Earthy (terracotta, olive, cream — neighborhood cafe / bakery / hummusiya)**
```
--bg:        oklch(0.96 0.02 80)    /* warm cream */
--surface:   oklch(0.92 0.03 75)    /* paper */
--ink:       oklch(0.25 0.04 50)    /* espresso brown */
--accent:    oklch(0.55 0.13 40)    /* terracotta */
--olive:     oklch(0.58 0.08 110)
--muted:     oklch(0.70 0.04 70)
```

**2. Moody Fine Dining (deep green / burgundy / charcoal — chef-driven, wine bar)**
```
--bg:        oklch(0.16 0.02 150)   /* near-black forest */
--surface:   oklch(0.22 0.03 145)
--ink:       oklch(0.94 0.01 80)
--accent:    oklch(0.65 0.14 50)    /* brass / amber */
--burgundy:  oklch(0.32 0.12 25)
--gold:      oklch(0.78 0.11 85)
```

**3. Fresh Clean (sage / butter / white — specialty coffee, brunch, ice cream)**
```
--bg:        oklch(0.985 0.005 90)
--sage:      oklch(0.72 0.05 145)
--butter:    oklch(0.92 0.08 95)
--ink:       oklch(0.20 0.01 80)
--accent:    oklch(0.50 0.10 25)    /* tomato */
```

**Typography:** Display serif headlines + humanist sans body. Common pairings: Cormorant Garamond / Canela / Tiempos Headline / GT Super for display; Inter, Söhne, Söhne Mono for body. For Hebrew: Frank Ruhl Libre + Heebo or Assistant.

**Photography:** Golden-hour, candid plates shot from 3/4 angle, hands-in-frame, steam, crumbs, natural daylight on linen. Interior shots emphasize ambiance.

**Texture:** Kraft paper grain, wood grain, linen weave, hand-drawn ink illustrations of produce/cups, embossed monogram stamps.

## Hero Patterns
- Full-bleed atmospheric hero photo (Eleven Madison Park, Noma) — slow rotating carousel of 4-6 plates/interior shots
- Slow ken-burns on a single video loop (kitchen pass, pour shot, fire from grill)
- Restaurant name in oversized serif centered, tagline below, two CTAs: "Reserve" + "Menu"
- Persistent hours/location chip in corner ("Open until 23:00" + neighborhood)
- Top-fixed nav becomes opaque after scroll; reservation CTA always visible

## Section Inventory
About / chef story, Menu (live or PDF), Reservation widget (Tock/OpenTable/Resy embed), Photo gallery (food + interior masonry), Press & awards strip, Hours + location + map, Private events / catering inquiry form, Newsletter, Instagram grid, Gift cards / shop, FAQ.

## Distinctive Components Needed
- `ReservationWidget` (date/time/party-size, Tock/OpenTable/Resy embed)
- `MenuSection` with categories, prices, dietary icons (V, GF, kosher), section dividers as ornament
- `HoursBlock` with current-day highlighting and "open now / closed" pill
- `GalleryMasonry` with mixed sizes + lightbox
- `ChefBioBlock` (portrait + signature script + story)
- `LocationMap` (Mapbox/Google embed) with directions CTA
- `InstagramGrid` (last 6 posts via Instagram Basic Display API)
- `AtmosphericVideoHero` with poster fallback + reduced-motion honor
- `PressStrip` with logo wall (NYT, Eater, Time Out, Haaretz, TimeOut Tel Aviv)
- `MenuPdfDownloadButton` + iframe preview
- `EventInquiryForm` for private dining

## Animation Patterns
Slow ken-burns (8-12s), soft 600-900ms crossfade between hero images, parallax on scroll for plate photos, sticky nav with reservation CTA always visible, subtle word-by-word fade-in on serif headlines, marquee press-logo strip, 3D book flip for menu PDF preview.

## Hebrew RTL Adaptations
- Bilingual menu: Hebrew dish name (Frank Ruhl Libre) + English/transliteration + dietary/origin tags
- Hours block: Sun-Thu primary (Israeli work week), Friday early close, Saturday motzash — Sabbath-aware "סגור בשבת" / "פתוח במוצ"ש"
- Kashrut badges: כשר למהדרין / כשר רבנות / לא כשר / טבעוני / צמחוני as inline pills
- Hebrew on producer/origin notes ("חיטה מבית הבד", "דג מנמל יפו")
- Phone with tel: link in IL format (03-, 052-)
- Waze button alongside Google Maps (Israeli default)
- RTL-mirror all carousels, navigation order, gallery reading direction
- Reservation party-size labels in Hebrew (זוג / משפחה / קבוצה)

## Top 5 Reference Sites
1. **noma.dk** — minimalist editorial, full-bleed hero carousel, Book a Table CTA, EN/DA toggle
2. **elevenmadisonpark.com** — Resy reservation embed, 19-slide carousel, neutral palette, Relais & Châteaux trust badge
3. **damaria-roma.webflow.io** — warm earth tones, magazine plating photography, repeated stamp logos
4. **haven-annecy.fr** — brunch/cafe, hand-drawn SVG illustrations, hours-prominent
5. **rumbekeplatse.be (Platse)** + **paputmenorca.com** — Awwwards-honored hospitality

## Recommended Tokens
```
--warm-paper:      oklch(0.96 0.02 80)
--menu-divider:    oklch(0.70 0.05 60 / 0.4)
--hours-active:    oklch(0.55 0.13 40)
--hours-closed:    oklch(0.60 0.02 80)
--reserve-cta:     oklch(0.32 0.12 25)
--kashrut-badge:   oklch(0.45 0.10 145)
--menu-price:      oklch(0.40 0.04 70)
--ornament:        oklch(0.65 0.14 50 / 0.3)
--photo-overlay:   oklch(0.16 0.02 150 / 0.35)
```

## Best Fit For (Hebrew/Israeli market)
Israeli restaurants (Eyal Shani-style modern Mediterranean), neighborhood cafes (Tel Aviv/Jerusalem third-wave), wine bars, bakeries (לחמים, bourekas), specialty coffee roasters, ice cream / gelato (Anita), modern hummusiyot (Shlomo & Doron), neo-bistros, breweries (Dancing Camel, BeerBazaar), kosher fine-dining, vegan/Tel Aviv health-bowl spots, shuk/market stalls with online presence, catering kitchens, food-hall vendors, patisseries.
