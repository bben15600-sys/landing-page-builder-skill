---
name: lpb-beauty-spa
description: "Build Hebrew RTL Beauty Salon / Spa / Cosmetics Brand landing pages in the Glossier/Charlotte Tilbury/Tata Harper/Rare Beauty style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: TreatmentMenuList, OnlineBookingCalendar with stylist preference, ShadeMatcher, ProductDetailWithSwatches, SkinTypeQuiz, BeforeAfterCarousel, TutorialVideoGrid, LoyaltyTierBlock, ProductBundleBuilder, women-only hours toggle. Triggers: 'create beauty salon site', 'spa website', 'cosmetics brand landing page', 'create site for [מספרה / סטודיו ציפורניים / לאש&ברו / מאפרת]'."
---

# Beauty / Spa / Cosmetics — Hebrew RTL

For Israeli beauty salons (מספרות יוקרה), spas (ספא בוטיק), nail bars, lashes/brows specialists, makeup artists, cosmetic injection clinics, hair removal clinics, wedding-prep specialists, skincare D2C brands.

> **Full research:** see `../../research/13-beauty-spa.md`

## When to Use

User runs beauty/spa/cosmetics business and wants the soft, feminine, curated aesthetic of **Glossier, Charlotte Tilbury, Tata Harper, Rare Beauty, Peachy MedSpa, Skinney MedSpa**.

## Required Information from User

### 1. Business Identity
- Salon/brand name (Hebrew + English)
- Specialties (hair / nails / lashes / brows / makeup / facials / spa / cosmetics product line)
- Tagline (1 sentence, feminine grammar in Hebrew)
- Founder/owner story

### 2. Theme Direction
- **A — Blush + ivory + warm gold** (Charlotte Tilbury luxury)
- **B — Nude + cocoa + cream** (Tata Harper clean luxury)
- **C — Millennial pink + black + bone** (Glossier modern girl-brand)
- **D — Desaturated rose + sage + sand** (medspa wellness)

### 3. Treatments Menu (15-50)
For each: Hebrew name + duration (45 דק׳) + price + description (50 words) + book CTA

### 4. Stylists / Specialists (1-20)
For each: portrait + name + specialty + bio (100 words) + book-with-X link

### 5. Products (if D2C brand — 5-50 SKUs)
For each: PNG render + name + price + variants (shade/size) + ingredients + how-to-use

### 6. Booking Integration
Calendar + stylist preference + treatment selection + reminder SMS

### 7. Before/After Gallery (10-30 image pairs)
With consent disclaimer

### 8. Skin Type Quiz / Shade Matcher (if cosmetics)
Multi-step interactive returning recommendations

### 9. Tutorial Videos (if applicable)
Vertical reels (TikTok/Instagram-style)

### 10. Loyalty / Membership
Tier ladder with points/benefits

### 11. Wedding-Prep Packages
חבילת כלה — ניסיון איפור + יום האירוע + חינה + photo session

## Visual Identity

### Token Palette (Theme A — Blush luxe)
```css
:root {
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
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre**
- Hebrew body: **Heebo** or Assistant
- Latin display: Tiempos Headline / Larken / GT Sectra / Canela
- Latin body: Söhne / Apercu / Inter
- Frequent italic serif for editorial accents

## Page Architecture

```
app/page.tsx
├── PromoBar (free shipping / 20% first treatment)
├── Header (with sticky Book CTA)
├── Hero (model close-up OR product PNG)
├── TreatmentMenuList (with categories)
├── BookingCalendar (with stylist preference)
├── BestsellersGrid (if products)
├── BrandStory (founder portrait + paragraphs)
├── BeforeAfterCarousel (consent disclaimer)
├── ShadeMatcher / SkinTypeQuiz (if cosmetics)
├── TutorialVideoGrid
├── PressLogosRow
├── LoyaltyTierBlock
├── ReviewWall (with photos)
├── FAQAccordion
└── Footer

app/treatments/[slug]/page.tsx
├── TreatmentHero
├── ProcessExplanation
├── BeforeAfterForTreatment
├── PricingAndDuration
└── BookCTA

app/products/[slug]/page.tsx
├── ProductDetailWithSwatches
├── IngredientsAccordion
├── HowToUseVideo
├── ReviewsForProduct
└── RelatedProducts
```

## Distinctive Components

- `TreatmentMenuList` — service name, duration pill, price, "הזמיני" button
- `OnlineBookingCalendar` — date picker, time slots, stylist dropdown, treatment selection
- `ShadeMatcher` — interactive grid of swatches with skin-tone filter
- `ProductDetailWithSwatches` — image gallery, swatch row, size variant pills, ingredients accordion
- `SkinTypeQuiz` — multi-step (skin type → concerns → routine), returns product recs
- `BeforeAfterCarousel` (from shared/) — slider with reveal handle, consent caption
- `TutorialVideoGrid` — vertical reels, hover preview
- `StylistProfileCard` — round portrait, name, specialties, "book with X"
- `LoyaltyTierBlock` — tier ladder (Silver / Gold / Platinum), point balance bar
- `ProductBundleBuilder` — "build your routine" 3-step picker

## Animation Patterns

Soft hover lifts (translateY -4px, gentle shadow bloom), gentle product image swap on hover, smooth shade swatch ring on select, subtle parallax on hero photos, fade-up scroll reveals with serif headline tracking-in. No aggressive bounces.

## Hebrew RTL Adaptations

- Treatment names: מניקור, פדיקור, ג'ל לק, גוונים, החלקה ברזילאית, קרטין, לאש ליפט, האבסטמפ גבות, BB גלואו, חיפוי שיער, איפור כלות, פילינג כימי, בוטוקס, מילוי שפתיים
- Israeli stylist culture: distinguish חולצים (sole stylist) vs. team salon
- Modesty: "שעות נשים בלבד" / women-only hours toggle, female-only practitioner toggle
- Wedding prep packages: יום החתונה (חבילת כלה), חינה, אירוסין
- Hebrew quiz copy uses feminine grammar (סוג העור שלך, ההמלצה שלנו עבורך)
- Right-aligned price tags, Hebrew duration phrasing (45 דק׳)
- Currency in shekels, kosher/vegan/cruelty-free badges localized (טבעוני, ללא ניסויים בבעלי חיים)

## Reference Sites

1. **glossier.com** — millennial pink + black, playful interactions, signature shade finder
2. **charlottetilbury.com** — burgundy/gold luxury, robust shade matchers, magic-themed copy
3. **tataharperskincare.com** — clean luxury neutrals, ingredient storytelling, gold accents
4. **rarebeauty.com** — minimalist neutrals, animated gift hero, community/UGC integration
5. **peachy.co / Skinney MedSpa / Tribeca MedSpa** — dusty rose medspa template

## Best Fit For (Hebrew/Israeli market)

Israeli beauty salons (מספרות יוקרה), spas (ספא בוטיק), nail bars (סטודיו לציפורניים), lashes/brows specialists (לאש & ברו), makeup artists (מאפרות כלות), cosmetic injection clinics (מרפאות אסתטיקה — בוטוקס/חומצה היאלורונית), hair removal clinics (לייזר/IPL), wedding-prep specialists (חבילות כלה), skincare D2C brands (מותגי קוסמטיקה ישראליים), barre/wellness studios that lean feminine, dermatology-adjacent boutique clinics.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
