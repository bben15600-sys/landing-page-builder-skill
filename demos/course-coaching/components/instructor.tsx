import { Reveal } from "./reveal";

export function Instructor() {
  return (
    <section id="instructor" className="py-20 sm:py-28 bg-bg-2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="mx-auto md:mx-0">
            <div
              className="size-56 sm:size-72 rounded-full p-1 bg-gradient-to-br from-conversion to-conversion-2 mx-auto"
              style={{ boxShadow: "0 0 60px oklch(0.88 0.20 95 / 0.3)" }}
            >
              <div
                className="size-full rounded-full grid place-items-center font-black text-9xl text-bg-2"
                style={{
                  background: "linear-gradient(180deg, oklch(0.78 0.16 80) 0%, oklch(0.62 0.18 60) 100%)",
                }}
              >
                א
              </div>
            </div>
            <div className="mt-5 text-center">
              <div className="font-bold text-2xl text-fg">אדם לוי</div>
              <div className="text-conversion font-mono text-xs uppercase tracking-wider mt-1">
                מנטור · יזם · מרצה
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-4 font-bold">
              קצת עליי
            </p>
            <h2 className="big-num text-3xl sm:text-5xl text-fg leading-tight">
              ב-2018 הייתי בחובות
              <br />
              של <span className="strike">₪380K</span>{" "}
              <span className="text-conversion">.0</span>
            </h2>
            <div className="mt-6 space-y-4 text-fg-muted leading-relaxed">
              <p>
                הקמתי את העסק הראשון שלי ב-2014 — סוכנות עיצוב באהוב הכרמל.
                4 שנים אחר כך, חוב של ₪380K, חתום על ערבויות אישיות, וצוות של
                7 שלא אהב אותי במיוחד.
              </p>
              <p>
                בשנתיים הבאות, פיתחתי שיטה שעבדה מצוין עליי — וגם על
                <strong className="text-fg"> 2,847 יזמים שעברו ליווי אישי </strong>
                מאז 2020.
              </p>
              <p>
                היום, אני מנהל 3 עסקים שעושים יחד מעל ₪14M שנתיים. אני לא עובד
                ביום שישי. אני לוקח קבוצה אחת בלבד פעמיים בשנה.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <Stat n="2,847" label="יזמים בלוויי" />
              <Stat n="₪14M" label="הכנסה שנתית" />
              <Stat n="14 שנה" label="ניסיון" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-bg p-4 text-center">
      <div className="big-num text-2xl text-conversion" dir="ltr">
        {n}
      </div>
      <div className="text-xs text-fg-muted mt-1">{label}</div>
    </div>
  );
}
