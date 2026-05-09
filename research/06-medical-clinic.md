# Style: Medical / Dental / Healthcare Clinic

References: Maven Clinic, Kindbody, Parsley Health, Ro, Hims/Hers, Lemonaid Health.

## Visual Identity

**Three OKLCH palettes** (deliberately avoiding harsh "hospital blue"):

1. **Calm Sage Clinical** (general medicine / family practice)
   - Background: `oklch(0.98 0.005 110)` warm ivory
   - Primary: `oklch(0.55 0.06 165)` muted sage-teal
   - Accent: `oklch(0.72 0.04 80)` soft camel
   - Text: `oklch(0.25 0.01 240)` charcoal

2. **Editorial Aesthetic Clinic** (plastic surgery / dermatology / luxe dental)
   - Background: `oklch(0.97 0.012 75)` cream
   - Primary: `oklch(0.62 0.07 25)` blush rose
   - Accent: `oklch(0.55 0.05 65)` warm camel
   - Text: `oklch(0.22 0.015 30)` espresso brown

3. **Modern Telehealth / Fertility** (Hims/Maven/Kindbody style)
   - Background: `oklch(0.99 0.003 100)` near-white
   - Primary: `oklch(0.50 0.10 155)` true botanical green
   - Accent: `oklch(0.78 0.10 85)` honey gold
   - Text: `oklch(0.20 0.01 230)` ink

**Typography:** Humanist sans (Inter, Söhne, Sora, GT Walsheim) for body; editorial serif (Tiempos, Canela, GT Sectra, or Hebrew Frank Ruhl Libre) for clinic name/headline. Generous line-height (1.6+), large body size (18-20px).

**Shapes & Imagery:** Rounded photo crops (16-24px radius), organic blobs, generous whitespace. Photography is warm portraits of doctors without lab coats, hands, calm interiors with natural light, no fluorescent clinical sterility.

## Hero Patterns
- Large soft-focus portrait of doctor/patient OR atmospheric outcome photo (Parsley uses water/cells/skin macros)
- Headline emphasizing outcome ("Care that helps you feel better and stay well"; "Drop 20% of your weight")
- Primary CTA: "Book consultation" / "Check eligibility" in pill-shaped button
- Trust marker chip in hero ("3M+ members", "board-certified", years in practice)
- Service category nav with expandable dropdowns

## Section Inventory
- Treatments/procedures grid with detail pages
- Doctor/team bios with credentials, specialties, languages spoken
- Before/after gallery (drag-slider, with privacy disclaimers)
- Patient testimonials (named with consent, or anonymized initials)
- Pricing transparency or "request quote"
- FAQ accordion
- Insurance/payment plans / HMO acceptance
- Online booking calendar (real-time slot picker)
- Location with parking, accessibility, public transit info
- Press logos (CNN, Forbes for credibility)

## Distinctive Components Needed
- `BookingCalendar` (date/time slot picker, live availability)
- `BeforeAfterSlider` (drag handle reveal with consent overlay)
- `DoctorBioCard` (photo + credentials + specialties + book CTA)
- `TreatmentDetailCard` (description + duration + price range + recovery time)
- `TrustBadgeRow` (board certifications, accreditations, LegitScript)
- `InsuranceLogoStrip` (or HMO logos for Israel)
- `ConsentDisclaimerBlock` (privacy notice for galleries/testimonials)
- `ServiceCategoryGrid` (icon + title + brief)
- `ProcessTimeline` (six-step patient journey)
- `LocationMapCard` (with parking/accessibility notes)

## Animation Patterns
- Soft fades, gentle reveal on scroll (300-500ms ease-out)
- No aggressive motion — medical = trust + calm
- Before/after slider drag (cursor-controlled, smooth)
- Subtle parallax on hero portrait
- Sticky booking CTA bar on mobile

## Hebrew RTL Adaptations
- Israeli health funds logos: Clalit, Maccabi, Meuhedet, Leumit (replaces Aetna/BCBS strip)
- Hebrew testimonials with anonymized initials ("ר.כ., 34, תל אביב") — privacy-conscious culture
- Halachic considerations: Shabbat hours noted clearly, separate male/female practitioner filter for religious patients
- HMO referral flow: "טופס 17" (Form 17) acceptance badge
- RTL before/after slider direction reversal (drag handle starts right)
- Mirror booking calendar week direction; Hebrew weekday labels (ראשון-שישי)
- Add reservist/MDA discount badges where relevant

## Top 5 Reference Sites
1. **Maven Clinic** (mavenclinic.com) — fertility/family, true green + diverse warm portraits
2. **Kindbody** (kindbody.com) — fertility, gold accents, anti-clinical positioning
3. **Parsley Health** (parsleyhealth.com) — functional medicine, atmospheric macro imagery
4. **Ro** (ro.co) — telehealth, card-based med grids with safety disclaimers
5. **Hims/Hers** — DTC aesthetic, blush palette, editorial serif headlines

## Recommended Tokens
```css
--clinic-calm: oklch(0.55 0.06 165);     /* sage primary */
--clinic-cream: oklch(0.97 0.012 75);    /* warm bg */
--clinic-blush: oklch(0.62 0.07 25);     /* aesthetic accent */
--clinic-camel: oklch(0.72 0.04 80);     /* warm neutral */
--trust-blue: oklch(0.50 0.08 230);      /* certification badges */
--consent-warning: oklch(0.65 0.12 60);  /* disclaimer amber */
--booking-cta: oklch(0.50 0.10 155);     /* botanical green */
--gallery-overlay: oklch(0.20 0.01 30 / 0.4);
```

## Best Fit For (Hebrew/Israeli market)
Israeli private clinics: dental (מרפאת שיניים), dermatology (רופא עור), aesthetic medicine (רפואה אסתטית), plastic surgery (כירורגיה פלסטית), fertility/IVF (הפריה חוץ גופית), ophthalmology (רופא עיניים), physiotherapy (פיזיותרפיה), alternative medicine (רפואה משלימה), mental health clinics (קליניקה לבריאות הנפש), veterinary specialty clinics, pediatric private practices, audiology, podiatry.
