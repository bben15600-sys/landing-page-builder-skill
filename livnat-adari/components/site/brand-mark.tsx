import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "group/brand relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card shadow-sm shadow-primary/20 ring-1 ring-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:ring-primary/30",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[inherit] bg-primary/30 opacity-0 blur-md transition-opacity duration-300 group-hover/brand:opacity-100"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-circle.png"
        alt=""
        width={624}
        height={624}
        className={cn(
          "size-full object-cover transition-transform duration-300 group-hover/brand:scale-110",
          iconClassName,
        )}
      />
    </span>
  );
}
