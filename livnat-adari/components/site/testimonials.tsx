import { Star } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";

type Testimonial = {
  quote: string;
  name: string;
  area: string;
  service: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "ליבנת היא קוסמטיקאית במובן הכי עמוק של המילה. המקצועיות שלה ברורה מהרגע הראשון — אבל מה שעושה אותה מיוחדת זה היכולת שלה להקשיב. הקליניקה היא מרחב שאני חוזרת אליו בכיף.",
    name: "דנה ל.",
    area: "זכרון יעקב",
    service: "אבחון ופרוטוקול אישי",
  },
  {
    quote:
      "הגעתי לליבנת אחרי שנים של בעיות עור שלא הצלחתי לפתור. כבר במפגש הראשון הרגשתי שהיא רואה אותי באמת — לא רק את העור. תוך כמה חודשים העור שלי השתנה, ואני השתניתי איתו.",
    name: "נועה כ.",
    area: "חדרה",
    service: "טיפול אקנה וצלקות",
    featured: true,
  },
  {
    quote:
      "התחלתי בליווי לבעיות פיגמנטציה והמשכנו לעבודה רחבה יותר. אחרי 22 שנים במקצוע — היא פשוט יודעת. רגישה, אמיתית, מקצועית עד הסוף.",
    name: "מיכל ר.",
    area: "חיפה",
    service: "טיפול בכתמי עור",
  },
];

function QuoteGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.99 36c-2.5 0-4.77-.98-6.8-2.95C6.16 31.08 5.14 28.83 5.14 26.3c0-3.5 1.07-6.82 3.2-9.95C10.48 13.22 13.23 10.1 16.6 7l4.9 4.25c-2.13 1.88-3.82 3.63-5.05 5.25-1.23 1.62-1.85 3.48-1.85 5.6h5.4V36h-5Zm23 0c-2.5 0-4.77-.98-6.8-2.95-2.04-1.97-3.05-4.22-3.05-6.75 0-3.5 1.07-6.82 3.2-9.95C33.48 13.22 36.23 10.1 39.6 7l4.9 4.25c-2.13 1.88-3.82 3.63-5.05 5.25-1.23 1.62-1.85 3.48-1.85 5.6h5.4V36h-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <article
      className={`group/card relative h-full ${
        t.featured ? "lg:-translate-y-2" : ""
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {t.featured ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/40 via-primary/10 to-transparent opacity-90"
        />
      ) : null}

      <SpotlightCard className="relative h-full">
        <div
          className={`relative flex h-full flex-col gap-5 p-6 md:p-7 ${
            t.featured
              ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
              : ""
          }`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"
          />

          <QuoteGlyph
            className={`absolute -top-2 left-5 size-12 -scale-x-100 transition-all duration-500 group-hover/card:-translate-y-0.5 ${
              t.featured ? "text-primary/40" : "text-primary/15"
            }`}
          />

          <div className="flex items-center justify-between pt-6">
            <div
              className="flex items-center gap-0.5 text-primary"
              aria-label="5 מתוך 5 כוכבים"
            >
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="size-4 fill-current"
                  style={{
                    animationDelay: `${(index * 5 + idx) * 60}ms`,
                  }}
                  aria-hidden
                />
              ))}
            </div>
            {t.featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                סיפור מומלץ
              </span>
            ) : null}
          </div>

          <p
            className={`flex-1 leading-relaxed text-foreground/90 ${
              t.featured ? "text-base md:text-[17px]" : "text-sm md:text-[15px]"
            }`}
          >
            “{t.quote}”
          </p>

          <footer className="flex items-center justify-between gap-3 border-t border-border/50 pt-4">
            <div className="flex items-center gap-3 min-w-0">
              <span
                aria-hidden
                className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 group-hover/card:shadow-md group-hover/card:shadow-primary/20 ${
                  t.featured
                    ? "border-2 border-primary/30 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/30"
                    : "border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-primary"
                }`}
              >
                {t.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight">
                  {t.name}
                </p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {t.area}
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              {t.service}
            </span>
          </footer>
        </div>
      </SpotlightCard>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Star className="size-3.5 fill-current" />
            ביקורות אמיתיות
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            מה לקוחות מספרות
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            סיפורים שמראים שטיפול בעור הוא הרבה מעבר למראה.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {testimonials.map((t, i) => (
            <li key={t.name} className="h-full">
              <Reveal variant="up" delay={i * 100} className="h-full">
                <TestimonialCard t={t} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
