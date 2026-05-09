import { ExternalLink } from "lucide-react";
import { nav, site } from "./site-config";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background font-bold"
                style={{ background: "linear-gradient(135deg, var(--brand-black), oklch(0.30 0 0))" }}
              >
                <span className="text-[var(--brand-yellow)]">{site.shirtNumber}</span>
              </span>
              <div className="leading-tight">
                <div className="text-base font-extrabold">{site.brand}</div>
                <div className="text-xs text-muted-foreground">{site.position} · #{site.shirtNumber}</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.tagline}. כל הפניות המקצועיות יקבלו מענה תוך 24 שעות.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold mb-3">ניווט</div>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.href}>
                  <a className="hover:text-foreground" href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold mb-3">פרטים</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  className="inline-flex items-center gap-1 hover:text-foreground"
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener"
                >
                  <InstagramIcon className="h-4 w-4" /> Instagram
                </a>
                <a
                  className="inline-flex items-center gap-1 hover:text-foreground"
                  href={site.social.transfermarkt}
                  target="_blank"
                  rel="noopener"
                >
                  <ExternalLink className="h-4 w-4" /> Transfermarkt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {year} {site.brand}. כל הזכויות שמורות.</span>
          <span>נבנה עם Next.js · ⚽</span>
        </div>
      </div>
    </footer>
  );
}
