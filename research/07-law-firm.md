# Style: Law Firm / Professional B2B Services

References: Skadden, Kirkland & Ellis, McDermott Will & Emery, Herzog Fox & Neeman, Meitar.

## Visual Identity

**Core philosophy:** Trust + heritage + restraint. Design must feel "human, calm and intentional" — never flashy. Whitespace as a status signal. Information density yields to confidence.

**Palettes (4 archetypes):**
1. **Oxford Navy + Cream + Brass** — Skadden, Kirkland tradition. Heritage est. 1948+ feel.
2. **Forest Green + Cream + Bone** — boutique litigation/private wealth.
3. **Charcoal + Ivory + Burgundy accent** — old-world litigation gravitas.
4. **Modern Black + White + bold Red accent** — McDermott-style global firm.

**oklch palettes:**
```
/* Oxford */
--legal-navy: oklch(0.28 0.06 255);
--establishment-cream: oklch(0.96 0.02 85);
--brass: oklch(0.72 0.11 75);

/* Forest */
--legal-forest: oklch(0.32 0.05 155);
--bone: oklch(0.94 0.015 80);
--burgundy: oklch(0.38 0.13 25);

/* Modern monochrome */
--ink: oklch(0.18 0.01 250);
--paper: oklch(0.98 0.005 90);
--seal-red: oklch(0.50 0.18 25);
```

**Typography:** Editorial serif headlines (GT Sectra, Caslon, Tiempos, Playfair Display, Roslindale) + refined sans body (Söhne, GT America, Inter, Satoshi). Common pairing: Tiempos Headline + Söhne. Track headlines tight, generous leading on body. Numerals are oldstyle.

**Heritage signals:** Established year embossed in footer/hero, partner surnames as nameplate ("Cohen, Levy & Partners"), Chambers/Legal 500 badges, gold-foil-style dividers.

## Hero Patterns
- Static formal lobby/skyline photo OR muted video loop of office interior
- Firm wordmark in serif, est. year in small caps beneath
- Single editorial statement ("Renowned for a Reason" — Herzog; "a global law firm" — McDermott)
- Quiet "Schedule a consultation" link, often underlined rather than buttoned
- Practice areas appear as a discreet horizontal nav, never as cards in hero

## Section Inventory
- **Practice areas grid** (15-40 specialties; corporate, litigation, real estate, tax, IP, M&A, hi-tech)
- **Notable matters / deals** (named when public, anonymized otherwise — "$2.3B cross-border merger")
- **Lawyer/Partner directory** with alphabetical + practice filter
- **Insights / Publications** (client alerts, quarterly updates — Skadden's "Inside the Courts")
- **Awards rail** (Chambers, Legal 500, IFLR, Benchmark Litigation)
- **Press / In the News**
- **Office locations** with geographic groupings
- **Specialized intake form** (case type + urgency + conflict-check disclaimer)
- **Careers / Alumni portal**
- **Pro bono / Social responsibility**

## Distinctive Components Needed
- `PracticeAreaGrid` with specialty depth indicator
- `LawyerDirectoryGrid` filterable by practice, office, language, bar
- `LawyerBioCard` (formal headshot, JD/LL.B., bar admissions, languages, recent matters, vCard download)
- `CaseStudyArticleCard` publication-style with deal value
- `AwardsRail` (Chambers/L500 ranking badges with year)
- `ConsultationIntakeForm` (case type + urgency + preferred contact + conflict disclaimer)
- `OfficeLocationCard` with hours, managing partner, photo of building
- `PublicationListing` (date + author chip + abstract + reading time)
- `PartnerNameplate` for hero
- `EstablishedYearMark`

## Animation Patterns
Conservative. Slow fade-ins (400-600ms), no parallax, no scroll-jacking. Refined hover states: underline reveals on links, subtle desaturate-to-color on partner photos, magnetic cursor only on key portraits. Page transitions are paper-turn-quiet.

## Hebrew RTL Adaptations
- Bilingual nameplate: Hebrew firm name primary + English subtitle (universal in Israeli market — Herzog, Meitar, Goldfarb all do this)
- Bar admission: לשכת עורכי הדין בישראל; courts hierarchy (בית המשפט העליון, מחוזי, שלום)
- Practice areas in Hebrew with English glossary tooltip (essential for cross-border M&A clients)
- Bilingual partner profiles with separate Hebrew/English bio panels
- Alphabetical lawyer directory needs both Hebrew (א-ת) and English (A-Z) sort tabs — Meitar pattern
- Language switcher prominent (Herzog supports 8 languages: HE/EN/RU/AR/ZH/JA/ES/FR)
- Hebrew serif: David Libre, Frank Ruhl Libre for display; Heebo or Assistant for body
- Numerals stay LTR; deal sizes in $/₪ both shown

## Top 5 Reference Sites
1. **skadden.com** — restrained BigLaw, insights-forward
2. **mwe.com / mcdermottlaw.com** — modern dark-theme global firm with curated capital insights
3. **kirkland.com** — minimalist monochrome, geographic-first IA
4. **herzoglaw.co.il** — Israeli benchmark, "Renowned for a Reason," 8-language support
5. **meitar.com** — largest Israeli firm; bilingual alphabetical directory pattern

## Recommended Tokens
```
--legal-navy, --legal-forest, --establishment-cream, --bone,
--brass, --burgundy, --seal-red, --ink, --paper,
--serif-display (GT Sectra/Tiempos), --serif-text,
--sans-refined (Söhne/GT America),
--rule-hairline, --shadow-paper,
--space-editorial (generous), --leading-body (1.65)
```

## Best Fit For (Hebrew/Israeli market)
Israeli boutique + mid-size law firms, Big-4 + boutique CPAs (רואי חשבון), tax advisors (יועצי מס), M&A advisory shops, business consultants, financial/wealth advisors, IP/patent firms (פטנטים וסימני מסחר), notaries (נוטריונים), litigation boutiques, family law practices, real estate transactional firms, compliance & regulatory consultancies.
