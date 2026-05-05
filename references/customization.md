# Customization Guide — Adapting the Template

This guide shows exactly which placeholders to replace when building a site for a new business.

## 1. site-config.ts (CRITICAL — single source of truth)

Open `components/site/site-config.ts` and replace ALL fields:

```ts
export const site = {
  brand: "BRAND_NAME",                  // English, e.g. "ELI ENERGY"
  brandFull: "BRAND_NAME_FULL",         // With suffix, e.g. "ELI ENERGY SOLUTIONS"
  ownerName: "אלי דדון",                 // Hebrew owner name
  tagline: "Hebrew tagline (1 line)",
  description:
    "Hebrew description (2-3 sentences explaining value prop + credentials)",
  phone: "054-XXX-XXXX",
  whatsapp: "9725XXXXXXXX",             // Full intl, no +, no leading 0
  email: "real@email.com",              // Will be FormSubmit endpoint
  area: "Service area (Hebrew)",        // e.g. "תעשייה — כל הארץ"
  yearsExperience: 0,                    // Real number
  jobsCompleted: 0,                      // Real or estimated
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app",
} as const;

export const nav = [
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "עלינו" },
  { href: "#testimonials", label: "ביקורות" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#contact", label: "צור קשר" },
] as const;
```

## 2. services.tsx — 6 Service Cards

Replace the `services` array. Pattern:

```ts
const services: Service[] = [
  {
    icon: ICON_NAME,            // Lucide icon component
    title: "כותרת קצרה",
    description: "תיאור 1-2 משפטים",
    size: "lg",                  // sm/md/lg — see grid sizing below
    accent: true,                // ONE service should be accent (featured)
  },
  // ... 5 more
];
```

**Grid sizing rules** (in 8-col bento layout):
- `lg` = 4 cols × 2 rows = featured card. Should have `accent: true`.
- `md` = 3 cols × 1 row = medium card.
- `sm` = 2 cols × 1 row = small card.

**Math**: 1×lg(4) + 2×md(3+3=6) + 3×sm(2+2+2=6) = 16 cells = 2 rows × 8 cols. Adjust to taste.

**Picking the featured service**: The `accent: true` card gets:
- Gradient background
- Larger text
- "התמחות בלעדית" pulsing badge
- Pick the most premium / highest-margin / specialty service.

**Recommended icon imports by industry**:
- Electrician: `Zap, ShieldAlert, Wrench, Cpu, Lightbulb, Home`
- Industrial electrician: `FlaskConical, Layers, Wrench, ClipboardCheck, Cog, Gauge`
- Plumber: `Droplet, Wrench, ShowerHead, Flame, Pipe, AlertTriangle`
- Contractor: `Hammer, HardHat, Building2, Ruler, Truck, Paintbrush`
- HVAC: `Thermometer, Wind, Snowflake, Flame, Gauge, Settings`
- Beauty/spa: `Sparkles, Leaf, Heart, Flower2, Smile, Wand2`

## 3. about.tsx — 6 Bullets + Heading

```ts
const bullets: Bullet[] = [
  { icon: ICON, title: "שורה אחת", description: "תיאור" },
  // ... 5 more
];
```

**Heading and paragraph** in About (around line 60-75 of about.tsx):
```tsx
<h2>...</h2>          // ← heading (gradient text)
<p>...</p>            // ← description paragraph
```

**Right-side card subtitle** (around line 130):
```tsx
<p className="...">  
  {site.ownerName} · short Hebrew description
</p>
```

**Pills under the logo** (around line 135-140):
```tsx
<Pill value={`+${site.yearsExperience}`} label="שנות ניסיון" />
<Pill value={`+${site.jobsCompleted.toLocaleString("he-IL")}`} label="פרוייקטים" />
<Pill value="100%" label="עמידה בתקנים" />  // ← customize this 3rd one
```

## 4. testimonials.tsx — 3 Reviews

```ts
const testimonials: Testimonial[] = [
  {
    quote: "Hebrew quote (2-3 sentences)",
    name: "Initials או שם מלא",
    area: "City or company type",
    service: "Service tag (3-4 words)",
  },
  {
    // ... featured one
    featured: true,    // exactly ONE should be featured
  },
  {
    // ... third
  },
];
```

If no real reviews available, use **plausible placeholders** matching the industry:
- Industrial: "מנכ״ל / מנהל הנדסה / מנהל אחזקה" + company type ("מפעל פארמה", "ביוטכנולוגיה")
- Residential: First name + initial + city
- B2B: Job title + industry vertical

## 5. contact-form.tsx — Message Templates

The `templates` array (around line 47):

```ts
const templates: { key: TemplateKey; label: string; body: string }[] = [
  { key: "free", label: "כתיבה חופשית", body: "" },
  {
    key: "template_1",
    label: "Display label",
    body: "שלום [BRAND],\nתבנית הודעה...\nשדה 1: \nשדה 2: \nתודה.",
  },
  // ... 5-7 more
];
```

**Template key** is internal (snake_case), **label** is what users see, **body** is the pre-filled message with blank lines for users to fill in.

Update the `TemplateKey` type to match your keys.

## 6. globals.css — Color Theme

### Light theme (default white bg, primary-colored accents)
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.55 0.22 255);  /* electric blue */
  --primary-foreground: oklch(0.99 0 0);
  --accent: oklch(0.94 0.04 255);
  /* ... */
}
```

### Dark theme (navy bg, yellow accents — ELI ENERGY style)
```css
:root {
  --background: oklch(0.18 0.05 260);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.82 0.16 86);   /* yellow as primary */
  --primary-foreground: oklch(0.18 0.05 260);
  --accent: oklch(0.82 0.16 86);
  /* ... */
}
```

### Industry-specific palettes

**Trust & Authority (B2B, finance, healthcare)** — navy + blue accent
**Energetic (fitness, food, beauty)** — coral/orange/pink primary
**Calm professional (legal, accounting)** — sage green + cream
**Tech/SaaS** — purple/violet primary

See `colors-and-tokens.md` for full palettes per industry.

## 7. Logo Files

**If user provides a logo PNG** (recommended):
```bash
python3 ~/.claude/skills/landing-page-builder/scripts/process-logo.py \
  /path/to/source.png \
  ./public/brand/
```

Generates: `logo.png`, `logo-mark.png`, `logo-circle.png`.

**If no logo** — keep the SVG fallback in `components/site/logo.tsx` and customize colors via the `--brand-navy` and `--brand-yellow` CSS variables.

## 8. OG Image (1200×630)

```bash
python3 ~/.claude/skills/landing-page-builder/scripts/generate-og.py \
  --logo public/brand/logo-circle.png \
  --output public/og.png \
  --brand "BRAND_NAME" \
  --suffix "SUFFIX" \
  --owner "Owner Name" \
  --phone "054-XXX-XXXX" \
  --tagline "Hebrew main tagline" \
  --sub "Hebrew sub-tagline" \
  --info "Hebrew info line" \
  --theme dark
```

Then update `app/layout.tsx` metadata:
```ts
images: [{ url: "/og.png?v=1", width: 1200, height: 630, type: "image/png" }],
```

Bump `v=N` whenever you regenerate so WhatsApp/FB don't show stale cache.

## 9. Process Section

`process.tsx` has 4 steps. Usually generic enough across businesses:
1. Contact (צור קשר)
2. Quote (הצעת מחיר)
3. Execute (ביצוע)
4. Warranty (אחריות)

For specialized industries adapt:
- B2B SaaS: Discovery → POC → Onboarding → Support
- Healthcare: Schedule → Visit → Treatment → Follow-up

## 10. CertificationsStrip — 4 Trust Badges

`certifications-strip.tsx` has 4 badges. Customize per business:
- Electrician: מוסמך, מבוטח, אחריות, תקן
- Lawyer: רשום בלשכה, ניסיון X שנים, תיק נקי, חבר ב-X
- Doctor: רישיון, מומחה ב-X, מבוטח, חבר באיגוד

## 11. JsonLd (SEO Schema)

`json-ld.tsx` — change `@type: "Electrician"` to match the business:
- `Electrician`
- `Plumber`
- `RoofingContractor`
- `LocalBusiness` (generic)
- `MedicalBusiness`
- `LegalService`
- `BeautySalon`
- `AutomotiveBusiness`

See https://schema.org/LocalBusiness for full list.

## 12. CLAUDE.md (Project Rules)

Update the top of CLAUDE.md with the business name and tagline. Keep the conventions section unchanged.

## Verification Checklist

After all customizations:

- [ ] `npm run build` passes with zero errors
- [ ] All Hebrew text renders correctly RTL
- [ ] Phone link `tel:` works on mobile
- [ ] WhatsApp deeplink opens with pre-filled text
- [ ] Form templates pre-fill correctly when selected
- [ ] Image upload accepts up to 8MB
- [ ] FormSubmit verification email received (one-time)
- [ ] OG image preview correct on FB Debugger
- [ ] Mobile + desktop both responsive
- [ ] Dark mode looks good (if applied)
- [ ] All 7 sections visible in correct order
- [ ] Brand colors consistent everywhere
