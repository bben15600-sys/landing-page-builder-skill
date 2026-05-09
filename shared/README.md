# Shared — Cross-style Resources

Cross-cutting concerns and primitives that all 21 styles reuse.

## Files

- **hebrew-fonts.md** — Hebrew typography stack per style mood (display / body / mono)
- **rtl-patterns.md** — RTL implementation patterns (bidi, flipping, logical properties)
- **israeli-integrations.md** — Bit, Cardcom, Tranzila, Meshulam, Pelecard, etc.
- **core-components.md** — Components reused across multiple styles (BookingCalendar, Marquee, Lightbox, etc.)

## Why "shared"

Of the 21 styles, many share fundamental components and patterns:
- **Booking** is needed by Medical, Beauty, Fitness, Hotel, Wedding, Restaurant
- **Marquee** by SaaS, AI, DTC, Restaurant, Brutalist, Creative Agency
- **Lightbox** by Photography, Real Estate, Restaurant, Wedding, Hotel, Beauty
- **Pricing tiers** by SaaS, Course, Fitness, Membership

Building these once in shared/ and referencing from per-style SKILL.md keeps the skills DRY.
