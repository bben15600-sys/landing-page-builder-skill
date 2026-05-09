import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { StatsStrip } from "@/components/site/stats-strip";
import { About } from "@/components/site/about";
import { SeasonStats } from "@/components/site/season-stats";
import { Achievements } from "@/components/site/achievements";
import { CareerTimeline } from "@/components/site/career-timeline";
import { Gallery } from "@/components/site/gallery";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <StatsStrip />
        <About />
        <SeasonStats />
        <Achievements />
        <CareerTimeline />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </>
  );
}
