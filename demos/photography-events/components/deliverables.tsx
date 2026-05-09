"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { Camera, Image as ImageIcon, BookOpen, Film } from "lucide-react";

const ITEMS = [
  {
    id: "photos",
    icon: Camera,
    title: "צילום מקצועי",
    line: "8 שעות · 800+ תמונות מעובדות",
    desc: "צילום באירוע מתחילתו ועד 02:00 בלילה. מצלמה אחת רגעים אינטימיים, מצלמה שנייה לתיעוד הקהל. תמונות מעובדות שמגיעות תוך 3 שבועות בגלריה דיגיטלית.",
    photo: "photo-golden",
  },
  {
    id: "magnets",
    icon: ImageIcon,
    title: "מגנטים על המקום",
    line: "250 מגנטים מודפסים · באירוע",
    desc: "נמצאים בעמדה מעוצבת עם הדפסה במקום. כל אורח לוקח הביתה מגנט עם תמונה משלו, מודפס תוך 2 דקות. הילדים אוהבים את זה במיוחד.",
    photo: "photo-rose",
  },
  {
    id: "book",
    icon: BookOpen,
    title: "אלבום פרימיום",
    line: "30×30 ס״מ · 60 עמודים · ידני",
    desc: "אלבום בכריכה קשה, נייר Hahnemühle, הדפסה על מכבש דיגיטלי גרמני. אני מעצבת בעצמי כל פריסה. מסירה אישית בקפה בתל אביב.",
    photo: "photo-ivory",
  },
  {
    id: "film",
    icon: Film,
    title: "סרטון 4-5 דקות",
    line: "מצולם בנפרד · עריכה קולנועית",
    desc: "אני עובדת בזוג עם וידאוגרף קבוע. הסרטון מקבל פסקול מותאם, סדרת ראיונות עם ההורים, וגרסה קצרה ל-Reels של אינסטגרם בנוסף.",
    photo: "photo-blue",
  },
];

export function Deliverables() {
  const [active, setActive] = useState(0);

  return (
    <section id="deliverables" className="py-24 sm:py-40 bg-noir text-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/60 mb-5">
            מה תקבלו
          </p>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
            <span>חבילה אחת. </span>
            <span className="italic-display">ארבעה מוצרים.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-stretch">
          {/* Left: tabs */}
          <div className="space-y-2">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              const isActive = i === active;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  data-cursor-label={isActive ? "פעיל" : "בחרו"}
                  className={`w-full text-start py-6 sm:py-8 border-t border-bg/15 transition-all ${
                    isActive ? "border-bg/60" : "hover:border-bg/40"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span className={`mt-1 transition-colors ${isActive ? "text-bg" : "text-bg/40"}`}>
                      <Icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`font-display text-2xl sm:text-3xl mb-1 transition-colors ${
                          isActive ? "text-bg" : "text-bg/50"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm font-mono uppercase tracking-wider transition-colors ${
                          isActive ? "text-bg/70" : "text-bg/30"
                        }`}
                      >
                        {item.line}
                      </p>
                      {isActive && (
                        <p className="mt-4 text-bg/80 italic-display text-lg leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span
                      className={`font-mono text-xs tabular-nums transition-colors mt-2 ${
                        isActive ? "text-bg/70" : "text-bg/30"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: photo preview */}
          <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden order-first lg:order-last">
            {ITEMS.map((item, i) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                } ${item.photo}`}
                data-cursor="image"
              />
            ))}
            <div className="absolute bottom-5 inset-x-5 flex items-end justify-between text-bg">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                Sample Frame
              </span>
              <span className="font-mono text-xs tabular-nums">
                {String(active + 1).padStart(2, "0")} / 0{ITEMS.length}
              </span>
            </div>
          </div>
        </div>

        <Reveal delay={300} className="mt-20 text-center">
          <p className="font-display text-2xl sm:text-3xl text-bg/80 italic max-w-2xl mx-auto leading-relaxed">
            כל החבילות כוללות חזרה אחת לבחירת תמונות, גלריה דיגיטלית לאורחים, ופגישת מסירה אישית בתל אביב.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
