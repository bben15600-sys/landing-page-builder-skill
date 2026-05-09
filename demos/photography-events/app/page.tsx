import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { SeriesEssay } from "@/components/series-essay";
import { Deliverables } from "@/components/deliverables";
import { Manifesto } from "@/components/manifesto";
import { Press } from "@/components/press";
import { InquiryForm } from "@/components/inquiry-form";
import { ContactHero } from "@/components/contact-hero";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WorkGrid />
        <SeriesEssay />
        <Deliverables />
        <Manifesto />
        <Press />
        <InquiryForm />
        <ContactHero />
      </main>
      <Footer />
    </>
  );
}
