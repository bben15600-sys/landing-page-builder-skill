export function Footer() {
  return (
    <footer className="py-10 bg-bg border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fg-subtle font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Maya Agam Studio · Tel Aviv</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-fg" dir="ltr">Instagram</a>
          <a href="#" className="hover:text-fg" dir="ltr">Vimeo</a>
          <a href="#" className="hover:text-fg">תקנון</a>
          <a href="#" className="hover:text-fg">פרטיות</a>
        </div>
      </div>
    </footer>
  );
}
