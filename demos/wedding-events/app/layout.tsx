import type { Metadata } from "next";
import { Heebo, Cormorant_Garamond, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://lpb-wedding-events.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "אחוזת ענבר — חתונות בוטיק בלב הכרמל",
    template: "%s · אחוזת ענבר",
  },
  description:
    "אחוזת ענבר היא חצר אירועים פרטית בלב יער הכרמל. מארחים חתונות בוטיק עד 200 אורחים, עם נוף לים, מטבח כשר למהדרין ושירות אישי שעובר מדור לדור.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "אחוזת ענבר",
    title: "אחוזת ענבר — חתונות בוטיק בלב הכרמל",
    description: "חצר אירועים פרטית. נוף לים. כשר למהדרין.",
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
      className={`${heebo.variable} ${frankRuhl.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans selection:bg-accent/30 selection:text-fg">
        {children}
      </body>
    </html>
  );
}
