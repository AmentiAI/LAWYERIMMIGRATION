import { Baby, Users, GraduationCap, AlertCircle } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const childCategories = [
  {
    icon: Baby,
    category: "IR — Immediate Relative",
    who: "Unmarried children under 21 of U.S. citizens",
    wait: "No backlog — visa immediately available",
    color: "bg-emerald-600",
    notes: "Child must remain unmarried until green card approval. Age-out protection under CSPA may apply.",
  },
  {
    icon: GraduationCap,
    category: "F1 — First Preference",
    who: "Unmarried adult children (21+) of U.S. citizens",
    wait: "Multi-year wait depending on Visa Bulletin",
    color: "bg-teal-600",
    notes: "Marriage at any point before approval terminates the petition.",
  },
  {
    icon: Users,
    category: "F3 — Third Preference",
    who: "Married children of U.S. citizens (any age)",
    wait: "Longest child category wait — often 10+ years",
    color: "bg-navy-800",
    notes: "Spouse and minor children of the beneficiary may derive status.",
  },
  {
    icon: Baby,
    category: "F2A / F2B — LPR Petitioner",
    who: "Unmarried children of permanent residents",
    wait: "F2A (under 21) faster; F2B (21+) significantly longer",
    color: "bg-gold-600",
    notes: "If petitioner naturalizes, category may upgrade to immediate relative or F1.",
  },
];

const specialCases = [
  {
    title: "Stepchildren",
    rule: "Stepparent must have married the biological parent before the child turned 18. Relationship must still exist at time of filing.",
  },
  {
    title: "Adopted Children",
    rule: "Adoption must occur before age 16 (or 18 if sibling adopted). Two years of legal custody and joint residence required.",
  },
  {
    title: "Legitimated Children",
    rule: "Children born out of wedlock may require legitimation under the laws of the child's country or father's residence.",
  },
  {
    title: "Derivative Children",
    rule: "Children of the principal beneficiary may be included on the petition if unmarried and under 21 at time of visa availability.",
  },
];

export default function PetitionForChildrenTopic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Baby className="h-4 w-4" />
            Child I-130 Petitions
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Petition for Children: Sons and Daughters of U.S. Citizens and
            Permanent Residents
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-3xl">
            Bringing your children to the United States requires understanding
            which visa category applies — and that category can change based on
            the child&apos;s age, marital status, and whether you are a citizen or
            permanent resident. Filing in the wrong category or missing a
            deadline can cost years.
          </p>
          <p className="text-slate-500 leading-relaxed max-w-2xl">
            Attorney Goncalves navigates child petitions including age-out
            protection under the Child Status Protection Act (CSPA), stepchild
            and adoption cases, and derivative beneficiary planning.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 text-center mb-4">
            Four Child Petition Categories
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            USCIS uses a precise definition of &quot;child&quot; that differs from
            everyday usage. Your child&apos;s category determines wait time and
            eligibility.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {childCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${cat.color} text-white px-6 py-4 flex items-center gap-3`}>
                  <cat.icon className="h-6 w-6" />
                  <span className="font-bold text-sm">{cat.category}</span>
                </div>
                <div className="p-6">
                  <p className="font-semibold text-navy-900 mb-2">{cat.who}</p>
                  <p className="text-teal-700 text-sm font-medium mb-3">
                    {cat.wait}
                  </p>
                  <p className="text-slate-500 text-sm">{cat.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Child Status Protection Act (CSPA)
          </h2>
          <p className="text-white/60 mb-10 max-w-3xl leading-relaxed">
            Children who turn 21 while a petition is pending may &quot;age
            out&quot; and lose immediate relative status. CSPA provides a
            mathematical formula to subtract certain processing times from the
            child&apos;s biological age — potentially preserving eligibility.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "Calculate CSPA Age",
                detail: "Biological age minus time I-130 was pending with USCIS (and NVC for consular cases)",
              },
              {
                step: "Check Visa Availability",
                detail: "Child must seek to acquire permanent residence within one year of visa becoming available",
              },
              {
                step: "File Before Age-Out",
                detail: "Missing the one-year window to seek acquisition can forfeit CSPA protection entirely",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <span className="text-gold-400 font-mono text-2xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold mt-3 mb-2">{item.step}</h3>
                <p className="text-white/60 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">
            Stepchildren, Adoptions & Special Situations
          </h2>
          <div className="space-y-4">
            {specialCases.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-cream-50 rounded-xl border border-cream-200"
              >
                <AlertCircle className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Naturalization Can Change Your Child&apos;s Category
          </h2>
          <p className="text-white/90 leading-relaxed">
            If you are a permanent resident petitioning for an unmarried child,
            becoming a U.S. citizen can upgrade the petition from F2A/F2B to
            immediate relative or F1 — potentially eliminating years of wait.
            We evaluate whether and when naturalization benefits your family&apos;s
            case.
          </p>
        </div>
      </section>

      <FaqBlock
        title="Child Petition FAQs"
        items={[
          {
            q: "What happens if my child turns 21 while the petition is pending?",
            a: "The child may age out of immediate relative status and move to a preference category with a wait. CSPA may protect eligibility if requirements are met — we calculate this before filing.",
          },
          {
            q: "Can I petition for my married daughter?",
            a: "U.S. citizens can petition for married children in the F3 category. Permanent residents cannot petition for married children at all.",
          },
          {
            q: "Does my child need to stay in the U.S. during the process?",
            a: "If adjusting status in the U.S., the child must maintain lawful status. If processing abroad, the child waits in their home country until the immigrant visa is issued.",
          },
          {
            q: "Can my child's children (my grandchildren) immigrate too?",
            a: "Minor unmarried children of the beneficiary may be derivative beneficiaries on the petition if they remain under 21 and unmarried when the visa becomes available.",
          },
        ]}
      />

      <TopicFooter
        cta="Petition for Your Child"
        relatedService="family-based-petitions"
      />
    </div>
  );
}
