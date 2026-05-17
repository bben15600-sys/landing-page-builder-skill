import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { CustomCursor } from "@/components/site/custom-cursor";
import { FeaturedWeddings, type FeaturedWedding } from "@/components/site/featured-weddings";
import { FilmGrain } from "@/components/site/film-grain";
import { Footer } from "@/components/site/footer";
import { Gallery } from "@/components/site/gallery";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Packages } from "@/components/site/packages";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";
import { TrustStrip } from "@/components/site/trust-strip";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { supabase, type Event, publicPhotoUrl } from "@/lib/supabase";

export const dynamic = "force-dynamic";

async function loadFeatured(): Promise<FeaturedWedding[]> {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);
  const list = (events as Event[] | null) ?? [];
  if (list.length === 0) return [];

  const { data: photoRows } = await supabase
    .from("photos")
    .select("event_id, storage_path, created_at")
    .in("event_id", list.map((e) => e.id))
    .order("created_at", { ascending: true });
  const firstByEvent = new Map<string, string>();
  for (const p of photoRows ?? []) {
    if (!firstByEvent.has(p.event_id)) firstByEvent.set(p.event_id, p.storage_path);
  }

  return list
    .map((e) => {
      const cover =
        e.cover_url ||
        (firstByEvent.get(e.id) ? publicPhotoUrl(firstByEvent.get(e.id)!) : null);
      if (!cover) return null;
      return {
        id: e.id,
        slug: e.slug,
        title: e.title,
        date: e.date ?? "",
        cover,
      };
    })
    .filter((x): x is FeaturedWedding => x !== null);
}

export default async function Home() {
  const featured = await loadFeatured();
  return (
    <>
      <CustomCursor />
      <FilmGrain />
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <TrustStrip />
        <Marquee />
        <FeaturedWeddings items={featured} />
        <Services />
        <About />
        <Gallery />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
