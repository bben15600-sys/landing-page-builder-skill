"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "./site-config";
import { WhatsAppIcon } from "./brand-icons";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-30 bg-background/90 backdrop-blur-xl border-t border-border transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${siteConfig.photographer.phone.replace(/-/g, "")}`}
          className="inline-flex items-center justify-center gap-2 h-12 rounded-full border border-border-strong text-sm font-medium"
        >
          <Phone size={16} />
          התקשרו
        </a>
        <a
          href={`https://wa.me/${siteConfig.photographer.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground text-sm font-medium"
        >
          <WhatsAppIcon className="h-4 w-4" />
          וואטסאפ
        </a>
      </div>
    </div>
  );
}
