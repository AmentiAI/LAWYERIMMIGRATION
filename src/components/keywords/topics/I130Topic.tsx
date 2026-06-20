import { AlertTriangle, CheckCircle } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const rfeReasons = [
  "Insufficient proof of qualifying relationship",
  "Missing birth certificates or translations",
  "Name discrepancies across documents",
  "Prior immigration violations not addressed",
  "Incomplete or unsigned forms",
  "Failure to establish petitioner's status",
];

export default function I130Topic() {
  return (
    <div className="bg-cream-50">
      <section className="bg-olive-800 page-header-offset pb-16 overflow-hidden relative">
        <div className="relative max-w-5xl mx-auto px-4">
          <p className="text-teal-400 text-sm font-semibold mb-3">
            Petition for Alien Relative
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Family Petition: Establishing the Relationship That Starts Your
            Immigration Case
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            A family petition is filed by a U.S. citizen or lawful permanent resident
            to establish a qualifying family relationship with a foreign national
            relative. It is the foundation of virtually every family-based green
            card case — without an approved petition, no immigrant visa or
            adjustment of status can proceed.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              Immediate Relatives vs. Preference Categories
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Immediate Relatives",
                  body: "Spouses, unmarried children under 21, and parents of U.S. citizens are immediate relatives. Visas are always available — there is no waiting line. These cases typically move fastest, often allowing concurrent adjustment filing if the beneficiary is already in the U.S.",
                },
                {
                  title: "Family Preference Categories",
                  body: "All other family relationships fall into preference categories with annual visa caps. Your priority date determines your place in line. The monthly Visa Bulletin shows which priority dates are current.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="font-bold text-red-800">
                  Common Reasons USCIS Issues RFEs
                </h3>
              </div>
              <ul className="space-y-2">
                {rfeReasons.map((r) => (
                  <li key={r} className="text-sm text-red-700">
                    • {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqBlock
        title="Family Petition Questions"
        items={[
          {
            q: "Can I petition for someone who is already in the U.S. illegally?",
            a: "You can file a petition regardless of the beneficiary's location or status. However, their ability to adjust status in the U.S. depends on separate eligibility rules, including how they entered and whether bars to adjustment apply.",
          },
          {
            q: "How long is an approved petition valid?",
            a: "An approved petition generally remains valid indefinitely as long as the petitioner remains eligible and the relationship continues. However, delays in following up can create practical complications.",
          },
          {
            q: "Can I appeal a petition denial?",
            a: "Yes. You may file a notice of appeal or motion within 30 days of the denial. We evaluate whether appeal or refiling is the better strategy.",
          },
        ]}
      />

      <TopicFooter cta="Discuss Your Family Petition" relatedService="family-based-petitions" />
    </div>
  );
}
