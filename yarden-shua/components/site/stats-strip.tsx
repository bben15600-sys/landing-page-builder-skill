import { Ruler, Weight, CalendarDays, Footprints } from "lucide-react";
import { site } from "./site-config";
import { Reveal } from "./reveal";

const items = [
  { icon: CalendarDays, label: "גיל", value: `${site.stats.age}` },
  { icon: Ruler, label: "גובה", value: `${site.stats.height} ס״מ` },
  { icon: Weight, label: "משקל", value: `${site.stats.weight} ק״ג` },
  { icon: Footprints, label: "רגל מועדפת", value: site.stats.foot },
];

export function StatsStrip() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
          {items.map((it, i) => (
            <Reveal as="li" key={it.label} delay={i * 80} className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-background/10">
                <it.icon className="h-4 w-4 text-[var(--brand-yellow)]" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-wider text-background/60">
                  {it.label}
                </div>
                <div className="text-lg font-bold">{it.value}</div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
