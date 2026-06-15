"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Briefcase,
  Flag,
  Shield,
  Scale,
  FileCheck,
  Star,
  CheckCircle2,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import {
  siteConfig,
  practiceAreas,
  testimonials,
  stats,
} from "@/lib/constants";

const iconMap = {
  Heart,
  Briefcase,
  Flag,
  Shield,
  Scale,
  FileCheck,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80"
            alt="Historic Mystic, Connecticut waterfront"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-8">
              <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              Serving Mystic, Connecticut &amp; Nationwide
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
              Expert Immigration Law with{" "}
              <span className="gradient-text">Heart</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              {siteConfig.name} provides compassionate, results-driven
              immigration advocacy from our Mystic office. Your American dream
              deserves an attorney who listens, fights, and cares.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/consultation" size="lg">
                Schedule Free Consultation
              </Button>
              <Button href="/practice-areas" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-gold-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/10">
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                    alt="Law office consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-gold-500 rounded-2xl p-6 shadow-xl">
                  <p className="font-serif text-3xl font-bold text-navy-950">
                    15+
                  </p>
                  <p className="text-sm font-medium text-navy-900/80">
                    Years of Experience
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <p className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-3">
                About Our Firm
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Trusted Immigration Advocacy in Coastal Connecticut
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Located in the heart of historic Mystic, our firm combines deep
                legal expertise with a personal touch. We understand that
                behind every visa application and court hearing is a person
                with dreams, family, and a future at stake.
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                Attorney Jacquelyn R Goncalves has dedicated her career to
                helping individuals and families navigate the U.S. immigration
                system — from straightforward green card applications to complex
                deportation defense.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Personalized attention for every client",
                  "Fluent in English and Portuguese",
                  "Transparent fees and clear communication",
                  "Representation in all 50 states",
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
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Practice Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Immigration Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From family reunification to deportation defense, we provide
              full-service immigration representation tailored to your unique
              circumstances.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={area.id}>
                  <Link
                    href={`/practice-areas#${area.id}`}
                    className="group block h-full rounded-2xl border border-cream-200 bg-cream-50 p-8 transition-all duration-300 hover:border-teal-500/30 hover:shadow-xl hover:shadow-navy-950/5 hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 mb-5 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <Button href="/practice-areas" variant="secondary">
              View All Practice Areas
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--color-teal-600)_0%,_transparent_40%)] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              The Goncalves Difference
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Client-Centered Approach",
                description:
                  "You're not a case number. We take time to understand your story, your goals, and your concerns before crafting a strategy.",
              },
              {
                title: "Deep Legal Expertise",
                description:
                  "Years of focused immigration practice means we know the law, the procedures, and the strategies that get results.",
              },
              {
                title: "Bilingual Services",
                description:
                  "We serve our diverse community in English and Portuguese, ensuring nothing is lost in translation.",
              },
              {
                title: "Transparent Communication",
                description:
                  "No legal jargon without explanation. You'll always know where your case stands and what comes next.",
              },
              {
                title: "Nationwide Representation",
                description:
                  "Based in Mystic but licensed for federal immigration practice — we represent clients across the United States.",
              },
              {
                title: "Proven Track Record",
                description:
                  "Hundreds of successful cases across family immigration, employment visas, citizenship, and deportation defense.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Client Stories
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
              What Our Clients Say
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-lg shadow-navy-950/5">
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
                      {testimonial.author}
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

      {/* Location Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
            alt="Connecticut coastline near Mystic"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase mb-3">
              Visit Our Office
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Proudly Serving Mystic &amp; All of Connecticut
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              {siteConfig.address.full}
            </p>
            <Button href="/contact" variant="outline" size="lg">
              Get Directions
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
