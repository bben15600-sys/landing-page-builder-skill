# landing-page-builder

A Claude Code skill that builds **Hebrew RTL premium landing pages** for service businesses — replicating the [ELI ENERGY SOLUTIONS](https://eli-energy.vercel.app) reference build.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind v4** + **shadcn/ui** (base-ui, NOT Radix)
- **Heebo** Hebrew font
- **oklch()** color space
- **FormSubmit** for email forms with image upload
- **Static OG image** via Python + PIL (bypasses Satori RTL bug)
- **Vercel** auto-deploy via GitHub Actions

## Install

In any Claude Code session:

```bash
git clone --depth 1 https://github.com/bben15600-sys/landing-page-builder-skill ~/.claude/skills/landing-page-builder
```

Then in that session:

- Use the `Skill` tool with `skill: "landing-page-builder"`
- Or trigger phrases: "build me a site for X", "create landing page for Y"
- Or the `/build-site <business-name>` slash command (if installed)

## What it builds

Every site includes 7 sections + extras:

1. **Hero** — animated yellow sparks, glassmorphic stats, magnetic CTA
2. **CertificationsStrip** — 4 trust badges with hover lift
3. **Services** — 8-col Bento grid with 1 featured card
4. **About** — 6 trust bullets + branded image card
5. **Testimonials** — 3 reviews with featured middle card
6. **Process** — 4-step horizontal timeline
7. **Contact** — 4 contact cards + form with **7 message templates** + **image upload** + FormSubmit/WhatsApp logic

Plus: scroll-triggered reveals, WhatsApp floating button, mobile CTA bar, animated counters, mouse-tracking spotlight cards, scroll-aware header with Sheet menu.

## Required information from user

See `SKILL.md` — collects:
- Business identity (brand, owner, tagline, description)
- Brand colors (light/dark theme)
- Contact (phone, WhatsApp, email, area)
- 6 services (icon + title + description + size)
- 6 about bullets
- 3 testimonials (1 featured)
- 7 message templates
- Logo (PNG or SVG)

## Reference builds

- https://eli-energy.vercel.app — Industrial electrician (canonical, dark navy + yellow)
- https://livnat-cosmetique.vercel.app — Beauty salon (light beige + white)

## Workflow (10 steps)

1. Gather information
2. Bootstrap Next.js project
3. Setup CLAUDE.md
4. Layout + globals.css
5. Site config
6. Build components top-down (16 components)
7. Logo processing (Python script)
8. Generate static OG image (Python script)
9. Setup deployment (GitHub Actions + Vercel)
10. Final polish + verification

## Files

```
SKILL.md                    Workflow + required info
references/
  architecture.md           Full file tree
  customization.md          Per-project changes
  colors-and-tokens.md      7 industry palettes
  deployment.md             GitHub + Vercel
  icons.md                  Lucide by industry
  troubleshooting.md        Common bugs
templates/
  app/                      9 page/layout templates
  components/               22 component templates
  .github/workflows/        Vercel CI/CD
  CLAUDE.template.md        Project rules
scripts/
  bootstrap.sh              One-shot project setup
  generate-og.py            Static OG generator
  process-logo.py           Logo cropping (3 variants)
```

## License

MIT

