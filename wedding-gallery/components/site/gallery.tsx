"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Heart, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { allPhotos, siteConfig, type Photo } from "./site-config";
import { useFavorites } from "./favorites-store";
import { Lightbox } from "./lightbox";
import { Reveal } from "./reveal";

type Props = {
  activeAlbum: string | null;
  activeFace: string | null;
  searchQuery: string;
  onClearFilters: () => void;
};

function matchesQuery(photo: Photo, q: string) {
  if (!q.trim()) return true;
  const term = q.trim().toLowerCase();
  if (photo.tags?.some((t) => t.toLowerCase().includes(term))) return true;
  if (photo.album.toLowerCase().includes(term)) return true;
  const album = siteConfig.albums.find((a) => a.id === photo.album);
  if (album?.name.includes(q.trim())) return true;
  if (q.includes("ריקוד") && photo.album === "party") return true;
  if (q.includes("נשיקה") && photo.album === "ceremony") return true;
  if (q.includes("חופה") && photo.album === "ketuba") return true;
  if (q.includes("פרחים") && photo.album === "details") return true;
  if (q.includes("שמלה") && photo.album === "details") return true;
  if (q.includes("טבעות") && photo.album === "details") return true;
  if (q.includes("סבתא") && photo.album === "family") return true;
  return false;
}

export function Gallery({
  activeAlbum,
  activeFace,
  searchQuery,
  onClearFilters,
}: Props) {
  const { has, toggle } = useFavorites();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(() => {
    return allPhotos.filter((p) => {
      if (activeAlbum && p.album !== activeAlbum) return false;
      if (activeFace && !p.faces?.includes(activeFace)) return false;
      if (!matchesQuery(p, searchQuery)) return false;
      return true;
    });
  }, [activeAlbum, activeFace, searchQuery]);

  const activeAlbumName = activeAlbum
    ? siteConfig.albums.find((a) => a.id === activeAlbum)?.name
    : null;
  const activeFaceData = activeFace
    ? siteConfig.faces.find((f) => f.id === activeFace)
    : null;

  const hasFilter = activeAlbum || activeFace || searchQuery.trim();

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
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
              {hasFilter ? "תוצאות חיפוש" : "הגלריה המלאה"}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              {activeAlbumName ? (
                <>
                  <span className="italic-display text-muted-foreground">
                    אלבום ·
                  </span>{" "}
                  {activeAlbumName}
                </>
              ) : activeFaceData ? (
                <>
                  <span className="italic-display text-muted-foreground">
                    תמונות של ·
                  </span>{" "}
                  {activeFaceData.name ?? "פנים נבחרים"}
                </>
              ) : searchQuery.trim() ? (
                <>
                  <span className="italic-display text-muted-foreground">
                    חיפוש ·
                  </span>{" "}
                  &ldquo;{searchQuery}&rdquo;
                </>
              ) : (
                <>
                  כל <span className="italic-display">התמונות</span>
                </>
              )}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {filtered.length.toLocaleString("he-IL")} תמונות
              {!hasFilter && ` · מתוך ${siteConfig.event.totalPhotos.toLocaleString("he-IL")}`}
            </p>
          </div>
          {hasFilter && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-sm text-accent hover:underline underline-offset-4"
            >
              נקה סינון
            </button>
          )}
        </Reveal>

        {filtered.length === 0 ? (
          <div className="border border-border rounded-sm p-12 text-center">
            <ImageIcon
              size={36}
              className="text-muted-foreground mx-auto mb-4 opacity-40"
            />
            <p className="text-muted-foreground">
              לא נמצאו תמונות לחיפוש הזה
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-4 text-sm text-accent hover:underline"
            >
              חזרה לגלריה המלאה
            </button>
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
            {filtered.map((photo, i) => {
              const isFav = has(photo.id);
              const ratio = photo.height / photo.width;
              return (
                <div
                  key={photo.id}
                  className="mb-3 sm:mb-4 break-inside-avoid group relative overflow-hidden bg-card rounded-sm"
                >
                  <button
                    type="button"
                    onClick={() => open(i)}
                    className="block w-full focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={`פתח תמונה ${i + 1} מתוך ${filtered.length}`}
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
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(photo.id);
                    }}
                    aria-label={isFav ? "הסר ממועדפים" : "הוסף למועדפים"}
                    className={cn(
                      "absolute top-2 left-2 sm:top-3 sm:left-3 h-9 w-9 rounded-full",
                      "border border-white/30 backdrop-blur-md flex items-center justify-center",
                      "transition-all duration-300",
                      isFav
                        ? "bg-accent/90 text-background opacity-100 border-accent"
                        : "bg-black/30 text-white opacity-0 group-hover:opacity-100 hover:bg-black/50",
                    )}
                  >
                    <Heart
                      size={16}
                      className={cn(isFav && "fill-background")}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        photos={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
