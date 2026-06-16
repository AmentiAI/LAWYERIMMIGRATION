import { Briefcase, RefreshCw, FileWarning } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const categories = [
  { code: "(a)(8)", desc: "Asylum applicant (after 150 days pending)", renewal: "Yes" },
  { code: "(c)(9)", desc: "Pending I-485 adjustment applicant", renewal: "Yes, with auto extension" },
  { code: "(c)(10)", desc: "Pending NACARA suspension applicant", renewal: "Yes" },
  { code: "(c)(26)", desc: "H-4 spouse of H-1B (with approved I-140)", renewal: "Yes" },
  { code: "(c)(33)", desc: "DACA recipient", renewal: "Yes, with auto extension" },
  { code: "(c)(35)", desc: "H-4 spouse of E/H/L with pending I-140", renewal: "Yes" },
];

export default function I765Topic() {
  return (
    <div className="bg-tan-50 min-h-screen">
      <section className="page-header-offset pb-20 bg-tan-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-block bg-olive-700 text-white font-mono font-bold px-4 py-2 rounded-lg text-sm mb-6">
            FORM I-765 · EAD
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
            Form I-765: Your Employment Authorization Document
          </h1>
          <p className="text-slate-800 text-xl md:text-2xl leading-relaxed mb-4">
            An Employment Authorization Document (EAD) is the card that proves to
            U.S. employers you may work legally. Form I-765 is used to apply for
            initial authorization, renewals, and replacements — each with
            different filing categories and requirements.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Working without authorization is a serious immigration violation. We
            file your I-765 correctly and on time to protect your employment and
            immigration status.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Renewal vs. Replacement
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="border border-teal-600 rounded-2xl p-8">
              <RefreshCw className="h-10 w-10 text-teal-400 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4 text-teal-400">
                Renewal
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                File when your current EAD is expiring. USCIS recommends filing up
                to 180 days before expiration. Many categories qualify for
                automatic 180-day extensions while renewal is pending.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Same eligibility category as original EAD</li>
                <li>• Copy of current/expiring EAD required</li>
                <li>• Underlying status must remain valid</li>
                <li>• Biometrics appointment may be required</li>
              </ul>
            </div>
            <div className="border border-gold-500 rounded-2xl p-8">
              <FileWarning className="h-10 w-10 text-gold-400 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4 text-gold-400">
                Replacement
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                File when your EAD was lost, stolen, destroyed, never received,
                or contains incorrect information. Different evidence
                requirements apply depending on the reason.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Police report for stolen cards (recommended)</li>
                <li>• Correct biographic data documentation</li>
                <li>• USCIS inquiry if card never received</li>
                <li>• No filing fee in some replacement scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-olive-700" />
            <h2 className="font-serif text-3xl font-bold text-black">
              Common EAD Eligibility Categories
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-tan-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-tan-200 bg-tan-50">
                  <th className="text-left py-3 px-4 text-olive-800 font-semibold">Code</th>
                  <th className="text-left py-3 px-4 text-olive-800 font-semibold">Category</th>
                  <th className="text-left py-3 px-4 text-olive-800 font-semibold">Renewable</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                {categories.map((c) => (
                  <tr key={c.code} className="border-b border-tan-100">
                    <td className="py-4 px-4 font-mono font-bold text-olive-700">
                      {c.code}
                    </td>
                    <td className="py-4 px-4">{c.desc}</td>
                    <td className="py-4 px-4">{c.renewal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4 text-white">
            Automatic Extension Rules
          </h2>
          <p className="text-white/90 leading-relaxed">
            If you file your I-765 renewal on time and USCIS has not adjudicated
            it before your current EAD expires, you may receive an automatic
            180-day extension. Your employer can accept your expired EAD plus the
            I-797C receipt notice as proof of continued work authorization —
            but only for eligible categories.
          </p>
        </div>
      </section>

      <div className="bg-cream-50 text-navy-900">
        <FaqBlock
          title="I-765 FAQs"
          items={[
            {
              q: "How long does an EAD take?",
              a: "Current USCIS processing for I-765 ranges from 3–7 months depending on the service center and category. Premium processing is not available for most EAD categories.",
            },
            {
              q: "Can I start a new job with just the receipt notice?",
              a: "Only if you qualify for automatic extension and present the receipt notice with your expired EAD. New employers should verify eligibility before hiring.",
            },
            {
              q: "What if my EAD has wrong information?",
              a: "File a replacement I-765 with evidence of the correct information. USCIS may issue a corrected card without additional fee in some cases.",
            },
          ]}
        />
      </div>

      <TopicFooter
        cta="Renew or Replace Your EAD"
        relatedService="work-permit-renewal"
        variant="dark"
      />
    </div>
  );
}
