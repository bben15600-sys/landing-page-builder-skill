import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Bento } from "@/components/bento";
import { CodeInContext } from "@/components/code-in-context";
import { StatsRow } from "@/components/stats-row";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Bento />
        <CodeInContext />
        <StatsRow />
        <Pricing />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
