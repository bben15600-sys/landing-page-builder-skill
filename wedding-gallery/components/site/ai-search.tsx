"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

type Props = {
  onSelectFace?: (faceId: string | null) => void;
  onSearch?: (query: string) => void;
};

export function AiSearch({ onSelectFace, onSearch }: Props) {
  const [activeFace, setActiveFace] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const visibleFaces = showAll
    ? siteConfig.faces
    : siteConfig.faces.slice(0, 6);

  const selectFace = (id: string) => {
    const next = activeFace === id ? null : id;
    setActiveFace(next);
    onSelectFace?.(next);
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTag = (tag: string) => {
    setQuery(tag);
    onSearch?.(tag);
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="search"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
            <Sparkles size={12} className="text-accent" />
            חיפוש חכם
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">מצאו</span> את הרגעים
            <br />
            <span className="text-muted-foreground italic-display">
              האהובים עליכם
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            בחרו פנים כדי לראות את כל התמונות שלכם, או חפשו רגע ספציפי
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {visibleFaces.map((face) => (
              <button
                key={face.id}
                type="button"
                onClick={() => selectFace(face.id)}
                className={cn(
                  "group flex flex-col items-center gap-2 transition-transform hover:scale-105",
                  activeFace === face.id && "scale-105",
                )}
              >
                <div
                  className={cn(
                    "relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden",
                    "ring-2 transition-all duration-300",
                    activeFace === face.id
                      ? "ring-accent ring-offset-4 ring-offset-background"
                      : "ring-border-strong group-hover:ring-foreground/60",
                  )}
                >
                  <Image
                    src={face.avatar}
                    alt={face.name ?? "פנים מזוהות"}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {face.photoCount} תמונות
                </span>
              </button>
            ))}
            {!showAll && siteConfig.faces.length > 6 && (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-dashed border-border-strong flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors text-sm font-medium text-muted-foreground">
                  +{siteConfig.faces.length - 6}
                </div>
                <span className="text-[11px] text-muted-foreground">
                  נוספים
                </span>
              </button>
            )}
          </div>

          {activeFace && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => selectFace(activeFace)}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={12} />
                ביטול בחירה
              </button>
            </div>
          )}
        </Reveal>

        <Reveal delay={250} className="mt-14">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl flex items-center gap-2 bg-card border border-border rounded-full px-2 py-2 focus-within:border-accent transition-colors"
          >
            <div className="flex items-center pr-3 pl-1 text-muted-foreground">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="חיפוש חופשי: ״נשיקה״, ״ריקוד״, ״סבתא״…"
              className="flex-1 bg-transparent border-0 outline-none text-base placeholder:text-muted-foreground/70 py-2"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-background transition-colors"
            >
              חפש כעת
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {siteConfig.suggestedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTag(tag)}
                className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
