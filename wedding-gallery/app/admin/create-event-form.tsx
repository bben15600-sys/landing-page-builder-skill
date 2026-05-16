"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

function slugify(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9֐-׿\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function CreateEventForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [slug, setSlug] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const finalSlug = slugify(slug || title);
    const { data, error } = await supabase
      .from("events")
      .insert({ title, slug: finalSlug, date: date || null })
      .select()
      .single();
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push(`/admin/events/${data.id}`);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-sm mb-1">שם האירוע</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="חתונה של דנה ויואב"
          className="w-full rounded border px-3 py-2 bg-transparent"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-sm mb-1">תאריך</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded border px-3 py-2 bg-transparent"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1">slug (קישור)</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="dana-yoav"
            className="w-full rounded border px-3 py-2 bg-transparent"
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        disabled={busy}
        className="rounded bg-foreground text-background px-4 py-2 disabled:opacity-50"
      >
        {busy ? "יוצר..." : "צור אירוע"}
      </button>
    </form>
  );
}
