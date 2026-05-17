"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./reveal";

export type FeaturedWedding = {
  id: string;
  slug: string;
  title: string;
  date: string;
  cover: string;
};

export function FeaturedWeddings({ items }: { items: FeaturedWedding[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section
      id="featured"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-12 sm:mb-16">
        <Reveal className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              סיפורים נבחרים
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              <span className="italic-display">חתונות</span> שאהבתי
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="הקודם"
              className="h-11 w-11 rounded-full border border-border-strong text-foreground/80 hover:text-foreground hover:border-foreground transition-colors flex items-center justify-center"
              data-cursor="hover"
            >
              <ArrowLeft size={16} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="הבא"
              className="h-11 w-11 rounded-full border border-border-strong text-foreground/80 hover:text-foreground hover:border-foreground transition-colors flex items-center justify-center"
              data-cursor="hover"
            >
              <ArrowLeft size={16} />
            </button>
          </div>
        </Reveal>
      </div>

      {items.length === 0 ? (
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-muted-foreground italic-display text-lg">
            עוד לא הוצגו כאן סיפורים — בקרוב.
          </p>
        </div>
      ) : (
        <div
          ref={trackRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-5 sm:px-8 pb-2"
          style={{ scrollPaddingInline: "1.25rem" }}
        >
          {items.map((w, idx) => (
            <Link
              key={w.id}
              href={`/events/${w.slug}`}
              className="snap-start shrink-0 w-[82vw] sm:w-[420px] md:w-[480px] group block"
              data-cursor="view"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <Image
                  src={w.cover}
                  alt={w.title}
                  fill
                  sizes="(min-width:768px) 480px, 82vw"
                  unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 left-4 flex justify-between items-start text-white text-[10px] tracking-[0.3em]">
                  <span>{w.date}</span>
                  <span>0{idx + 1} / 0{items.length}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 to-transparent">
                  <div className="text-white">
                    <div className="text-[10px] tracking-[0.35em] uppercase text-white/70 mb-2">
                      צפו בגלריה
                    </div>
                    <h3 className="font-display italic-display text-3xl leading-tight">
                      {w.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="shrink-0 w-5 sm:w-8" aria-hidden />
        </div>
      )}
    </section>
  );
}
