import { Camera } from "lucide-react";
import { Reveal } from "./reveal";

// Visual "frames" — placeholders. Replace `placeholder` blocks with real photos
// in /public/gallery/* and swap the styled divs for <Image>.
const slots = [
  { caption: "אימון בוקר — אצטדיון הבית", emphasis: false },
  { caption: "חגיגת שער — מחזור 14",       emphasis: true  },
  { caption: "ראיון לאחר משחק",            emphasis: false },
  { caption: "תוכנית כושר אישית",          emphasis: false },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              גלריה
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              רגעים מהמגרש
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              חלל מוכן להעלאת תמונות מקצועיות. החלף את ה-placeholders בתמונות JPG/PNG
              וברגע שתעלה, הן יוטמעו אוטומטית.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
          {slots.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure
                className={
                  "group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border " +
                  (s.emphasis ? "md:row-span-2 md:aspect-[3/5]" : "")
                }
                style={{
                  background:
                    s.emphasis
                      ? "linear-gradient(135deg, var(--brand-black), oklch(0.30 0 0))"
                      : "linear-gradient(135deg, oklch(0.96 0 0), oklch(0.90 0 0))",
                }}
              >
                <div
                  className="absolute inset-0 bg-grid opacity-30"
                  aria-hidden
                />
                <div className="absolute inset-0 grid place-items-center">
                  <Camera
                    className={
                      "h-10 w-10 " +
                      (s.emphasis ? "text-[var(--brand-yellow)]" : "text-foreground/30")
                    }
                  />
                </div>
                <figcaption
                  className={
                    "absolute inset-x-0 bottom-0 p-3 text-xs font-semibold " +
                    (s.emphasis
                      ? "bg-gradient-to-t from-foreground/90 to-transparent text-background"
                      : "bg-gradient-to-t from-background/90 to-transparent text-foreground")
                  }
                >
                  {s.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
