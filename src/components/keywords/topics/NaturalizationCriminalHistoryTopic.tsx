import { Scale, Eye, Shield, Clock } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const offenseImpact = [
  {
    level: "Permanent Bar",
    examples: "Aggravated felonies, murder, torture, genocide",
    impact: "Cannot naturalize — no waiver available",
    color: "border-red-600 bg-red-50",
  },
  {
    level: "Temporary Bar",
    examples: "Crimes involving moral turpitude, controlled substance offenses, multiple convictions",
    impact: "Must wait 5 years (or longer) after conviction/sentence completion",
    color: "border-orange-500 bg-orange-50",
  },
  {
    level: "Disclosure Required",
    examples: "Arrests without conviction, dismissed charges, juvenile records",
    impact: "Must disclose on N-400 — failure to disclose is worse than the offense",
    color: "border-gold-500 bg-gold-50",
  },
  {
    level: "May Not Affect GMC",
    examples: "Minor traffic violations, single misdemeanor with no moral turpitude",
    impact: "Disclose but may not impact good moral character determination",
    color: "border-teal-500 bg-teal-50",
  },
];

export default function NaturalizationCriminalHistoryTopic() {
  return (
    <div className="bg-tan-50 min-h-screen">
      <section className="page-header-offset pb-20 relative bg-tan-50">
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="h-10 w-10 text-olive-700" />
            <span className="px-3 py-1 bg-olive-100 rounded-full text-sm text-olive-800 font-medium">
              Complex Naturalization Cases
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Naturalization and Citizenship with Criminal History
          </h1>
          <p className="text-slate-800 text-lg leading-relaxed mb-4">
            A criminal record does not automatically disqualify you from U.S.
            citizenship — but it requires careful legal analysis before filing
            Form N-400. Some offenses permanently bar naturalization; others
            create temporary waiting periods; still others require disclosure but
            may not affect your case.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Attorney Goncalves conducts thorough good moral character (GMC)
            evaluations and develops disclosure strategies that protect your
            application while meeting USCIS requirements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            How Criminal History Affects Naturalization
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offenseImpact.map((item) => (
              <div
                key={item.level}
                className={`border-l-4 ${item.color} rounded-r-xl p-6`}
              >
                <h3 className="font-bold text-navy-900 mb-2">{item.level}</h3>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Examples:</strong> {item.examples}
                </p>
                <p className="text-slate-700 text-sm font-medium">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <Eye className="h-10 w-10 text-olive-700 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-black mb-6">
              The Disclosure Imperative
            </h2>
            <p className="text-slate-800 leading-relaxed mb-4">
              Form N-400 asks detailed questions about arrests, citations, charges,
              and convictions — even if charges were dismissed or records were
              sealed or expunged. USCIS conducts FBI background checks that will
              reveal records you fail to disclose.
            </p>
            <p className="text-slate-800 leading-relaxed mb-4">
              Failure to disclose is itself a ground for denial and can be
              considered fraud or misrepresentation — far more damaging than the
              underlying offense.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-800 text-sm font-semibold">
                Never file N-400 without obtaining certified court dispositions
                for every arrest in your history — regardless of outcome.
              </p>
            </div>
          </div>
          <div>
            <Clock className="h-10 w-10 text-olive-700 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-black mb-6">
              When to Wait Before Filing
            </h2>
            <p className="text-slate-800 leading-relaxed mb-6">
              Sometimes the best strategy is patience. We calculate whether your
              statutory period for good moral character has been interrupted and
              when it will reset.
            </p>
            <ul className="space-y-4 text-sm text-slate-800">
              <li className="pl-4 border-l-2 border-olive-600">
                Wait until 5 years after completion of sentence for most CIMT
                offenses
              </li>
              <li className="pl-4 border-l-2 border-olive-600">
                Wait until probation or parole is fully completed
              </li>
              <li className="pl-4 border-l-2 border-olive-600">
                Consider post-conviction relief (expungement, pardon) before filing
              </li>
              <li className="pl-4 border-l-2 border-olive-600">
                Evaluate whether offense qualifies as aggravated felony under
                immigration law (different from state law definition)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-800 text-white">
        <div className="max-w-4xl mx-auto px-4 flex items-start gap-6">
          <Shield className="h-10 w-10 shrink-0 text-white" />
          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-white">
              Good Moral Character (GMC) Period
            </h2>
            <p className="text-white/90 leading-relaxed">
              USCIS evaluates good moral character for the 5 years preceding your
              N-400 filing (3 years if married to a U.S. citizen). Certain
              offenses are reviewable beyond this period. We analyze your complete
              record against every GMC statutory bar before recommending whether
              to file.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-cream-50 text-navy-900">
        <FaqBlock
          title="Criminal History & Citizenship FAQs"
          items={[
            {
              q: "Do I need to disclose expunged records?",
              a: "Yes. USCIS requires disclosure of all arrests regardless of expungement. Expungement under state law does not erase the record for immigration purposes.",
            },
            {
              q: "What is a crime involving moral turpitude (CIMT)?",
              a: "CIMT is not defined in the statute but generally includes crimes involving fraud, theft, violence, or depraved conduct. Whether a specific conviction qualifies requires legal analysis.",
            },
            {
              q: "Can a pardon help my naturalization case?",
              a: "A full and unconditional pardon from the President or state governor may cure certain convictions for immigration purposes. We evaluate pardon effectiveness on a case-by-case basis.",
            },
            {
              q: "Should I hire an attorney for N-400 with criminal history?",
              a: "Absolutely. Criminal history cases are among the most complex in naturalization law. An incorrect filing can result in denial, referral to immigration court, or jeopardize your permanent residence.",
            },
          ]}
        />
      </div>

      <TopicFooter
        cta="Confidential Criminal History Review"
        relatedService="citizenship-naturalization"
        variant="dark"
      />
    </div>
  );
}
