---
name: lpb-nonprofit
description: "Build Hebrew RTL Non-profit / NGO / Cause-driven landing pages in the Charity:Water/WWF/Latet/DonorsChoose style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: DonateBlock with chai-multiples (18/180/360), ImpactCounterRow, BeneficiaryStoryCard, TransparencyChart, ProgramGrid, FundraiserEvent, VolunteerSignupForm, TaxDeductibleBadge (סעיף 46א), RecurringDonationToggle (הוראת קבע), Bit/PayBox integration. Triggers: 'create nonprofit site', 'NGO website', 'cause-driven landing page', 'create site for [עמותה / ע״ר / קרן]'."
---

# Non-profit / NGO / Cause-Driven — Hebrew RTL

For Israeli עמותות (Latet, Pitchon Lev, Yad Sarah-style), קרנות philanthropy, social-impact orgs, Jewish federations, IDF support orgs, hostage families & October 7 response orgs, special-needs orgs, religious educational institutions, animal welfare, medical aid, at-risk youth.

> **Full research:** see `../../research/16-nonprofit.md`

## When to Use

User runs an NGO/cause and wants emotional storytelling + transparency + donate-now prominent. References: **Charity:Water (gold standard), WWF, Latet (לתת), DonorsChoose, Pencils of Promise**.

## Required Information from User

### 1. Organization Identity
- Org name (Hebrew + English)
- ע"ר number (registration)
- Mission statement (1-2 sentences)
- Core values (3-5 items)
- Story (3-5 paragraphs)

### 2. Theme Direction
- **A — Mission-color anchor** (single saturated cause color — Charity:Water cyan, WWF green)
- **B — Warm earthy + bright hope accent** (sand/cream + yellow/orange — Latet style)
- **C — High-contrast urgency** (near-black + alert coral — emergency/crisis appeals)

### 3. Impact Stats (3-6)
With sources/footnotes ("₪X provided clean water to Y people")

### 4. Beneficiary Stories (5-15)
Photo + name + age + location + 200-word story + impact quote

### 5. Programs / Initiatives (3-10)
Icon + title + outcome metric + description (50-100 words)

### 6. Transparency
Where every shekel goes — donut/bar chart (programs % / admin % / fundraising %)

### 7. Donation Amounts
Hebrew chai-multiples are culturally resonant: ₪18 (חי), ₪36 (×2 חי), ₪180 (×10 חי), ₪360, ₪1800
Each amount paired with impact ("₪180 = 10 days of meals for one family")

### 8. Payment Methods
- **Bit** (essential — most Israeli donations) with deep-link
- PayBox / PayPal / Cardcom / credit
- Recurring (הוראת קבע) toggle
- Memorial dedication option (לעילוי נשמת)
- Anonymous toggle (ענ"מ)

### 9. Compliance Badges
- סעיף 46א tax-deductible badge with ע"ר number
- אישור ניהול תקין certificate

### 10. Volunteer / Get Involved
Signup form (role + availability + skills)

### 11. Events / Fundraisers
Date + register + capacity bar

### 12. Partners / Corporate Sponsors (10-30 logos)

### 13. Annual Report PDF
Downloadable

## Visual Identity

### Token Palette (Theme A — Hope-water)
```css
:root {
  --bg: oklch(0.98 0.01 220);
  --ink: oklch(0.18 0.03 240);
  --cause: oklch(0.62 0.16 230);     /* signature blue */
  --cta: oklch(0.70 0.18 55);        /* hope orange */
  --donate-cta: oklch(0.66 0.22 28);
  --impact-green: oklch(0.55 0.14 145);
  --beneficiary-warm: oklch(0.96 0.02 80);
  --transparency-1: oklch(0.62 0.16 230);
  --transparency-2: oklch(0.78 0.12 85);
  --transparency-3: oklch(0.55 0.14 145);
  --urgency-coral: oklch(0.66 0.22 28);
  --trust-seal-gold: oklch(0.78 0.12 85);
  --bit-purple: oklch(0.55 0.18 280);   /* #7B5CFF */
  --46a-badge-bg: oklch(0.96 0.02 60);
  --story-serif: "Frank Ruhl Libre", "Source Serif", serif;
}
```

### Typography
- Hebrew body: **Heebo** or Assistant
- Hebrew display: **Frank Ruhl Libre** for storytelling pull-quotes and beneficiary testimony
- Latin body: Inter / Söhne
- Mission display sizes (clamp 2.5–4.5rem). Reading line-height 1.65 for long story sections

## Page Architecture

```
app/page.tsx
├── EmergencyAppealBanner (dismissible, optional, top)
├── Header (with prominent Donate CTA)
├── HeroBeneficiaryPhoto (eye-contact + mission headline + Donate CTA + 1 quick stat overlay)
├── ImpactCounterRow (3-6 stats with count-up)
├── DonateBlock (chai amounts + recurring toggle + impact-per-amount)
├── BeneficiaryStoriesGrid (5-15 cards)
├── ProgramGrid (3-10 initiatives)
├── TransparencyChart (where money goes)
├── VolunteerSignupForm
├── EventsFundraisers (upcoming)
├── PartnerLogoStrip (corporate sponsors)
├── NewsletterCapture
└── Footer (with סעיף 46א badge + ע"ר number + annual report link)

app/donate/page.tsx (dedicated donate flow)
├── DonateBlockFull
├── ImpactExplainer
├── PaymentMethodsBlock (Bit/PayBox/Card)
├── DedicationField (לעילוי נשמת)
├── AnonymousToggle
└── ConfirmationStep
```

## Distinctive Components

- `DonateBlock` — amount picker (chips: 18/36/180/360/חי/custom) + recurring toggle + impact-per-amount label
- `ImpactCounterRow` — animated CountUp with source citation footnote
- `BeneficiaryStoryCard` — photo + name + age + location + quote + "read full story"
- `TransparencyChart` — donut/bar showing programs vs. admin vs. fundraising %
- `ProgramGrid` — icon + title + outcome metric per initiative
- `FundraiserEvent` — date pill + register CTA + capacity bar
- `VolunteerSignupForm` — role picker + availability + skills
- `PartnerLogoStrip` — grayscale, hover-color
- `TaxDeductibleBadge` — סעיף 46א with ע"ר registration number
- `RecurringDonationToggle` — "Monthly / One-time" with monthly highlighted as default
- `EmergencyAppealBanner` — dismissible top strip
- `100PercentBadge` — "100% of your donation goes to programs" trust seal
- `BitPaymentButton` — Bit deep-link + QR
- `MemorialDedicationField` — לעילוי נשמת input
- `AnonymousToggle` — ענ"מ checkbox

## Animation Patterns

Slow, emotional pacing. Hero photos lift gently on load (translateY 16px → 0, 700ms ease-out). Counter animations trigger on scroll into view (1.4s ease-out cubic). Story sections use scrollytelling — image stays fixed while text panels advance. No bouncy/playful springs; gravity is reverent.

## Hebrew RTL Adaptations

- `סעיף 46א` tax-deductible badge with עמותה reg. number (ע"ר 580...)
- **Bit** / PayBox / PayPal donation buttons (Bit is essential — most donations in Israel)
- Hebrew beneficiary testimony in serif (Frank Ruhl Libre)
- Donation chips: ₪18 (חי), ₪36 (×2 חי), ₪180 (×10 חי), ₪360, ₪1800 — chai-multiples are culturally resonant
- "מעשר" (10% tithe) framing for monthly recurring
- "הוראת קבע" (standing order) language for recurring
- Tzedakah framing — gentle obligation, not pity
- אישור ניהול תקין badge (proper-management certificate)
- Toggle for ענ"מ (anonymous) donations
- Memorial dedication option ("לעילוי נשמת")
- RTL: numbers stay LTR, percentages mirrored, charts read right-to-left

## Reference Sites

1. **charitywater.org** — gold standard for transparency + 100% model
2. **worldwildlife.org** — mission-color brand discipline
3. **donorschoose.org** — beneficiary card grid + transparency
4. **latet.org.il** — Hebrew RTL exemplar with Bit, סעיף 46, full transparency
5. **pencilsofpromise.org** — impact-tied donation amounts

## Best Fit For (Hebrew/Israeli market)

Israeli עמותות (Latet, Pitchon Lev, Yad Sarah-style), קרנות philanthropy, social-impact orgs, Jewish federations & diaspora fundraising, IDF support orgs (LIBI, FIDF), hostage families & October 7 response orgs, special-needs orgs (Shalva, Beit Issie Shapiro), religious educational institutions (yeshivot/seminaries fundraising abroad), animal welfare (SPCA Israel, Let the Animals Live), medical aid (Ezer Mizion, Yad Sarah), at-risk youth, Holocaust survivor support.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
