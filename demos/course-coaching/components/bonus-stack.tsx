import { Reveal } from "./reveal";
import { Gift } from "lucide-react";

const BONUSES = [
  {
    title: "תבניות החוזה והקמפיין שלי",
    desc: "ה-pack המלא של 14 חוזים, הצעות מחיר וקמפיינים שעובדים ב-2026.",
    value: "₪1,490",
  },
  {
    title: "פגישת אבחון 1:1 עם אדם",
    desc: "שיחת אבחון של 60 דקות בה אנחנו מאתרים יחד את המכשול הכי גדול שלך.",
    value: "₪2,400",
  },
  {
    title: "Notion-template של עסק שעובד",
    desc: "המערכת המדויקת שאני משתמש בה ב-3 העסקים שלי. CRM, פיננסים, SOP.",
    value: "₪890",
  },
  {
    title: "קהילה סגורה (לכל החיים)",
    desc: "Discord פעיל עם 1,200 חברים. AMA חודשי איתי. גישה לחיים.",
    value: "₪3,600",
  },
];

const TOTAL = "₪8,380";

export function BonusStack() {
  return (
    <section className="py-20 sm:py-28 bg-bg-2">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-3 font-bold">
            בונוסים
          </p>
          <h2 className="big-num text-3xl sm:text-5xl text-fg">
            ועוד 4 בונוסים
            <br />
            <span className="text-conversion">בשווי {TOTAL}</span>
          </h2>
          <p className="mt-4 text-fg-muted">
            כולם מקבלים כל דבר ברשימה. ללא תוספת תשלום. ללא upsell.
          </p>
        </Reveal>

        <div className="space-y-3">
          {BONUSES.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <article className="rounded-lg border border-border bg-bg p-5 sm:p-6 flex items-start gap-5">
                <div className="size-12 rounded-md bg-conversion/15 grid place-items-center text-conversion shrink-0">
                  <Gift className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                    <h3 className="font-bold text-fg text-lg">{b.title}</h3>
                    <span className="strike text-base" dir="ltr">{b.value}</span>
                  </div>
                  <p className="text-sm text-fg-muted">{b.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 text-center">
          <div className="inline-flex flex-col items-center gap-1 px-8 py-5 rounded-lg border-2 border-conversion bg-bg">
            <div className="text-xs uppercase tracking-wider text-fg-muted font-mono">
              שווי כולל של בונוסים
            </div>
            <div className="big-num text-4xl text-conversion" dir="ltr">
              {TOTAL}
            </div>
            <div className="text-fg-muted text-sm">בחינם · רק עם הרשמה היום</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
