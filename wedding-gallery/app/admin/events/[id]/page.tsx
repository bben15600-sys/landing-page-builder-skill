import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { supabase, type Event, type Photo, publicPhotoUrl } from "@/lib/supabase";
import { UploadPhotos } from "./upload-photos";
import { ShareLink } from "../../share-link";

export const dynamic = "force-dynamic";

export default async function AdminEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (!event) notFound();

  const { data: photos } = await supabase
    .from("photos")
    .select("*")
    .eq("event_id", id)
    .order("created_at", { ascending: false });

  const ev = event as Event;
  const list = (photos ?? []) as Photo[];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/admin"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowRight className="h-4 w-4" />
        חזרה לאירועים
      </Link>
      <h1 className="text-3xl font-semibold mt-3 mb-6">{ev.title}</h1>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="text-sm font-medium mb-1">קישור לאורחים</h2>
        <p className="text-xs text-muted-foreground mb-3">
          שתפו את הקישור הזה — האורחים יוכלו לצפות ולחפש את עצמם בתמונות.
        </p>
        <ShareLink path={`/events/${ev.slug}`} />
      </section>

      <section className="mb-10 rounded-lg border p-6">
        <h2 className="text-lg font-medium mb-4">העלאת תמונות</h2>
        <UploadPhotos eventId={ev.id} />
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">תמונות ({list.length})</h2>
        {list.length === 0 ? (
          <p className="text-sm text-muted-foreground">עוד לא הועלו תמונות.</p>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {list.map((p) => (
              <div key={p.id} className="aspect-square overflow-hidden rounded bg-muted">
                <img
                  src={publicPhotoUrl(p.storage_path)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
