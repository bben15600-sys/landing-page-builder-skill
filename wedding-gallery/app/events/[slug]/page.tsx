import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { supabase, type Event, type Photo, publicPhotoUrl } from "@/lib/supabase";
import { EventGallery } from "./event-gallery";

export const dynamic = "force-dynamic";

export default async function EventPublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: raw } = await params;
  const slug = decodeURIComponent(raw);

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!event) notFound();

  const { data: photos } = await supabase
    .from("photos")
    .select("*")
    .eq("event_id", event.id)
    .order("created_at", { ascending: false });

  const ev = event as Event;
  const list = (photos ?? []) as Photo[];
  const items = list.map((p) => ({ id: p.id, url: publicPhotoUrl(p.storage_path) }));
  const coverUrl = ev.cover_url || items[0]?.url || null;

  return (
    <>
      <section className="relative h-[55vh] min-h-[320px] max-h-[560px] w-full overflow-hidden">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="relative h-full flex flex-col items-center justify-end text-center px-6 pb-12 text-white">
          <h1 className="font-serif text-4xl sm:text-6xl mb-3 drop-shadow">{ev.title}</h1>
          {ev.date && (
            <p className="inline-flex items-center gap-2 text-sm sm:text-base text-white/90">
              <Calendar className="h-4 w-4" />
              {ev.date}
            </p>
          )}
          <p className="mt-3 text-xs sm:text-sm text-white/70">
            {list.length} תמונות
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <EventGallery eventId={ev.id} eventTitle={ev.title} photos={items} />
      </main>
    </>
  );
}
