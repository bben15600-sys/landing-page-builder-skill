export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-bg-2">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fg-subtle">
        <span>
          © {new Date().getFullYear()} Adam Levi · ע.מ 312345678 · כל הזכויות שמורות.
        </span>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-fg-muted">תקנון</a>
          <a href="#" className="hover:text-fg-muted">פרטיות</a>
          <a href="#" className="hover:text-fg-muted">אחריות</a>
          <a href="#" className="hover:text-fg-muted">צור קשר</a>
        </div>
      </div>
    </footer>
  );
}
