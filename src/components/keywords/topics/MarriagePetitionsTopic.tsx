import { Heart, Scale, FileHeart, Users } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const processSteps = [
  {
    step: "01",
    title: "Determine Eligibility",
    body: "Confirm the marriage is legally valid, the petitioner is a U.S. citizen or LPR, and both parties are free to marry. Same-sex marriages are recognized for immigration purposes nationwide.",
  },
  {
    step: "02",
    title: "File Form I-130",
    body: "The U.S. citizen or permanent resident spouse files the Petition for Alien Relative with USCIS, establishing the qualifying relationship and creating a priority date.",
  },
  {
    step: "03",
    title: "Choose the Path Forward",
    body: "If the foreign spouse is in the U.S., adjustment of status (I-485) may be available. If abroad, the case proceeds through the National Visa Center and consular processing.",
  },
  {
    step: "04",
    title: "Compile Bona Fide Evidence",
    body: "USCIS requires proof the marriage is genuine — not entered solely for immigration benefits. We gather joint financial records, photos, correspondence, and affidavits.",
  },
  {
    step: "05",
    title: "Interview & Approval",
    body: "Most marriage cases require a USCIS or consular interview. We prepare you thoroughly and address any concerns about your relationship before you appear.",
  },
];

const evidenceCategories = [
  {
    icon: FileHeart,
    title: "Financial Ties",
    items: [
      "Joint bank accounts and credit cards",
      "Joint tax returns (IRS transcripts)",
      "Joint lease or mortgage documents",
      "Shared utility bills",
    ],
  },
  {
    icon: Users,
    title: "Shared Life",
    items: [
      "Photos together over time with dates",
      "Travel itineraries and boarding passes",
      "Birth certificates of children together",
      "Insurance policies naming spouse",
    ],
  },
  {
    icon: Heart,
    title: "Relationship History",
    items: [
      "Wedding invitations and ceremony photos",
      "Affidavits from family and friends",
      "Engagement and wedding receipts",
      "Communication records (cards, messages)",
    ],
  },
  {
    icon: Scale,
    title: "Legal Documents",
    items: [
      "Marriage certificate",
      "Divorce decrees from prior marriages",
      "Passports and birth certificates",
      "Police certificates if required",
    ],
  },
];

export default function MarriagePetitionsTopic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-24 bg-tan-50 border-b border-tan-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-6">
              <Heart className="h-3.5 w-3.5" /> Marriage-Based Immigration
            </span>
            <h1 className="font-serif text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Marriage Petitions: Reuniting Spouses Under U.S. Immigration Law
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-4">
              A marriage petition is the legal process by which a U.S. citizen or
              lawful permanent resident sponsors their foreign national spouse for
              a green card. It is one of the most common — and most carefully
              reviewed — categories in U.S. immigration law.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Attorney Goncalves guides couples through every stage: from the
              initial I-130 filing through adjustment of status or consular
              processing, conditional residence, and eventual citizenship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">
            The Marriage Petition Process
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Five stages from eligibility review to green card approval
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <span className="font-mono text-3xl font-bold text-gold-400/40">
                  {s.step}
                </span>
                <h3 className="font-serif text-lg font-bold mt-2 mb-3">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
            Proving Your Marriage Is Bona Fide
          </h2>
          <p className="text-slate-600 max-w-3xl mb-12 leading-relaxed">
            USCIS fraud investigators review marriage cases closely. Incomplete or
            weak evidence is the leading cause of Requests for Evidence (RFE) and
            denials. We organize your evidence into clear categories that
            demonstrate your relationship is real.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200"
              >
                <cat.icon className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="font-serif font-bold text-navy-900 mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              Citizen vs. Permanent Resident Petitioners
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-400 pl-6">
                <h3 className="font-bold text-navy-900 mb-2">
                  U.S. Citizen Spouse — Immediate Relative
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No annual visa cap applies. Visas are immediately available.
                  Processing typically takes 10–14 months for adjustment of
                  status cases. Spouses who have been married less than two years
                  receive conditional green cards valid for two years.
                </p>
              </div>
              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="font-bold text-navy-900 mb-2">
                  LPR Spouse — F2A Preference
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Subject to visa availability under the F2A category. Wait times
                  depend on the monthly Visa Bulletin. We monitor priority dates
                  and advise on the optimal filing strategy for your situation.
                </p>
              </div>
            </div>
          </div>
          <DocChecklist
            title="Documents to Gather Before Your Consultation"
            items={[
              "Valid passports for both spouses",
              "Marriage certificate (certified copy)",
              "Birth certificates",
              "Prior divorce decrees or death certificates",
              "Proof of petitioner&apos;s citizenship or LPR status",
              "Joint financial documents (6–12 months)",
              "Photos together with dates and locations",
              "Lease, mortgage, or deed showing shared residence",
              "Any prior immigration filings or USCIS notices",
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Conditional Residence Warning
          </h2>
          <p className="text-white/90 leading-relaxed">
            If you have been married less than two years when your spouse&apos;s
            green card is approved, they receive a two-year conditional card. You
            must file Form I-751 to remove conditions within the 90-day window
            before expiration — missing this deadline can result in removal
            proceedings.
          </p>
        </div>
      </section>

      <FaqBlock
        title="Marriage Petition FAQs"
        items={[
          {
            q: "Can we file if we married abroad?",
            a: "Yes. Marriages performed abroad are valid for immigration purposes if they were legally valid in the country where they took place and would be recognized in the U.S. state where you reside.",
          },
          {
            q: "What if my spouse entered the U.S. without inspection?",
            a: "This creates significant complications for adjustment of status. Options may include consular processing with a waiver, or other relief depending on your specific circumstances. We evaluate every case individually.",
          },
          {
            q: "How long does a marriage green card take in 2025?",
            a: "For U.S. citizen spouses adjusting status in the U.S., current USCIS processing averages 10–14 months. Consular processing timelines vary by embassy location.",
          },
          {
            q: "Will we be interviewed?",
            a: "Most marriage-based cases require an in-person interview at a USCIS field office or U.S. embassy. We conduct thorough interview preparation so you know what to expect.",
          },
          {
            q: "Can my spouse work while the case is pending?",
            a: "If you file I-765 concurrently with I-485, your spouse may receive an Employment Authorization Document (EAD) while the case is pending, typically within 3–6 months of filing.",
          },
        ]}
      />

      <TopicFooter
        cta="Schedule a Marriage Petition Consultation"
        relatedService="family-based-petitions"
      />
    </div>
  );
}
