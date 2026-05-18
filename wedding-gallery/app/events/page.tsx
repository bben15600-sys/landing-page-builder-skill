import Link from "next/link";
import { Calendar } from "lucide-react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { FilmGrain } from "@/components/site/film-grain";
import { supabase, type Event, publicPhotoUrl } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "כל הגלריות",
  description: "כל הגלריות מהאירועים שצולמו.",
};

export default async function EventsIndexPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false });
  const list = (events as Event[] | null) ?? [];

  const { data: photoRows } = list.length
    ? await supabase
        .from("photos")
        .select("event_id, storage_path, created_at")
        .in("event_id", list.map((e) => e.id))
        .order("created_at", { ascending: true })
    : { data: null };

  const coverByEvent = new Map<string, string>();
  for (const p of photoRows ?? []) {
    if (!coverByEvent.has(p.event_id)) coverByEvent.set(p.event_id, p.storage_path);
  }

  return (
    <>
      <FilmGrain />
      <Header />
      <main className="flex-1 pt-28 sm:pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              כל הגלריות
            </p>
            <h1 className="font-display text-5xl sm:text-7xl">
              <span className="italic-display">סיפורים</span> שצולמו
            </h1>
          </div>

          {list.length === 0 ? (
            <p className="text-muted-foreground italic-display text-lg">
              עוד לא עלו גלריות. בקרוב.
            </p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {list.map((e) => {
                const path = coverByEvent.get(e.id);
                const cover = e.cover_url || (path ? publicPhotoUrl(path) : null);
                return (
                  <li key={e.id}>
                    <Link
                      href={`/events/${e.slug}`}
                      className="group block"
                      data-cursor="view"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-card">
                        {cover ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={cover}
                            alt={e.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
                        )}
                        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 to-transparent text-white">
                          <h2 className="font-display italic-display text-3xl leading-tight mb-2">
                            {e.title}
                          </h2>
                          {e.date && (
                            <p className="inline-flex items-center gap-1.5 text-xs text-white/80">
                              <Calendar className="h-3.5 w-3.5" />
                              {e.date}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
