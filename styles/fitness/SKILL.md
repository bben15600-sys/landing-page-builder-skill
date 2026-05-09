---
name: lpb-fitness
description: "Build Hebrew RTL Fitness / Gym / Studio / Personal Trainer landing pages in the Barry's/Equinox/SoulCycle/CorePower style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: ClassScheduleGrid, ClassDetailModal, BookClassButton with capacity, InstructorProfileCard, MembershipPricingTier, TransformationStoryBlock, FirstClassFreeBanner, AppDownloadBadges, IntensityMeter, Sun-Thu Israeli week. Triggers: 'create gym site', 'fitness studio website', 'personal trainer landing page', 'יוגה site', 'קרוספיט site', 'create site for [סטודיו לכושר / מאמן אישי / יוגה]'."
---

# Fitness / Gym / Studio / Trainer — Hebrew RTL

For Israeli boutique fitness studios, premium gyms, יוגה/פילאטיס studios, CrossFit boxes, online personal trainers, ladies-only / נשים בלבד gyms, kids' martial arts, army-prep fitness.

> **Full research:** see `../../research/12-fitness.md`

## When to Use

User runs fitness business and wants either:
- **HIGH-ENERGY** (Barry's, Equinox, SoulCycle) — black + neon, dramatic
- **WELLNESS-CALM** (CorePower, Moveōm Tel Aviv, yoga/pilates) — cream + sage, serene

## Required Information from User

### 1. Studio / Trainer Identity
- Name (Hebrew + English)
- Disciplines offered
- Tagline ("BURN IT" / "Breathe. Move. Restore.")
- Founding year, locations

### 2. Theme Direction
- **A — Red Room (Barry's)** — black bg + signature red
- **B — Electric Studio (SoulCycle/HIIT)** — black bg + acid yellow OR purple
- **C — Wellness Clay** — cream bg + sage + clay accents

### 3. Class Types / Disciplines (4-15)
For each: Hebrew name + description + intensity level + duration + what to bring

### 4. Class Schedule
Live calendar (week view, Sun-first)
For each slot: discipline + instructor + time + capacity dots + book button

### 5. Instructors / Trainers (3-30)
For each: portrait + name + specialty + classes-this-week + bio (100-150 words) + IG handle

### 6. Membership Tiers (3-5)
e.g., First class free → 4-pack → 10-pack → Monthly unlimited → Annual
For each: price + features + most-popular badge if applicable

### 7. Transformation Stories (5-15)
Before/after photo or split image + quote + weeks/timeframe + program followed

### 8. Locations (1-N)
Address + parking + amenities (showers, parking, kosher cafe, etc.)

### 9. App / Online Mode
If applicable: iOS + Android badges + features

## Visual Identity

### Token Palette (Theme A — Red Room)
```css
:root {
  --bg: oklch(0.14 0.01 20);
  --accent: oklch(0.62 0.24 27);   /* signature red */
  --text: oklch(0.97 0 0);
  --schedule-grid-bg: oklch(0.18 0.01 20);
  --schedule-slot-available: oklch(0.62 0.24 27);
  --schedule-slot-full: oklch(0.40 0.04 20);
  --intensity-low: oklch(0.78 0.10 145);
  --intensity-med: oklch(0.78 0.18 95);
  --intensity-high: oklch(0.62 0.24 27);
  --capacity-dot: oklch(0.78 0.10 145);
  --class-chip-radius: 999px;
  --studio-hero-overlay: oklch(0 0 0 / 0.45);
}
```

### Typography
- Energy: **Heebo Black 900** + **Druk Wide** / Anton / Bebas Neue
- Wellness: **Frank Ruhl Libre** + Tiempos / Canela
- Body: **Heebo** / **Assistant** / **Rubik**

## Page Architecture

```
app/page.tsx
├── Header (with sticky Book CTA + first-class-free banner)
├── HeroVideoLoop (silent class video, tagline overlay)
├── ClassTypesGrid (4-15 disciplines)
├── ClassScheduleGrid (week view, filters)
├── InstructorTeamGrid
├── MembershipPricingTiers
├── TransformationStoriesBlock (5-15)
├── LocationSwitcher (multi-branch)
├── AppDownloadCTA (if applicable)
├── FAQAccordion (cancellation, what to bring, etc.)
├── ContactBlock
└── Footer
```

## Distinctive Components

- `ClassScheduleGrid` — week view, filters by discipline/instructor/level/location, color-coded chips
- `ClassDetailModal` — description, intensity meter, what to bring, instructor mini-card, "Reserve" with seat count
- `BookClassButton` — capacity indicator, waitlist state, sold-out state
- `InstructorProfileCard` — portrait, specialty tags, classes-this-week, IG handle, short bio
- `MembershipPricingTier` — monthly/annual toggle, feature checklist, most-popular badge, founders' rate
- `TransformationStoryBlock` — before/after slider or split image + quote + timeframe
- `FirstClassFreeBanner` — sticky strip or hero overlay
- `LocationSwitcher` — multi-branch
- `AppDownloadBadges` — Apple/Google with phone mockup
- `IntensityMeter` and `LevelBadge` (Beginner/Intermediate/Advanced)

## Animation Patterns

- Energy: looping silent class video heroes, kinetic marquee of class names, count-up stats ("450 calories"), red flash on CTA hover, fast 150ms transitions, parallax sweat drops
- Wellness: 700–900ms breath-paced fades, organic SVG blob shapes drifting, slow scroll-driven image reveals

## Hebrew RTL Adaptations

- Hebrew class names: כושר, יוגה, פילאטיס, עיצוב גוף, אגרוף, קרב מגע, ספינינג, פאנקציונלי, אימוני שטח/קרבי
- Israeli week defaults to **Sun–Thu** primary with Fri AM only and no Sat
- RTL schedule grid flows right-to-left, time column on the right
- Hebrew testimonials with Israeli first names (יעל, רן, נועה)
- Military/army-style fitness category (אימוני שטח, אימוני קרב, יחידה) with khaki/olive accents
- Ladies-only / נשים-בלבד toggle and modesty-aware photography option for חרדי/דתי studios
- Numerals: keep Western digits for times/weights; Hebrew text for class titles

## Reference Sites

1. **barrys.com** — definitive red-room high-energy template
2. **equinox.com** — luxury minimalist + modular cards
3. **soul-cycle.com** — candlelit dark + community storytelling
4. **corepoweryoga.com** — orange-warm wellness hybrid + class packs
5. **moveom.co.il** — Israeli premium movement studio (RTL reference)

## Best Fit For (Hebrew/Israeli market)

Israeli boutique fitness studios (Sheinkin/Rothschild Tel Aviv types), premium chains (Holmes Place, Cloud 9 tier), יוגה+פילאטיס studios, CrossFit boxes, online personal trainers and מאמני כושר אישיים, dietitian + coach combo brands (תזונאית + מאמנת), ladies-only / נשים בלבד gyms for חרדי and דתי women, kids' martial arts schools (קרב מגע לילדים), army-prep fitness (הכנה לצבא / יחידות מובחרות), postpartum mom fitness (כושר לאחר לידה), senior wellness studios.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
