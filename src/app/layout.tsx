import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "immigration lawyer",
    "Mystic CT",
    "Rhode Island immigration attorney",
    "Connecticut immigration attorney",
    "family immigration lawyer",
    "green card lawyer",
    "citizenship attorney",
    "fiancé visa lawyer",
    "Jacquelyn Goncalves",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased overflow-x-hidden min-w-0">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
