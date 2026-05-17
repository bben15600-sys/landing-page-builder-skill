import { ArrowLeft, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { Magnetic } from "@/components/site/magnetic";
import { Sparks } from "@/components/site/sparks";
import { site } from "@/components/site/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_38%,transparent)_0%,transparent_60%)] blur-2xl animate-glow-pulse" />
        <div className="absolute left-1/2 top-[40%] h-[260px] w-[40%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--accent)_25%,transparent)_0%,transparent_60%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
      <Sparks />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-6 md:pt-24 md:pb-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge
            variant="outline"
            className="animate-appear h-7 gap-1.5 rounded-full border-primary/25 bg-background/70 px-3 text-[13px] text-foreground backdrop-blur"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="text-primary" />
            22 שנות ניסיון · גישת עור ונפש
          </Badge>

          <h1
            className="animate-appear mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.ownerName}
            <span className="mt-3 block text-3xl font-semibold text-primary sm:text-4xl md:text-5xl">
              {site.tagline}
            </span>
          </h1>

          <p
            className="animate-appear mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            טיפול בעור הוא לא רק מראה. הוא הדרך שבה אנחנו פוגשים את עצמנו. מעל
            לשני עשורים שאני מלווה נשים, גברים ובני נוער דרך עולם הקוסמטיקה
            והעור — מתוך אהבה עמוקה למקצוע, לאנשים, וליכולת של טיפול נכון לגעת
            בהרבה יותר ממה שרואים מבחוץ.
          </p>

          <div
            className="animate-appear mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "260ms" }}
          >
            <Magnetic strength={0.18}>
              <Button
                render={<a href={`tel:${site.phone}`} />}
                className="group relative h-12 gap-2 overflow-hidden px-7 rounded-full text-base shadow-lg shadow-primary/25 ring-1 ring-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/35"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-l from-primary to-primary/85"
                />
                <Phone />
                לקביעת תור
                <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
              </Button>
            </Magnetic>
            <Button
              variant="outline"
              render={
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 gap-2 px-7 rounded-full text-base bg-background/70 backdrop-blur"
            >
              <MessageCircle />
              הודעה בוואטסאפ
            </Button>
          </div>

          <dl
            className="group/stats animate-appear-zoom relative mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-4 text-center shadow-xl shadow-primary/10 backdrop-blur-md md:gap-6 md:p-6"
            style={{ animationDelay: "420ms" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-l from-transparent via-primary/60 to-transparent"
            />
            <span
              aria-hidden
              className="animate-shimmer pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary/8 to-transparent"
            />
            <Stat
              value={<AnimatedCounter value={site.yearsExperience} prefix="+" />}
              label="שנות ניסיון"
            />
            <Stat
              value={<AnimatedCounter value={site.jobsCompleted} prefix="+" />}
              label="לקוחות מרוצות"
            />
            <Stat value="100%" label="התאמה אישית" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <dt className="order-2 text-xs text-muted-foreground md:text-sm">
        {label}
      </dt>
      <dd className="order-1 text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
        {value}
      </dd>
    </div>
  );
}
