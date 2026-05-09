import { Reveal } from "./reveal";

const QUOTES = [
  {
    quote:
      "התחתנו בענבר באוקטובר ואני עדיין מקבלת מהאורחים תמונות וטקסטים על איך זה היה האירוע הכי יפה שהם היו בו. תודה רבה למיכל על הסבלנות והאהבה בכל פרט.",
    author: "שני וניר",
    season: "סתיו 2024",
    portrait: "rose",
  },
  {
    quote:
      "בחרנו אחרי שראינו 12 גנים אחרים. ההבדל באחוזה הוא שאת מרגישה שהכל אישי — אין שני אירועים באותו ערב, יש מנהל אירוע אחד שצמוד אלייך, והאוכל פשוט בלתי-נשכח.",
    author: "מאיה ויובל",
    season: "אביב 2025",
    portrait: "sage",
  },
  {
    quote:
      "האחוזה כשרה למהדרין אבל הרגשנו אפס פשרות בעיצוב. הצוות יודע לעבוד עם משפחות דתיות ומסורתיות בלי שתרגישו שמשהו נקרע פה.",
    author: "תהילה ודוד",
    season: "חורף 2024",
    portrait: "gold",
  },
];

const PORTRAIT_STYLES = {
  rose: "from-rose/50 to-blush/30",
  sage: "from-accent-2/40 to-accent/30",
  gold: "from-accent/40 to-rose/20",
} as const;

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-surface-2/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
            המלצות
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-fg italic-display text-accent">
            מה זוגות אומרים.
          </h2>
        </Reveal>

        <div className="space-y-12 sm:space-y-16">
          {QUOTES.map((q, i) => (
            <Reveal key={q.author} delay={i * 100}>
              <figure
                className={`flex flex-col ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-center gap-8 sm:gap-12`}
              >
                <div
                  className={`size-32 sm:size-44 rounded-full bg-gradient-to-br ${
                    PORTRAIT_STYLES[q.portrait as keyof typeof PORTRAIT_STYLES]
                  } shrink-0 grid place-items-center font-display text-4xl text-bg/80`}
                >
                  {q.author.split(" ")[0][0]}
                </div>
                <div className="flex-1 text-center sm:text-start">
                  <blockquote className="font-display text-2xl sm:text-3xl text-fg leading-relaxed italic-display">
                    „{q.quote}"
                  </blockquote>
                  <figcaption className="mt-5">
                    <div className="font-display text-xl text-fg">{q.author}</div>
                    <div className="text-sm text-fg-subtle font-mono uppercase tracking-widest mt-1">
                      {q.season}
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
