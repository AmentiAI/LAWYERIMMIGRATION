import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesList, getServiceBySlug } from "@/lib/services";
import { servicePageRegistry } from "@/components/services/registry";
import { pageMetadata } from "@/lib/seo";
import { pageJsonLd } from "@/lib/structured-data";
import { serviceSources } from "@/lib/sources";
import { JsonLd } from "@/components/JsonLd";
import { ReviewedBy } from "@/components/ReviewedBy";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const ServicePageComponent = servicePageRegistry[slug as keyof typeof servicePageRegistry];

  if (!service || !ServicePageComponent) notFound();

  return (
    <>
      <JsonLd
        data={pageJsonLd({
          path: `/services/${slug}`,
          name: service.title,
          description: service.metaDescription,
          breadcrumb: [
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ],
          service: true,
          article: true,
        })}
      />
      <ServicePageComponent />
      <ReviewedBy sources={serviceSources[slug]} />
    </>
  );
}
