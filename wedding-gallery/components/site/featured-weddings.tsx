"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./reveal";

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const FEATURED = [
  {
    id: "f1",
    couple: "Adva & Tomer",
    date: "FEB 2025",
    location: "Tel Aviv",
    teaser:
      "Where laughter outshone the lights and the dancefloor never closed.",
    cover: u("photo-1519741497674-611481863552"),
  },
  {
    id: "f2",
    couple: "Mika & Yotam",
    date: "JUN 2024",
    location: "Jerusalem Hills",
    teaser:
      "A quiet morning chuppah at sunrise — and a story that hasn't stopped.",
    cover: u("photo-1606800052052-a08af7148866"),
  },
  {
    id: "f3",
    couple: "Noa & Idan",
    date: "SEP 2024",
    location: "The Galilee",
    teaser:
      "Lake-side vows, hand-drawn ketuba, and four hundred dancing souls.",
    cover: u("photo-1464366400600-7168b8af9bc3"),
  },
  {
    id: "f4",
    couple: "Tamar & Asaf",
    date: "APR 2024",
    location: "Caesarea",
    teaser: "Mediterranean wind, white linen, and the loudest 'yes' I've heard.",
    cover: u("photo-1525772764200-be829a350797"),
  },
  {
    id: "f5",
    couple: "Yael & Daniel",
    date: "NOV 2023",
    location: "Sde Boker",
    teaser: "Desert at golden hour. Just them, just the wind, just the camera.",
    cover: u("photo-1583939003579-730e3918a45a"),
  },
];

export function FeaturedWeddings() {
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

      <div
        ref={trackRef}
        className="flex gap-5 sm:gap-7 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-5 sm:px-8 pb-2"
        style={{ scrollPaddingInline: "1.25rem" }}
      >
        {FEATURED.map((w, idx) => (
          <article
            key={w.id}
            className="snap-start shrink-0 w-[82vw] sm:w-[420px] md:w-[480px] group"
            data-cursor="view"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <Image
                src={w.cover}
                alt={w.couple}
                fill
                sizes="(min-width:768px) 480px, 82vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 left-4 flex justify-between items-start text-white text-[10px] tracking-[0.3em]">
                <span>{w.date}</span>
                <span>0{idx + 1} / 0{FEATURED.length}</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 to-transparent">
                <div className="text-white">
                  <div className="text-[10px] tracking-[0.35em] uppercase text-white/70 mb-2">
                    {w.location}
                  </div>
                  <h3 className="font-display italic-display text-3xl leading-tight">
                    {w.couple}
                  </h3>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic-display leading-relaxed">
              {w.teaser}
            </p>
          </article>
        ))}
        <div className="shrink-0 w-5 sm:w-8" aria-hidden />
      </div>
    </section>
  );
}
