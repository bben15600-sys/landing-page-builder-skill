import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { supabase, type Event, type Photo, publicPhotoUrl } from "@/lib/supabase";
import { FilmGrain } from "@/components/site/film-grain";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
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
      <FilmGrain />
      <Header />
      <main className="flex-1">
        <section className="relative h-[70vh] min-h-[420px] max-h-[680px] w-full overflow-hidden">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40" />
          <div className="relative h-full flex flex-col items-center justify-end text-center px-6 pb-14 sm:pb-20 text-white">
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-4">
              גלריה
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl mb-4 drop-shadow-lg">
              <span className="italic-display">{ev.title}</span>
            </h1>
            {ev.date && (
              <p className="inline-flex items-center gap-2 text-sm sm:text-base text-white/90">
                <Calendar className="h-4 w-4" />
                {ev.date}
              </p>
            )}
            <p className="mt-3 text-xs sm:text-sm tracking-[0.25em] uppercase text-white/60">
              {list.length} תמונות
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <EventGallery eventId={ev.id} eventTitle={ev.title} photos={items} />
        </div>
      </main>
      <Footer />
    </>
  );
}
