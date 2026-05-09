"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { ChevronDown, Lock } from "lucide-react";

const MODULES = [
  {
    week: "שבועות 1-2",
    title: "מצב התחלה: מיפוי עומק של העסק שלך",
    lessons: 8,
    hours: "4.5 שעות",
    items: [
      "בדיקת התשואה האמיתית של כל מקור הכנסה",
      "זיהוי 3 ה-bottlenecks שמונעים גידול",
      "ניתוח Google Analytics + CRM (תבניות מוכנות)",
      "תרגיל: נסחו את הצעת הערך ב-1 משפט",
    ],
  },
  {
    week: "שבועות 3-4",
    title: "המכונה: בניית system שמייצר לידים בלעדיכם",
    lessons: 12,
    hours: "7 שעות",
    items: [
      "הקמת קמפיין Meta + Google שעובד 24/7",
      "סקריפטים לכל שלב במשפך (כולל Hebrew CTA)",
      "בניית CRM ב-Notion / Airtable (עם תבנית)",
      "אוטומציה של הודעות בוואטסאפ עם n8n",
    ],
  },
  {
    week: "שבועות 5-6",
    title: "סגירה: הסקריפט שמכניס 38% יותר עסקאות",
    lessons: 10,
    hours: "6 שעות",
    items: [
      "Discovery call של 22 דקות (תסריט מילה במילה)",
      "טיפול ב-5 ההתנגדויות הכי נפוצות (״יקר״, ״אני אחשוב״)",
      "Pre-close letter שמייצר 47% closing rate",
      "מדריך מחירים: ₪97 → ₪9,997 בלי לאבד לקוחות",
    ],
  },
  {
    week: "שבועות 7-8",
    title: "סקיילינג: מ-1 לעצמכם ל-3 גרסאות שמתפעלות בלעדיכם",
    lessons: 9,
    hours: "5 שעות",
    items: [
      "גיוס VA פיליפיני ב-₪25/שעה",
      "SOPs (Standard Operating Procedures) — תבניות מוכנות",
      "בנייה של Loom-onboarding שגומר בעצמו",
      "חוזה אחריות לעובדים (מדריך מותאם ישראל)",
    ],
  },
  {
    week: "שבועות 9-10",
    title: "פיננסיים: לוקחים שליטה על הכסף",
    lessons: 7,
    hours: "3.5 שעות",
    items: [
      "תבנית cashflow ל-12 חודשים",
      "סקירת מס הכנסה ובחירת מע״מ-מורשה / חברה",
      "פגישת מעקב עם רואה חשבון מומלץ",
      "מערכת הוצאה אוטומטית עם Cardcom + Tranzila",
    ],
  },
  {
    week: "שבועות 11-12",
    title: "המנוף: 10x הכנסות עם הצעה משלימה אחת",
    lessons: 6,
    hours: "3 שעות",
    items: [
      "זיהוי ה-Up-sell הטבעי שלך (תרגיל מבוסס נתונים)",
      "קמפיין email re-engagement שמייצר ₪50K נוספים",
      "מבנה affiliate / שותפויות עסקיות",
      "Demo Day — תכנית 90 הימים הבאים",
    ],
    locked: true,
  },
];

export function Curriculum() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-3 font-bold">
            תכנית הלימודים
          </p>
          <h2 className="big-num text-3xl sm:text-5xl text-fg">
            6 מודולים. 90 יום.
            <br />
            <span className="text-conversion">תוצאות שאפשר למדוד.</span>
          </h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-fg-muted">
            <span><strong className="text-fg">52</strong> שיעורים</span>
            <span>•</span>
            <span><strong className="text-fg">29 שעות</strong> וידאו</span>
            <span>•</span>
            <span><strong className="text-fg">12</strong> תבניות מוכנות</span>
            <span>•</span>
            <span><strong className="text-fg">פגישת 1-on-1</strong> בכל שבוע</span>
          </div>
        </Reveal>

        <div className="space-y-3">
          {MODULES.map((m, i) => (
            <Reveal key={m.week} delay={i * 50}>
              <article
                className={`rounded-lg border transition-colors ${
                  open === i
                    ? "border-conversion bg-bg-2"
                    : "border-border bg-bg-2/40 hover:border-border-strong"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-start px-5 sm:px-6 py-5 flex items-center gap-4"
                >
                  <span className="font-mono text-xs text-fg-subtle uppercase tracking-wider whitespace-nowrap">
                    {m.week}
                  </span>
                  <span className="hidden sm:block w-px h-6 bg-border" />
                  <span className="flex-1 font-bold text-fg text-base sm:text-lg">
                    {m.title}
                  </span>
                  <span className="hidden md:block text-xs text-fg-muted whitespace-nowrap">
                    {m.lessons} שיעורים · {m.hours}
                  </span>
                  {m.locked ? (
                    <Lock className="size-4 text-conversion shrink-0" />
                  ) : (
                    <ChevronDown
                      className={`size-5 text-fg-muted shrink-0 transition-transform ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {open === i && !m.locked && (
                  <div className="px-5 sm:px-6 pb-5 -mt-1 border-t border-border/40 pt-4">
                    <ul className="space-y-2.5 text-fg-muted">
                      {m.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="text-conversion mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
