import type { Metadata } from "next";
import { Heebo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://lpb-modern-saas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stratos — הפלטפורמה ל-AI agents בעברית",
    template: "%s · Stratos",
  },
  description:
    "Stratos היא פלטפורמת AI agents לעסקים ישראלים — בנו, פרסו ונטרו סוכנים אוטונומיים בדקות. תמיכה מלאה בעברית, אינטגרציות עם Bit, Cardcom, Tranzila.",
  keywords: ["AI agents", "פלטפורמת AI", "עברית", "Israel", "automation", "LLM"],
  authors: [{ name: "Stratos" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Stratos",
    title: "Stratos — הפלטפורמה ל-AI agents בעברית",
    description: "בנו, פרסו ונטרו סוכני AI אוטונומיים בעברית — בדקות.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratos",
    description: "פלטפורמת AI agents לעסקים ישראלים",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans selection:bg-accent/30 selection:text-fg">
        {children}
      </body>
    </html>
  );
}
