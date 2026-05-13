"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Photo } from "./site-config";
import { siteConfig } from "./site-config";

type Props = {
  open: boolean;
  photos: Photo[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

const ZOOM_LEVELS = [1, 1.75, 2.75];

export function Lightbox({
  open,
  photos,
  index,
  onClose,
  onIndexChange,
}: Props) {
  const [zoom, setZoom] = useState(1);
  const [showShare, setShowShare] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const photo = photos[index];
  const total = photos.length;

  const next = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index + 1) % total);
    setZoom(1);
    setShowShare(false);
  }, [index, total, onIndexChange]);

  const prev = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index - 1 + total) % total);
    setZoom(1);
    setShowShare(false);
  }, [index, total, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") next();
      else if (e.key === "ArrowRight") prev();
      else if (e.key === " ") {
        e.preventDefault();
        setZoom((z) => (z === 1 ? ZOOM_LEVELS[1] : 1));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  if (!open || !photo) return null;

  const onTouchStart = (e: ReactPointerEvent) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const onTouchEnd = (e: ReactPointerEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.clientX - touchStartX.current;
    const dy = e.clientY - touchStartY.current;
    if (zoom === 1 && Math.abs(dx) > 50 && Math.abs(dy) < 60) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const onWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      setZoom((z) => Math.max(1, Math.min(3.5, z - e.deltaY * 0.01)));
    }
  };

  const cycleZoom = () => {
    const i = ZOOM_LEVELS.indexOf(zoom);
    setZoom(ZOOM_LEVELS[(i + 1) % ZOOM_LEVELS.length] ?? 1);
  };

  const shareWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `תמונה מתוך הגלריה של ${siteConfig.couple.bride} & ${siteConfig.couple.groom} · ${url}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  const copyLink = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard?.writeText(window.location.href);
    setShowShare(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col animate-fade-in"
      role="dialog"
      aria-modal="true"
      onPointerDown={onTouchStart}
      onPointerUp={onTouchEnd}
      onWheel={onWheel}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 h-14 sm:h-16 text-white border-b border-white/10">
        <div className="flex items-center gap-2 text-sm tabular-nums">
          <span className="text-white">{index + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/60">{total}</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <IconBtn
            label={zoom > 1 ? "התרחקות" : "זום"}
            onClick={cycleZoom}
          >
            {zoom > 1 ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </IconBtn>
          <div className="relative">
            <IconBtn
              label="שיתוף"
              onClick={() => setShowShare((v) => !v)}
              active={showShare}
            >
              <Share2 size={18} />
            </IconBtn>
            {showShare && (
              <div className="absolute top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-2xl p-2 min-w-[200px] z-10 animate-fade-in">
                <button
                  type="button"
                  onClick={shareWhatsApp}
                  className="w-full text-right px-3 py-2 text-sm rounded-md hover:bg-card-hover transition-colors flex items-center gap-2"
                >
                  <span className="text-green-500">●</span>
                  שתף בוואטסאפ
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="w-full text-right px-3 py-2 text-sm rounded-md hover:bg-card-hover transition-colors"
                >
                  העתק קישור
                </button>
              </div>
            )}
          </div>
          <IconBtn label="הורדה" asLink href={photo.src} download>
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
          className="hidden sm:flex absolute right-4 z-10 h-12 w-12 rounded-full border border-white/20 text-white items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="הבא"
          className="hidden sm:flex absolute left-4 z-10 h-12 w-12 rounded-full border border-white/20 text-white items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transition: "transform 0.3s ease",
            transform: `scale(${zoom})`,
            cursor: zoom > 1 ? "zoom-out" : "zoom-in",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) cycleZoom();
          }}
        >
          <Image
            key={photo.id}
            src={photo.src}
            alt=""
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            priority
            className="max-w-full max-h-full w-auto h-auto object-contain select-none animate-fade-in"
            draggable={false}
          />
        </div>
      </div>

      <div className="sm:hidden flex items-center justify-around h-14 border-t border-white/10 text-white">
        <button
          type="button"
          onClick={prev}
          aria-label="הקודם"
          className="flex-1 h-full flex items-center justify-center"
        >
          <ChevronRight size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="הבא"
          className="flex-1 h-full flex items-center justify-center"
        >
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
  asLink,
  href,
  download,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
  active?: boolean;
  asLink?: boolean;
  href?: string;
  download?: boolean;
}) {
  const baseClass = cn(
    "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full",
    "border border-transparent text-white/80 hover:text-white hover:bg-white/10 transition-colors",
    active && "bg-white/10 text-white",
  );
  if (asLink && href) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={baseClass}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={baseClass}
    >
      {children}
    </button>
  );
}
