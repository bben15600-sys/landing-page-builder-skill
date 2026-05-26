import { Mail, Phone } from "lucide-react";
import { InstagramIcon, SoundCloudIcon } from "./brand-icons";
import { siteConfig } from "./site-config";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display font-black text-2xl tracking-wider neon-gradient">
                {siteConfig.brand.nameEn}
              </span>
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase mt-1">
                {siteConfig.brand.suffix}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              די.ג'יי לחתונות ואירועים. אנרגיה, קריאת קהל והפקה — רחבה שלא
              מתרוקנת.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              ניווט
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              צור קשר
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone size={14} className="text-muted-foreground" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail size={14} className="text-muted-foreground" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-muted-foreground" />
                @djkevin
              </a>
              <a
                href={siteConfig.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <SoundCloudIcon className="h-3.5 w-3.5 text-muted-foreground" />
                SoundCloud
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            די.ג'יי והפקה ·{" "}
            <span className="text-foreground">{siteConfig.brand.nameEn}</span>
          </p>
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.nameEn}. כל הזכויות
            שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
