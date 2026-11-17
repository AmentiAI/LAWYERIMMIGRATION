import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationPagesList, getLocationBySlug } from "@/lib/location-pages";
import { locationPageRegistry } from "@/components/locations/registry";
import { pageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";

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

  const schema = pageJsonLd({
    path: `/local/${slug}`,
    name: page.metaTitle,
    description: page.metaDescription,
    breadcrumb: [{ name: page.title, path: `/local/${slug}` }],
  });

  return (
    <>
      <JsonLd data={schema} />
      <LocationComponent />
    </>
  );
}
