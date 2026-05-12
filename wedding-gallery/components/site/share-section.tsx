"use client";

import { useState } from "react";
import { Check, Loader2, Send, Share2 } from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "./brand-icons";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

type FormState = "idle" | "sending" | "success" | "error";

export function ShareSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [state, setState] = useState<FormState>("idle");

  const shareUrl =
    typeof window !== "undefined" ? window.location.origin : "https://example.com";

  const shareFacebook = () => {
    const u = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(u, "_blank", "noopener,width=600,height=500");
  };

  const shareWhatsApp = () => {
    const text = `הגלריה של ${siteConfig.couple.bride} ו${siteConfig.couple.groom} ✨ ${shareUrl}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // Ignore clipboard errors (older browsers / iframe contexts).
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setState("sending");
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("message", message);
      data.append("rating", String(rating));
      data.append("_subject", `המלצה חדשה מאת ${name}`);
      data.append("_captcha", "false");
      data.append("_template", "table");

      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.photographer.email}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        },
      );
      if (res.ok) {
        setState("success");
        setName("");
        setMessage("");
        setRating(5);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <section
      id="share"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
            מה עוד?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">שתפו</span> ו
            <span className="italic-display">ספרו</span> לאחרים
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            עזרו לנו להפיץ את היופי — שתפו את הגלריה או השאירו המלצה לצלם
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <Reveal className="lg:col-span-2 p-8 bg-card border border-border rounded-sm">
            <Share2 size={20} className="text-accent mb-5" />
            <h3 className="font-display text-2xl mb-2">שיתוף הגלריה</h3>
            <p className="text-sm text-muted-foreground mb-6">
              לחצו ושתפו את הגלריה עם משפחה וחברים
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={shareFacebook}
                className="flex items-center justify-between px-5 py-3.5 border border-border hover:border-foreground rounded-sm transition-colors group"
              >
                <span className="flex items-center gap-3 text-sm">
                  <FacebookIcon className="h-5 w-5 text-[#1877F2]" />
                  שיתוף בפייסבוק
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  →
                </span>
              </button>
              <button
                type="button"
                onClick={shareWhatsApp}
                className="flex items-center justify-between px-5 py-3.5 border border-border hover:border-foreground rounded-sm transition-colors group"
              >
                <span className="flex items-center gap-3 text-sm">
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                  שיתוף בוואטסאפ
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  →
                </span>
              </button>
              <button
                type="button"
                onClick={copy}
                className="flex items-center justify-between px-5 py-3.5 border border-border hover:border-foreground rounded-sm transition-colors group"
              >
                <span className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-muted-foreground" />
                  העתקת קישור
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  →
                </span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3 p-8 bg-card border border-border rounded-sm">
            <Send size={20} className="text-accent mb-5" />
            <h3 className="font-display text-2xl mb-2">המלצה לצלם</h3>
            <p className="text-sm text-muted-foreground mb-6">
              נהניתם? שתפו את {siteConfig.photographer.name} ועזרו לזוגות הבאים
              להחליט
            </p>

            {state === "success" ? (
              <div className="border border-accent/40 bg-accent-soft rounded-sm p-6 text-center">
                <Check
                  size={32}
                  className="text-accent mx-auto mb-3"
                />
                <p className="font-display text-xl mb-1">תודה רבה!</p>
                <p className="text-sm text-muted-foreground">
                  ההמלצה התקבלה. נשמח עוד פעם.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="rec-name"
                    className="block text-xs text-muted-foreground mb-2"
                  >
                    שם מלא
                  </label>
                  <input
                    id="rec-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-background border border-border focus:border-accent rounded-sm px-4 py-3 text-sm transition-colors"
                    placeholder="ישראלה ישראלי"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2">
                    דירוג
                  </label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(i + 1)}
                        aria-label={`${i + 1} כוכבים`}
                        className="text-2xl text-accent hover:scale-110 transition-transform"
                      >
                        {i < rating ? "★" : "☆"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="rec-message"
                    className="block text-xs text-muted-foreground mb-2"
                  >
                    ההמלצה שלכם
                  </label>
                  <textarea
                    id="rec-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-background border border-border focus:border-accent rounded-sm px-4 py-3 text-sm transition-colors resize-y min-h-[120px]"
                    placeholder="ספרו על החוויה..."
                  />
                </div>
                {state === "error" && (
                  <p className="text-sm text-red-400">
                    משהו השתבש. נסו שוב או דברו עם הצלם ישירות.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      שולח…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      שליחת המלצה
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
