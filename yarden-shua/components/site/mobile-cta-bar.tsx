import { Phone, MessageCircle } from "lucide-react";
import { site } from "./site-config";

export function MobileCtaBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-3 py-2.5 grid grid-cols-2 gap-2">
        <a
          href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-bold text-background"
        >
          <Phone className="h-4 w-4" />
          חיוג
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
