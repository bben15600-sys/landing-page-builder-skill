import Link from "next/link";
import { supabase, type Event } from "@/lib/supabase";
import { CreateEventForm } from "./create-event-form";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false });

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
        {(events as Event[] | null)?.length ? (
          <ul className="space-y-3">
            {(events as Event[]).map((e) => (
              <li key={e.id} className="flex items-center justify-between rounded border p-4">
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-sm text-muted-foreground">
                    /events/{e.slug}
                    {e.date ? ` • ${e.date}` : ""}
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <Link className="underline" href={`/admin/events/${e.id}`}>העלאה</Link>
                  <Link className="underline" href={`/events/${e.slug}`}>תצוגה</Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">עדיין אין אירועים.</p>
        )}
      </section>
    </main>
  );
}
