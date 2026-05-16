"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { detectFaces, loadImage, loadFaceModels } from "@/lib/face";

type ItemState = {
  name: string;
  status: "queued" | "uploading" | "detecting" | "done" | "error";
  faces?: number;
  error?: string;
};

export function UploadPhotos({ eventId }: { eventId: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<ItemState[]>([]);
  const [busy, setBusy] = useState(false);

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setBusy(true);
    setItems(files.map((f) => ({ name: f.name, status: "queued" })));

    await loadFaceModels();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, status: "uploading" } : it)));

        const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const storagePath = `${eventId}/${crypto.randomUUID()}.${ext}`;

        const { error: upErr } = await supabase.storage
          .from("photos")
          .upload(storagePath, file, { cacheControl: "31536000", upsert: false });
        if (upErr) throw upErr;

        setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, status: "detecting" } : it)));

        const url = URL.createObjectURL(file);
        const img = await loadImage(url);
        URL.revokeObjectURL(url);

        const { data: photo, error: phErr } = await supabase
          .from("photos")
          .insert({
            event_id: eventId,
            storage_path: storagePath,
            width: img.naturalWidth,
            height: img.naturalHeight,
          })
          .select()
          .single();
        if (phErr) throw phErr;

        const faces = await detectFaces(img);

        if (faces.length) {
          const rows = faces.map((f) => ({
            photo_id: photo.id,
            bbox: f.bbox,
            embedding: `[${f.embedding.join(",")}]`,
          }));
          const { error: fErr } = await supabase.from("faces").insert(rows);
          if (fErr) throw fErr;
        }

        setItems((prev) =>
          prev.map((it, idx) =>
            idx === i ? { ...it, status: "done", faces: faces.length } : it
          )
        );
      } catch (err) {
        setItems((prev) =>
          prev.map((it, idx) =>
            idx === i
              ? { ...it, status: "error", error: err instanceof Error ? err.message : String(err) }
              : it
          )
        );
      }
    }

    setBusy(false);
    if (inputRef.current) inputRef.current.value = "";
    router.refresh();
  }

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={onPick}
        disabled={busy}
        className="block text-sm"
      />
      <p className="text-xs text-muted-foreground">
        שים לב: זיהוי הפנים רץ בדפדפן. השאר את הטאב פתוח עד שכל התמונות יסיימו.
      </p>
      {items.length > 0 && (
        <ul className="space-y-1 text-sm font-mono">
          {items.map((it, i) => (
            <li key={i} className="flex justify-between gap-3">
              <span className="truncate">{it.name}</span>
              <span className="text-muted-foreground">
                {it.status === "done" && `✓ ${it.faces} פנים`}
                {it.status === "uploading" && "מעלה..."}
                {it.status === "detecting" && "מזהה פנים..."}
                {it.status === "queued" && "ממתין"}
                {it.status === "error" && `שגיאה: ${it.error}`}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
