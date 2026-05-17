"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight, Download, Heart, Share2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = { id: string; url: string };

type Props = {
  open: boolean;
  photos: LightboxItem[];
  index: number;
  eventTitle: string;
  favorites: Set<string>;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  onToggleFavorite: (id: string) => void;
};

export function EventLightbox({
  open,
  photos,
  index,
  eventTitle,
  favorites,
  onClose,
  onIndexChange,
  onToggleFavorite,
}: Props) {
  const [showShare, setShowShare] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const photo = photos[index];
  const total = photos.length;

  const next = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index + 1) % total);
    setShowShare(false);
  }, [index, total, onIndexChange]);

  const prev = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index - 1 + total) % total);
    setShowShare(false);
  }, [index, total, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") next();
      else if (e.key === "ArrowRight") prev();
      else if (e.key === "f" || e.key === "F") {
        if (photo) onToggleFavorite(photo.id);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev, photo, onToggleFavorite]);

  if (!open || !photo) return null;

  const isFav = favorites.has(photo.id);

  const onPointerDown = (e: ReactPointerEvent) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const onPointerUp = (e: ReactPointerEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.clientX - touchStartX.current;
    const dy = e.clientY - touchStartY.current;
    if (Math.abs(dx) > 50 && Math.abs(dy) < 60) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const shareWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `תמונה מתוך הגלריה של ${eventTitle} · ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setShowShare(false);
  };

  const copyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {}
    setShowShare(false);
  };

  const downloadOne = async () => {
    try {
      const res = await fetch(photo.url, { mode: "cors" });
      const blob = await res.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${eventTitle}-${index + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } catch {
      window.open(photo.url, "_blank", "noopener");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 h-14 text-white border-b border-white/10">
        <div className="text-sm tabular-nums">
          <span>{index + 1}</span>
          <span className="text-white/40"> / </span>
          <span className="text-white/60">{total}</span>
        </div>
        <div className="flex items-center gap-1">
          <IconBtn label={isFav ? "הסר ממועדפים" : "הוסף למועדפים"} onClick={() => onToggleFavorite(photo.id)}>
            <Heart size={18} className={cn(isFav && "fill-red-500 text-red-500")} />
          </IconBtn>
          <div className="relative">
            <IconBtn label="שיתוף" onClick={() => setShowShare((v) => !v)} active={showShare}>
              <Share2 size={18} />
            </IconBtn>
            {showShare && (
              <div className="absolute top-full mt-2 left-0 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl p-1.5 min-w-[180px] z-10">
                <button
                  type="button"
                  onClick={shareWhatsApp}
                  className="w-full text-right px-3 py-2 text-sm rounded-md hover:bg-white/10 flex items-center gap-2 text-white"
                >
                  <span className="text-green-500">●</span>
                  שתף בוואטסאפ
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="w-full text-right px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white"
                >
                  העתק קישור
                </button>
              </div>
            )}
          </div>
          <IconBtn label="הורדה" onClick={downloadOne}>
            <Download size={18} />
          </IconBtn>
          <div className="w-px h-6 bg-white/10 mx-1" />
          <IconBtn label="סגירה" onClick={onClose}>
            <X size={20} />
          </IconBtn>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden flex items-center justify-center px-2 sm:px-12">
        <button
          type="button"
          onClick={prev}
          aria-label="הקודם"
          className="hidden sm:flex absolute right-4 z-10 h-12 w-12 rounded-full border border-white/20 text-white items-center justify-center hover:bg-white/10"
        >
          <ChevronRight size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="הבא"
          className="hidden sm:flex absolute left-4 z-10 h-12 w-12 rounded-full border border-white/20 text-white items-center justify-center hover:bg-white/10"
        >
          <ChevronLeft size={22} />
        </button>

        <img
          key={photo.id}
          src={photo.url}
          alt=""
          className="max-w-full max-h-full object-contain select-none"
          draggable={false}
        />
      </div>

      <div className="sm:hidden flex items-center justify-around h-14 border-t border-white/10 text-white">
        <button type="button" onClick={prev} aria-label="הקודם" className="flex-1 h-full flex items-center justify-center">
          <ChevronRight size={22} />
        </button>
        <button type="button" onClick={next} aria-label="הבא" className="flex-1 h-full flex items-center justify-center">
          <ChevronLeft size={22} />
        </button>
      </div>
    </div>
  );
}

function IconBtn({
  children,
  onClick,
  label,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full",
        "text-white/80 hover:text-white hover:bg-white/10",
        active && "bg-white/10 text-white"
      )}
    >
      {children}
    </button>
  );
}
