import Link from "next/link";
import { Upload, Calendar } from "lucide-react";
import { supabase, type Event } from "@/lib/supabase";
import { CreateEventForm } from "./create-event-form";
import { ShareLink } from "./share-link";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false });

  const list = (events as Event[] | null) ?? [];

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold mb-2">ניהול אירועים</h1>
      <p className="text-sm text-muted-foreground mb-8">
        כל אירוע מקבל קישור ציבורי שאפשר לשלוח לאורחים.
      </p>

      <section className="mb-12 rounded-lg border p-6">
        <h2 className="text-lg font-medium mb-4">אירוע חדש</h2>
        <CreateEventForm />
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">אירועים קיימים</h2>
        {list.length === 0 ? (
          <p className="text-sm text-muted-foreground">עדיין אין אירועים.</p>
        ) : (
          <ul className="space-y-3">
            {list.map((e) => (
              <li key={e.id} className="rounded-lg border p-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-medium truncate">{e.title}</div>
                    {e.date && (
                      <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {e.date}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/admin/events/${e.id}`}
                    className="inline-flex items-center gap-1.5 rounded bg-foreground text-background px-3 py-2 text-sm whitespace-nowrap"
                  >
                    <Upload className="h-4 w-4" />
                    העלאת תמונות
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <code className="text-xs text-muted-foreground truncate" dir="ltr">
                    /events/{e.slug}
                  </code>
                  <ShareLink path={`/events/${e.slug}`} variant="inline" />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
