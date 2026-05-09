---
name: lpb-law-firm
description: "Build Hebrew RTL Law Firm / Professional B2B Services landing pages in the Skadden/Kirkland/Herzog/Meitar style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: PracticeAreaGrid, LawyerDirectory with practice/language filters, LawyerBioCard, CaseStudyArticleCard, AwardsRail (Chambers/L500), ConsultationIntakeForm with conflict-check disclaimer, OfficeLocationCard, multi-language switcher (HE/EN/RU/AR/FR). Triggers: 'create law firm site', 'accounting firm website', 'B2B professional services site', 'create site for [עורכי דין / רואי חשבון / יועצי מס]'."
---

# Law Firm / Professional B2B Services — Hebrew RTL

For Israeli law firms (boutique to mid-size), Big-4 / boutique CPAs, tax advisors, M&A advisory, business consultants, IP/patent firms.

> **Full research:** see `../../research/07-law-firm.md`

## When to Use

User is positioning a serious B2B professional services firm. Wants heritage, trust, and restraint — like **Skadden, Kirkland, McDermott, Herzog Fox & Neeman, Meitar**. Editorial serif, conservative palette, no flash.

## Required Information from User

### 1. Firm Identity
- Firm name (Hebrew + English — most Israeli firms have both)
- Established year (heritage signal)
- Tagline / positioning ("a global firm" / "boutique litigation" / "renowned for a reason")
- 2-3 paragraph story

### 2. Theme Direction
- **A — Oxford Navy + Cream + Brass** (heritage BigLaw)
- **B — Forest Green + Cream + Bone** (boutique private wealth)
- **C — Charcoal + Ivory + Burgundy** (old-world litigation)
- **D — Modern Black + White + Red** (global contemporary, McDermott)

### 3. Practice Areas (5-30)
For each: Hebrew + English name, 50-word description, list of 3-6 sub-specialties

### 4. Lawyer Directory (5-100+)
For each: formal headshot + name (Hebrew + English) + title (Partner / Counsel / Associate) + JD/LL.B./LL.M. + bar admissions (Israel + others) + languages spoken + practice areas + 200-word bio + recent matters list + email + vCard + LinkedIn

### 5. Notable Matters / Deals (10-30)
Named when public ("Represented X in $2.3B merger"); anonymized otherwise

### 6. Insights / Publications (10+ articles)
Title + author + date + abstract

### 7. Awards (Chambers, Legal 500, IFLR, Benchmark)
Year + ranking + category

### 8. Office Locations (1-10)
Address + photo of building + managing partner + hours + languages spoken at office

### 9. Languages Supported
HE + EN minimum; common additions: RU (post-Soviet), AR (Arab clients), FR (olim from France), DE/ES/JA for international

## Visual Identity

### Token Palette (Theme A — Oxford Navy)
```css
:root {
  --legal-navy: oklch(0.28 0.06 255);
  --establishment-cream: oklch(0.96 0.02 85);
  --brass: oklch(0.72 0.11 75);
  --bone: oklch(0.94 0.015 80);
  --burgundy: oklch(0.38 0.13 25);
  --ink: oklch(0.18 0.01 250);
  --rule-hairline: 1px solid oklch(0.85 0.01 80);
  --leading-body: 1.65;
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre** or David Libre
- Hebrew body: **David Libre** for long-form, **Heebo** or Assistant for UI
- Latin display: GT Sectra / Caslon / Tiempos / Playfair Display / Roslindale
- Latin body: Söhne / GT America / Inter / Satoshi
- Common pairing: Tiempos Headline + Söhne (or Frank Ruhl Libre + Heebo)
- Generous leading on body, tight tracking on headlines

## Page Architecture

```
app/page.tsx
├── Header (firm wordmark + practice nav + language switcher)
├── Hero (formal lobby/skyline OR muted office video)
├── EditorialStatement (1-line positioning + paragraph)
├── PracticeAreaGrid (15-40 specialties with depth indicator)
├── NotableMatters (case-study-style cards with deal value)
├── LawyerDirectoryFiltered (alphabetical + by practice)
├── InsightsLatest (publication cards)
├── AwardsRail (Chambers/L500 ranking badges)
├── PressInTheNews
├── OfficeLocations (geographic groupings)
└── Footer (with conflict disclaimer + bar admission notice)

app/lawyers/[slug]/page.tsx
├── LawyerBioCard (full)
├── RecentMatters
├── Publications
└── ConsultationIntakeForm

app/practice-areas/[slug]/page.tsx
├── DescriptionLong
├── KeyMatters
├── TeamForArea
└── RelatedInsights
```

## Distinctive Components

- `PracticeAreaGrid` with specialty depth indicator
- `LawyerDirectoryGrid` filterable by practice / office / language / bar
- `LawyerBioCard` — formal headshot, JD/LL.B., bar admissions, languages, recent matters, vCard download
- `CaseStudyArticleCard` — publication-style with deal value
- `AwardsRail` — Chambers/L500 ranking badges with year
- `ConsultationIntakeForm` — case type + urgency + preferred contact + conflict disclaimer
- `OfficeLocationCard` — hours, managing partner, building photo
- `PublicationListing` — date + author chip + abstract + reading time
- `PartnerNameplate` — for hero
- `EstablishedYearMark` — small caps, heritage signal
- `LanguageSwitcher` (from shared/) — HE/EN/RU/AR/FR

## Animation Patterns

Conservative. Slow fade-ins (400-600ms), no parallax, no scroll-jacking. Refined hover states: underline reveals on links, subtle desaturate-to-color on partner photos, magnetic cursor only on key portraits. Page transitions are paper-turn-quiet.

## Hebrew RTL Adaptations

- Bilingual nameplate: Hebrew firm name primary + English subtitle (universal in Israeli market)
- Bar admission: לשכת עורכי הדין בישראל; courts hierarchy (בית המשפט העליון, מחוזי, שלום)
- Practice areas in Hebrew with English glossary tooltip (cross-border M&A clients)
- Bilingual partner profiles with separate Hebrew/English bio panels
- Alphabetical lawyer directory needs both Hebrew (א-ת) and English (A-Z) sort tabs (Meitar pattern)
- Language switcher prominent (Herzog supports 8 languages)
- Numerals stay LTR; deal sizes in $/₪ both shown

## Reference Sites

1. **skadden.com** — restrained BigLaw, insights-forward
2. **mwe.com / mcdermottlaw.com** — modern dark-theme global firm
3. **kirkland.com** — minimalist monochrome, geographic-first IA
4. **herzoglaw.co.il** — Israeli benchmark, "Renowned for a Reason," 8-language support
5. **meitar.com** — largest Israeli firm; bilingual alphabetical directory

## Best Fit For (Hebrew/Israeli market)

Israeli boutique + mid-size law firms, Big-4 + boutique CPAs (רואי חשבון), tax advisors (יועצי מס), M&A advisory shops, business consultants, financial/wealth advisors, IP/patent firms (פטנטים וסימני מסחר), notaries (נוטריונים), litigation boutiques, family law practices, real estate transactional firms, compliance & regulatory consultancies.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
