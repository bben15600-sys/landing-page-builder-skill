import { CircleDot } from "lucide-react";
import { Reveal } from "./reveal";

const steps = [
  {
    period: "2014 — 2018",
    title: "מחלקת הילדים",
    desc: "התחלות בקבוצת השכונה, אימון יומי, שערים סדרתיים בליגות הילדים.",
  },
  {
    period: "2018 — 2021",
    title: "מחלקת הנוער",
    desc: "מעבר לקבוצה ליגתית, התבססות בתפקיד החלוץ, סגל נבחרות הגיל הצעירות.",
  },
  {
    period: "2021 — 2023",
    title: "סגל בוגר — בכורה ראשונה",
    desc: "הופעת בכורה בליגת הבוגרות בגיל 19, שער בכורה ב-3 הופעות הראשונות.",
  },
  {
    period: "2023 — היום",
    title: "שחקן בסיסי בליגת הבוגרות",
    desc: "התבססות כחלוץ פותח, ביצועים יציבים מול קבוצות הצמרת בעונה האחרונה.",
  },
];

export function CareerTimeline() {
  return (
    <section
      id="career"
      className="relative py-20 md:py-28 bg-foreground text-background"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs font-semibold text-background/70">
              קריירה
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              נתיב הקריירה
            </h2>
            <p className="max-w-2xl text-background/70">
              ארבעה פרקים. כל פרק מסומן בתאריכים ובהישג מרכזי.
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute right-3 top-3 left-3 hidden md:block h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, color-mix(in oklch, var(--brand-yellow) 60%, transparent), transparent)",
            }}
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110}>
              <div className="relative pt-1">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-yellow)] text-foreground">
                    <CircleDot className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-mono tracking-wider text-background/60">
                    {s.period}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
