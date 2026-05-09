# Core Components — Reused Across Multiple Styles

Components that appear in 3+ of the 21 styles. Build once in shared/ and reference from per-style SKILL.md.

## Reusable

### `BookingCalendar`
**Used by:** Medical, Beauty, Fitness, Hotel, Wedding, Restaurant
- Date picker + time slot selector
- Live availability check
- Sun-first week (Israeli)
- Holiday-aware (חגים)
- Accessibility: keyboard navigation, screen reader compatible

### `BeforeAfterSlider`
**Used by:** Medical, Beauty, Fitness
- Drag handle reveals second image
- Mouse + touch + keyboard
- Consent disclaimer overlay
- RTL-aware drag direction

### `Marquee`
**Used by:** Modern SaaS, AI, DTC, Restaurant, Brutalist, Creative Agency, Bento, Editorial
- Infinite scroll with CSS keyframes
- Direction reverses in RTL
- Pause-on-hover option
- Variable speed token

### `Lightbox`
**Used by:** Photography, Real Estate, Restaurant, Wedding, Hotel, Beauty, Course
- Full-screen image viewer
- Keyboard nav (arrows, ESC)
- Touch swipe
- Cinematic black overlay (`backdrop-filter: blur(8px)`)
- Counter "3 / 24"

### `MasonryGallery`
**Used by:** Photography, Real Estate, Wedding, Hotel, Restaurant, Beauty
- Variable aspect ratios
- Configurable columns per breakpoint
- Lazy-load images
- Click-to-lightbox

### `Magnetic`
**Used by:** Modern SaaS, Creative Agency, AI, WebGL, Bento
- Cursor-attraction wrapper for buttons/cards
- Configurable strength
- Disabled on touch devices

### `Reveal`
**Used by:** All 21 styles
- IntersectionObserver fade-in wrapper
- Configurable delay, distance, duration
- Respects `prefers-reduced-motion`

### `AnimatedCounter`
**Used by:** SaaS, Fitness, Non-profit, Fintech, Bento, Service
- Counts up to target on scroll-into-view
- Latin digits (Israeli convention)
- Configurable duration + easing

### `PricingTier`
**Used by:** SaaS, AI, Course, Fitness (membership), Hotel (room types), Service
- Card with name, price, features list, CTA
- Highlighted "most popular" variant
- Monthly/annual toggle
- ₪ formatting

### `FAQAccordion`
**Used by:** All commerce/service styles (15+ styles)
- Plus/minus icon
- Smooth height transition
- Optional category grouping

### `TestimonialWall`
**Used by:** SaaS, Course, Fitness, Service, Beauty, Wedding
- Masonry of testimonial cards (text/video/image)
- Author with photo + role + verified badge
- Rating stars (LTR within RTL)

### `LogoCloud`
**Used by:** SaaS, AI, DTC, Creative Agency, Restaurant (press), Wedding (press), Service
- Grayscale with hover-to-color
- Marquee or static grid
- Configurable cell size

### `StickyCTABar`
**Used by:** Course, DTC, Mobile of every commerce style
- Fixed-bottom (mobile) or fixed-top (desktop) on scroll
- Reveals after hero scroll-out
- Primary CTA + secondary action

### `WhatsAppFloat`
**Used by:** Service, Medical, Beauty, Fitness, Wedding, Real Estate
- Floating green button bottom-right
- Deep link to wa.me/972...
- Configurable message preset

### `PaymentBadgeRow`
**Used by:** DTC, Course, Service, Fintech, Non-profit
- Bit, Cardcom, Tranzila, Meshulam, Apple Pay, Google Pay logos
- Israeli installment indicator (תשלומים)
- VAT note (כולל מע״מ)

### `KashrutBadge`
**Used by:** Restaurant, Hotel, DTC (food)
- 4-tier kashrut indicator (רבנות / מהדרין / בד"ץ / חב"ד)
- Certifying authority

### `LanguageSwitcher`
**Used by:** Law Firm, Hotel, Real Estate, Wedding (international guests), Creative Agency
- HE / EN / FR / RU / AR options
- Persists preference to localStorage
- Switch direction (LTR/RTL) on toggle

## Style-specific (NOT in shared)

These don't qualify for shared because they're hyper-specific to one style:
- `CodeBlock` (Modern SaaS, AI only)
- `PromptInputHero` (AI only)
- `ScrollDrivenProductReveal` (Tech Hardware only)
- `WebGLImageDistortion` (WebGL Award only)
- `BrutalistMarquee` (Brutalist only — variation of Marquee)
- `BentoGridContainer` (Bento Product, sometimes SaaS)
- `VSLEmbed` (Course only)
- `DateAvailabilityWidget` (Wedding-specific variation of BookingCalendar)
- `BookingWidget` (Hotel-specific multi-room variation)
- `MenuSection` (Restaurant only — with kashrut badges + dietary icons)
- `PracticeAreaGrid` (Law Firm only)
- `LawyerBioCard` (Law Firm only)
- `ImpactCounterRow` (Non-profit only — variation of AnimatedCounter)
- `DonateBlock` (Non-profit only)
- `BeneficiaryStoryCard` (Non-profit only)
- `RoomTypeGrid` (Hotel only)
- `ClassScheduleGrid` (Fitness only)
- `TreatmentMenuList` (Beauty / Medical only)
- `ShadeMatcher` (Beauty only)
- `FloorPlanViewer` (Real Estate only)
- `PropertyHero` (Real Estate only)
- `CalculatorWidget` (Fintech only)
- `DashboardPreviewBlock` (SaaS / Fintech only)
- `Preloader` (WebGL only)
- `Canvas3DHero` (WebGL only)

## Naming convention

All shared components live in: `components/site/<kebab-case-name>.tsx` in the generated project.
Each style's distinctive components live in: `components/<style-name>/<component>.tsx`.
