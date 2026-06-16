import { Clock, Globe, Calendar, TrendingUp } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const waitTimesByCountry = [
  { country: "All Countries (General)", years: "16–18 years", note: "F4 worldwide cutoff" },
  { country: "Mexico", years: "20+ years", note: "Highest demand — longest wait" },
  { country: "Philippines", years: "18–22 years", note: "Per-country cap creates backlog" },
  { country: "India", years: "16–18 years", note: "Similar to worldwide dates" },
  { country: "China", years: "16–18 years", note: "Subject to per-country limits" },
  { country: "Other Countries", years: "12–16 years", note: "Varies — check monthly Visa Bulletin" },
];

const timelinePhases = [
  {
    phase: "Phase 1: I-130 Filing",
    duration: "12–24 months",
    what: "USCIS adjudicates the sibling petition and issues approval notice (I-797). Priority date is locked on filing date.",
    icon: Calendar,
  },
  {
    phase: "Phase 2: The Wait",
    duration: "10–20+ years",
    what: "Your priority date must become current on the monthly Visa Bulletin before any visa can be issued. This is the longest phase.",
    icon: Clock,
  },
  {
    phase: "Phase 3: National Visa Center",
    duration: "6–12 months",
    what: "After priority date is current, NVC collects civil documents, Affidavit of Support, and DS-260 immigrant visa application.",
    icon: Globe,
  },
  {
    phase: "Phase 4: Consular Interview",
    duration: "1–3 months",
    what: "Sibling attends embassy interview in home country. Medical exam and police certificates required. Visa issued upon approval.",
    icon: TrendingUp,
  },
];

export default function PetitionForSiblingTopic() {
  return (
    <div className="bg-tan-50 min-h-screen">
      <section className="page-header-offset pb-20 bg-tan-50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-olive-700 font-semibold text-sm mb-3 tracking-widest uppercase">
            F4 Family Preference · Sibling Petitions
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Petition for Brother or Sister: Navigating the Longest Family
            Immigration Wait
          </h1>
          <p className="text-slate-800 text-lg leading-relaxed mb-4 max-w-3xl">
            U.S. citizens may petition for their brothers and sisters in the F4
            family preference category. Unlike spouse or parent petitions, sibling
            cases are subject to annual visa caps and per-country limits — with
            wait times that routinely exceed 15 years.
          </p>
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            Filing early establishes your priority date. Attorney Goncalves files
            sibling petitions and helps families understand the timeline, maintain
            case validity, and prepare for consular processing when the visa
            finally becomes available.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-navy-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">
            F4 Wait Times by Country of Birth
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Wait times depend on your sibling&apos;s country of birth, not
            yours. The Visa Bulletin updates monthly — these are approximate
            ranges as of recent bulletins.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">
                    Country of Birth
                  </th>
                  <th className="text-left px-6 py-4 font-semibold">
                    Approximate Wait
                  </th>
                  <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {waitTimesByCountry.map((row, i) => (
                  <tr
                    key={row.country}
                    className={i % 2 === 0 ? "bg-cream-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium">{row.country}</td>
                    <td className="px-6 py-4 text-teal-700 font-bold">
                      {row.years}
                    </td>
                    <td className="px-6 py-4 text-slate-500 hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-black text-center mb-12">
            Four Phases of a Sibling Petition
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {timelinePhases.map((phase, i) => (
              <div
                key={phase.phase}
                className="relative bg-tan-50 border border-tan-200 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-olive-100 flex items-center justify-center">
                    <phase.icon className="h-6 w-6 text-olive-700" />
                  </div>
                  <div>
                    <p className="text-olive-700 text-xs font-bold uppercase">
                      Phase {i + 1}
                    </p>
                    <h3 className="font-bold text-black">{phase.phase}</h3>
                  </div>
                </div>
                <p className="text-olive-800 font-semibold text-sm mb-3">
                  {phase.duration}
                </p>
                <p className="text-slate-800 text-sm leading-relaxed">
                  {phase.what}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-olive-800 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-8">
            What You Need to Prove
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sibling Relationship</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Both birth certificates showing at least one common parent
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Parents&apos; marriage certificate (if half-siblings)
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Adoption decrees if siblings related through adoption
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Affidavits from family members confirming relationship
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Petitioner Eligibility</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Must be U.S. citizen (LPRs cannot petition for siblings)
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Must be age 21 or older
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Must maintain citizenship throughout the wait
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-300">→</span>
                  Must file Affidavit of Support when visa becomes available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-tan-100 border-t border-tan-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-4 text-center text-black">
            Why File Now Even With a 15+ Year Wait?
          </h2>
          <p className="text-slate-800 leading-relaxed text-center">
            Every month you delay filing pushes your priority date back. Siblings
            who would have been eligible today filed their I-130 years ago. We
            also monitor for changes in immigration law, petition revocation
            risks, and whether your sibling has alternative pathways (employment,
            marriage, other family petitions) that may be faster.
          </p>
        </div>
      </section>

      <div className="bg-cream-50 text-navy-900">
        <FaqBlock
          title="Sibling Petition FAQs"
          items={[
            {
              q: "Can I petition for my half-sibling?",
              a: "Yes, if you share at least one common parent. You will need both birth certificates and evidence of the shared parentage.",
            },
            {
              q: "What happens to the petition if I die before it is approved?",
              a: "The I-130 is automatically revoked upon the petitioner's death. There is no substitution of another family member as petitioner.",
            },
            {
              q: "Can my sibling's spouse and children come too?",
              a: "Yes. When the F4 visa becomes available, your sibling's spouse and unmarried children under 21 may derive immigrant visas as accompanying relatives.",
            },
            {
              q: "Does my sibling need to stay unmarried?",
              a: "No. Unlike some child categories, marriage does not affect F4 sibling petition eligibility.",
            },
          ]}
        />
      </div>

      <TopicFooter
        cta="Start Your Sibling Petition"
        relatedService="family-based-petitions"
        variant="dark"
      />
    </div>
  );
}
