"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Heart, Share2, Trash2 } from "lucide-react";
import { allPhotos, siteConfig } from "./site-config";
import { useFavorites } from "./favorites-store";
import { Lightbox } from "./lightbox";
import { Reveal } from "./reveal";

export function FavoritesSection() {
  const { favorites, toggle, clear, size } = useFavorites();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const photos = useMemo(
    () => allPhotos.filter((p) => favorites.has(p.id)),
    [favorites],
  );

  const shareList = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `התמונות האהובות עליי מהחתונה של ${siteConfig.couple.bride} ו${siteConfig.couple.groom} (${size} תמונות) · ${url}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  return (
    <section
      id="favorites"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
              <Heart size={12} className="fill-accent text-accent" />
              שמורות אצלכם
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              <span className="italic-display">התמונות</span> שלי
            </h2>
            <p className="mt-3 text-muted-foreground">
              {size === 0
                ? "סמנו תמונות בלב כדי לשמור אותן כאן — נשמר במכשיר שלכם"
                : `${size.toLocaleString("he-IL")} תמונות נבחרות`}
            </p>
          </div>
          {size > 0 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={shareList}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
              >
                <Share2 size={14} />
                שיתוף בוואטסאפ
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm("לנקות את כל התמונות השמורות?")) clear();
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-red-500/50 hover:text-red-400 transition-colors text-sm"
              >
                <Trash2 size={14} />
                נקה
              </button>
            </div>
          )}
        </Reveal>

        {size === 0 ? (
          <div className="border border-dashed border-border rounded-sm p-12 sm:p-20 text-center">
            <Heart
              size={40}
              className="text-muted-foreground/50 mx-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md mx-auto">
              ריחפו מעל תמונה בגלריה ולחצו על הלב כדי לשמור אותה. הרשימה שלכם
              תופיע כאן ותישמר אוטומטית.
            </p>
            <a
              href="#gallery"
              className="mt-6 inline-block text-accent text-sm hover:underline underline-offset-4"
            >
              חזרה לגלריה →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden bg-card rounded-sm"
              >
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                  className="block w-full h-full"
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => toggle(photo.id)}
                  aria-label="הסר ממועדפים"
                  className="absolute top-2 left-2 h-8 w-8 rounded-full bg-accent text-background flex items-center justify-center"
                >
                  <Heart size={14} className="fill-background" />
                </button>
              </div>
            ))}
          </div>
        )}
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
