import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { faqs } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { faqPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about immigration services, consultations, and the process at the Law Offices of Jacquelyn R. Goncalves in Mystic, CT.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our immigration services, consultations, and process."
        breadcrumb={[{ label: "FAQ" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Questions? We&apos;re Here to Help.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.03}>
                <details className="group rounded-2xl border border-cream-200 bg-white overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-navy-900 hover:bg-cream-50 transition-colors">
                    {faq.question}
                    <span className="ml-4 text-teal-600 transition-transform group-open:rotate-45 text-xl shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
