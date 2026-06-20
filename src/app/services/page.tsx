import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  FileCheck,
  Globe,
  Shield,
  Flag,
  Heart,
  Briefcase,
  CreditCard,
  Lock,
  RefreshCw,
  TrendingUp,
  Plane,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { servicesList } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

const iconMap = {
  Users,
  FileCheck,
  Globe,
  Shield,
  Flag,
  Heart,
  Briefcase,
  CreditCard,
  Lock,
  RefreshCw,
  TrendingUp,
  Plane,
};

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Immigration legal services at the Law Offices of Jacquelyn R. Goncalves — family petitions, green cards, citizenship, VAWA, DACA, E-2 visas, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Immigration Legal Services"
        subtitle="Direct attorney representation for every stage of your immigration journey — from family petitions to citizenship, business and investment matters, and consular processing."
        breadcrumb={[{ label: "Services" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-slate-700 leading-relaxed">
              Every case is handled personally by Attorney Jacquelyn R.
              Goncalves. Select a service below to learn about the process,
              requirements, and how we can help.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-200 hover:border-teal-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-navy-900 mb-3 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
