---
name: lpb-course-coaching
description: "Build Hebrew RTL Online Course / Coaching / Info Product / Sales Page. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: VSLEmbed, PromiseHeadlineHero, WhoIsForGrid, CurriculumAccordion, InstructorBigBio, TestimonialWallMixed (video+text), BonusStackList, PricingRevealBlock with Israeli תשלומים, GuaranteeBadge, CountdownTimer, StickyCTABar, FAQAccordionLong. Israeli payment gateways: Cardcom/Tranzila/Meshulam/Bit. Triggers: 'create course landing page', 'coaching sales page', 'create site for [קורס דיגיטלי / מאמן / מנטור / סדנה]', 'Hormozi-style sales page', 'masterclass-style site'."
---

# Online Course / Coaching / Info Product — Hebrew RTL

For Israeli course creators (קורסים דיגיטליים), business/sales/marketing coaches, fitness/nutrition programs, parenting mentors, finance courses (השקעות, נדל"ן), entrepreneurship bootcamps, high-ticket mentorship.

> **Full research:** see `../../research/15-course-coaching.md`

## When to Use

User has a course/program/coaching offer and wants either:
- **PREMIUM** (MasterClass, Flux Academy) — cinematic, aspirational, restrained
- **HIGH-CONVERSION** (Hormozi, ClickFunnels) — bold, direct, optimized for skim+scroll+sell

## Required Information from User

### 1. Offer Identity
- Course / program name (Hebrew preferred)
- Promise headline ("בנה עסק של 6 ספרות תוך 90 יום")
- Who it's for + outcome + timeframe
- Founder/instructor name + 1-line credibility

### 2. Theme Direction
- **A — Premium Cinematic** (black + cream serif + gold)
- **B — High-Conversion Yellow** (yellow + black + alarm red)
- **C — Modern Coach** (cream + terracotta — warm middle ground)

### 3. Video Sales Letter (VSL)
Video URL + custom poster (instructor mid-gesture)

### 4. Pain-Agitation Copy
"האם זה מוכר לך?" — list of pain points the audience experiences

### 5. Outcomes / Transformations (3-6)
Visual cards with metric ("עלה ב-340% תוך 6 חודשים")

### 6. Who This Is For / NOT For
Two-column yes/no list with check/x icons

### 7. Curriculum (5-15 modules)
For each: module name + lesson count + total duration + locked/unlocked

### 8. Instructor Bio
Large portrait + 3-paragraph story + credentials + press logos (Calcalist, Globes, Ynet, etc.)

### 9. Testimonials (15-50)
Mix of: video cards (testimonial reels) + text quotes + outcome metric callouts

### 10. Case Studies (5-10)
With hard numbers ("students who went from X to Y")

### 11. Bonuses Stack (3-7)
Each with crossed-out ₪ value, total value reveal at end

### 12. Pricing
- One-time price + payment plan (3/6/12 תשלומים)
- Show ₪ savings
- Display payment gateway logos (Bit, Cardcom, Tranzila, Apple Pay, Google Pay)
- VAT note ("כולל מע״מ")

### 13. Guarantee
"החזר כספי מלא תוך 30 יום, ללא שאלות"

### 14. FAQ (10-15 items)
Categories: payments, access, refunds, certificate, support

### 15. Optional: Launch Countdown
End date + day/hour/min/sec

## Visual Identity

### Token Palette (Theme A — Premium Cinematic)
```css
:root {
  --bg: oklch(0.12 0 0);
  --cream: oklch(0.93 0.03 85);
  --accent-gold: oklch(0.78 0.13 80);
  --text: oklch(0.95 0.01 80);
  --vsl-bg: oklch(0.16 0.01 80);
  --countdown-glow: 0 0 20px oklch(0.78 0.13 80 / 0.5);
  --guarantee-seal: oklch(0.55 0.12 145);
  --bonus-strike: oklch(0.55 0.04 60);
  --price-reveal-glow: 0 0 30px oklch(0.78 0.13 80 / 0.4);
  --sticky-cta-shadow: 0 -4px 20px oklch(0 0 0 / 0.3);
  --proof-bar-bg: oklch(0.18 0 0);
  --instructor-portrait-ring: 4px solid oklch(0.78 0.13 80);
}
```

### Typography
- Premium: **Frank Ruhl Libre** (Hebrew) + Playfair / GT Sectra (Latin) for hero
- High-conversion: **Heebo Black 900** (Hebrew) + Inter Black (Latin), often ALL CAPS
- Body: **Assistant** or Rubik 18-20px

## Page Architecture

```
app/page.tsx (single long-scroll sales page)
├── PromoBar (countdown if launch)
├── Header (logo + sticky CTA)
├── PromiseHeadlineHero (huge headline + subhead + dual CTA)
├── VSLEmbed (centered, large)
├── ProofBar (2,847 בוגרים + press logos)
├── PainAgitation (האם זה מוכר?)
├── OutcomesGrid (transformation metrics)
├── WhoIsForGrid (yes/no two-column)
├── CurriculumAccordion (modules)
├── InstructorBigBio
├── TestimonialWallMixed (video + text + outcomes)
├── CaseStudies (with numbers)
├── BonusStackList (each with ₪ crossed out)
├── PricingRevealBlock (with תשלומים tabs + guarantee)
├── GuaranteeBadge (30 day)
├── FAQAccordionLong (10-15 items)
├── FinalCTA (with countdown)
└── Footer (legal disclaimers)

(StickyCTABar fixed-bottom on mobile, sticky-top on desktop after hero scroll)
```

## Distinctive Components

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
- `StickyCTABar` (from shared/) — appears after hero scroll
- `GuaranteeBadge` (seal-style with Hebrew "התחייבות 30 יום")
- `PaymentBadgeRow` (from shared/) — Bit/Cardcom/Tranzila/Meshulam logos

## Animation Patterns

Restrained — copy is king. Light fade-up on scroll, focus-driven section reveals, countdown urgency pulse, sticky CTA slide-in after 600px scroll, scroll progress bar at top, subtle highlight-marker animation on key benefit phrases. No parallax fireworks.

## Hebrew RTL Adaptations

- Long-form Hebrew sales copy reads RTL; numbers, prices, percentages stay LTR with `dir="ltr"` spans
- Israeli payment plans: "3 / 6 / 12 תשלומים ללא ריבית" — first-class UI element
- Payment integrations: Tranzila, Cardcom, Meshulam, Bit, Apple Pay, Google Pay — show logos
- VAT included note ("כולל מע״מ") near price
- Hebrew testimonials with first-name + city ("דנה, תל אביב") for privacy norms
- Currency: ₪ before number in display, but reversed pricing reveals
- Israeli-specific trust: "חשבונית מס", "תעודת מע״מ"
- Guarantee phrasing: "החזר כספי מלא תוך 30 יום, ללא שאלות"

## Reference Sites

1. acquisition.com (Hormozi) — direct + outcome-led + course grid
2. masterclass.com — premium cinematic benchmark
3. flux-academy.com — modern course creator with countdown + masonry testimonials
4. liatavigaildesign.com (גבריאלה template) — Israeli RTL course template
5. schoolyland.co.il — Israeli course platform reference

## Best Fit For (Hebrew/Israeli Market)

Israeli course creators (קורסים דיגיטליים), business/sales/marketing coaches, fitness and nutrition programs, parenting and relationship mentors, finance and investment courses (השקעות, נדל"ן), entrepreneurship bootcamps (יזמות), high-ticket mentorship (ליווי עסקי), Hebrew sales-page funnels generally. The Hebrew info-product market is one of the fastest-growing segments — ideal style coverage.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
