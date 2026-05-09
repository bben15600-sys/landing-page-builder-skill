import { MessageCircle } from "lucide-react";
import { site } from "./site-config";

export function WhatsAppFloat() {
  return (
    <a
      aria-label="WhatsApp"
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 left-5 z-40 hidden md:inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 transition-transform hover:scale-110 animate-ring-pulse"
      style={{ ["--brand-yellow" as string]: "#25D366" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
