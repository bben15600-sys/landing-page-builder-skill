import { Mail, Phone } from "lucide-react";
import { InstagramIcon } from "./brand-icons";
import { siteConfig } from "./site-config";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background mt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display text-2xl tracking-wider">
                {siteConfig.brand.nameEn}
              </span>
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase mt-1">
                {siteConfig.brand.suffix}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {siteConfig.photographer.bio}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              קישורים
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#search" className="hover:text-accent transition-colors">
                חיפוש חכם
              </a>
              <a href="#albums" className="hover:text-accent transition-colors">
                אלבומים
              </a>
              <a href="#gallery" className="hover:text-accent transition-colors">
                גלריה מלאה
              </a>
              <a
                href="#favorites"
                className="hover:text-accent transition-colors"
              >
                התמונות שלי
              </a>
              <a href="#share" className="hover:text-accent transition-colors">
                שיתוף והמלצה
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              צור קשר
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${siteConfig.photographer.phone}`}
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone size={14} className="text-muted-foreground" />
                {siteConfig.photographer.phone}
              </a>
              <a
                href={`mailto:${siteConfig.photographer.email}`}
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail size={14} className="text-muted-foreground" />
                {siteConfig.photographer.email}
              </a>
              <a
                href={siteConfig.photographer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-accent transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-muted-foreground" />
                {siteConfig.photographer.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            צילום ועריכה ·{" "}
            <span className="text-foreground italic-display">
              {siteConfig.photographer.name}
            </span>
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
