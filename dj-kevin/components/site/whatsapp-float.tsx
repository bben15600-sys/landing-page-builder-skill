"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "./site-config";
import { WhatsAppIcon } from "./brand-icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלחו וואטסאפ"
      className="fixed bottom-6 sm:bottom-8 left-6 sm:left-8 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-pulse-ring" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition-colors">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
    </a>
  );
}
