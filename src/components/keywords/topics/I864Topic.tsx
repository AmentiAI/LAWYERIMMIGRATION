import { DollarSign, Users, AlertCircle, Scale } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const sponsorTypes = [
  {
    type: "Primary Sponsor",
    who: "The I-130 petitioner",
    requirement: "Must meet 125% of Federal Poverty Guidelines for household size",
    notes: "Uses most recent tax return (typically 3 years). Can combine income with household members.",
  },
  {
    type: "Joint Sponsor",
    who: "Any U.S. citizen or LPR willing to co-sponsor",
    requirement: "Must independently meet 125% poverty guidelines",
    notes: "Does not need to be related. Must be domiciled in the U.S. Separate I-864 required.",
  },
  {
    type: "Household Member",
    who: "Spouse or dependent living with sponsor",
    requirement: "Income combined with sponsor on Form I-864A",
    notes: "Files I-864A (Contract Between Sponsor and Household Member). Must sign under penalty of perjury.",
  },
];

const obligations = [
  "Support the immigrant at 125% of poverty level until they naturalize, work 40 qualifying quarters, permanently leave the U.S., or die",
  "Reimburse government agencies for means-tested public benefits received by the immigrant",
  "Obligation survives divorce — spousal support under I-864 is enforceable in state court",
  "Obligation applies to each person sponsored — separate I-864 for each immigrant",
  "Assets can substitute for income at 5x the difference (3x if sponsoring a spouse or child)",
];

export default function I864Topic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-20 bg-gradient-to-br from-teal-700 to-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-teal-200 text-sm font-semibold mb-3">
            Affidavit of Support
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Form I-864: The Financial Contract Behind Every Family Immigration
            Case
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            Form I-864 is a legally enforceable contract in which a sponsor
            agrees to financially support an immigrant so they will not become a
            public charge. It is required for virtually all family-based green
            card cases — and the obligations last far longer than most sponsors
            realize.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 text-center mb-12">
            Three Types of Sponsors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorTypes.map((s) => (
              <div
                key={s.type}
                className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-teal-600"
              >
                <DollarSign className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
                  {s.type}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  {s.who}
                </p>
                <p className="text-slate-700 text-sm mb-3">{s.requirement}</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {s.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-navy-900" />
              <h2 className="font-serif text-3xl font-bold text-navy-900">
                Legal Obligations of the I-864 Sponsor
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Signing Form I-864 creates a binding legal obligation enforceable
              in federal and state courts. This is not a mere formality — courts
              have consistently upheld sponsor obligations years after signing.
            </p>
            <ul className="space-y-4">
              {obligations.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <AlertCircle className="h-5 w-5 text-gold-500 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-950 text-white rounded-3xl p-10">
            <Users className="h-10 w-10 text-gold-400 mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Household Size Calculation
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your household size for I-864 purposes includes: yourself, your
              spouse, your dependents, anyone else you previously sponsored who
              has not yet naturalized or worked 40 quarters, and the immigrant
              you are currently sponsoring.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Income requirements increase with household size. We calculate
              your exact threshold using current HHS Poverty Guidelines and
              determine whether a joint sponsor is needed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-navy-950">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Income Too Low? Options Exist.
          </h2>
          <p className="leading-relaxed">
            If your income falls below 125% of poverty guidelines, you may use
            assets (cash, stocks, property equity) at 5 times the income
            shortfall, add a joint sponsor, or include household member income
            via Form I-864A. We evaluate every option for your situation.
          </p>
        </div>
      </section>

      <FaqBlock
        title="I-864 Questions"
        items={[
          {
            q: "Does the I-864 obligation end after divorce?",
            a: "No. Courts have held that I-864 support obligations survive divorce. A divorced immigrant may sue their former sponsor for support under the I-864 contract.",
          },
          {
            q: "Which tax return do I use?",
            a: "USCIS requires your most recent federal tax return. If you did not file, you must provide an explanation and may need a joint sponsor.",
          },
          {
            q: "Can I use unemployment income?",
            a: "Generally no. USCIS looks at stable earned income. Unemployment and means-tested benefits typically cannot be counted toward sponsorship income.",
          },
        ]}
      />

      <TopicFooter cta="Review Your I-864 Requirements" relatedService="family-based-petitions" />
    </div>
  );
}
