import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t hairline bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-baseline gap-2.5">
              <span className="font-display text-3xl text-fg">ענבר</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-mono">
                Inbar Estate
              </span>
            </Link>
            <p className="mt-4 text-sm text-fg-muted italic-display leading-relaxed">
              חצר אירועים פרטית בלב יער הכרמל.
              <br />
              נוף לים. כשרות מהדרין.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-fg-subtle mb-4">
              איפה אנחנו
            </h4>
            <address className="not-italic text-sm text-fg-muted leading-relaxed">
              דרך היערות 7
              <br />
              כפר ברוך, יער הכרמל
              <br />
              <span className="hover:text-fg" dir="ltr">
                +972 4 999 1234
              </span>
              <br />
              <span className="hover:text-fg" dir="ltr">
                hello@inbarestate.co.il
              </span>
            </address>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-fg-subtle mb-4">
              ביקורים
            </h4>
            <ul className="text-sm text-fg-muted space-y-1">
              <li>ביקורים בתיאום מראש בלבד</li>
              <li>ימי שני-חמישי 16:00–20:00</li>
              <li>ימי שישי 09:00–13:00</li>
              <li className="pt-3 text-fg-subtle">
                סגור בשבת ובחגי ישראל
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fg-subtle">
          <span>
            © {new Date().getFullYear()} אחוזת ענבר. כל הזכויות שמורות.
          </span>
          <span className="font-mono italic-display">
            כשרות מהדרין · בהשגחת הרבנות הראשית
          </span>
        </div>
      </div>
    </footer>
  );
}
