import { TreePine, Heart, FileCheck } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const lineageSteps = [
  {
    generation: "You (Petitioner)",
    requirement: "U.S. citizen, age 21 or older",
    proof: "U.S. passport, birth certificate, or Certificate of Naturalization",
  },
  {
    generation: "Your Parent (Beneficiary)",
    requirement: "Mother or father — biological, adoptive, or step-parent",
    proof: "Parent's birth certificate, passport, marriage certificate (if step-parent)",
  },
  {
    generation: "Relationship Link",
    requirement: "Your birth certificate showing parent's name",
    proof: "Long-form birth certificate with both parents' names listed",
  },
];

export default function PetitionForParentsTopic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-20 bg-tan-50 border-b border-tan-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <TreePine className="h-8 w-8 text-teal-600" />
            <span className="text-teal-700 font-semibold text-sm">
              Immediate Relative · No Visa Backlog
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6">
            Petition for Parents: Reuniting Families Across Generations
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-4 max-w-3xl">
            U.S. citizens age 21 and older may petition for their mother or
            father as immediate relatives. Unlike sibling or married-child
            petitions, parent cases have no annual visa cap and no years-long
            backlog — making this one of the fastest paths to a green card in
            the entire immigration system.
          </p>
          <p className="text-slate-500 leading-relaxed max-w-2xl">
            Attorney Goncalves handles parent petitions for clients throughout
            Connecticut, including cases involving step-parents,
            adoptive parents, and parents adjusting status from visitor visas.
          </p>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Proving the Parent-Child Lineage
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-500/30 hidden md:block" />
            <div className="space-y-8">
              {lineageSteps.map((step, i) => (
                <div key={step.generation} className="flex gap-8 items-start">
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-teal-600 items-center justify-center font-bold text-xl shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8">
                    <p className="text-gold-400 text-xs font-bold uppercase mb-2">
                      {step.generation}
                    </p>
                    <h3 className="font-serif text-xl font-bold mb-3">
                      {step.requirement}
                    </h3>
                    <p className="text-white/60 text-sm">
                      <strong className="text-white/80">Documentation:</strong>{" "}
                      {step.proof}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <Heart className="h-10 w-10 text-rose-500 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              Biological, Adoptive & Step-Parents
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-navy-900">Biological parents</strong>{" "}
                qualify if your birth certificate lists them as your parent.
                Legitimation may be required for fathers of children born out of
                wedlock, depending on country law.
              </p>
              <p>
                <strong className="text-navy-900">Adoptive parents</strong>{" "}
                qualify if the adoption occurred before you turned 16 and you
                resided with and were in legal custody of the adoptive parent
                for at least two years.
              </p>
              <p>
                <strong className="text-navy-900">Step-parents</strong> qualify
                only if the step-parent married your biological parent before
                you turned 18, and the marriage is still valid at the time of
                filing.
              </p>
            </div>
          </div>
          <div>
            <FileCheck className="h-10 w-10 text-teal-600 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              In the U.S. vs. Abroad
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If your parent is already in the United States in lawful status,
              they may adjust status concurrently with your I-130. If they are
              abroad, the case proceeds through consular processing after I-130
              approval.
            </p>
            <DocChecklist
              title="Parent Petition Document Checklist"
              items={[
                "Form I-130 with filing fee",
                "Your U.S. citizenship proof (passport or naturalization certificate)",
                "Your birth certificate showing parent's name",
                "Parent's birth certificate and passport",
                "Marriage certificate (if petitioning for father and parents were married)",
                "Step-parent marriage certificate (if applicable)",
                "Adoption decree (if applicable)",
                "Certified translations of all foreign-language documents",
                "Form I-864 Affidavit of Support",
                "Form I-693 Medical exam (if adjusting in U.S.)",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-500">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-navy-950 mb-4 text-center">
            The 90-Day Rule & Visitor Visa Concerns
          </h2>
          <p className="text-navy-900/80 leading-relaxed text-center">
            Parents who enter the U.S. on B-2 visitor visas and immediately file
            for adjustment of status face scrutiny under the 90-day rule. USCIS
            may presume they misrepresented their intent at the port of entry.
            We advise on timing, evidence of changed circumstances, and whether
            consular processing is the safer path.
          </p>
        </div>
      </section>

      <FaqBlock
        title="Parent Petition FAQs"
        items={[
          {
            q: "Can permanent residents petition for parents?",
            a: "No. Only U.S. citizens age 21 and older may petition for parents. If you are an LPR, you must naturalize first.",
          },
          {
            q: "Can I petition for both parents at the same time?",
            a: "Yes. Separate I-130 petitions are filed for each parent. Both can adjust concurrently if in the U.S.",
          },
          {
            q: "What if my parent's name on my birth certificate is different?",
            a: "Name discrepancies require additional evidence — affidavits, church records, or legal name change documents. We resolve these before filing.",
          },
          {
            q: "How long does a parent petition take?",
            a: "For adjustment of status cases, typically 12–18 months. Consular processing adds NVC and embassy interview time.",
          },
        ]}
      />

      <TopicFooter
        cta="Petition for Your Parents"
        relatedService="family-based-petitions"
      />
    </div>
  );
}
