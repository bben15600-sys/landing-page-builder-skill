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
        "group/brand relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm shadow-primary/20 ring-1 ring-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:ring-accent/40",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[inherit] bg-accent/40 opacity-0 blur-md transition-opacity duration-300 group-hover/brand:opacity-100"
      />
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
