import { Trophy, Star, Crown, Medal, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  {
    icon: Crown,
    title: "מלך השערים — ליגת הנוער",
    year: "2022",
    desc: "סיים עונה במקום הראשון בטבלת הכובשים בליגת הנוער עם 24 שערים ב-26 הופעות.",
    accent: true,
  },
  {
    icon: Trophy,
    title: "אליפות מחוז",
    year: "2023",
    desc: "חבר בסגל הזוכה באליפות המחוז, רשם שער בגמר.",
  },
  {
    icon: Star,
    title: "סגל נבחרת הנוער",
    year: "2023",
    desc: "זומן לשלוש מחזורי משחקים של נבחרת ישראל הצעירה ושיחק כחלוץ פותח.",
  },
  {
    icon: Medal,
    title: "Player of the Month",
    year: "10/2024",
    desc: "נבחר על ידי האוהדים והעיתונאים לשחקן החודש המצטיין בליגה.",
  },
  {
    icon: Sparkles,
    title: "Hat-trick ראשון בבוגרים",
    year: "2024",
    desc: "שלושה שערים במחזור 18 — משחק ה-21 שלו בליגת הבוגרות.",
  },
  {
    icon: Trophy,
    title: "מועמד לפריצת השנה",
    year: "2024",
    desc: "נכלל ברשימה המקוצרת של פריצת העונה בליגה.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              הישגים
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              נקודות ציון בקריירה
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              רשימה חלקית. לפרטים מלאים, צ׳ק לתוצאות מסונכרנות מ-Transfermarkt — צרו קשר.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 3) * 80}>
              <article
                className={
                  "relative h-full overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 " +
                  (it.accent
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card")
                }
              >
                {it.accent && (
                  <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--brand-yellow)] opacity-50 blur-2xl" />
                )}
                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={
                      "grid h-11 w-11 place-items-center rounded-xl " +
                      (it.accent
                        ? "bg-[var(--brand-yellow)] text-foreground"
                        : "bg-foreground text-[var(--brand-yellow)]")
                    }
                  >
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span
                    className={
                      "rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider " +
                      (it.accent
                        ? "bg-background text-foreground"
                        : "bg-muted text-muted-foreground")
                    }
                  >
                    {it.year}
                  </span>
                </div>
                <h3 className="relative mt-5 text-xl font-extrabold tracking-tight">
                  {it.title}
                </h3>
                <p
                  className={
                    "relative mt-2 text-sm leading-relaxed " +
                    (it.accent ? "text-background/80" : "text-muted-foreground")
                  }
                >
                  {it.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
