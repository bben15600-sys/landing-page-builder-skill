import { About } from "@/components/site/about";
import { CertificationsStrip } from "@/components/site/certifications-strip";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { Podcast } from "@/components/site/podcast";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <CertificationsStrip />
        <Services />
        <About />
        <Testimonials />
        <Process />
        <Podcast />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <WhatsAppFloat />
    </>
  );
}
