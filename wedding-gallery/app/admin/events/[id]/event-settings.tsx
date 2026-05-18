"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save, Trash2 } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabase-browser";
import type { Event } from "@/lib/supabase";

export function EventSettings({ event }: { event: Event }) {
  const router = useRouter();
  const [title, setTitle] = useState(event.title);
  const [slug, setSlug] = useState(event.slug);
  const [date, setDate] = useState(event.date ?? "");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const { error } = await supabaseBrowser()
      .from("events")
      .update({ title, slug, date: date || null })
      .eq("id", event.id);
    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSavedAt(Date.now());
    router.refresh();
  }

  async function clearCover() {
    setError(null);
    const { error } = await supabaseBrowser()
      .from("events")
      .update({ cover_url: null })
      .eq("id", event.id);
    if (error) {
      setError(error.message);
      return;
    }
    router.refresh();
  }

  async function deleteEvent() {
    if (
      !confirm(
        `למחוק את האירוע "${event.title}"? פעולה זו מוחקת את כל התמונות והפנים.`,
      )
    )
      return;
    setDeleting(true);
    setError(null);
    const { error } = await supabaseBrowser().from("events").delete().eq("id", event.id);
    if (error) {
      setDeleting(false);
      setError(error.message);
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={save} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm">שם האירוע</span>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm">תאריך</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            dir="ltr"
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm">Slug (URL)</span>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            dir="ltr"
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
          <span className="mt-1 block text-xs text-muted-foreground" dir="ltr">
            /events/{slug}
          </span>
        </label>
      </div>

      {event.cover_url && (
        <div className="flex items-center gap-3 rounded-md border p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.cover_url}
            alt=""
            className="h-12 w-12 rounded object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted-foreground">תמונת שער מותאמת</div>
            <div className="text-xs truncate" dir="ltr">{event.cover_url}</div>
          </div>
          <button
            type="button"
            onClick={clearCover}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            נקה
          </button>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm disabled:opacity-50"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          שמור שינויים
        </button>
        {savedAt && !saving && (
          <span className="text-xs text-muted-foreground">נשמר ✓</span>
        )}
        <button
          type="button"
          onClick={deleteEvent}
          disabled={deleting}
          className="inline-flex items-center gap-2 rounded-md border border-red-500/40 text-red-500 px-4 py-2 text-sm hover:bg-red-500/10 disabled:opacity-50"
        >
          {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
          מחק אירוע
        </button>
      </div>
    </form>
  );
}
