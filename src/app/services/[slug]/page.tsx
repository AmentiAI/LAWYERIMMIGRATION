import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesList, getServiceBySlug } from "@/lib/services";
import { servicePageRegistry } from "@/components/services/registry";

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
  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const ServicePageComponent = servicePageRegistry[slug as keyof typeof servicePageRegistry];

  if (!service || !ServicePageComponent) notFound();

  return <ServicePageComponent />;
}
