"use client";

import Link from "next/link";
import { Clock, Shield, MessageSquare, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { AppointmentBookingForm } from "@/components/AppointmentBookingForm";
import { siteConfig } from "@/lib/constants";

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        title="Book a Consultation"
        subtitle="Choose an available date and time, then tell us about your immigration matter."
        breadcrumb={[{ label: "Book Now" }]}
      />

      <section className="section-padding bg-tan-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
            <FadeIn className="lg:col-span-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-olive-900 mb-6">
                What to Expect
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Your initial consultation is an opportunity to discuss your
                immigration matter with Attorney Goncalves, understand your
                options, and determine the best path forward.
              </p>

              <StaggerContainer className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Case Evaluation",
                    description:
                      "We'll review your immigration history, current status, and goals.",
                  },
                  {
                    icon: Shield,
                    title: "Confidential Discussion",
                    description:
                      "All consultations are private and protected by attorney-client privilege.",
                  },
                  {
                    icon: Clock,
                    title: "60-Minute Session",
                    description:
                      "Enough time to thoroughly understand your situation and outline next steps.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Clear Action Plan",
                    description:
                      "You'll leave with an understanding of options, timelines, and estimated costs.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive-100 text-olive-700">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-olive-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-10 rounded-2xl bg-olive-800 p-6 text-white">
                <p className="font-semibold mb-2">Prefer to call?</p>
                <p className="text-white/70 text-sm mb-3">
                  Our office is available during business hours.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-tan-100 font-semibold hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-3">
              <AppointmentBookingForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-slate-600 mb-4">
              Have questions before booking? Visit our FAQ page for answers to
              common questions about our services and process.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center font-semibold text-olive-700 hover:text-olive-600 transition-colors"
            >
              View All FAQs →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
