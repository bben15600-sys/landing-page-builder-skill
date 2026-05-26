import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";

type Props = {
  className?: string;
  speed?: "normal" | "fast";
  reverse?: boolean;
};

export function Marquee({ className, speed = "normal", reverse = false }: Props) {
  const items = siteConfig.marquee;
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border py-5 sm:py-7 select-none bg-background-deep",
        className,
      )}
    >
      <div
        className={cn(
          "flex whitespace-nowrap",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-foreground/80 px-8 sm:px-12 inline-flex items-center gap-8 sm:gap-12"
          >
            {item}
            <span className="text-accent text-2xl sm:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
