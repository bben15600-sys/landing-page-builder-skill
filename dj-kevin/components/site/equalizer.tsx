import { cn } from "@/lib/utils";

// Pure-CSS neon equalizer. `bars` controls density; each bar gets a
// pseudo-random duration/delay so the motion never looks synced.
export function Equalizer({
  bars = 48,
  className,
  barClassName,
  paused = false,
}: {
  bars?: number;
  className?: string;
  barClassName?: string;
  paused?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn("flex items-end gap-[3px] h-full w-full", className)}
    >
      {Array.from({ length: bars }).map((_, i) => {
        const dur = 0.6 + ((i * 37) % 11) / 10; // 0.6s–1.6s
        const delay = ((i * 53) % 19) / 20; // 0–0.95s
        const base = 30 + ((i * 29) % 60); // 30%–90% baseline height
        return (
          <span
            key={i}
            className={cn(
              "eq-bar flex-1 rounded-full bg-gradient-to-t from-accent to-accent-2",
              barClassName,
            )}
            style={{
              height: `${base}%`,
              ["--eq-dur" as string]: `${dur}s`,
              ["--eq-delay" as string]: `${delay}s`,
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        );
      })}
    </div>
  );
}
