"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

type Props = {
  activeAlbum?: string | null;
  onSelectAlbum?: (id: string | null) => void;
};

export function AlbumsGrid({ activeAlbum, onSelectAlbum }: Props) {
  const select = (id: string) => {
    onSelectAlbum?.(activeAlbum === id ? null : id);
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="albums"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
              סצנות מהאירוע
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              <span className="italic-display">הסיפור</span> בפרקים
            </h2>
          </div>
          <a
            href="#gallery"
            onClick={() => onSelectAlbum?.(null)}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            צפייה בכל התמונות
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.albums.map((album, idx) => (
            <Reveal key={album.id} delay={idx * 80}>
              <button
                type="button"
                onClick={() => select(album.id)}
                className={cn(
                  "group relative aspect-[4/5] w-full overflow-hidden bg-card rounded-sm",
                  "ring-1 ring-border hover:ring-border-strong transition-all",
                  activeAlbum === album.id && "ring-2 ring-accent",
                )}
              >
                <Image
                  src={album.cover}
                  alt={album.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity group-hover:from-black/70" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white text-right">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-white/60 mb-2">
                    {album.count.toLocaleString("he-IL")} תמונות
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                    {album.name}
                  </h3>
                  {album.description && (
                    <p className="mt-1 text-sm text-white/70 italic-display">
                      {album.description}
                    </p>
                  )}
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/0 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-white/10 transition-all">
                  <ArrowLeft size={14} />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
