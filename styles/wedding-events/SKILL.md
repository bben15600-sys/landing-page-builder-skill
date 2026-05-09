---
name: lpb-wedding-events
description: "Build Hebrew RTL Wedding & Events / Event Venue landing pages in the Achuza Beit Hanan/OLMAYA/Sasha Souza/Bliss & Bone style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: DateAvailabilityWidget, RealWeddingsGallery filterable, WeddingDetailScroll, PackageComparisonTable, VendorPartnerGrid, InquiryFormDetailed, MonogramSeal, FloralFlourishDivider, kashrut + chuppah indicators. Triggers: 'create wedding venue site', 'event planner website', 'create site for [גן אירועים / מפיקת אירועים / אולם / חצר אירועים]'."
---

# Wedding & Events / Event Venue — Hebrew RTL

For Israeli wedding venues (גנים, אחוזות, אולמות, חצרות), wedding planners (מפיקות אירועים), bar/bat mitzvah planners, henna planners, corporate event production.

> **Full research:** see `../../research/10-wedding-events.md`

## When to Use

User runs an event venue or planning business and wants the romantic, atmospheric polish of **Achuza Beit Hanan, OLMAYA Jerusalem, Sasha Souza Events, Matthew Robbins Design, Bliss & Bone templates**.

## Required Information from User

### 1. Venue / Business Identity
- Venue/business name (Hebrew + English)
- Type (garden venue / urban / boutique hotel-as-venue / planner only)
- Tagline (1 sentence)
- Story / what makes you different

### 2. Theme Direction
- **A — Romantic Blush** (cream + blush + sage + gold — spring/summer venues)
- **B — Black-Tie** (deep navy + champagne + ivory — urban prestige)
- **C — Garden Romance** (dusty pink + olive + cream + warm wood — estate venues)

### 3. Real Weddings (10-30 weddings)
For each: couple name (or initials) + season + photo count (15-30) + style tags + vendor credits + 1-paragraph story

### 4. Packages (3-5 tiers)
e.g., Intimate (50 guests) / Classic (150 guests) / Luxury (250+ guests)
For each: inclusions (chuppah / catering / DJ / photographer / florist) + starting price

### 5. Date Availability
Calendar with current/upcoming season blocks, on-hold dates, booked dates

### 6. Testimonials with Portraits (10-20)
Quote + name + wedding date + venue used

### 7. Vendor Partners (10-30 logos)
Florists, DJs, photographers, רבנים, catering, chuppah designers

### 8. Press (5-15 logos)
Vogue Weddings, Style Me Pretty, חתונה ישראלית, Israel Events Magazine

### 9. FAQ
Capacity, kashrut, parking, weather backup plan, etc.

### 10. Detailed Inquiry Form
- Event date (with availability indicator)
- Guest count
- Budget range
- Vibe radio chips (rustic / elegant / minimalist / festive)
- Venue/style preference
- How they heard
- Contact

## Visual Identity

### Token Palette (Theme A — Romantic Blush)
```css
:root {
  --romantic-blush: oklch(0.88 0.05 25);
  --cream-ivory: oklch(0.96 0.02 30);
  --sage-soft: oklch(0.72 0.06 130);
  --gold-shimmer: oklch(0.78 0.12 85);
  --serif-romantic: "Cormorant Garamond", "Frank Ruhl Libre", serif;
  --serif-display: "Playfair Display", serif;
  --script-accent: "Pinyon Script", cursive;
  --watercolor-bg: radial-gradient(ellipse at top, oklch(0.92 0.04 25 / 0.4), transparent);
  --ease-romantic: cubic-bezier(0.4, 0, 0.2, 1);
  --zoom-kenburns: 1.08;
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre** or David Libre
- Hebrew body: **Heebo** or Assistant
- Latin display: Cormorant Garamond / Playfair Display / GT Super Display / Larken / Tenor Sans
- Italic subhead for romance ("a love story unfolds")
- Script accents (Allura, Pinyon Script) sparingly for monograms

## Page Architecture

```
app/page.tsx
├── Header (with availability + WhatsApp inquiry)
├── HeroAtmospheric (slow ken-burns, serif headline, scroll cue)
├── AboutVenue (story + chef/owner photo)
├── PackageComparisonTable (3 tiers)
├── RealWeddingsGalleryFilter (filter by season/style/size)
├── TestimonialsBlock (with portraits)
├── DateAvailabilityWidget
├── VendorPartnerGrid
├── PressStrip (grayscale logos)
├── InquiryFormDetailed
├── FAQAccordion
└── Footer

app/real-weddings/[slug]/page.tsx
├── HeroPhoto (hero couple shot)
├── StorySnippet (1-2 paragraphs)
├── FullGallery (50+ photos)
├── VendorCredits
├── Testimonial
└── BackToGallery
```

## Distinctive Components

- `DateAvailabilityWidget` — calendar grid with booked / available / on-hold states
- `RealWeddingsGallery` — masonry, filter chips by season/style/size
- `WeddingDetailScroll` — single-wedding story page with hero, narrative, vendor credits, full gallery
- `PackageComparisonTable` — three tiers with checkmark grid (intimate / classic / luxury)
- `VendorPartnerGrid` — logo cards with role tags
- `InquiryFormDetailed` — date, guest count, budget range, vibe radio chips, venue preference, how-they-heard
- `TestimonialPullQuote` — large italic serif over portrait
- `FAQAccordion` (from shared/) — soft borders, plus/minus icons
- `MonogramSeal` — couple/venue monogram SVG
- `FloralFlourishDivider` — animated SVG section break (stroke-dashoffset)

## Animation Patterns

Slow hero Ken Burns zoom; soft cross-fade gallery; organic SVG flourishes drawing in on scroll (stroke-dashoffset); parallax floral elements at 0.3–0.5× scroll speed; sticky-zoom transitions between weddings (Framer Motion); reveal-on-scroll for testimonial portraits; 700–900ms ease-out timing — never snappy.

## Hebrew RTL Adaptations

- Hebrew calendar sidebar (Tu B'Av "ט״ו באב" featured as romantic peak)
- Peak season May–October badge ("עונת החתונות")
- Kosher catering badge ("בהשגחת הרבנות הראשית" / mehadrin tier)
- Chuppah-design section ("עיצוב חופה")
- Henna ceremony page for Sephardic/Mizrahi (חינה / טקס חינה)
- Bilingual Hebrew-English toggle for international guests
- Saturday night / motzei Shabbat scheduling notes
- Israeli wedding-season urgency ("נותרו 3 תאריכים בקיץ 2026")
- Mirror all monograms and ornament SVGs for RTL flow

## Reference Sites

1. **Achuza Beit Hanan** (achuza.co.il) — Provençal garden romance, cream + green, bilingual, kosher badges
2. **OLMAYA Jerusalem** (olmaya.co.il) — black-tie urban prestige, animated logo hero, multilingual (HE/FR/EN)
3. **Sasha Souza Events** — modern romance, full-width hero, real-wedding success stories
4. **Matthew Robbins Design** — editorial gallery, mood-board to final-look transformation reels
5. **Bliss & Bone "Greens" / "Hayden" / "Serena"** — serif typography, blush peony palette, layered florals

## Best Fit For (Hebrew/Israeli market)

Israeli wedding venues (גנים בצפון, אחוזות בשרון, אולמות בירושלים, חצרות בגליל), wedding planners (מפיקות אירועים, הפקת חתונות), bar/bat mitzvah planners (בר/בת מצווה), henna planners (טקסי חינה), corporate event production (אירועי חברה, גאלות), wedding photographers' planning packages (חבילות צילום + הפקה), boutique kosher catering studios, chuppah-design florists.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
