import Link from "next/link";
import { Sparkles } from "lucide-react";

const COLS = [
  {
    title: "מוצר",
    links: ["תכולה", "תמחור", "אינטגרציות", "API", "Status"],
  },
  {
    title: "משאבים",
    links: ["תיעוד", "מדריכים", "Examples", "Changelog", "מערכת"],
  },
  {
    title: "חברה",
    links: ["אודות", "בלוג", "קריירה", "צור קשר", "מדיה"],
  },
  {
    title: "משפטי",
    links: ["תנאי שימוש", "פרטיות", "אבטחה", "DPA", "Sub-processors"],
  },
];

export function Footer() {
  return (
    <footer id="changelog" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-fg">
              <span className="grid place-items-center size-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white">
                <Sparkles className="size-4" strokeWidth={2.5} />
              </span>
              Stratos
            </Link>
            <p className="mt-4 text-sm text-fg-muted max-w-xs">
              פלטפורמת AI agents בעברית. נבנתה בתל אביב, נפרסה בכל הארץ.
            </p>

            {/* Status pill */}
            <a
              href="#status"
              className="mt-5 inline-flex items-center gap-2 text-xs text-fg-muted hover:text-fg transition-colors"
            >
              <span className="relative inline-flex">
                <span className="absolute inset-0 size-2 rounded-full bg-success animate-ping opacity-75" />
                <span className="relative size-2 rounded-full bg-success" />
              </span>
              <span dir="ltr">All systems operational</span>
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-wider text-fg-subtle font-mono mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-fg-muted hover:text-fg transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} Stratos AI. כל הזכויות שמורות.
          </div>
          <div className="flex items-center gap-5 text-xs text-fg-subtle">
            <span className="font-mono" dir="ltr">v3.2.1</span>
            <span dir="ltr">SOC 2 · ISO 27001 · GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
