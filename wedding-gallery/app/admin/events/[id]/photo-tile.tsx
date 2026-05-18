"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ImageIcon, Loader2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabaseBrowser } from "@/lib/supabase-browser";

type Props = {
  photoId: string;
  storagePath: string;
  url: string;
  eventId: string;
  isCover: boolean;
};

export function PhotoTile({ photoId, storagePath, url, eventId, isCover }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState<"cover" | "delete" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function setAsCover() {
    setBusy("cover");
    setError(null);
    const { error } = await supabaseBrowser()
      .from("events")
      .update({ cover_url: url })
      .eq("id", eventId);
    setBusy(null);
    if (error) {
      setError(error.message);
      return;
    }
    router.refresh();
  }

  async function deletePhoto() {
    if (!confirm("למחוק את התמונה?")) return;
    setBusy("delete");
    setError(null);
    const sb = supabaseBrowser();
    await sb.storage.from("photos").remove([storagePath]);
    const { error } = await sb.from("photos").delete().eq("id", photoId);
    if (error) {
      setBusy(null);
      setError(error.message);
      return;
    }
    router.refresh();
  }

  return (
    <div className="relative group aspect-square overflow-hidden rounded bg-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" loading="lazy" className="w-full h-full object-cover" />
      {isCover && (
        <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-foreground text-background px-2 py-1 text-[10px] tracking-wide">
          <Check className="h-3 w-3" />
          שער
        </span>
      )}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 p-2 flex gap-1.5",
          "bg-gradient-to-t from-black/70 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity",
        )}
      >
        <button
          type="button"
          onClick={setAsCover}
          disabled={busy !== null || isCover}
          aria-label="הגדר כשער"
          className="flex-1 inline-flex items-center justify-center gap-1 rounded bg-white/15 backdrop-blur-sm text-white text-xs py-1.5 hover:bg-white/25 disabled:opacity-40"
        >
          {busy === "cover" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <ImageIcon className="h-3.5 w-3.5" />
          )}
          הגדר כשער
        </button>
        <button
          type="button"
          onClick={deletePhoto}
          disabled={busy !== null}
          aria-label="מחק תמונה"
          className="inline-flex items-center justify-center gap-1 rounded bg-red-500/80 backdrop-blur-sm text-white text-xs px-2 py-1.5 hover:bg-red-500 disabled:opacity-40"
        >
          {busy === "delete" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Trash2 className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500/90 text-white text-xs p-2 text-center">
          {error}
        </div>
      )}
    </div>
  );
}
