import { cn } from "@/lib/utils";

type Props = {
  items?: string[];
  className?: string;
  speed?: "normal" | "fast";
  reverse?: boolean;
};

const DEFAULT_ITEMS = [
  "רון קובי",
  "RON KOBI",
  "מתעד אהבה",
  "EST 2013",
  "סיפורים של חתונות",
  "BASED IN TEL AVIV",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  className,
  speed = "normal",
  reverse = false,
}: Props) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border py-5 sm:py-7 select-none",
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
            className="font-display italic-display text-3xl sm:text-5xl md:text-6xl text-foreground/80 px-8 sm:px-12 inline-flex items-center gap-8 sm:gap-12"
          >
            {item}
            <span className="text-foreground/30 text-2xl sm:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
