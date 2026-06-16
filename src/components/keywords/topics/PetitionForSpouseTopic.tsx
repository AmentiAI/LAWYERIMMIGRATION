import Image from "next/image";
import { legalImages } from "@/lib/images";
import { TopicFooter, FaqBlock } from "../shared";

export default function PetitionForSpouseTopic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-rose-600 font-semibold text-sm mb-3">
              Spousal I-130 Petition
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Petition for Spouse: Bringing Your Husband or Wife to America
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              A spousal petition (Form I-130) is how U.S. citizens and permanent
              residents sponsor their foreign national spouse for a green card.
              It is the most common family immigration case — and one of the most
              carefully reviewed by USCIS fraud detection units.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Attorney Goncalves handles spousal petitions from initial I-130
              filing through adjustment of status or consular processing,
              conditional residence, and removal of conditions.
            </p>
          </div>
          <div className="relative aspect-square rounded-full overflow-hidden ring-8 ring-rose-200 shadow-2xl max-w-md mx-auto">
            <Image
              src={legalImages.naturalization.src}
              alt="Immigration consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 text-center mb-12">
            U.S. Citizen vs. Permanent Resident Petitioner
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-900 text-white rounded-3xl p-10">
              <p className="text-gold-400 font-bold text-sm uppercase mb-4">
                U.S. Citizen Petitioner
              </p>
              <h3 className="font-serif text-2xl font-bold mb-6">
                Immediate Relative — No Wait
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✓ Visa immediately available — no backlog</li>
                <li>✓ Spouse can file I-485 concurrently if in U.S.</li>
                <li>✓ CR-1 (conditional) if married less than 2 years</li>
                <li>✓ IR-1 (unconditional) if married 2+ years at approval</li>
                <li>✓ K-3 visa available (rarely used today)</li>
                <li>✓ Processing: typically 10–14 months (AOS)</li>
              </ul>
            </div>
            <div className="bg-teal-600 text-white rounded-3xl p-10">
              <p className="text-teal-200 font-bold text-sm uppercase mb-4">
                LPR Petitioner
              </p>
              <h3 className="font-serif text-2xl font-bold mb-6">
                F2A Preference — Subject to Wait
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>• Visa availability depends on Visa Bulletin</li>
                <li>• Cannot file I-485 until priority date is current</li>
                <li>• Spouse may need to wait abroad or maintain valid status</li>
                <li>• Upgrading to citizen petitioner eliminates wait</li>
                <li>• Children may be derivatives on the petition</li>
                <li>• Processing: varies with visa bulletin dates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">
            In the U.S. vs. Abroad: Two Paths
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-navy-900 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">
                Adjustment of Status (In U.S.)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                If your spouse entered the U.S. lawfully and a visa is available,
                they may file I-485 without leaving. Concurrent filing with I-130,
                I-765, and I-131 is common for immediate relatives.
              </p>
              <p className="text-xs text-slate-500">
                Forms: I-130 + I-485 + I-864 + I-693 + I-765 + I-131
              </p>
            </div>
            <div className="border-2 border-teal-600 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">
                Consular Processing (Abroad)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                If your spouse is outside the U.S., the case proceeds through the
                National Visa Center and a U.S. embassy or consulate after I-130
                approval. Embassy interview required.
              </p>
              <p className="text-xs text-slate-500">
                Forms: I-130 → NVC → DS-260 + I-864 + civil documents
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-500 text-navy-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Conditional Residence Warning
          </h2>
          <p className="leading-relaxed">
            Marriages less than two years old at the time of green card approval
            result in a two-year conditional card. You must file I-751 within 90
            days before expiration — we calendar this deadline from the moment
            your case is approved.
          </p>
        </div>
      </section>

      <FaqBlock
        title="Spousal Petition FAQs"
        items={[
          {
            q: "Can I petition for my same-sex spouse?",
            a: "Yes. Since the Supreme Court's Windsor decision (2013), same-sex marriages are recognized for federal immigration purposes if the marriage was valid where performed.",
          },
          {
            q: "What if we married after my spouse entered on a tourist visa?",
            a: "This raises the 90-day rule concern. USCIS may presume misrepresentation if you marry or file within 90 days of entry on a nonimmigrant visa. Legal guidance is essential.",
          },
          {
            q: "Can my spouse work while the petition is pending?",
            a: "If I-765 is filed with I-485, an EAD is typically issued within 3–6 months, allowing legal employment while the case is pending.",
          },
        ]}
      />

      <TopicFooter cta="Petition for Your Spouse" relatedService="family-based-petitions" />
    </div>
  );
}
