import { Headphones, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
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

const social = [
  {
    icon: Instagram,
    label: "אינסטגרם",
    href: site.instagram,
  },
  {
    icon: Headphones,
    label: `פודקאסט · ${site.podcastName}`,
    href: site.podcast,
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6 md:py-14">
        <div className="space-y-3 md:col-span-2">
          <a href="#top" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight">
                {site.brand}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
                {site.brandSuffix}
              </span>
            </span>
          </a>
          <p className="max-w-sm text-sm text-muted-foreground">
            {site.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            {social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <s.icon className="size-3.5" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ניווט
          </h3>
          <nav className="mt-3 grid grid-cols-1 gap-2 text-sm">
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
            <li className="text-muted-foreground">{site.address}</li>
            <li className="text-muted-foreground">{site.hoursLabel}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>
            © {year} {site.brand} · {site.ownerName}. כל הזכויות שמורות.
          </p>
          <p>קליניקה פרטית · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}
