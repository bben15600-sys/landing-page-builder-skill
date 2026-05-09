# landing-page-builder

**21 Claude Code skills** for building Hebrew RTL landing pages across the full spectrum of business categories — from local service businesses to award-winning WebGL experiences.

## What's here

```
landing-page-builder-skill/
├── README.md                  ← you are here
├── styles/                    ← 21 separate skills
│   ├── service-business-dark/  • dark navy + yellow (electrician, plumber, contractor)
│   ├── modern-saas/            • Linear / Vercel / Stripe / Anthropic
│   ├── ai-product/             • Cursor / Bolt / Lovable / Claude
│   ├── ecommerce-dtc/          • Aesop / Glossier / Allbirds
│   ├── restaurant/             • Noma / Eleven Madison / cafes / bakeries
│   ├── luxury-realestate/      • Sotheby's / Compass / boutique residential
│   ├── medical-clinic/         • Maven / Kindbody / Forward / dental / aesthetic
│   ├── law-firm/               • Skadden / Herzog / B2B professional
│   ├── creative-agency/        • Pentagram / Locomotive / Active Theory
│   ├── photography/            • wedding / portrait / fashion / commercial
│   ├── wedding-events/         • venues / planners / bar mitzvah
│   ├── hotel-hospitality/      • boutique hotels / צימרים / resorts
│   ├── fitness/                • Barry's / Equinox / yoga / personal trainer
│   ├── beauty-spa/             • Glossier / salons / nail / lashes / spa
│   ├── tech-hardware/          • Apple / Nothing / consumer electronics
│   ├── course-coaching/        • Hormozi / MasterClass / Hebrew sales pages
│   ├── nonprofit/              • Charity:Water / Latet / NGO / cause
│   ├── editorial/              • Atlantic / NYT / Substack / magazines
│   ├── bento-product/          • Apple Intelligence / Linear features
│   ├── brutalist/              • Gumroad / MSCHF / statement brands
│   ├── webgl-award/            • Awwwards SOTY / WebGL / scroll-storytelling
│   └── fintech/                • Mercury / Brex / Robinhood / יועצי השקעות
├── shared/                    ← cross-style resources
│   ├── README.md
│   ├── hebrew-fonts.md          per-style Hebrew typography stack
│   ├── rtl-patterns.md          RTL implementation patterns
│   ├── israeli-integrations.md  Bit / Cardcom / Tranzila / health funds
│   └── core-components.md       components reused across 3+ styles
└── research/                  ← deep-dive research per style
    ├── 01-modern-saas.md       (full reference report from research phase)
    ├── 02-ai-product.md
    └── ... (21 reports total)
```

## How to use

Each style is its own self-contained skill. Install just the styles you need:

```bash
# Install one style
git clone --filter=blob:none --sparse https://github.com/bben15600-sys/landing-page-builder-skill ~/work/lpb-skill
cd ~/work/lpb-skill
git sparse-checkout set styles/modern-saas shared
ln -s ~/work/lpb-skill/styles/modern-saas ~/.claude/skills/lpb-modern-saas

# Or install all styles
git clone --depth 1 https://github.com/bben15600-sys/landing-page-builder-skill ~/work/lpb-skill
for style in ~/work/lpb-skill/styles/*; do
  ln -s "$style" ~/.claude/skills/lpb-$(basename "$style")
done
```

Then in a Claude Code session, trigger phrases per style:
- `"build me a site for an electrician"` → service-business-dark
- `"create a SaaS landing page"` → modern-saas
- `"build a landing page for my AI product"` → ai-product
- `"create a wedding venue site"` → wedding-events
- ... (each style's SKILL.md frontmatter declares its triggers)

## Tech stack (uniform across all styles)

- **Next.js 16** (App Router, Turbopack)
- **Tailwind v4** + **shadcn/ui** (base-ui, NOT Radix)
- **oklch()** color space (per-style token files)
- **Static OG image** via Python + PIL (Hebrew RTL safe — Satori is broken)
- **Vercel** auto-deploy via GitHub Actions
- **Hebrew RTL** with `<html dir="rtl">`, logical CSS properties, bidi isolation

What changes per style:
- Token palette (oklch values)
- Hebrew + Latin font stack
- Page sections and order
- Distinctive components
- Default copy templates (services / treatments / packages — vocabulary per category)

## Status

| | Status |
|---|---|
| Research reports (21) | ✅ complete |
| Architecture + shared resources | ✅ complete |
| `service-business-dark` (canonical reference) | ✅ full templates |
| Other 20 styles — SKILL.md specs | 🟡 in progress |
| Other 20 styles — full templates | 🔲 pending |
| Demo deployments per style | 🔲 pending |

## License

MIT
