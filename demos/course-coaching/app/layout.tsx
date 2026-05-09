import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://lpb-course-coaching.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "מ-0 ל-100K ב-90 יום — תוכנית הצמיחה של אדם לוי",
    template: "%s",
  },
  description:
    "התוכנית שעזרה ל-2,847 יזמים ישראלים לבנות עסק שעובד גם בלעדיהם. שיטה מוכחת, מנטור צמוד, אחריות 30 יום מלאה.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "אדם לוי · 100K ב-90 יום",
    title: "מ-0 ל-100K ב-90 יום",
    description: "תוכנית הצמיחה של 2,847 יזמים ישראלים.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${assistant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans selection:bg-conversion/40">
        {children}
      </body>
    </html>
  );
}
