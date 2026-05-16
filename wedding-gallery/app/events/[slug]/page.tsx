import { notFound } from "next/navigation";
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
  const items = ((photos ?? []) as Photo[]).map((p) => ({
    id: p.id,
    url: publicPhotoUrl(p.storage_path),
  }));

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-semibold mb-1">{ev.title}</h1>
        {ev.date && <p className="text-sm text-muted-foreground">{ev.date}</p>}
      </header>

      <EventGallery eventId={ev.id} photos={items} />
    </main>
  );
}
