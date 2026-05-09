"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Promo bar with countdown */}
      <div className="bg-alarm text-fg text-center py-2 text-xs sm:text-sm font-bold tracking-wide">
        🔥 הרשמה נסגרת ב-9 במאי · נותרו 23 מקומות בלבד
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/85 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-black text-xl text-conversion">אדם</span>
            <span className="text-fg-subtle text-sm">לוי · מנטור</span>
          </Link>

          {scrolled && (
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-conversion text-bg-2 font-bold text-sm hover:opacity-90 transition-opacity urgent-pulse"
            >
              הירשמו עכשיו ←
            </a>
          )}
        </div>
      </header>
    </>
  );
}
