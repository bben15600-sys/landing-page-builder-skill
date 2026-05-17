"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Camera, Download, Heart, Loader2, Search, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { detectFaceFromFile, loadFaceModels } from "@/lib/face";
import { cn } from "@/lib/utils";
import { EventLightbox, type LightboxItem } from "./event-lightbox";

type Tab = "all" | "favorites" | "mine";

export function EventGallery({
  eventId,
  eventTitle,
  photos,
}: {
  eventId: string;
  eventTitle: string;
  photos: LightboxItem[];
}) {
  const favKey = `event-favs:${eventId}`;
  const inputRef = useRef<HTMLInputElement>(null);

  const [tab, setTab] = useState<Tab>("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [matches, setMatches] = useState<Set<string> | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [zipping, setZipping] = useState<{ done: number; total: number } | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(favKey);
      if (raw) setFavorites(new Set(JSON.parse(raw) as string[]));
    } catch {}
  }, [favKey]);

  function toggleFavorite(id: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(favKey, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }

  const visible = useMemo(() => {
    if (tab === "favorites") return photos.filter((p) => favorites.has(p.id));
    if (tab === "mine") return matches ? photos.filter((p) => matches.has(p.id)) : [];
    return photos;
  }, [tab, photos, favorites, matches]);

  async function onSelfie(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSearching(true);
    setSearchError(null);
    try {
      await loadFaceModels();
      const faces = await detectFaceFromFile(file);
      if (faces.length === 0) throw new Error("לא זיהינו פנים בתמונה — נסה תמונה ברורה יותר");
      const largest = faces.reduce((a, b) =>
        a.bbox.width * a.bbox.height > b.bbox.width * b.bbox.height ? a : b
      );
      const { data, error: rpcErr } = await supabase.rpc("match_faces", {
        query_embedding: `[${largest.embedding.join(",")}]`,
        event: eventId,
        match_count: 500,
        similarity_threshold: 0.5,
      });
      if (rpcErr) throw rpcErr;
      const ids = new Set<string>((data ?? []).map((r: { photo_id: string }) => r.photo_id));
      setMatches(ids);
      setTab("mine");
    } catch (err) {
      setSearchError(err instanceof Error ? err.message : String(err));
    } finally {
      setSearching(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function clearFaceSearch() {
    setMatches(null);
    setSearchError(null);
    setTab("all");
  }

  async function downloadVisible() {
    if (!visible.length || zipping) return;
    setZipping({ done: 0, total: visible.length });
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      for (let i = 0; i < visible.length; i++) {
        const p = visible[i];
        try {
          const res = await fetch(p.url, { mode: "cors" });
          const blob = await res.blob();
          const ext = (p.url.match(/\.([a-z0-9]+)(?:\?|$)/i)?.[1] || "jpg").toLowerCase();
          zip.file(`${String(i + 1).padStart(3, "0")}.${ext}`, blob);
        } catch {}
        setZipping({ done: i + 1, total: visible.length });
      }
      const out = await zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(out);
      const tabLabel = tab === "favorites" ? "מועדפים" : tab === "mine" ? "שלי" : "הכל";
      a.download = `${eventTitle} - ${tabLabel}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } finally {
      setZipping(null);
    }
  }

  return (
    <>
      <section className="mb-6 rounded-xl border bg-card p-5">
        <div className="flex items-start gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-base font-medium mb-1">מצא את עצמך בתמונות</h2>
            <p className="text-sm text-muted-foreground">
              העלה סלפי ונציג רק את התמונות שאתה מופיע בהן.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {matches && (
              <button
                type="button"
                onClick={clearFaceSearch}
                className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm hover:bg-muted"
              >
                <X className="h-4 w-4" />
                נקה חיפוש
              </button>
            )}
            <label className="inline-flex items-center gap-1.5 rounded-md bg-foreground text-background px-4 py-2 text-sm cursor-pointer">
              {searching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
              {searching ? "מחפש..." : matches ? "סלפי אחר" : "העלה סלפי"}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={onSelfie}
                disabled={searching}
                className="hidden"
              />
            </label>
          </div>
        </div>
        {searchError && <p className="mt-3 text-sm text-red-500">{searchError}</p>}
        {matches && !searchError && (
          <p className="mt-3 text-sm text-muted-foreground">
            נמצאו {matches.size} תמונות שאתה מופיע בהן.
          </p>
        )}
      </section>

      <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
        <div role="tablist" className="inline-flex rounded-md border bg-background overflow-hidden text-sm">
          <TabBtn active={tab === "all"} onClick={() => setTab("all")}>
            <Search className="h-3.5 w-3.5" />
            הכל
            <span className="opacity-60">({photos.length})</span>
          </TabBtn>
          <TabBtn active={tab === "favorites"} onClick={() => setTab("favorites")}>
            <Heart className={cn("h-3.5 w-3.5", favorites.size > 0 && "fill-red-500 text-red-500")} />
            מועדפים
            <span className="opacity-60">({favorites.size})</span>
          </TabBtn>
          {matches && (
            <TabBtn active={tab === "mine"} onClick={() => setTab("mine")}>
              <Camera className="h-3.5 w-3.5" />
              שלי
              <span className="opacity-60">({matches.size})</span>
            </TabBtn>
          )}
        </div>
        <button
          type="button"
          onClick={downloadVisible}
          disabled={!visible.length || !!zipping}
          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm hover:bg-muted disabled:opacity-50 disabled:hover:bg-transparent"
        >
          {zipping ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {zipping.done}/{zipping.total}
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              הורד הכל (ZIP)
            </>
          )}
        </button>
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          {tab === "favorites"
            ? "עדיין אין תמונות במועדפים. לחץ על הלב על תמונה כדי לשמור."
            : tab === "mine"
              ? "לא מצאנו תמונות שלך בגלריה."
              : "עדיין אין תמונות בגלריה."}
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {visible.map((p, i) => {
            const fav = favorites.has(p.id);
            return (
              <div key={p.id} className="relative group aspect-square overflow-hidden rounded bg-muted">
                <button
                  type="button"
                  onClick={() => setLightboxIdx(i)}
                  className="absolute inset-0 w-full h-full"
                  aria-label="פתח תמונה"
                >
                  <img
                    src={p.url}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => toggleFavorite(p.id)}
                  aria-label={fav ? "הסר ממועדפים" : "הוסף למועדפים"}
                  className={cn(
                    "absolute top-2 left-2 h-9 w-9 rounded-full flex items-center justify-center",
                    "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60",
                    "opacity-0 group-hover:opacity-100 transition-opacity",
                    fav && "opacity-100"
                  )}
                >
                  <Heart className={cn("h-4 w-4", fav && "fill-red-500 text-red-500")} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      <EventLightbox
        open={lightboxIdx !== null}
        photos={visible}
        index={lightboxIdx ?? 0}
        eventTitle={eventTitle}
        favorites={favorites}
        onClose={() => setLightboxIdx(null)}
        onIndexChange={setLightboxIdx}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-2",
        active ? "bg-foreground text-background" : "hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}
