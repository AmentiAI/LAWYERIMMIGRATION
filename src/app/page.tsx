"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Briefcase,
  Flag,
  Shield,
  FileCheck,
  Globe,
  Star,
  CheckCircle2,
  Heart,
  CreditCard,
  Lock,
  RefreshCw,
  TrendingUp,
  Plane,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { siteConfig, testimonials, faqs } from "@/lib/constants";
import { servicesList } from "@/lib/services";
import { legalImages } from "@/lib/images";

const iconMap = {
  Users,
  Briefcase,
  Flag,
  Shield,
  FileCheck,
  Globe,
  Heart,
  CreditCard,
  Lock,
  RefreshCw,
  TrendingUp,
  Plane,
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[70dvh] sm:min-h-[75dvh] lg:min-h-[85dvh] flex items-center border-b-4 border-gold-500 overflow-hidden">
        <Image
          src={legalImages.mysticConnecticut.src}
          alt={legalImages.mysticConnecticut.alt}
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-950/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 w-full">
          <FadeIn>
            <p className="law-eyebrow mb-3 sm:mb-4 text-xs sm:text-sm">
              Immigration Law · Connecticut
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-4xl break-words">
              {siteConfig.tagline}
            </h1>
            <div className="law-rule mt-5 sm:mt-6" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-tan-100/80 max-w-2xl leading-relaxed font-light">
              {siteConfig.subtagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/consultation" variant="gold" size="lg" className="w-full sm:w-auto justify-center">
                Book Consultation
              </Button>
              <Button
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/10">
                  <Image
                    src={legalImages.immigrationLawOffice.src}
                    alt={legalImages.immigrationLawOffice.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <p className="law-eyebrow mb-3">
                Concierge-Style Representation
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Personal Attention. Clear Guidance.
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                At the {siteConfig.name}, we understand that immigration is
                more than paperwork — it&apos;s about your future, your family,
                and your peace of mind.
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                You will work directly with Attorney Goncalves from start to
                finish, never passed from one person to another.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Direct attorney involvement on every case",
                  "English, Spanish, and Portuguese — other languages available upon request",
                  "Assist clients worldwide",
                  "Family-based immigration focus",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-teal-600 transition-colors group"
              >
                Learn More About Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="law-eyebrow mb-3">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-900 mb-4">
              Immigration Legal Services
            </h2>
            <div className="law-rule law-rule-center mb-4" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              From family petitions to citizenship, business and investment
              immigration, and consular processing — every case handled with
              direct attorney involvement.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.slice(0, 6).map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full law-card p-8 transition-colors hover:border-gold-400/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold-500/30 bg-olive-950 text-gold-400 mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-olive-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-olive-800 group-hover:text-gold-600 transition-colors">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-tan-100 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="law-eyebrow mb-3">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-900 mb-4">
              A Tradition of Personal Advocacy
            </h2>
            <div className="law-rule law-rule-center" />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Direct Attorney Access",
                description:
                  "You work directly with Attorney Goncalves from the initial consultation through the resolution of your case — never passed between staff.",
              },
              {
                title: "Concierge-Style Service",
                description:
                  "A hands-on approach with prompt answers, clear guidance, and availability when concerns arise throughout your immigration journey.",
              },
              {
                title: "Multilingual Support",
                description:
                  "We assist clients in English, Spanish, and Portuguese. Other languages are available upon request.",
              },
              {
                title: "Clear Communication",
                description:
                  "An English and MBA background means complex immigration matters are explained in plain language you can understand.",
              },
              {
                title: "Worldwide Clients",
                description:
                  "We assist clients worldwide — from our Mystic office with federal immigration representation across the U.S. and abroad.",
              },
              {
                title: "Military Discipline",
                description:
                  "Six years of U.S. Navy service shaped the attention to detail, discipline, and dedication that guides every client relationship.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="law-card p-8">
                  <h3 className="font-serif text-xl font-semibold text-olive-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="law-eyebrow mb-3">Questions? We&apos;re Here to Help.</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-900">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {faqs.slice(0, 5).map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <details className="group rounded-2xl border border-cream-200 bg-white overflow-hidden">
                  <summary className="flex items-start sm:items-center justify-between cursor-pointer p-4 sm:p-6 font-semibold text-navy-900 hover:bg-cream-50 transition-colors text-sm sm:text-base gap-3">
                    <span className="text-left">{faq.question}</span>
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

          <FadeIn className="text-center">
            <Button href="/faq" variant="secondary">
              View All FAQs
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
              What Our Clients Say
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <div className="h-full rounded-2xl bg-cream-50 border border-cream-200 p-8 shadow-lg shadow-navy-950/5">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-navy-900">
                      — {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-tan-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={legalImages.mysticOffice.src}
                  alt={legalImages.mysticOffice.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="text-center lg:text-left">
              <p className="text-olive-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Visit Our Office
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-900 mb-4">
                {siteConfig.serviceAreas}
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto lg:mx-0 mb-2">
                {siteConfig.address.full}
              </p>
              <p className="text-slate-500 mb-8">
                {siteConfig.email} · {siteConfig.phoneAlt}
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get Directions
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
