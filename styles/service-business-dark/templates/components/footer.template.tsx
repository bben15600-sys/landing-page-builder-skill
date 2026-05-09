import { Mail, MessageCircle, Phone } from "lucide-react";
import { BrandMark } from "@/components/site/brand-mark";
import { site, nav } from "@/components/site/site-config";

const quickContacts = [
  { icon: Phone, label: site.phone, href: `tel:${site.phone}` },
  {
    icon: MessageCircle,
    label: "וואטסאפ",
    href: `https://wa.me/${site.whatsapp}`,
    external: true,
  },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6 md:py-14">
        <div className="space-y-3">
          <a href="#top" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight">
                {site.brand}
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground">
                SOLUTIONS
              </span>
            </span>
          </a>
          <p className="max-w-sm text-sm text-muted-foreground">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ניווט
          </h3>
          <nav className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            יצירת קשר
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {quickContacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={"external" in c && c.external ? "_blank" : undefined}
                  rel={
                    "external" in c && c.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                >
                  <c.icon className="size-4" />
                  {c.label}
                </a>
              </li>
            ))}
            <li className="text-muted-foreground">{site.area}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>
            © {year} {site.brand}. כל הזכויות שמורות.
          </p>
          <p>חשמלאי מוסמך • {site.area} • שירות חירום 24/7</p>
        </div>
      </div>
    </footer>
  );
}
