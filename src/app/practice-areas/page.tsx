import type { Metadata } from "next";
import {
  Heart,
  Briefcase,
  Flag,
  Shield,
  Scale,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { practiceAreas } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Immigration legal services including family immigration, employment visas, citizenship, asylum, deportation defense, and more. Mystic, CT.",
};

const iconMap = {
  Heart,
  Briefcase,
  Flag,
  Shield,
  Scale,
  FileCheck,
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Practice Areas"
        subtitle="Comprehensive immigration legal services tailored to your unique situation and goals."
        breadcrumb={[{ label: "Practice Areas" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {practiceAreas.map((area, index) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={area.id}>
                  <article
                    id={area.id}
                    className="scroll-mt-32 rounded-3xl bg-white shadow-lg shadow-navy-950/5 overflow-hidden"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${!isEven ? "lg:direction-rtl" : ""}`}
                    >
                      <div
                        className={`p-8 md:p-12 lg:p-16 ${!isEven ? "lg:order-2" : ""}`}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 mb-6">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                          {area.title}
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-8">
                          {area.description}
                        </p>
                        <h3 className="font-semibold text-navy-900 mb-4">
                          Services Include:
                        </h3>
                        <ul className="space-y-3 mb-8">
                          {area.services.map((service) => (
                            <li
                              key={service}
                              className="flex items-start gap-3 text-slate-700"
                            >
                              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                              {service}
                            </li>
                          ))}
                        </ul>
                        <Button href="/consultation" size="sm">
                          Discuss Your Case
                        </Button>
                      </div>

                      <div
                        className={`relative min-h-[300px] lg:min-h-full bg-gradient-to-br from-navy-900 to-navy-800 ${!isEven ? "lg:order-1" : ""}`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                          <Icon className="h-32 w-32 text-white/10" />
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_var(--color-teal-600)_0%,_transparent_60%)] opacity-30" />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Immigration cases often involve multiple areas of law. During your
              consultation, we&apos;ll review your situation and recommend the
              best path forward — even if it&apos;s not what you initially expected.
            </p>
            <Button href="/consultation" size="lg">
              Schedule a Consultation
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
