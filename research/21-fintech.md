# Style: Fintech / Banking / Investment / Insurance

References: Mercury, Brex, Robinhood, Wealthfront, Ramp, Lemonade, Cash App, Stripe, Wise, Plaid, Monzo.

## Visual Identity
Three dominant palette directions:

- **Subdued sophisticated** (Mercury, Wealthfront premium tier): deep navy + cream + brass accents. Conservative, "private bank" feeling.
- **Fresh & trustworthy** (Robinhood, Wise rebrand, Plaid): forest/jade green + bone/off-white + muted gold. Signals growth and stability simultaneously.
- **Ultra-clean + brand pop** (Brex, Ramp, Cash App, Monzo): near-white canvas + black type + a single saturated brand accent (Brex orange, Monzo Hot Coral, Cash App lime).

OKLCH palettes:
```
/* A — Mercury-style navy */
--bg: oklch(0.18 0.03 250); --surface: oklch(0.24 0.04 250);
--text: oklch(0.97 0.01 90); --accent: oklch(0.78 0.13 195); /* teal */
--brass: oklch(0.78 0.10 80);

/* B — Forest trust */
--bg: oklch(0.97 0.01 100); --ink: oklch(0.22 0.05 160);
--accent: oklch(0.45 0.13 155); /* deep green */
--gold: oklch(0.75 0.12 85);

/* C — Clean + accent */
--bg: oklch(0.99 0.005 90); --ink: oklch(0.15 0 0);
--accent: oklch(0.72 0.20 50); /* Brex orange */
--mute: oklch(0.94 0.005 90);
```

Typography: refined geometric/neo-grotesque sans — Söhne, GT America, Inter, Aeonik, Mercury's custom "Mercury Text"; sometimes a serif (Tiempos, GT Sectra) for editorial brand headlines. Generous numerics — large tabular figures for rates ("4.20% APY", "₪ 12,450"), often paired with a tiny superscript footnote marker linking to disclosures.

Photography: handshakes are gone — replaced by glass-tower cityscapes, abstract isometric geometry, real product/dashboard screenshots, founder portraits with high-key lighting, currency-paper woodcut style illustrations (Plaid). Lots of whitespace; sections breathe.

## Hero Patterns
- Headline formula: "The [adjective] way to [outcome]" — "Radically different banking" (Mercury), "Finance built for speed and control" (Brex), "Earn up to 4.20% APY" (Wealthfront).
- Subhead: trust signal + concrete outcome ("Apply online in 10 minutes", "Trusted by 35,000+ companies").
- Visual: annotated dashboard mockup, app phone mock, or a live rate ticker.
- Primary CTA: "Open account" / "Get a quote" / "Get your rate". Often inline email field.
- Trust badges below fold: FDIC/SIPC/NMLS row.

## Section Inventory
Product features (rates · fees · security · integrations) · Annotated dashboard preview · Calculator (mortgage / returns / premium) · Fees transparency table · Security & compliance · Integrations / partner logos · Customer stories with metric ("saved 4,250 hours") · Help center · **Regulatory disclosures footer (always)** · Multi-step signup / KYC.

## Distinctive Components Needed
- `DashboardPreviewBlock` — annotated screenshot with hover label callouts
- `CalculatorWidget` — slider-driven mortgage / savings / premium
- `RateTickerLive` — animated current-rate chip
- `FeesTransparencyTable` — comparison vs. competitors
- `TrustBadgeRow` — FDIC/SIPC/regulator lockups
- `IntegrationLogoGrid` — banks/apps connect
- `MultiStepSignupForm` — KYC progress bar
- `DisclosureFooter` — small-print regulatory text block
- `SecurityFeatureBlock` — encryption, 2FA, MFA icons
- `CalculatorInteractive` — number counter on slider change

## Animation Patterns
Subdued, confidence-building: number counter tweens on scroll, slider-driven calculators with smooth value interpolation, dashboard hover annotations that fade in, slow scroll-linked parallax, NO bounce/spring. Cash icons stack subtly. Jeton uses a morphing desktop-to-mobile effect — appropriate as a single hero accent only.

## Hebrew RTL Adaptations
- Bank of Israel (בנק ישראל) regulatory badge; רשות שוק ההון, ביטוח וחיסכון for insurance/pension; רשות ניירות ערך for investment advisors.
- ₪ before number with thousands separator: ‎₪ 12,450‎; percentages remain LTR-isolated: ‎4.2%‎.
- Israeli products: קרן השתלמות, קופת גמל, פנסיה, IRA, משכנתא, ביטוח חיים, תיק השקעות.
- Payment integrations: Bit, Cardcom, Tranzila, Pelecard, PayBox, Isracard, Max.
- Hebrew financial terms: תשואה (return), ריבית (interest), אחוזים, עמלה (fee), הון, חיסכון, השקעה, פרמיה, השתתפות עצמית.
- Disclosures footer must include "אין באמור משום ייעוץ השקעות / ייעוץ פנסיוני" disclaimer; license number lockup for יועצי השקעות / סוכני ביטוח.
- RTL number/currency direction: wrap currency+number in `<span dir="ltr">` to prevent flipping.

## Top 5 Reference Sites
1. **mercury.com** — premium navy + teal, dashboard storytelling, gold standard for disclosures.
2. **brex.com** — Brex orange on cool grey, modular product tiles, quantified outcomes.
3. **wealthfront.com** — APY-forward hero, multiple trust badges (Bankrate, NerdWallet, Forbes), life-stage cards.
4. **lemonade.com** — coral brand pop, AI-claims storytelling, friendly insurtech vibe.
5. **robinhood.com** — green, low-barrier "$1 to start", heavy SIPC/SEC trust scaffolding.

Bonus: cash.app, wise.com, plaid.com, ramp.com, monzo.com.

## Recommended Tokens
```
--fintech-trust: oklch(0.45 0.13 155);     /* deep green */
--fintech-navy:  oklch(0.22 0.05 250);
--fintech-brass: oklch(0.78 0.10 80);
--calculator-bg: oklch(0.96 0.01 100);
--calculator-border: oklch(0.88 0.01 100);
--rate-tick-up: oklch(0.62 0.16 145);
--rate-tick-dn: oklch(0.60 0.18 25);
--disclosure-mute: oklch(0.55 0.01 250);
--disclosure-size: 0.72rem;
--numeric-font: "GT America Mono", "Inter", tabular-nums;
```

## Best Fit For (Hebrew/Israeli market)
Israeli neobanks (Pepper-style), insurtech (ביטוח דיגיטלי, נסועה, השוואת ביטוחים), investment advisors (יועצי השקעות), pension consultants (יועצי פנסיה, סוכנויות פנסיה), mortgage brokers (יועצי משכנתא), Riseup-style cashflow apps, accountants offering bookkeeping software (רואי חשבון דיגיטליים), Bit/Cardcom/Tranzila-style payment processors, קרן השתלמות / גמל platforms, crowdfunding & P2P lending (כמו BlenderTribe).
