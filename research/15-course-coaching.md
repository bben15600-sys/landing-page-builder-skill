# Style: Online Course / Coaching / Info Product

References: Acquisition.com (Hormozi), MasterClass, Flux Academy, ClickFunnels, Skillshare.

## Visual Identity

Two distinct directions — both relevant for the Hebrew market:

**A. PREMIUM (MasterClass / Flux Academy / Skillshare)** — cinematic, aspirational, restrained. Black or near-black backgrounds with cream/off-white serif type, full-bleed instructor portrait video loops, generous whitespace, refined kerning. Feels like Netflix prestige rather than infomercial.

**B. HIGH-CONVERSION (Hormozi / ClickFunnels / Russell Brunson)** — bold, direct, slightly gritty. Yellow/black/red, oversized punching headlines, hand-drawn arrows, highlighter strokes, screenshots, big numbers ($100M, 2,847 students). Optimized for skim + scroll + sell.

**3 oklch palettes:**
- Premium Cinematic: `--bg: oklch(0.12 0 0)`, `--cream: oklch(0.93 0.03 85)`, `--accent-gold: oklch(0.78 0.13 80)`, `--text: oklch(0.95 0.01 80)`
- High-Conversion Yellow: `--bg: oklch(0.18 0 0)`, `--conversion-yellow: oklch(0.88 0.20 95)`, `--alarm-red: oklch(0.62 0.22 25)`, `--text: oklch(0.97 0 0)`
- Modern Coach (warm middle ground): `--bg: oklch(0.97 0.01 80)`, `--ink: oklch(0.18 0.02 270)`, `--brand: oklch(0.55 0.18 25)` (terracotta), `--soft: oklch(0.88 0.04 80)`

**Typography:** Premium = Playfair / GT Sectra / Hebrew Frank Ruhl Libre serif at 80–120px. High-conversion = Inter Black / Hebrew Heebo Black or Ploni Black at 96–160px, often ALL CAPS. Body in Assistant or Rubik 18–20px. Personal-brand headshots are non-negotiable hero element.

## Hero Patterns
- Massive promise headline ("בנה עסק של 6 ספרות תוך 90 יום")
- Sub: who-it's-for + measurable outcome + timeframe
- Embedded VSL — autoplay-muted, custom poster of instructor mid-gesture
- Primary CTA "התחל עכשיו" / "הצטרף לתוכנית" with secondary "צפה בסרטון"
- Social proof bar: "2,847 בוגרים", logos of features (Calcalist/Globes/Ynet)
- Optional countdown timer band for launches

## Section Inventory
1. Promise hero + VSL
2. Pain-agitation ("האם זה מוכר לך?")
3. Outcomes / transformation grid
4. Who this is for / NOT for (yes-no two-column)
5. Curriculum accordion (modules + lesson counts + total hours)
6. Instructor big-bio (photo, story, credentials, press logos)
7. Mixed testimonial wall (video + text + outcome metrics)
8. Case studies with hard numbers
9. Bonuses stack (each with crossed-out ₪ value, total value reveal)
10. Pricing reveal with payment plans
11. Money-back guarantee badge (30 days)
12. FAQ accordion (long, 10–15 items)
13. Final CTA + countdown
14. Sticky CTA bar throughout

## Distinctive Components Needed
- `VSLEmbed` (poster, play overlay, autoplay-muted variant)
- `PromiseHeadlineHero` (huge type + subhead + dual CTA + proof bar)
- `WhoIsForGrid` (yes-list / no-list with check/x icons, RTL-aware)
- `CurriculumAccordion` (modules with lesson lists, durations, locked icons)
- `InstructorBigBio` (large portrait + 3-paragraph story + credential pills + press logos)
- `TestimonialWallMixed` (masonry of video cards + text quotes + metric callouts)
- `OutcomeMetricCard` ("עלה ב-340% תוך 6 חודשים")
- `BonusStackList` (with ₪ value crossed out, "TOTAL VALUE: ₪14,970")
- `PricingRevealBlock` (one-time + payment plan tabs + guarantee badge)
- `CountdownTimer` (RTL digits handled, days/hours/minutes/seconds in Hebrew)
- `FAQAccordionLong` (10+ items with category grouping)
- `StickyCTABar` (appears after hero scroll)
- `GuaranteeBadge` (seal-style with Hebrew "התחייבות 30 יום")

## Animation Patterns
Restrained — copy is king. Light fade-up on scroll, focus-driven section reveals, countdown urgency pulse, sticky CTA slide-in after 600px scroll, scroll progress bar at top, subtle highlight-marker animation on key benefit phrases. No parallax fireworks.

## Hebrew RTL Adaptations
- Long-form Hebrew sales copy reads RTL; numbers, prices, percentages stay LTR with `dir="ltr"` spans
- Israeli payment plans: "3 / 6 / 12 תשלומים ללא ריבית" — first-class UI element
- Payment integrations: Tranzila, Cardcom, Meshulam, Bit, Apple Pay, Google Pay — show logos
- VAT included note ("כולל מע״מ") near price
- Hebrew testimonials with first-name + city ("דנה, תל אביב") for privacy norms
- Currency: ₪ on right of number in display, but reversed pricing reveals
- Israeli-specific trust: "חשבונית מס", "תעודת מע״מ"
- Guarantee phrasing: "החזר כספי מלא תוך 30 יום, ללא שאלות"

## Top 5 Reference Sites
1. acquisition.com (Hormozi) — direct + outcome-led + course grid
2. masterclass.com — premium cinematic benchmark
3. flux-academy.com — modern course creator with countdown + masonry testimonials
4. liatavigaildesign.com (גבריאלה template) — Israeli RTL course template
5. schoolyland.co.il — Israeli course platform reference

## Recommended Tokens
`--conversion-yellow`, `--premium-cream`, `--vsl-bg`, `--countdown-glow`, `--guarantee-seal`, `--bonus-strike`, `--price-reveal-glow`, `--sticky-cta-shadow`, `--proof-bar-bg`, `--instructor-portrait-ring`

## Best Fit For (Hebrew/Israeli Market)
Israeli course creators (קורסים דיגיטליים), business/sales/marketing coaches, fitness and nutrition programs, parenting and relationship mentors, finance and investment courses (השקעות, נדל"ן), entrepreneurship bootcamps (יזמות), high-ticket mentorship (ליווי עסקי), and Hebrew sales-page funnels generally. The Hebrew info-product market is one of the fastest-growing segments — ideal style coverage for the skill.
