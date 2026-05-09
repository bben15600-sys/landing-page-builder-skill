import { Magnetic } from "./magnetic";
import { KineticText } from "./kinetic-text";

export function ContactHero() {
  return (
    <section className="py-32 sm:py-48 bg-noir text-bg overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/50 mb-10">
          או פשוט —
        </p>

        <Magnetic strength={0.15}>
          <a
            href="mailto:hello@maya-agam.co.il"
            data-cursor-label="שלחו"
            className="inline-block font-display italic text-bg leading-none tracking-tight hover:text-bg/80 transition-colors"
            style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}
            dir="ltr"
          >
            hello@maya-agam.co.il
          </a>
        </Magnetic>

        <p className="mt-12 font-display italic text-xl sm:text-2xl text-bg/60 max-w-2xl mx-auto">
          <KineticText>
            תכתבו לי. גם אם זה רק כדי להגיד שלום או לשאול אם אני פנויה לתאריך מסוים.
          </KineticText>
        </p>
      </div>
    </section>
  );
}
