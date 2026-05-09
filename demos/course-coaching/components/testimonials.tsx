import { Reveal } from "./reveal";
import { Play, Quote, TrendingUp } from "lucide-react";

const VIDEO = [
  {
    name: "דנה כ.",
    city: "תל אביב",
    metric: "₪0 → ₪87K/חודש",
    days: "תוך 73 ימים",
    snippet: "ביום 28 סגרתי את הלקוח הראשון של ₪9,500. אדם פחות הזיע ממני.",
    hue: "from-conversion to-conversion-2",
  },
  {
    name: "ר.ס.",
    city: "חיפה",
    metric: "₪14K → ₪118K",
    days: "תוך 86 ימים",
    snippet: "המנגנון של מערכת השכר עבד מהשבוע הראשון. החוב על המשכורות נסגר.",
    hue: "from-conversion-2 to-success",
  },
  {
    name: "יואב מ.",
    city: "באר שבע",
    metric: "₪22K → ₪140K",
    days: "תוך 88 ימים",
    snippet: "הצוות הראשון של 2 VA שגייסתי בעקבות התוכנית עובד עד היום, חצי שנה.",
    hue: "from-success to-conversion",
  },
];

const TEXT = [
  {
    quote: "בשבוע 6 הבנתי שאני לא צריך לעבוד 14 שעות. שיטת ההצעה המשלימה לבד עשתה לי ₪40K נוספים בחודש הבא.",
    name: "מ.ל.",
    role: "סוכנות שיווק",
  },
  {
    quote: "השיטה לעלות מ-₪2,500 ל-₪9,500 לפרויקט בלי לאבד לקוחות — זה השווי של כל הקורס. וזה רק שבוע 4.",
    name: "ש.ב.",
    role: "מאמן כושר אישי",
  },
  {
    quote: "₪97 לקורס דיגיטלי? הסקריפט של ה-discovery call לבדו הצדיק את כל ההשקעה. אני סוגר היום 2 מתוך 3 שיחות.",
    name: "ע.ר.",
    role: "עורכת דין",
  },
  {
    quote: "האמת? קניתי כי הייתי בייאוש. יצאתי עם מודל עסקי שאני לא מתבייש בו, ולא משלם לי משכורת קרובה למינימום.",
    name: "ד.ק.",
    role: "סטודיו עיצוב",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-3 font-bold">
            תוצאות אמיתיות
          </p>
          <h2 className="big-num text-3xl sm:text-5xl text-fg leading-tight">
            <span className="text-conversion">2,847</span> יזמים
            <br />
            שעברו את התוכנית.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {VIDEO.map((v, i) => (
            <Reveal key={v.name} delay={i * 80}>
              <article className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-border bg-bg-2 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.hue} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-2 via-bg-2/40 to-transparent" />

                <div className="absolute top-4 start-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-conversion text-bg-2 text-xs font-bold">
                    <TrendingUp className="size-3" />
                    {v.metric}
                  </div>
                </div>

                <div className="absolute inset-0 grid place-items-center">
                  <div className="size-16 rounded-full bg-conversion grid place-items-center group-hover:scale-110 transition-transform">
                    <Play className="size-7 text-bg-2 fill-bg-2 ms-1" />
                  </div>
                </div>

                <div className="absolute bottom-5 inset-x-5 text-fg">
                  <p className="text-sm leading-snug mb-3 line-clamp-3">
                    „{v.snippet}"
                  </p>
                  <div className="flex items-baseline justify-between text-xs">
                    <strong>{v.name} · {v.city}</strong>
                    <span className="text-fg-muted">{v.days}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TEXT.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="rounded-lg border border-border bg-bg-2 p-6">
                <Quote className="size-5 text-conversion mb-4" />
                <blockquote className="text-fg leading-relaxed">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm text-fg-muted">
                  — <strong className="text-fg">{t.name}</strong> · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
