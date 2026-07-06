import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationPagesList, getLocationBySlug } from "@/lib/location-pages";
import { locationPageRegistry } from "@/components/locations/registry";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locationPagesList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationBySlug(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/local/${slug}`,
    keywords: [page.keyword, ...page.secondaryKeywords, "immigration attorney", "Connecticut"],
  });
}

export default async function LocalPage({ params }: Props) {
  const { slug } = await params;
  const page = getLocationBySlug(slug);
  const LocationComponent = locationPageRegistry[slug];

  if (!page || !LocationComponent) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.name,
    description: page.metaDescription,
    url: absoluteUrl(`/local/${slug}`),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl("/og-image.png"),
    priceRange: "$$",
    knowsLanguage: siteConfig.languages,
    areaServed: { "@type": "State", name: "Connecticut" },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    knowsAbout: [page.keyword, ...page.secondaryKeywords],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LocationComponent />
    </>
  );
}
