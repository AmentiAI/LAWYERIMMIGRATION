import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Award, Globe, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { mysticImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Law Office of Jacquelyn R Goncalves LLC — a Mystic, Connecticut immigration law firm dedicated to compassionate, expert legal advocacy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our Firm"
        subtitle="Dedicated to helping individuals and families achieve their immigration goals with integrity, expertise, and compassion."
        breadcrumb={[{ label: "About" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="prose-custom">
                <h2>Our Mission</h2>
                <p>
                  At the Law Office of Jacquelyn R Goncalves LLC, we believe
                  that immigration law is fundamentally about people — their
                  families, their careers, their safety, and their dreams. Our
                  mission is to provide accessible, high-quality legal
                  representation that empowers clients to navigate the
                  immigration system with confidence.
                </p>
                <p>
                  From our office in historic Mystic, Connecticut, we serve
                  clients throughout New England and across the United States.
                  Whether you are seeking to reunite with family, obtain a work
                  visa, apply for citizenship, or defend against deportation, we
                  are here to guide you every step of the way.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={mysticImages.basculeBridge.src}
                  alt={mysticImages.basculeBridge.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide every interaction, every case strategy, and
              every decision we make on behalf of our clients.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Compassion",
                description:
                  "We treat every client with dignity and empathy, understanding the human stakes of immigration law.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We pursue the highest standards of legal practice, staying current on law and policy changes.",
              },
              {
                icon: Globe,
                title: "Accessibility",
                description:
                  "Bilingual services and clear communication ensure every client fully understands their options.",
              },
              {
                icon: CheckCircle2,
                title: "Integrity",
                description:
                  "Honest assessments, transparent fees, and ethical representation you can trust.",
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
                Rooted in Mystic, Connected to the World
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Mystic, Connecticut is more than our office location — it&apos;s
                a community built on maritime heritage, cultural diversity, and
                New England resilience. Our firm reflects these values: steady,
                trustworthy, and forward-looking.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                While immigration law is federal and allows us to represent
                clients anywhere in the country, our local roots give us deep
                connections to Connecticut&apos;s immigrant communities in New
                London County, Hartford, New Haven, and beyond.
              </p>
              <ul className="space-y-3">
                {[
                  "Conveniently located in downtown Mystic",
                  "Free parking available for clients",
                  "Virtual consultations available nationwide",
                  "Serving Connecticut's diverse communities",
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
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={mysticImages.downtownWinter.src}
                  alt={mysticImages.downtownWinter.alt}
                  fill
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
