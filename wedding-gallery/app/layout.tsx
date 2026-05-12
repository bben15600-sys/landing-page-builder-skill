import type { Metadata } from "next";
import { Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/components/site/site-config";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${siteConfig.couple.bride} & ${siteConfig.couple.groom} · ${siteConfig.event.date}`,
  description: `הגלריה הרשמית של החתונה של ${siteConfig.couple.bride} ו${siteConfig.couple.groom}. צילום בהנחיית ${siteConfig.photographer.name}.`,
  openGraph: {
    title: `${siteConfig.couple.bride} & ${siteConfig.couple.groom}`,
    description: `הגלריה הרשמית של חתונת ${siteConfig.couple.bride} ו${siteConfig.couple.groom}`,
    type: "website",
    locale: "he_IL",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
