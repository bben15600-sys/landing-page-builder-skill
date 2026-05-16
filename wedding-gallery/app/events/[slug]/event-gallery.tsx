"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { detectFaceFromFile, loadFaceModels } from "@/lib/face";

type Item = { id: string; url: string };

export function EventGallery({ eventId, photos }: { eventId: string; photos: Item[] }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [matches, setMatches] = useState<Set<string> | null>(null);
  const [searched, setSearched] = useState(false);

  async function onSelfie(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      await loadFaceModels();
      const faces = await detectFaceFromFile(file);
      if (faces.length === 0) {
        throw new Error("לא זיהיתי פנים בתמונה — נסה תמונה ברורה יותר");
      }
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
      setSearched(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function clearSearch() {
    setMatches(null);
    setSearched(false);
    setError(null);
  }

  const shown = matches ? photos.filter((p) => matches.has(p.id)) : photos;

  return (
    <>
      <section className="mb-8 rounded-lg border p-6 text-center">
        <h2 className="text-lg font-medium mb-2">מצא את עצמך בתמונות</h2>
        <p className="text-sm text-muted-foreground mb-4">
          העלה סלפי, ונציג רק את התמונות שאתה מופיע בהן
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <label className="rounded bg-foreground text-background px-4 py-2 cursor-pointer">
            {busy ? "מחפש..." : matches ? "סלפי אחר" : "העלה סלפי"}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              capture="user"
              onChange={onSelfie}
              disabled={busy}
              className="hidden"
            />
          </label>
          {searched && (
            <button onClick={clearSearch} className="rounded border px-4 py-2">
              נקה
            </button>
          )}
        </div>
        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        {searched && !error && (
          <p className="mt-3 text-sm text-muted-foreground">
            נמצאו {shown.length} תמונות שאתה מופיע בהן
          </p>
        )}
      </section>

      {shown.length === 0 ? (
        <p className="text-center text-muted-foreground">
          {searched ? "לא מצאנו תמונות שלך" : "עדיין אין תמונות בגלריה"}
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {shown.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded bg-muted block"
            >
              <img src={p.url} alt="" className="w-full h-full object-cover hover:scale-105 transition" />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
