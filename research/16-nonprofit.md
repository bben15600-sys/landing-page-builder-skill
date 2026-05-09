# Style: Non-profit / Cause-Driven

References: Charity:Water, World Wildlife Fund, DonorsChoose, Pencils of Promise, Latet (לתת).

## Visual Identity
Three palette archetypes dominate:
1. **Mission-color anchor** — single saturated cause color carrying the brand (Charity:Water cyan-blue; WWF panda black + forest green; St. Jude red). Whole site treats it as a sacred token.
2. **Warm earthy + bright hope accent** — sand/cream/clay neutrals with a single bright accent (sun yellow, life-orange) used only on Donate CTAs and impact callouts. Common for poverty/hunger orgs (Latet, Pencils of Promise).
3. **High-contrast urgency** — near-black on warm white with one alert accent (red/coral) for emergency/conflict/hostage orgs.

Three oklch palettes:
- Hope-water: `--bg oklch(0.98 0.01 220)` / `--ink oklch(0.18 0.03 240)` / `--cause oklch(0.62 0.16 230)` / `--cta oklch(0.70 0.18 55)`
- Earthy-impact: `--bg oklch(0.97 0.02 80)` / `--ink oklch(0.22 0.04 50)` / `--cause oklch(0.55 0.14 145)` / `--cta oklch(0.68 0.20 35)`
- Urgent-coral: `--bg oklch(0.99 0.005 60)` / `--ink oklch(0.16 0.02 50)` / `--cause oklch(0.45 0.12 25)` / `--cta oklch(0.66 0.22 28)`

**Typography:** humanist sans for body (Inter, Söhne, Assistant/Heebo for Hebrew); editorial serif (Source Serif, Frank Ruhl Libre Hebrew) reserved for storytelling pull-quotes and beneficiary testimony. Large mission-statement display sizes (clamp 2.5–4.5rem). Reading-optimized line-height 1.65 for long story sections.

**Photography:** documentary, real beneficiaries with names, on-the-ground field shots, eye-contact portraits. Authenticity > polish — slightly imperfect lighting feels more trustworthy than polished stock.

## Hero Patterns
- Full-bleed documentary photo of a real beneficiary (eye contact)
- Mission statement as headline ("Bring clean water to every person on the planet")
- Persistent prominent "Donate now" CTA (often sticky)
- One bold quick-stat overlay ("$40 = clean water for 1 person for life")
- Optional emergency banner above hero for crisis appeals

## Section Inventory
Mission · Impact stats · Beneficiary story scrollytelling · Programs grid · Where-your-money-goes transparency chart · Donate (one-time/monthly/amount picker) · Volunteer/get involved · Events & fundraisers · News/blog · Partners/sponsor logos · Newsletter · Legal/tax-deductibility · Annual report download.

## Distinctive Components
- `DonateBlock` — amount picker (chips: 50/180/360/חי/custom) + recurring toggle + impact-per-amount label
- `ImpactCounterRow` — animated CountUp with source citation footnote
- `BeneficiaryStoryCard` — photo + name + age + location + quote + "read full story"
- `TransparencyChart` — donut/bar showing programs vs. admin vs. fundraising %
- `ProgramGrid` — icon + title + outcome metric per initiative
- `FundraiserEvent` — date pill + register CTA + capacity bar
- `VolunteerSignupForm` — role picker + availability + skills
- `PartnerLogoStrip` — grayscale, hover-color
- `TaxDeductibleBadge` — סעיף 46א with registration number
- `RecurringDonationToggle` — "Monthly / One-time" with monthly highlighted as default
- `EmergencyAppealBanner` — dismissible top strip
- `100PercentBadge` — "100% of your donation goes to programs" trust seal

## Animation Patterns
Slow, emotional pacing. Hero photos lift gently on load (translateY 16px → 0, 700ms ease-out). Counter animations trigger on scroll into view (1.4s ease-out cubic). Story sections use scrollytelling — image stays fixed while text panels advance. No bouncy/playful springs; gravity is reverent. Soft cross-fades between beneficiary portraits.

## Hebrew RTL Adaptations
- `סעיף 46א` tax-deductible badge with עמותה reg. number (ע"ר 580...)
- Bit / PayBox / PayPal donation buttons (Bit is essential — most donations in Israel)
- Hebrew beneficiary testimony in serif (Frank Ruhl Libre)
- Donation chips: ₪18 (חי), ₪36 (×2 חי), ₪180 (×10 חי), ₪360, ₪1800 — chai-multiples are culturally resonant
- "מעשר" (10% tithe) framing for monthly recurring
- "הוראת קבע" (standing order) language for recurring
- Tzedakah framing — gentle obligation, not pity
- אישור ניהול תקין badge (proper-management certificate from rasham ha-amutot)
- Toggle for ענ"מ (anonymous) donations
- Memorial dedication option ("לעילוי נשמת")
- RTL: numbers stay LTR, percentages mirrored, charts read right-to-left

## Top 5 Reference Sites
1. charitywater.org — gold standard for transparency + 100% model
2. worldwildlife.org — mission-color brand discipline
3. donorschoose.org — beneficiary card grid + transparency
4. latet.org.il — Hebrew RTL exemplar with Bit, סעיף 46, full transparency
5. pencilsofpromise.org — impact-tied donation amounts

## Recommended Tokens
`--cause-primary`, `--donate-cta`, `--impact-green`, `--beneficiary-warm`, `--transparency-chart-1/2/3`, `--urgency-coral`, `--trust-seal-gold`, `--story-serif`, `--quote-rule`, `--bit-purple` (#7B5CFF), `--46a-badge-bg`.

## Best Fit For (Hebrew/Israeli market)
Israeli עמותות (Latet, Pitchon Lev, Yad Sarah-style), קרנות philanthropy, social-impact orgs, Jewish federations & diaspora fundraising, IDF support orgs (LIBI, FIDF), hostage families & October 7 response orgs, special-needs orgs (Shalva, Beit Issie Shapiro), religious educational institutions (yeshivot/seminaries fundraising abroad), animal welfare (SPCA Israel, Let the Animals Live), medical aid (Ezer Mizion, Yad Sarah), at-risk youth, Holocaust survivor support.
