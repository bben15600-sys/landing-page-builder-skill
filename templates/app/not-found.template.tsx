import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/brand-mark";
import { site } from "@/components/site/site-config";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_28%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <BrandMark className="size-14 rounded-2xl" iconClassName="size-8" />

      <p className="mt-8 bg-gradient-to-l from-primary to-primary/60 bg-clip-text font-mono text-7xl font-extrabold tracking-tight text-transparent md:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
        העמוד שחיפשתם לא נמצא
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        ייתכן שהקישור שגוי או שהעמוד הוסר. חזרו לדף הבית או צרו איתנו קשר ישיר.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          render={<a href="/" />}
          className="h-11 gap-2 rounded-full px-6 text-base"
        >
          חזרה לדף הבית
          <ArrowLeft />
        </Button>
        <Button
          variant="outline"
          render={<a href={`tel:${site.phone}`} />}
          className="h-11 gap-2 rounded-full px-6 text-base"
        >
          <Phone />
          התקשרו ל־{site.brand}
        </Button>
      </div>
    </main>
  );
}
