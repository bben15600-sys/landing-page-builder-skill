"use client";

import { useEffect, useRef, useState } from "react";

const FRAMES = [
  { photo: "photo-frame-prep", caption: "12:47 · האחוזה מוארת ע״י השמש האחרונה. נועה לבד בחדר ההכנות. דקה לפני שכולם נכנסים." },
  { photo: "photo-frame-hug", caption: "13:22 · סבתא מחבקת אותה לראשונה כלה. אני עוד לא יכולה לדבר אבל המצלמה כן." },
  { photo: "photo-frame-walk", caption: "14:08 · הם הולכים לחופה. שני זוגות נעליים, רעיון שלם של חיים שמתחיל פה." },
  { photo: "photo-frame-dance", caption: "16:55 · הריקוד הראשון שלהם. כל האורחים יושבים. הם בלעדיהם, רק שניהם." },
  { photo: "photo-frame-party", caption: "23:41 · הריקוד הסוער של החברים. הקצב כל-כך גבוה שהמצלמה צריכה להתחנן." },
  { photo: "photo-frame-late", caption: "01:17 · השמיים פתוחים מעל הגן. הם נשארים אחרונים. תמיד יש את הרגע הזה." },
];

export function SeriesEssay() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const idx = Math.min(FRAMES.length - 1, Math.floor(progress * FRAMES.length));
      setActiveFrame(idx);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative bg-noir text-bg"
      style={{ height: `${FRAMES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Frames */}
        {FRAMES.map((f, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === activeFrame ? "opacity-100" : "opacity-0"
            } ${f.photo}`}
            data-cursor="image"
          />
        ))}

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.05 0 0 / 0.7) 100%)" }}
        />

        {/* Top header */}
        <div className="absolute top-10 sm:top-16 inset-x-0 z-10">
          <div className="mx-auto max-w-7xl px-5 sm:px-10 flex justify-between items-baseline">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/70">
              סיפור אחד · החתונה של ש & נ · 14.10.2025
            </span>
            <span className="font-mono text-[11px] tabular-nums text-bg/80">
              {String(activeFrame + 1).padStart(2, "0")} / {String(FRAMES.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute bottom-16 sm:bottom-24 inset-x-0 z-10">
          <div className="mx-auto max-w-3xl px-5 sm:px-10">
            {FRAMES.map((f, i) => (
              <p
                key={i}
                className={`absolute inset-x-5 sm:inset-x-10 italic-display text-bg text-2xl sm:text-3xl leading-relaxed transition-opacity duration-700 ${
                  i === activeFrame ? "opacity-100" : "opacity-0"
                }`}
              >
                „{f.caption}"
              </p>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-bg/20">
          <div
            className="h-full bg-bg transition-[width] duration-500"
            style={{ width: `${((activeFrame + 1) / FRAMES.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
