---
name: lpb-fintech
description: "Build Hebrew RTL Fintech / Banking / Investment / Insurance landing pages in the Mercury/Brex/Robinhood/Wealthfront style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: DashboardPreviewBlock, CalculatorWidget, RateTickerLive, FeesTransparencyTable, TrustBadgeRow with Israeli regulators (Bank of Israel, רשות שוק ההון), IntegrationLogoGrid, MultiStepSignupForm, DisclosureFooter, SecurityFeatureBlock, Israeli payment integrations (Bit, Cardcom, Tranzila, Pelecard). Triggers: 'create fintech site', 'banking landing page', 'investment advisor website', 'insurance site', 'create site for [יועץ השקעות / יועץ פנסיה / יועץ משכנתא / סוכן ביטוח / נסועה דיגיטלית]'."
---

# Fintech / Banking / Investment / Insurance — Hebrew RTL

For Israeli neobanks (Pepper-style), insurtech (ביטוח דיגיטלי, נסועה), investment advisors (יועצי השקעות), pension consultants (יועצי פנסיה), mortgage brokers (יועצי משכנתא), Riseup-style cashflow apps, accountants offering bookkeeping software, payment processors, קרן השתלמות / גמל platforms, crowdfunding & P2P lending.

> **Full research:** see `../../research/21-fintech.md`

## When to Use

User runs financial-adjacent business and wants the trust + sophistication of **Mercury, Brex, Robinhood, Wealthfront, Ramp, Lemonade, Cash App, Stripe, Wise, Plaid, Monzo**.

## Required Information from User

### 1. Brand Identity
- Company name
- Headline formula: "The [adjective] way to [outcome]"
- Subhead: trust signal + concrete outcome ("Apply online in 10 minutes", "Trusted by 35,000+ companies")
- Story (3-5 paragraphs)

### 2. Theme Direction
- **A — Mercury-style navy** (deep navy + cream + brass — premium private bank)
- **B — Forest trust** (deep green + bone + gold — fresh trustworthy)
- **C — Clean + accent** (white + black + brand pop — Brex/Ramp/Cash App)

### 3. Hero Visual
- Annotated dashboard mockup
- App phone mock
- Live rate ticker

### 4. Product Features (4-8)
Categories: rates · fees · security · integrations

### 5. Calculator (1-3)
- Mortgage calculator (Israeli משכנתא)
- Returns calculator (קרן השתלמות / השקעה)
- Premium quote (insurance)

### 6. Fees Transparency Table
Comparison vs. competitors

### 7. Security & Compliance
- Encryption (AES-256, TLS 1.3)
- 2FA, MFA, biometric
- SOC2 / ISO 27001 if applicable
- Bank of Israel regulator badge
- Data residency

### 8. Integrations (10-30 logos)
Israeli banks (Hapoalim, Leumi, Mizrahi, Discount), Bit, Cardcom, Tranzila, Pelecard

### 9. Customer Stories (5-15)
Each with metric ("saved 4,250 hours", "yield ↑ 3.2%")

### 10. Multi-step Signup / KYC
Progress bar + 4-6 steps + ID upload

### 11. Regulatory Disclosures (footer)
- License number for יועצי השקעות / סוכני ביטוח
- Disclaimer: "אין באמור משום ייעוץ השקעות / ייעוץ פנסיוני"
- Bank of Israel badge / רשות שוק ההון / רשות ניירות ערך as appropriate

## Visual Identity

### Token Palette (Theme A — Mercury Navy)
```css
:root {
  --bg: oklch(0.18 0.03 250);
  --surface: oklch(0.24 0.04 250);
  --text: oklch(0.97 0.01 90);
  --accent: oklch(0.78 0.13 195);   /* teal */
  --brass: oklch(0.78 0.10 80);
  --calculator-bg: oklch(0.96 0.01 100);
  --calculator-border: oklch(0.88 0.01 100);
  --rate-tick-up: oklch(0.62 0.16 145);
  --rate-tick-dn: oklch(0.60 0.18 25);
  --disclosure-mute: oklch(0.55 0.01 250);
  --disclosure-size: 0.72rem;
  --numeric-font: "GT America Mono", "Inter", tabular-nums;
}
```

### Typography
- Hebrew: **Heebo** + **Assistant**
- Latin: Söhne / GT America / Inter / Aeonik (refined geometric)
- Optional brand serif: Tiempos / GT Sectra
- Generous numerics — large tabular figures for rates ("4.20% APY", "₪ 12,450")
- Tiny superscript footnote markers linking to disclosures

## Page Architecture

```
app/page.tsx
├── PromoBar (regulatory compliance / new feature)
├── Header (with sticky Open Account CTA)
├── Hero (dashboard mockup + headline + dual CTA)
├── TrustBadgeRow (FDIC equivalent: Bank of Israel + רשות שוק ההון)
├── ProductFeatures (rates, fees, security, integrations) ×4-8
├── DashboardPreviewBlock (annotated app screenshot)
├── CalculatorWidget (mortgage / returns / premium)
├── FeesTransparencyTable (vs competitors)
├── SecurityFeatureBlock (encryption, 2FA, MFA)
├── IntegrationLogoGrid (banks/apps connect)
├── CustomerStories (with metrics)
├── PricingFees
├── HelpCenter (search + categories)
├── FinalCTA + multi-step signup teaser
└── DisclosureFooter (regulatory text, license number)
```

## Distinctive Components

- `DashboardPreviewBlock` — annotated screenshot with hover label callouts
- `CalculatorWidget` — slider-driven mortgage / savings / premium
- `RateTickerLive` — animated current-rate chip
- `FeesTransparencyTable` — comparison vs. competitors
- `TrustBadgeRow` — Bank of Israel + רשות שוק ההון + רשות ניירות ערך lockups
- `IntegrationLogoGrid` — Israeli banks + payment gateways
- `MultiStepSignupForm` — KYC progress bar
- `DisclosureFooter` — small-print regulatory text block
- `SecurityFeatureBlock` — encryption, 2FA, MFA icons
- `CalculatorInteractive` — number counter on slider change

## Animation Patterns

Subdued, confidence-building: number counter tweens on scroll, slider-driven calculators with smooth value interpolation, dashboard hover annotations that fade in, slow scroll-linked parallax, NO bounce/spring. Cash icons stack subtly.

## Hebrew RTL Adaptations

- Bank of Israel (בנק ישראל) regulatory badge; רשות שוק ההון, ביטוח וחיסכון (insurance/pension); רשות ניירות ערך (investment advisors)
- ₪ before number with thousands separator: `₪ 12,450`; percentages remain LTR-isolated: `4.2%`
- Israeli products: קרן השתלמות, קופת גמל, פנסיה, IRA, משכנתא, ביטוח חיים, תיק השקעות
- Payment integrations: Bit, Cardcom, Tranzila, Pelecard, PayBox, Isracard, Max
- Hebrew financial terms: תשואה (return), ריבית (interest), אחוזים, עמלה (fee), הון, חיסכון, השקעה, פרמיה, השתתפות עצמית
- Disclosures footer must include "אין באמור משום ייעוץ השקעות / ייעוץ פנסיוני" disclaimer; license number lockup for יועצי השקעות / סוכני ביטוח
- RTL number/currency direction: wrap currency+number in `<span dir="ltr">` to prevent flipping

## Reference Sites

1. **mercury.com** — premium navy + teal, dashboard storytelling, gold standard for disclosures
2. **brex.com** — Brex orange on cool grey, modular product tiles, quantified outcomes
3. **wealthfront.com** — APY-forward hero, multiple trust badges, life-stage cards
4. **lemonade.com** — coral brand pop, AI-claims storytelling, friendly insurtech
5. **robinhood.com** — green, low-barrier "$1 to start", heavy SIPC/SEC trust scaffolding

Bonus: cash.app, wise.com, plaid.com, ramp.com, monzo.com.

## Best Fit For (Hebrew/Israeli market)

Israeli neobanks (Pepper-style), insurtech (ביטוח דיגיטלי, נסועה, השוואת ביטוחים), investment advisors (יועצי השקעות), pension consultants (יועצי פנסיה, סוכנויות פנסיה), mortgage brokers (יועצי משכנתא), Riseup-style cashflow apps, accountants offering bookkeeping software (רואי חשבון דיגיטליים), Bit/Cardcom/Tranzila-style payment processors, קרן השתלמות / גמל platforms, crowdfunding & P2P lending (BlenderTribe).

## Status

🟡 SKILL spec complete. Templates and demo site pending.
