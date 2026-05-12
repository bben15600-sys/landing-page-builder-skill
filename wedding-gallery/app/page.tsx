import { About } from "@/components/site/about";
import { ChatBubble } from "@/components/site/chat-bubble";
import { Contact } from "@/components/site/contact";
import { CustomCursor } from "@/components/site/custom-cursor";
import { FavoritesProvider } from "@/components/site/favorites-store";
import { FavoritesSection } from "@/components/site/favorites-section";
import { FeaturedWeddings } from "@/components/site/featured-weddings";
import { FilmGrain } from "@/components/site/film-grain";
import { Footer } from "@/components/site/footer";
import { GalleryExperience } from "@/components/site/gallery-experience";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { LoadingScreen } from "@/components/site/loading-screen";
import { Marquee } from "@/components/site/marquee";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { Packages } from "@/components/site/packages";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { ShareSection } from "@/components/site/share-section";
import { Testimonials } from "@/components/site/testimonials";
import { TrustStrip } from "@/components/site/trust-strip";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <FavoritesProvider>
      <LoadingScreen />
      <CustomCursor />
      <FilmGrain />
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <TrustStrip />
        <Marquee />
        <FeaturedWeddings />
        <Services />
        <About />
        <Marquee
          items={["EVERY FRAME A MEMORY", "EST 2013", "WORLDWIDE"]}
          speed="fast"
          reverse
        />
        <GalleryExperience />
        <FavoritesSection />
        <Packages />
        <Process />
        <Testimonials />
        <ShareSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
      <ChatBubble />
    </FavoritesProvider>
  );
}
