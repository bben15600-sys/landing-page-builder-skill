# Style: Wedding & Events / Event Venue

References: Achuza Beit Hanan, OLMAYA Jerusalem, Sasha Souza Events, Matthew Robbins Design, Bliss & Bone templates.

## Visual Identity
Three distinct moods anchor this style:
- **Romantic neutrals** (blush + cream + sage + gold) — spring/summer venues like Hayden and Carmel
- **Black-tie** (deep navy + champagne + ivory) — urban venues like OLMAYA Jerusalem
- **Garden romance** (dusty pink + olive + cream + warm wood) — estate venues like Achuza Beit Hanan, Bliss & Bone "Greens"

Photography always soft, warm-toned, golden-hour, shallow depth of field. Organic SVG flourishes, watercolor washes, monogram seals, hand-drawn botanicals appear throughout — never harsh geometry.

**3 oklch palettes:**
- Romantic Blush: `oklch(0.96 0.02 30)` cream / `oklch(0.88 0.05 25)` blush / `oklch(0.72 0.06 130)` sage / `oklch(0.78 0.12 85)` gold
- Black-Tie Navy: `oklch(0.22 0.04 260)` navy / `oklch(0.94 0.03 80)` champagne / `oklch(0.82 0.10 75)` antique gold / `oklch(0.97 0.01 90)` ivory
- Garden Romance: `oklch(0.78 0.06 20)` dusty pink / `oklch(0.55 0.06 120)` olive / `oklch(0.94 0.02 85)` cream / `oklch(0.45 0.05 50)` warm wood

**Typography:** Display serif primary — Cormorant Garamond, Playfair Display, GT Super Display, Larken, Tenor Sans. Italic subhead for romance. Script accents (Allura, Pinyon Script) sparingly for monograms only. Hebrew pairing: Frank Ruhl Libre or David Libre + Heebo or Assistant for body.

## Hero Patterns
Full-bleed atmospheric venue or couple shot with slow Ken Burns zoom (8–12s), serif headline center-aligned, italic subhead, single primary CTA "Inquire about your date" / "בדקו זמינות לתאריך". Subtle scroll cue. Some venues use a date-availability widget directly in hero.

## Section Inventory
Real Weddings gallery (filterable) → About venue/planner story → Services & packages (intimate / classic / full production) → Pricing or "starting at" range → Testimonials with portrait pull-quotes → Vendor partner grid (florists, DJs, photographers, רבנים) → Date availability check → Detailed inquiry form → FAQ → Press logos (Vogue Weddings, Style Me Pretty, חתונה ישראלית, Israel Events Magazine).

## Distinctive Components Needed
- `DateAvailabilityWidget` — calendar grid with booked / available / on-hold states
- `RealWeddingsGallery` — masonry, filter chips by season/style/size
- `WeddingDetailScroll` — single-wedding story page with hero, narrative, vendor credits, full gallery
- `PackageComparisonTable` — three tiers with checkmark grid (intimate / classic / luxury)
- `VendorPartnerGrid` — logo cards with role tags
- `InquiryFormDetailed` — date, guest count, budget range, vibe radio chips, venue preference, how-they-heard
- `TestimonialPullQuote` — large italic serif over portrait
- `FAQAccordion` — soft borders, plus/minus icons
- `MonogramSeal` — couple/venue monogram SVG
- `FloralFlourishDivider` — animated SVG section break

## Animation Patterns
Slow hero Ken Burns zoom; soft cross-fade gallery; organic SVG flourishes drawing in on scroll (stroke-dashoffset); parallax floral elements at 0.3–0.5x scroll speed; sticky-zoom transitions between weddings (Framer Motion); reveal-on-scroll for testimonial portraits; 700–900ms ease-out timing — never snappy.

## Hebrew RTL Adaptations
Hebrew calendar sidebar (Tu B'Av "ט״ו באב" featured as romantic peak); peak season May–October badge ("עונת החתונות"); kosher catering badge ("בהשגחת הרבנות הראשית" / mehadrin tier); chuppah-design section ("עיצוב חופה"); henna ceremony page for Sephardic/Mizrahi (חינה / טקס חינה); bilingual Hebrew-English toggle for international guests; Saturday night / motzei Shabbat scheduling notes; Israeli wedding-season urgency ("נותרו 3 תאריכים בקיץ 2026"). Mirror all monograms and ornament SVGs for RTL flow.

## Top 5 Reference Sites
1. **Achuza Beit Hanan** (achuza.co.il) — Provençal garden romance, cream + green, bilingual Hebrew/English, kosher badges
2. **OLMAYA Jerusalem** (olmaya.co.il) — black-tie urban prestige, animated logo hero, multilingual (HE/FR/EN), WhatsApp inquiry
3. **Sasha Souza Events** — modern romance, full-width hero, real-wedding success stories
4. **Matthew Robbins Design** — editorial gallery, mood-board to final-look transformation reels
5. **Bliss & Bone "Greens" / "Hayden" / "Serena"** — serif typography reference, blush peony palette, layered florals

## Recommended Tokens
`--romantic-blush`, `--cream-ivory`, `--sage-soft`, `--gold-shimmer`, `--navy-blacktie`, `--champagne`, `--olive-garden`, `--warm-wood`, `--serif-romantic` (Cormorant), `--serif-display` (Playfair), `--script-accent` (Pinyon), `--watercolor-bg` (radial-gradient blush wash), `--flourish-svg`, `--monogram-stroke`, `--ease-romantic` (cubic-bezier(0.4, 0, 0.2, 1) at 800ms), `--zoom-kenburns` (transform: scale(1.08) over 10s).

## Best Fit For (Hebrew/Israeli market)
Israeli wedding venues (גנים בצפון, אחוזות בשרון, אולמות בירושלים, חצרות בגליל), wedding planners (מפיקות אירועים, הפקת חתונות), bar/bat mitzvah planners (בר/בת מצווה), henna planners (טקסי חינה), corporate event production (אירועי חברה, גאלות), wedding photographers' planning packages (חבילות צילום + הפקה), boutique kosher catering studios, chuppah-design florists.
