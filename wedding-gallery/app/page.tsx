import { ChatBubble } from "@/components/site/chat-bubble";
import { FavoritesProvider } from "@/components/site/favorites-store";
import { FavoritesSection } from "@/components/site/favorites-section";
import { Footer } from "@/components/site/footer";
import { GalleryExperience } from "@/components/site/gallery-experience";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ShareSection } from "@/components/site/share-section";
import { Testimonials } from "@/components/site/testimonials";

export default function Home() {
  return (
    <FavoritesProvider>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <GalleryExperience />
        <FavoritesSection />
        <Testimonials />
        <ShareSection />
      </main>
      <Footer />
      <ChatBubble />
    </FavoritesProvider>
  );
}
