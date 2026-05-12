"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";

export function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const sendWhatsApp = () => {
    const text =
      message.trim() ||
      `היי ${siteConfig.photographer.name}, פנו אליי דרך גלריית ${siteConfig.couple.bride} ו${siteConfig.couple.groom}`;
    const url = `https://wa.me/${siteConfig.photographer.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-30">
      {open && (
        <div className="mb-3 w-[280px] sm:w-[320px] bg-card border border-border rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-l from-accent/20 to-transparent border-b border-border p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">
                {siteConfig.photographer.name}
              </p>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                זמין עכשיו
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגור צ׳אט"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-background border border-border rounded-md px-3 py-2.5 text-xs text-muted-foreground mb-3">
              שמחתם מהגלריה? שאלה? כתבו לי ונדבר בוואטסאפ.
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder={siteConfig.chat.placeholder}
              className="w-full bg-background border border-border focus:border-accent rounded-md px-3 py-2 text-sm transition-colors resize-none"
            />
            <button
              type="button"
              onClick={sendWhatsApp}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#25D366] text-white text-sm font-medium hover:bg-[#1ebd5b] transition-colors"
            >
              שליחה בוואטסאפ
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "סגור צ׳אט" : "פתח צ׳אט"}
        className={cn(
          "relative h-14 w-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center",
          open
            ? "bg-foreground text-background"
            : "bg-accent text-background hover:scale-110",
        )}
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring pointer-events-none" />
        )}
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
