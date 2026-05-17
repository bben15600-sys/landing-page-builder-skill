import { ArrowLeft, Headphones, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { site } from "@/components/site/site-config";

export function Podcast() {
  return (
    <section
      id="podcast"
      aria-label="הפודקאסט כוח הבריאה"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--accent)_22%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="up">
          <SpotlightCard>
            <div className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/15 to-background p-8 lg:grid-cols-5 lg:gap-12 lg:p-12">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-grid opacity-30"
              />
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium text-primary">
                  <Mic className="size-3.5" />
                  הפודקאסט שלי
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {site.podcastName}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  מעבר לקליניקה, אני מארחת שיחות על תודעה, קבלה עצמית, גבולות,
                  צמיחה, יופי — והחיבור בין העולם הפנימי לבין מה שאנחנו מקרינים
                  החוצה.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  כי לפעמים השינוי הגדול לא מתחיל בעור — אלא במה שאנחנו לוחשות
                  לעצמנו בפנים.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    render={
                      <a
                        href={site.podcast}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="group h-12 gap-2 rounded-full px-7 text-base shadow-lg shadow-primary/25"
                  >
                    <Headphones />
                    האזנה ב-Spotify
                    <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
                  </Button>
                  <Button
                    variant="outline"
                    render={
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="h-12 gap-2 rounded-full px-7 text-base bg-background/70 backdrop-blur"
                  >
                    מעקב באינסטגרם
                  </Button>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:col-span-2">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 flex items-center justify-center"
                >
                  <div className="size-64 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_25%,transparent)_0%,transparent_70%)] blur-2xl" />
                </div>
                <div className="relative flex size-48 items-center justify-center rounded-full border border-primary/20 bg-card/60 shadow-2xl backdrop-blur md:size-56">
                  <div className="absolute inset-0 animate-ring-pulse rounded-full" />
                  <Headphones className="size-20 text-primary md:size-24" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
