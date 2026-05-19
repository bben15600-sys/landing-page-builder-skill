export const metadata = {
  title: "בקרוב",
  description: "האתר בעבודה — חזרו בקרוב.",
};

export default function ComingSoonPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-background text-foreground"
    >
      <div className="text-center max-w-lg">
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
          SHAI SHALOM · WEDDING STORIES
        </p>
        <h1 className="text-5xl sm:text-7xl mb-6">בקרוב.</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          האתר בעבודה. נחזור בעוד כמה ימים עם הסיפור המלא.
        </p>
      </div>
    </main>
  );
}
