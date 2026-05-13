import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { CustomCursor } from "@/components/site/custom-cursor";
import { FeaturedWeddings } from "@/components/site/featured-weddings";
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

export default function Home() {
  return (
    <>
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
