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
  title: {
    default: `${siteConfig.brand.nameEn} · ${siteConfig.brand.suffix}`,
    template: `%s · ${siteConfig.brand.nameEn}`,
  },
  description: `${siteConfig.photographer.name} — צילום חתונות וסיפורים. פורטפוליו וגלריות לאורחים.`,
  openGraph: {
    title: `${siteConfig.brand.nameEn} · ${siteConfig.brand.suffix}`,
    description: `${siteConfig.photographer.name} — צילום חתונות וסיפורים`,
    type: "website",
    locale: "he_IL",
  },
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
