import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { RealWeddings } from "@/components/real-weddings";
import { Packages } from "@/components/packages";
import { DateAvailability } from "@/components/date-availability";
import { Testimonials } from "@/components/testimonials";
import { InquiryForm } from "@/components/inquiry-form";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <RealWeddings />
        <Packages />
        <DateAvailability />
        <Testimonials />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
