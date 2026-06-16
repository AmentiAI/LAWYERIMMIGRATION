import { ArrowRight, Shield, Stethoscope, MessageSquare } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const concurrentPackage = [
  { form: "I-485", purpose: "Application to adjust status to permanent resident" },
  { form: "I-130", purpose: "Petition for alien relative (if not already approved)" },
  { form: "I-765", purpose: "Employment Authorization Document (work permit)" },
  { form: "I-131", purpose: "Advance Parole (travel permission while pending)" },
  { form: "I-864", purpose: "Affidavit of Support (financial sponsorship)" },
  { form: "I-693", purpose: "Medical examination (sealed by civil surgeon)" },
];

const inadmissibilityBars = [
  "Unlawful presence of more than 180 days (3-year bar) or 1 year (10-year bar)",
  "Entry without inspection (EWI) — generally bars adjustment",
  "Certain criminal convictions",
  "Fraud or misrepresentation",
  "Prior removal or deportation orders",
  "Public charge grounds (largely modified since 2022)",
];

export default function I485Topic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-16 bg-white border-b-4 border-teal-600">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-mono text-teal-600 font-bold text-sm mb-3">
            ADJUSTMENT OF STATUS · FORM I-485
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6">
            Form I-485: Apply for Your Green Card Without Leaving the United
            States
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-4">
            Adjustment of status allows eligible individuals already present in
            the United States to become lawful permanent residents without
            departing for consular processing abroad. Form I-485 is the core
            application — but a complete adjustment package often includes five
            or more forms filed simultaneously.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Errors on I-485 are difficult to correct and can cause denials with
            serious consequences. Attorney Goncalves prepares complete,
            consistent packages and prepares you for the USCIS interview.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
            The Adjustment Journey
          </h2>
          <div className="flex flex-wrap items-center gap-2 mb-16">
            {[
              "Eligibility Review",
              "File I-485 Package",
              "Receipt Notice",
              "Biometrics",
              "EAD/AP Issued",
              "Interview",
              "Green Card",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 bg-navy-900 text-white text-sm font-medium rounded-full">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-300" />
                )}
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">
            Concurrent Filing Package
          </h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Immediate relatives of U.S. citizens often file these forms together
            in a single package — a strategy called concurrent filing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {concurrentPackage.map((item) => (
              <div
                key={item.form}
                className="bg-white rounded-xl p-5 border border-cream-200 shadow-sm"
              >
                <p className="font-mono font-bold text-teal-600 text-lg mb-2">
                  {item.form}
                </p>
                <p className="text-slate-600 text-sm">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-red-400" />
              <h2 className="font-serif text-2xl font-bold">
                Bars to Adjustment (INA §245)
              </h2>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Not everyone in the U.S. qualifies to adjust status. These are the
              most common bars — though waivers and exceptions exist in specific
              circumstances.
            </p>
            <ul className="space-y-3">
              {inadmissibilityBars.map((bar) => (
                <li
                  key={bar}
                  className="text-sm text-white/70 pl-4 border-l-2 border-red-500"
                >
                  {bar}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope className="h-8 w-8 text-teal-400" />
              <h2 className="font-serif text-2xl font-bold">
                Medical Examination
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed mb-4">
              All I-485 applicants must undergo a medical examination by a USCIS-
              designated civil surgeon. Form I-693 must be completed and sealed
              by the doctor — do not open the envelope.
            </p>
            <p className="text-white/60 leading-relaxed">
              The exam includes vaccination review, tuberculosis screening, and
              physical examination. Certain medical conditions and vaccination
              deficiencies can affect admissibility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-teal-600" />
              <h2 className="font-serif text-3xl font-bold text-navy-900">
                The I-485 Interview
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most adjustment applicants attend an in-person interview at a USCIS
              field office. The officer reviews your entire application and asks
              questions about your eligibility, background, and — for marriage
              cases — your relationship.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We review your complete file before the interview, identify
              potential issues, and conduct practice sessions so you understand
              what to expect and how to respond accurately.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Attorney Goncalves can attend your interview as your legal
              representative to advocate on your behalf.
            </p>
          </div>
          <DocChecklist
            title="Bring to Your I-485 Interview"
            items={[
              "Government-issued photo ID",
              "All passports (current and expired)",
              "Original I-485 receipt notices",
              "Updated evidence of relationship (marriage cases)",
              "Updated joint financial documents",
              "Any USCIS correspondence received since filing",
              "Employment authorization card (if issued)",
              "Marriage certificate (original)",
            ]}
          />
        </div>
      </section>

      <FaqBlock
        title="I-485 FAQs"
        items={[
          {
            q: "Can I work while my I-485 is pending?",
            a: "If you filed I-765 concurrently, you should receive an EAD within 3–6 months, allowing legal employment. Do not work without authorization.",
          },
          {
            q: "Can I travel while my I-485 is pending?",
            a: "Only with Advance Parole (I-131 approval). Departing without AP may abandon your I-485 application. There are exceptions for H-1B and L-1 holders.",
          },
          {
            q: "What is the 90-day rule?",
            a: "If you entered on a nonimmigrant visa and file for a green card within 90 days of entry, USCIS may presume you misrepresented your intent at entry. We evaluate timing carefully.",
          },
        ]}
      />

      <TopicFooter cta="Evaluate Your I-485 Eligibility" relatedService="adjustment-of-status" />
    </div>
  );
}
