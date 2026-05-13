"use client";

import Image from "next/image";
import { useState } from "react";
import { allPhotos, siteConfig } from "./site-config";
import { Lightbox } from "./lightbox";
import { Reveal } from "./reveal";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const photos = allPhotos;

  const open = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            הגלריה
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">רגעים</span> שתיעדתי
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
            לחיצה על תמונה לתצוגה מלאה · חיצים לניווט · Esc לסגירה
          </p>
        </Reveal>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
          {photos.map((photo, i) => {
            const ratio = photo.height / photo.width;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => open(i)}
                aria-label={`פתח תמונה ${i + 1} מתוך ${photos.length}`}
                data-cursor="view"
                className="mb-3 sm:mb-4 break-inside-avoid group relative overflow-hidden bg-card block w-full focus:outline-none focus:ring-1 focus:ring-foreground"
              >
                <div
                  className="relative w-full"
                  style={{ paddingTop: `${ratio * 100}%` }}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    loading={i < 8 ? "eager" : "lazy"}
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            );
          })}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            {siteConfig.event.totalPhotos.toLocaleString("he-IL")} תמונות בארכיון —{" "}
            <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
              צרו קשר לתיק עבודות מלא
            </a>
          </p>
        </Reveal>
      </div>

      <Lightbox
        open={lightboxOpen}
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
