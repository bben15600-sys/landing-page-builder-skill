# Style: Fitness / Gym / Studio / Trainer

References: Barry's, Equinox, SoulCycle, CorePower Yoga, Peloton, Tonal, Moveōm Tel Aviv.

## Visual Identity
Two distinct moods drive this category, and a successful skill must support both:

- **HIGH-ENERGY** (Barry's, Equinox at night, SoulCycle, CrossFit, boxing): black/charcoal backgrounds, single neon accent (signature red, electric blue, hot pink, acid yellow), high-contrast workout photography lit hot, dramatic motion blur.
- **WELLNESS-CALM** (CorePower, Sage Pilates, House of Sculpt, Moveōm Tel Aviv): cream/bone/oat backgrounds, sage green or clay/terracotta accents, modern serif headings, soft daylight photography, generous whitespace.

**Three oklch palettes:**
- Red Room (Barry's-style): `--bg: oklch(0.14 0.01 20)` / `--accent: oklch(0.62 0.24 27)` (signature red) / `--text: oklch(0.97 0 0)`
- Electric Studio (SoulCycle/HIIT): `--bg: oklch(0.12 0.02 280)` / `--accent: oklch(0.78 0.18 95)` (acid yellow) or `oklch(0.65 0.22 295)` (purple) / `--text: oklch(0.98 0 0)`
- Wellness Clay (yoga/pilates): `--bg: oklch(0.96 0.02 75)` (cream) / `--accent: oklch(0.58 0.07 145)` (sage) / `--secondary: oklch(0.62 0.12 35)` (clay) / `--text: oklch(0.22 0.02 80)`

**Typography:**
- Energy: bold condensed display (Druk Wide, Anton, GT America Condensed, Bebas Neue) for shouting taglines + neutral grotesque body (Inter, Söhne)
- Wellness: refined humanist serif (Canela, GT Sectra, Tiempos) for headings + clean sans (Söhne, Beatrice) for body
- Hebrew pairings: Heebo Black / Rubik Bold for energy; Frank Ruhl Libre or Noto Serif Hebrew for wellness; **Ploni** for friendly modern

## Hero Patterns
- Full-bleed muted **class video loop** (treadmill, rower, candlelit cycling) + giant tagline ("BURN IT", "תזיע איתנו") + sticky "Book a Class" CTA
- **Split-screen transformation**: before/after photo with story snippet + "Start Free Trial"
- **Schedule peek hero**: today's classes already visible above fold with capacity dots + "Reserve Spot"
- **Member quote hero**: portrait photo + bold pull-quote testimonial + plan CTA
- Wellness alt: slow-motion vinyasa flow video, serif headline ("Breathe. Move. Restore."), single quiet CTA

## Section Inventory
Class types/disciplines grid, weekly class schedule (live calendar with filters), instructor/trainer profile cards, membership tiers, free-first-class banner, transformation/results stories, multi-location switcher, online vs in-person class toggle, app download badges, apparel/merch teaser, nutrition/recipe blog teaser, FAQ on cancellation policy.

## Distinctive Components Needed
- `ClassScheduleGrid` — week view, filters by discipline/instructor/level/location, color-coded chips
- `ClassDetailModal` — description, intensity meter, what to bring, instructor mini-card, "Reserve" with seat count
- `BookClassButton` — capacity indicator (e.g., "3 spots left"), waitlist state, sold-out state
- `InstructorProfileCard` — portrait, specialty tags, classes-this-week list, IG handle, short bio
- `MembershipPricingTier` — monthly/annual toggle, feature checklist, most-popular badge, founders' rate
- `TransformationStoryBlock` — before/after slider or split image + quote + weeks/timeframe
- `FirstClassFreeBanner` — sticky strip or hero overlay
- `LocationSwitcher` — for multi-branch chains
- `AppDownloadBadges` — Apple/Google with phone mockup
- `IntensityMeter` and `LevelBadge` (Beginner/Intermediate/Advanced)
- `WorkoutProgramCard` (4-week, 8-week programs for online coaches)

## Animation Patterns
- Energy: looping silent class video heroes, kinetic marquee of class names, count-up stats ("450 calories"), red flash on CTA hover, fast 150ms transitions, parallax sweat drops
- Wellness: 700–900ms breath-paced fades, organic SVG blob shapes drifting, slow scroll-driven image reveals, gentle floating elements

## Hebrew RTL Adaptations
- Hebrew class names: כושר, יוגה, פילאטיס, עיצוב גוף, אגרוף, קרב מגע, ספינינג, פאנקציונלי, אימוני שטח/קרבי
- Israeli week defaults to **Sun–Thu** primary with Fri AM only and no Sat (Shabbat-aware)
- RTL schedule grid flows right-to-left, time column on the right
- Hebrew testimonials with Israeli first names (יעל, רן, נועה)
- Military/army-style fitness category (אימוני שטח, אימוני קרב, יחידה) with khaki/olive accents
- Ladies-only / נשים-בלבד toggle and modesty-aware photography option for חרדי/דתי studios
- Numerals: keep Western digits for times/weights; Hebrew text for class titles

## Top 5 Reference Sites
1. **barrys.com** — definitive red-room high-energy template
2. **equinox.com** — luxury minimalist + modular cards
3. **soul-cycle.com** — candlelit dark + community storytelling
4. **corepoweryoga.com** — orange-warm wellness hybrid + class packs
5. **moveom.co.il** — Israeli premium movement studio (RTL reference)

## Recommended Tokens
`--energy-neon`, `--energy-bg`, `--wellness-cream`, `--wellness-sage`, `--wellness-clay`, `--schedule-grid-bg`, `--schedule-slot-available`, `--schedule-slot-full`, `--intensity-low/med/high`, `--capacity-dot`, `--class-chip-radius` (pill 999px), `--studio-hero-overlay` (rgba black 0.45)

## Best Fit For (Hebrew/Israeli market)
Israeli boutique fitness studios (Sheinkin/Rothschild Tel Aviv types), premium chains (Holmes Place, Cloud 9 tier), יוגה+פילאטיס studios, CrossFit boxes, online personal trainers and מאמני כושר אישיים, dietitian + coach combo brands (תזונאית + מאמנת), ladies-only / נשים בלבד gyms for חרדי and דתי women, kids' martial arts schools (קרב מגע לילדים), army-prep fitness (הכנה לצבא / יחידות מובחרות), postpartum mom fitness (כושר לאחר לידה), and senior wellness studios.
