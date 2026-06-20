import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Globe, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/constants";
import { legalImages } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Attorney Jacquelyn R. Goncalves — immigration lawyer serving Connecticut with concierge-style, family-based immigration representation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Attorney Jacquelyn R. Goncalves"
        subtitle="Helping individuals, families, and businesses navigate the U.S. immigration system with clarity, compassion, and personal attention."
        breadcrumb={[{ label: "About" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="prose-custom">
                <p>
                  Attorney Jacquelyn R. Goncalves is dedicated to helping
                  individuals, families, and businesses navigate the U.S.
                  immigration system with clarity, compassion, and personal
                  attention. Her path to becoming an attorney was shaped by
                  service, communication, and a commitment to helping others
                  through complex challenges.
                </p>
                <p>
                  Before entering the legal profession, Jacquelyn proudly served
                  in the United States Navy for six years. Her military service
                  helped shape the discipline, attention to detail, and
                  dedication to service that continue to guide her work with
                  clients today.
                </p>
                <p>
                  Jacquelyn earned her bachelor&apos;s degree in English and
                  later completed her MBA before pursuing her legal education.
                  This diverse background allows her to communicate clearly,
                  think strategically, and better understand the personal,
                  family, and professional goals that often drive immigration
                  matters.
                </p>
                <p>
                  She founded her firm to provide a more personal and accessible
                  legal experience. At larger firms, clients may be passed
                  between multiple attorneys, paralegals, or staff members. At
                  the {siteConfig.name}, clients work directly with Jacquelyn
                  from the initial consultation through the resolution of their
                  case.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={legalImages.courtroom.src}
                  alt={legalImages.courtroom.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto prose-custom">
              <h2>A Hands-On, Concierge-Style Approach</h2>
              <p>
                Immigration matters are often life-changing. They can affect
                families, careers, businesses, and futures. That is why
                Jacquelyn takes a hands-on, concierge-style approach to legal
                representation. She guides clients through each step of the
                immigration process, answers questions promptly, and remains
                available when concerns arise.
              </p>
              <p>
                Whether you are pursuing a family-based petition, consular
                processing, a fiancé(e) visa, citizenship and naturalization,
                removal of conditions, or a business and investment immigration
                matter, Jacquelyn is committed to providing dedicated advocacy
                and personalized guidance.
              </p>
              <p>
                Her goal is simple: to help every client feel informed,
                supported, and confident throughout their immigration journey.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              What Sets Us Apart
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Direct Attorney Access",
                description:
                  "Work directly with Attorney Goncalves on every case — never handed off to staff or paralegals.",
              },
              {
                icon: Award,
                title: "Navy Discipline",
                description:
                  "Six years of U.S. Navy service instilled the attention to detail and dedication clients rely on.",
              },
              {
                icon: Globe,
                title: "Multilingual Services",
                description:
                  "Full legal services in English, Spanish, and Portuguese. Other languages available upon request.",
              },
              {
                icon: CheckCircle2,
                title: "Clear Guidance",
                description:
                  "Complex immigration matters explained in plain language so you always know your options.",
              },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 mb-5">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Mystic, Connecticut Office
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Our office is located in Mystic, Connecticut, serving clients
                throughout Connecticut and worldwide. U.S. immigration law is
                federal, so we represent clients across the United States and
                abroad.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  siteConfig.address.full,
                  siteConfig.phone,
                  siteConfig.email,
                  siteConfig.hours.weekdays,
                  siteConfig.hours.saturday,
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors group"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={legalImages.lawBooks.src}
                  alt={legalImages.lawBooks.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
