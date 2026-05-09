"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { Plus, Minus } from "lucide-react";

const FAQ = [
  {
    q: "כמה זמן אני צריך להשקיע בשבוע?",
    a: "בערך 5-7 שעות בשבוע — שעתיים שיעורים, שעה פגישת 1:1, ושאר הזמן יישום. כולם נשארים מסוגלים לעבוד במקביל.",
  },
  {
    q: "מה אם אני לא רואה תוצאות אחרי 30 יום?",
    a: "אחריות מלאה. שולחים מייל, מקבלים החזר תוך 5 ימי עסקים. ללא שאלות, ללא תנאים.",
  },
  {
    q: "אני בעסק ב-15 שנה. זה עדיין רלוונטי לי?",
    a: "כן — ובמיוחד לך. הרבה תלמידים שלי באים מ-Mature businesses ומגלים שיש להם blind spots ב-pricing ובמערכות. מומלץ למלא את שאלון ההתאמה כדי שנוודא יחד.",
  },
  {
    q: "האם הקורס בעברית? האם הוא מותאם לחוקים בישראל?",
    a: "100%. הקורס בעברית, הסקריפטים בעברית, החוזים מתאימים לחוקי ישראל, התבניות הפיננסיות עם רואה חשבון ישראלי, וכל ההמלצות לכלים — Bit, Cardcom, Tranzila, n8n — מותאמות לשוק המקומי.",
  },
  {
    q: "האם אני מקבל גישה לאדם באופן ישיר?",
    a: "כן. פגישת 1:1 שבועית של 30 דקות. בנוסף, יש קהילה סגורה ב-Discord עם AMA חודשי איתי. אני עונה אישית.",
  },
  {
    q: "מתי הקבוצה הבאה מתחילה?",
    a: "הקבוצה הקרובה מתחילה ב-9 במאי 2026. מקסימום 50 תלמידים — 23 מקומות נותרו. אחרי שזה נסגר, הקבוצה הבאה תיפתח באוקטובר 2026.",
  },
  {
    q: "האם אני מקבל חשבונית מס?",
    a: "כמובן. תוך 24 שעות מהתשלום. אפשר להוציא את ההוצאה מול עוסק מורשה / חברה.",
  },
  {
    q: "אני יכולה לשלם ב-12 תשלומים?",
    a: "כן. ₪299 לחודש למשך 12 חודשים. ללא ריבית, ללא הצמדה. דרך Cardcom/Tranzila/Apple Pay.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-2">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-3 font-bold">
            שאלות נפוצות
          </p>
          <h2 className="big-num text-3xl sm:text-5xl text-fg">
            קודם, נתחיל ב<span className="text-conversion">חששות שלך.</span>
          </h2>
        </Reveal>

        <div className="space-y-2">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 30}>
              <article className="rounded-md border border-border bg-bg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-start px-5 py-4 flex items-center gap-4"
                >
                  <span className="flex-1 font-bold text-fg">{item.q}</span>
                  {open === i ? (
                    <Minus className="size-5 text-conversion shrink-0" />
                  ) : (
                    <Plus className="size-5 text-fg-muted shrink-0" />
                  )}
                </button>
                {open === i && (
                  <div className="px-5 pb-5 -mt-1 text-fg-muted leading-relaxed">
                    {item.a}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
