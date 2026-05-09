# Style: Beauty / Spa / Cosmetics

References: Glossier, Charlotte Tilbury, Tata Harper, Rare Beauty, Peachy, Skinney MedSpa, Tribeca MedSpa.

## Visual Identity
Soft, feminine, curated. The aesthetic prioritizes negative space, tactile surfaces, and editorial photography over busy decoration. Product becomes hero through clean PNG renders, natural light, and aspirational lifestyle stills (hands applying cream, marble counters, dewy skin).

**Palette directions:**
- **Blush + ivory + warm gold** — Charlotte Tilbury, classic luxury cosmetics
- **Nude + cocoa + cream** — Tata Harper, Westman Atelier, "clean luxury"
- **Millennial pink + black + bone** — Glossier, Rare Beauty, modern girl-brand
- **Desaturated rose + sage + sand** — modern medspas, wellness positioning

**oklch palettes:**
- Blush luxe: `oklch(0.97 0.01 70)` ivory bg, `oklch(0.88 0.04 25)` blush, `oklch(0.78 0.10 75)` warm gold, `oklch(0.18 0.02 30)` cocoa text
- Clean nude: `oklch(0.95 0.02 80)` cream, `oklch(0.72 0.05 40)` nude, `oklch(0.42 0.08 35)` cocoa, `oklch(0.20 0.01 30)` espresso
- Rose-sage spa: `oklch(0.96 0.01 90)` bone, `oklch(0.85 0.05 20)` desaturated rose, `oklch(0.70 0.05 145)` sage, `oklch(0.25 0.02 30)` deep mocha

**Typography:** refined display serif paired with humanist sans — GT Sectra, Larken, Tiempos Headline, Canela for headlines; Söhne, Apercu, GT America, Inter for body. Frequent italic serif for editorial accents ("the ritual", "Charlotte's secret").

**Texture:** matte paper grain, marble swatches, soft drop shadows under products, subtle film grain on hero photos.

## Hero Patterns
- Full-bleed model close-up (lips, lashes, hands holding bottle) with brand statement in serif and "Shop Now" / "Book Treatment" CTA
- Product hero with PNG render floating over color block + signature line ("Your Skin's Golden Hour")
- Sticky promo bar at top: "Free shipping over ₪250" / "20% off first treatment"
- Carousel hero with subtle Ken Burns zoom on lifestyle shots

## Section Inventory
- Treatment menu (service + duration + price + book)
- Bestsellers grid / "Shop the routine"
- Brand story / philosophy (founder portrait, ingredient sourcing)
- Shade finder / skin type quiz (interactive)
- Booking calendar with stylist preference
- Product detail with swatch picker, ingredient list, how-to-use
- Before/after carousel (with consent disclaimer)
- Tutorial / how-to videos
- Press logos + editorial reviews
- Loyalty / membership tier card
- UGC grid (#brandhashtag, real customers)

## Distinctive Components Needed
- `TreatmentMenuList` — service name, duration pill, price, "הזמיני" button
- `OnlineBookingCalendar` — date picker, time slots, stylist dropdown, treatment selection
- `ShadeMatcher` — interactive grid of swatches with skin-tone filter
- `ProductDetailWithSwatches` — image gallery, swatch row, size variant pills, ingredients accordion
- `SkinTypeQuiz` — multi-step (skin type → concerns → routine), returns product recs
- `BeforeAfterCarousel` — slider with reveal handle, consent caption
- `TutorialVideoGrid` — vertical reels, hover preview
- `StylistProfileCard` — round portrait, name, specialties, "book with X" CTA
- `LoyaltyTierBlock` — tier ladder (Silver / Gold / Platinum), point balance bar
- `ProductBundleBuilder` — "build your routine" 3-step picker

## Animation Patterns
Soft hover lifts (translateY -4px, gentle shadow bloom), gentle product image swap on hover (front/back/lifestyle), smooth shade swatch ring on select, subtle parallax on hero photos, fade-up scroll reveals with serif headline tracking-in. No aggressive bounces, no fast cuts — pace is calm and editorial.

## Hebrew RTL Adaptations
- Treatment names: מניקור, פדיקור, ג'ל לק, גוונים, החלקה ברזילאית, קרטין, לאש ליפט, האבסטמפ גבות, BB גלואו, חיפוי שיער, איפור כלות, פילינג כימי, בוטוקס, מילוי שפתיים
- Israeli stylist culture: distinguish חולצים (sole stylist) vs. team salon — surface stylist preference prominently
- Modesty: option to flag "שעות נשים בלבד" / women-only hours, female-only practitioner toggle
- Wedding prep packages: יום החתונה (חבילת כלה — ניסיון איפור + יום האירוע), חינה, אירוסין
- Hebrew quiz copy uses feminine grammar (סוג העור שלך, ההמלצה שלנו עבורך)
- Right-aligned price tags, Hebrew duration phrasing (45 דק׳)
- Currency in shekels, kosher/vegan/cruelty-free badges localized (טבעוני, ללא ניסויים בבעלי חיים)

## Top 5 Reference Sites
1. **glossier.com** — millennial pink + black, playful interactions, signature shade finder
2. **charlottetilbury.com** — burgundy/gold luxury, robust shade matchers, magic-themed copy
3. **tataharperskincare.com** — clean luxury neutrals, ingredient storytelling, gold accents
4. **rarebeauty.com** — minimalist neutrals, animated gift hero, community/UGC integration
5. **peachy.co / Skinney MedSpa / Tribeca MedSpa** — dusty rose medspa template, transparent pricing, before/after grid

## Recommended Tokens
```
--blush-warm: oklch(0.88 0.04 25);
--ivory-bg: oklch(0.97 0.01 70);
--cocoa-ink: oklch(0.20 0.02 30);
--gold-accent: oklch(0.78 0.10 75);
--sage-spa: oklch(0.70 0.05 145);
--rose-dust: oklch(0.85 0.05 20);
--product-card-radius: 8px;
--product-card-shadow: 0 4px 24px oklch(0 0 0 / 0.06);
--treatment-divider: 1px solid oklch(0.88 0.01 70);
--shade-swatch-size: 28px;
--shade-swatch-ring: 2px solid var(--cocoa-ink);
--serif-display: "Tiempos Headline", "Larken", Georgia, serif;
--sans-body: "Söhne", "Apercu", "Inter", sans-serif;
--editorial-italic: italic;
```

## Best Fit For (Hebrew/Israeli market)
Israeli beauty salons (מספרות יוקרה), spas (ספא בוטיק), nail bars (סטודיו לציפורניים), lashes/brows specialists (לאש & ברו), makeup artists (מאפרות כלות), cosmetic injection clinics (מרפאות אסתטיקה — בוטוקס/חומצה היאלורונית), hair removal clinics (לייזר/IPL), wedding-prep specialists (חבילות כלה), skincare D2C brands (מותגי קוסמטיקה ישראליים), barre/wellness studios that lean feminine, dermatology-adjacent boutique clinics.
