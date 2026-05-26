"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

export function Gallery() {
  const photos = siteConfig.gallery;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            מהשטח
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            רחבות <span className="neon-gradient">מלאות</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            רגעים מאירועים אמיתיים. ככה זה נראה כשהאנרגיה במקום.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.id}
              delay={(i % 4) * 60}
              className={cn("tall" in photo && photo.tall && "row-span-2")}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors mix-blend-screen" />
                <span className="absolute bottom-3 right-3 text-xs tracking-wider text-foreground/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="סגירה"
            className="absolute top-5 right-5 h-11 w-11 rounded-full border border-border-strong text-foreground flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            onClick={() => setActive(null)}
          >
            <X size={20} />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[active].src.replace("w=1600", "w=2000")}
              alt={photos[active].label}
              fill
              sizes="100vw"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
