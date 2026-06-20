import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import { organizationJsonLd } from "@/lib/structured-data";
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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    "Connecticut immigration attorney",
    "family immigration lawyer",
    "green card lawyer",
    "citizenship attorney",
    "fiancé visa lawyer",
    "Jacquelyn Goncalves",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/immigration-law-office.png",
        width: 1200,
        height: 900,
        alt: "Law Office of Jacquelyn R. Goncalves — immigration law office in Mystic, Connecticut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/immigration-law-office.png"],
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
        <JsonLd data={organizationJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
