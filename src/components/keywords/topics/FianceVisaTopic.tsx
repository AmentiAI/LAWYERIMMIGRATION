import Image from "next/image";
import { Plane, Calendar, MapPin, Heart } from "lucide-react";
import { legalImages } from "@/lib/images";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const k1Timeline = [
  { phase: "USCIS", duration: "6–10 months", action: "I-129F petition filed and adjudicated" },
  { phase: "NVC", duration: "2–4 weeks", action: "Case transferred to National Visa Center" },
  { phase: "Embassy", duration: "2–4 months", action: "DS-160, medical exam, interview scheduled" },
  { phase: "Entry", duration: "90 days", action: "Enter U.S. and marry your fiancé(e)" },
  { phase: "AOS", duration: "8–14 months", action: "File I-485 for green card after marriage" },
];

export default function FianceVisaTopic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-20 bg-tan-50 border-b border-tan-200">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-rose-600 font-semibold text-sm mb-3">
              K-1 Nonimmigrant Visa
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              Fiancé Visa (K-1): Bring Your Partner to America to Marry
            </h1>
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-4">
              The K-1 fiancé visa allows a U.S. citizen to bring their foreign
              fiancé(e) to the United States for marriage within 90 days of
              entry. It is the only visa category specifically designed for
              engaged couples who plan to marry in the U.S.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Only U.S. citizens — not permanent residents — may file for a K-1
              visa. Attorney Goncalves manages the entire process from I-129F
              through consular interview and post-marriage green card
              adjustment.
            </p>
          </div>
          <div className="relative">
            <div className="bg-navy-900 text-white rounded-3xl p-10 text-center shadow-2xl">
              <Calendar className="h-12 w-12 text-gold-400 mx-auto mb-4" />
              <p className="font-serif text-6xl font-bold text-gold-400 mb-2">
                90
              </p>
              <p className="text-xl font-semibold mb-2">Days to Marry</p>
              <p className="text-white/60 text-sm">
                After U.S. entry, you must marry within 90 days or your fiancé
                must depart the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Complete K-1 Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-400/30 hidden md:block" />
            <div className="space-y-8">
              {k1Timeline.map((item, i) => (
                <div key={item.phase} className="flex gap-6 items-start">
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gold-500 text-navy-950 font-bold items-center justify-center shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-teal-400 font-bold">
                        {item.phase}
                      </span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-white/70">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              I-129F Petition Requirements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Before your fiancé can apply for a K-1 visa, USCIS must approve
              Form I-129F. This petition establishes that you have a bona fide
              relationship and intend to marry within 90 days of your
              fiancé&apos;s U.S. entry.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Heart,
                  title: "In-Person Meeting",
                  text: "You must have met in person within 2 years of filing, unless a waiver is granted for extreme hardship or cultural customs.",
                },
                {
                  icon: MapPin,
                  title: "Intent to Marry",
                  text: "Both parties must be legally free to marry and intend to marry within 90 days of the K-1 visa holder's U.S. entry.",
                },
                {
                  icon: Plane,
                  title: "U.S. Citizen Only",
                  text: "Only U.S. citizens may file I-129F. Permanent residents must marry abroad and petition through the I-130 spousal route.",
                },
                {
                  icon: Calendar,
                  title: "Children (K-2)",
                  text: "Unmarried children under 21 of the K-1 beneficiary may accompany on K-2 visas derived from the parent's petition.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-cream-50 rounded-xl p-5 border border-cream-200"
                >
                  <item.icon className="h-6 w-6 text-teal-600 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src={legalImages.capitol.src}
              alt={legalImages.capitol.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4">
          <DocChecklist
            title="Consular Interview Document Checklist"
            items={[
              "DS-160 confirmation page",
              "Valid passport (6+ months validity)",
              "Two passport-style photos",
              "I-129F approval notice (I-797)",
              "Birth certificate with translation",
              "Police certificates from all countries of residence",
              "Medical examination (Form I-693 or embassy form)",
              "Evidence of relationship (photos, messages, travel records)",
              "I-134 Affidavit of Support from U.S. citizen petitioner",
              "Petitioner's proof of U.S. citizenship",
              "Divorce decrees from any prior marriages",
            ]}
          />
        </div>
      </section>

      <FaqBlock
        title="Fiancé Visa FAQs"
        items={[
          {
            q: "Can my fiancé work on a K-1 visa?",
            a: "Your fiancé may apply for an Employment Authorization Document (EAD) after entering the U.S. on a K-1 visa, or after filing I-485 following marriage. Work authorization is not automatic upon entry.",
          },
          {
            q: "What happens if we don't marry within 90 days?",
            a: "The K-1 visa holder must depart the United States. Overstaying creates unlawful presence and can trigger future immigration bars. There is no extension of the 90-day period.",
          },
          {
            q: "Is K-1 faster than marrying abroad and filing I-130?",
            a: "It depends on the embassy location and current processing times. K-1 is often faster for couples who want to marry in the U.S., but each case should be evaluated individually.",
          },
          {
            q: "Can we visit the U.S. on a tourist visa while K-1 is pending?",
            a: "This is risky. Entering on a B-2 visa with intent to immigrate can be considered visa fraud. Consult with an attorney before any U.S. travel while a petition is pending.",
          },
        ]}
      />

      <TopicFooter cta="Start Your K-1 Petition" relatedService="fiance-petitions" />
    </div>
  );
}
