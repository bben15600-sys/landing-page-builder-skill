import {
  Target,
  Activity,
  Zap,
  ShieldCheck,
  HeartPulse,
  Users,
} from "lucide-react";
import { Reveal } from "./reveal";

const bullets = [
  {
    icon: Target,
    title: "חוש שער חד",
    desc: "מסיים מצבים בכל הרגליים ובראש, חזק במצבי 1-על-1 מול שוער.",
  },
  {
    icon: Zap,
    title: "מהירות וזריזות",
    desc: "פיצוץ מהיר ב-5 מטרים הראשונים, עבירות מסירה חדות אל מאחורי ההגנה.",
  },
  {
    icon: ShieldCheck,
    title: "משמעת אימונים",
    desc: "נוכחות 100% באימונים, הקפדה על תזונה ושינה, מוכן עונתית גם בפסקי משחקים.",
  },
  {
    icon: HeartPulse,
    title: "כושר אירובי גבוה",
    desc: "Yo-Yo IR2 מעל הממוצע הליגתי, סיום משחקים בעצמה גם בדקות 80+.",
  },
  {
    icon: Users,
    title: "שחקן קבוצה",
    desc: "פותח חללים לחברים, לחיצה ראשונה על המוסר, מחויב למערכי קואצ׳ינג.",
  },
  {
    icon: Activity,
    title: "פתוח להעמסה",
    desc: "ללא היסטוריית פציעות מהותיות, חזרה לפעילות מלאה תוך 48ש לאחר משחק.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              אודות
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              שחקן <span className="text-foreground/40">·</span>{" "}
              <span
                className="rounded-md px-2 py-0.5"
                style={{ backgroundColor: "var(--brand-yellow)" }}
              >
                מקצוען
              </span>{" "}
              שמכבד את המשחק.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              גדלתי על דשא ולא ויתרתי על אף אימון. עברתי דרך מחלקות הנוער של מועדון ישראלי
              והתבססתי בליגת הבוגרות. אני מחפש מועדון שמעריך עבודה קשה, רעב למצבי שער
              ותרבות מנצחת — ומוכן לעבור לחו״ל בשלב הנכון של הקריירה.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b, i) => (
            <Reveal as="li" key={b.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-[var(--brand-yellow)] transition-transform group-hover:scale-110">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
