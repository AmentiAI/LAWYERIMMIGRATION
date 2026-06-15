import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Languages, Award, BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Attorney Jacquelyn R Goncalves",
  description:
    "Meet Attorney Jacquelyn R Goncalves — an experienced immigration lawyer serving Mystic, Connecticut and clients nationwide.",
};

export default function AttorneyPage() {
  return (
    <>
      <PageHero
        title="Attorney Jacquelyn R Goncalves"
        subtitle="Founding Attorney & Immigration Advocate"
        breadcrumb={[{ label: "Attorney" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/10">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                    alt="Attorney Jacquelyn R Goncalves"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg shadow-navy-950/5">
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">
                    Quick Facts
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Bar Admission</dt>
                      <dd className="font-medium text-navy-900">Connecticut</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Practice Focus</dt>
                      <dd className="font-medium text-navy-900">Immigration Law</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Languages</dt>
                      <dd className="font-medium text-navy-900">
                        English, Portuguese
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Location</dt>
                      <dd className="font-medium text-navy-900">Mystic, CT</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="prose-custom">
                <h2>A Dedicated Advocate for Immigrant Communities</h2>
                <p>
                  Jacquelyn R Goncalves founded her law practice with a clear
                  vision: to provide immigrants and their families with the
                  skilled, compassionate legal representation they deserve. With
                  over fifteen years of experience in immigration law, she has
                  helped hundreds of clients achieve their goals — from obtaining
                  green cards and citizenship to successfully defending against
                  deportation.
                </p>
                <p>
                  Attorney Goncalves understands the immigration journey
                  personally and professionally. Her bilingual capabilities in
                  English and Portuguese allow her to serve Connecticut&apos;s
                  vibrant Lusophone community and clients from Portuguese-speaking
                  countries worldwide, ensuring that language is never a barrier
                  to quality legal counsel.
                </p>
                <p>
                  Known for her meticulous case preparation, clear client
                  communication, and tenacious advocacy, Attorney Goncalves
                  approaches each case with the understanding that behind every
                  petition is a person with hopes, fears, and a future at stake.
                </p>

                <h2>Philosophy of Practice</h2>
                <p>
                  Attorney Goncalves believes that effective immigration
                  representation requires more than knowledge of the law — it
                  demands empathy, cultural sensitivity, and a commitment to
                  treating every client with dignity. She takes time to listen,
                  explain options in plain language, and develop strategies
                  tailored to each client&apos;s unique circumstances.
                </p>
                <p>
                  Whether you are a family seeking reunification, a professional
                  pursuing employment opportunities, or an individual facing
                  removal proceedings, Attorney Goncalves will fight tirelessly
                  on your behalf.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Education & Credentials
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Juris Doctor",
                description:
                  "Law degree with focus on immigration and international law.",
              },
              {
                icon: Award,
                title: "Bar Admissions",
                description:
                  "Licensed to practice law in the State of Connecticut.",
              },
              {
                icon: BookOpen,
                title: "Continuing Education",
                description:
                  "Regular training on immigration law updates, policy changes, and best practices.",
              },
              {
                icon: Languages,
                title: "Bilingual Practice",
                description:
                  "Full legal services available in English and Portuguese.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-cream-200 p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 mb-5">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic">
              &ldquo;Immigration law is not just about forms and procedures —
              it&apos;s about people building new lives, reuniting families, and
              pursuing the American dream. That&apos;s why I do this
              work.&rdquo;
            </blockquote>
            <p className="mt-6 text-gold-400 font-semibold">
              — Jacquelyn R Goncalves, Esq.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
