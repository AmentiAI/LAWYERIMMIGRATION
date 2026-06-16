import { Globe, Building2, Briefcase, GraduationCap } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const pathways = [
  {
    icon: Globe,
    title: "Family-Based Green Cards",
    color: "border-l-rose-500",
    description:
      "The most common pathway. A qualifying family member files Form I-130, establishing the relationship. Categories include immediate relatives (no wait) and family preference categories (subject to visa caps).",
    forms: ["I-130", "I-485 or Consular Processing", "I-864", "I-693"],
    timeline: "6 months – 20+ years depending on category",
  },
  {
    icon: Briefcase,
    title: "Employment-Based Green Cards",
    color: "border-l-amber-600",
    description:
      "Employers sponsor workers through PERM labor certification (EB-2, EB-3) or self-petition in extraordinary ability categories (EB-1). Requires a job offer in most categories.",
    forms: ["I-140", "PERM (if required)", "I-485", "I-864 (if required)"],
    timeline: "1 – 5+ years depending on category and country",
  },
  {
    icon: Building2,
    title: "Investment & Business",
    color: "border-l-slate-600",
    description:
      "EB-5 immigrant investors and E-2 treaty investors pursue green cards or long-term status through substantial business investment in the United States.",
    forms: ["I-526 / I-829", "E-2 at consulate", "Business plans"],
    timeline: "Varies significantly by program",
  },
  {
    icon: GraduationCap,
    title: "Special Categories",
    color: "border-l-violet-600",
    description:
      "Diversity visa lottery winners, asylees and refugees adjusting status, VAWA self-petitioners, U visa holders, and other humanitarian categories each have distinct requirements.",
    forms: ["Category-specific forms"],
    timeline: "Varies by program",
  },
];

const misconceptions = [
  {
    myth: "Getting married to a U.S. citizen automatically gives you a green card.",
    fact: "Marriage creates eligibility — you must still file petitions, pass background checks, attend an interview, and prove the marriage is genuine.",
  },
  {
    myth: "A green card petition and a green card are the same thing.",
    fact: "The I-130 petition only establishes the family relationship. A separate application (I-485 or consular processing) is required to actually receive permanent residence.",
  },
  {
    myth: "Once you have a green card, you can never lose it.",
    fact: "Permanent residents can lose status through abandonment (extended absences), certain criminal convictions, or fraud in the original application.",
  },
  {
    myth: "All family members can be petitioned equally.",
    fact: "Only U.S. citizens can petition parents and siblings. LPRs have more limited categories. Wait times vary dramatically by relationship and country of birth.",
  },
];

export default function GreenCardPetitionsTopic() {
  return (
    <div className="bg-tan-50 min-h-screen">
      <section className="page-header-offset pb-20 px-4 bg-tan-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-olive-700 text-sm font-bold uppercase tracking-widest mb-4">
            Permanent Residence
          </p>
          <h1 className="font-serif text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
            Green Card Petitions: Every Pathway to U.S. Permanent Residence
          </h1>
          <p className="text-slate-800 text-lg leading-relaxed mb-6">
            A green card grants lawful permanent residence in the United States —
            the right to live, work, and eventually apply for citizenship. But
            &ldquo;green card petition&rdquo; is not a single process. It refers
            to the family or employment petition that begins your journey toward
            permanent status.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Attorney Goncalves helps clients identify the correct petition
            category, file accurately, and navigate from initial petition through
            card issuance — including renewal, removal of conditions, and
            naturalization when the time comes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-tan-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-16 text-black">
            Four Major Green Card Pathways
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((p) => (
              <div
                key={p.title}
                className={`bg-tan-50 border border-tan-200 border-l-4 ${p.color} rounded-r-2xl p-8`}
              >
                <p.icon className="h-10 w-10 text-olive-800 mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3 text-black">{p.title}</h3>
                <p className="text-slate-800 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.forms.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-1 bg-white border border-tan-200 rounded text-xs font-mono text-slate-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-600 font-semibold">
                  Typical timeline: {p.timeline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-black">
            Immediate Relatives vs. Preference Categories
          </h2>
          <div className="table-scroll rounded-xl border border-tan-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-tan-200 bg-tan-50">
                  <th className="text-left py-4 px-4 text-olive-800 font-semibold">
                    Category
                  </th>
                  <th className="text-left py-4 px-4 text-olive-800 font-semibold">
                    Who Qualifies
                  </th>
                  <th className="text-left py-4 px-4 text-olive-800 font-semibold">
                    Visa Wait
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                {[
                  ["IR", "Spouse, parent, unmarried child <21 of USC", "None"],
                  ["F1", "Unmarried adult children of USC", "Years"],
                  ["F2A", "Spouse & unmarried children <21 of LPR", "Months–Years"],
                  ["F2B", "Unmarried adult children of LPR", "Years"],
                  ["F3", "Married children of USC", "Years"],
                  ["F4", "Siblings of USC", "10–20+ years"],
                ].map(([cat, who, wait]) => (
                  <tr key={cat} className="border-b border-tan-100">
                    <td className="py-4 px-4 font-mono font-bold text-olive-700">
                      {cat}
                    </td>
                    <td className="py-4 px-4">{who}</td>
                    <td className="py-4 px-4">{wait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-tan-50 text-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-12">
            Common Misconceptions About Green Card Petitions
          </h2>
          <div className="space-y-8">
            {misconceptions.map((m) => (
              <div key={m.myth} className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-xs font-bold text-red-600 uppercase mb-2">
                    Myth
                  </p>
                  <p className="text-slate-700">{m.myth}</p>
                </div>
                <div className="bg-white border border-tan-200 rounded-xl p-6">
                  <p className="text-xs font-bold text-olive-800 uppercase mb-2">
                    Fact
                  </p>
                  <p className="text-slate-800">{m.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-tan-50">
        <FaqBlock
          title="Green Card Petition Questions"
          items={[
            {
              q: "What is a priority date?",
              a: "Your priority date is the date USCIS received your I-130 petition. For preference categories, you must wait until your priority date is 'current' on the Visa Bulletin before proceeding to a green card.",
            },
            {
              q: "Can I have multiple petitions filed for me?",
              a: "Yes. For example, a U.S. citizen child can petition for a parent while a sibling petition is also pending. However, you can only use one basis for your green card application.",
            },
            {
              q: "Does a green card petition expire?",
              a: "An approved I-130 petition generally remains valid as long as the relationship continues and the petitioner remains eligible. However, delays in following up can create complications.",
            },
          ]}
        />
      </div>

      <TopicFooter
        cta="Find Your Green Card Path"
        relatedService="family-based-petitions"
        variant="dark"
      />
    </div>
  );
}
