import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  variant = "filled",
}: {
  className?: string;
  variant?: "filled" | "outline";
}) {
  if (variant === "outline") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={cn("size-full", className)}
      >
        <path
          d="M37 8 L20 34 H30 L26 56 L44 28 H34 L37 8 Z"
          stroke="var(--brand-yellow)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-full", className)}
    >
      <circle cx="9" cy="9" r="1.6" fill="var(--brand-yellow)" opacity="0.7" />
      <circle cx="55" cy="9" r="1.6" fill="var(--brand-yellow)" opacity="0.7" />
      <circle cx="9" cy="55" r="1.6" fill="var(--brand-yellow)" opacity="0.7" />
      <circle cx="55" cy="55" r="1.6" fill="var(--brand-yellow)" opacity="0.7" />
      <path
        d="M9 9 H18 M55 9 H46 M9 55 H18 M55 55 H46"
        stroke="var(--brand-yellow)"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M37 8 L20 34 H30 L26 56 L44 28 H34 L37 8 Z"
        fill="var(--brand-yellow)"
        stroke="color-mix(in oklch, var(--brand-navy) 60%, transparent)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ELI ENERGY SOLUTIONS"
      className={cn("h-auto w-full", className)}
    >
      <rect
        x="20"
        y="40"
        width="240"
        height="90"
        rx="45"
        stroke="var(--brand-navy)"
        strokeWidth="6"
        fill="none"
      />
      <circle cx="20" cy="85" r="6" fill="var(--brand-navy)" />
      <circle cx="260" cy="40" r="5" fill="var(--brand-navy)" />
      <circle cx="260" cy="130" r="5" fill="var(--brand-navy)" />

      <text
        x="140"
        y="100"
        textAnchor="middle"
        fontFamily="Heebo, sans-serif"
        fontSize="60"
        fontWeight="900"
        fill="var(--brand-navy)"
        letterSpacing="2"
      >
        ELI
      </text>

      <path
        d="M310 30 L275 95 H305 L290 160 L335 90 H310 L325 30 Z"
        fill="var(--brand-yellow)"
        stroke="color-mix(in oklch, var(--brand-navy) 50%, transparent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <rect
        x="345"
        y="40"
        width="235"
        height="90"
        rx="45"
        stroke="var(--brand-yellow)"
        strokeWidth="6"
        fill="none"
      />
      <circle cx="580" cy="85" r="6" fill="var(--brand-yellow)" />
      <circle cx="345" cy="40" r="5" fill="var(--brand-yellow)" />
      <circle cx="345" cy="130" r="5" fill="var(--brand-yellow)" />

      <text
        x="462"
        y="100"
        textAnchor="middle"
        fontFamily="Heebo, sans-serif"
        fontSize="48"
        fontWeight="900"
        fill="var(--brand-yellow)"
        letterSpacing="2"
      >
        ENERGY
      </text>

      <text
        x="300"
        y="180"
        textAnchor="middle"
        fontFamily="Heebo, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="var(--brand-navy)"
        letterSpacing="6"
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
