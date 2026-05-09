import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhoIsFor } from "@/components/who-is-for";
import { Curriculum } from "@/components/curriculum";
import { Instructor } from "@/components/instructor";
import { Testimonials } from "@/components/testimonials";
import { BonusStack } from "@/components/bonus-stack";
import { PricingReveal } from "@/components/pricing-reveal";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhoIsFor />
        <Curriculum />
        <Instructor />
        <Testimonials />
        <BonusStack />
        <PricingReveal />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
