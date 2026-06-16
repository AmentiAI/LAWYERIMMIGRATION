import { FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const relationshipMatrix = [
  { petitioner: "U.S. Citizen", relative: "Spouse", category: "IR", wait: "Immediate" },
  { petitioner: "U.S. Citizen", relative: "Unmarried child <21", category: "IR", wait: "Immediate" },
  { petitioner: "U.S. Citizen", relative: "Parent (petitioner 21+)", category: "IR", wait: "Immediate" },
  { petitioner: "U.S. Citizen", relative: "Unmarried child 21+", category: "F1", wait: "Years" },
  { petitioner: "U.S. Citizen", relative: "Married child", category: "F3", wait: "Years" },
  { petitioner: "U.S. Citizen", relative: "Sibling", category: "F4", wait: "10–20+ yrs" },
  { petitioner: "LPR", relative: "Spouse", category: "F2A", wait: "Months–Years" },
  { petitioner: "LPR", relative: "Unmarried child <21", category: "F2A", wait: "Months–Years" },
  { petitioner: "LPR", relative: "Unmarried child 21+", category: "F2B", wait: "Years" },
];

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
        <div className="absolute right-0 top-0 font-mono text-[12rem] font-black text-white/5 leading-none select-none">
          I-130
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <p className="text-teal-400 text-sm font-semibold mb-3">
            Petition for Alien Relative
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Form I-130: Establishing the Family Relationship That Starts Your
            Immigration Case
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            Form I-130 is filed by a U.S. citizen or lawful permanent resident
            to establish a qualifying family relationship with a foreign national
            relative. It is the foundation of virtually every family-based green
            card case — without an approved I-130, no immigrant visa or
            adjustment of status can proceed.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
            I-130 Relationship Eligibility Matrix
          </h2>
          <p className="text-slate-600 mb-10 max-w-3xl">
            Who you can petition for depends entirely on your immigration status.
            This table shows every qualifying relationship and its visa category.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-cream-200 shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="text-left p-4">Petitioner</th>
                  <th className="text-left p-4">Relative</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">Visa Availability</th>
                </tr>
              </thead>
              <tbody>
                {relationshipMatrix.map((row, i) => (
                  <tr
                    key={`${row.petitioner}-${row.relative}`}
                    className={i % 2 === 0 ? "bg-white" : "bg-cream-50"}
                  >
                    <td className="p-4 font-medium text-navy-900">
                      {row.petitioner}
                    </td>
                    <td className="p-4 text-slate-700">{row.relative}</td>
                    <td className="p-4 font-mono font-bold text-teal-600">
                      {row.category}
                    </td>
                    <td className="p-4 text-slate-600">{row.wait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              What Happens After I-130 Approval?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Immediate Relatives",
                  body: "For spouses, parents, and unmarried children under 21 of U.S. citizens, a visa is immediately available. The beneficiary can proceed directly to I-485 (if in the U.S.) or consular processing (if abroad).",
                },
                {
                  title: "Preference Categories",
                  body: "For all other relationships, the beneficiary must wait until their priority date is current on the Department of State Visa Bulletin before proceeding. We monitor the bulletin monthly.",
                },
                {
                  title: "National Visa Center",
                  body: "Once a visa is available, the case transfers to the NVC for document collection, fee payment, and DS-260 immigrant visa application before embassy scheduling.",
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
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="font-bold text-red-800">
                  Top Reasons USCIS Issues RFEs on I-130
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
            <DocChecklist
              title="I-130 Filing Package"
              items={[
                "Form I-130 (signed)",
                "Filing fee or fee waiver request",
                "Proof of petitioner's U.S. citizenship or LPR status",
                "Beneficiary's birth certificate",
                "Marriage certificate (spousal petitions)",
                "Evidence of bona fide relationship (spousal)",
                "Passport-style photos",
                "G-28 (if represented by attorney)",
              ]}
              columns={1}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 flex items-start gap-6">
          <FileText className="h-10 w-10 shrink-0 text-gold-400" />
          <div>
            <h2 className="font-serif text-2xl font-bold mb-3">
              Priority Dates Matter
            </h2>
            <p className="text-white/90 leading-relaxed">
              The date USCIS receives your I-130 becomes your priority date. For
              preference categories, this date determines your place in the visa
              queue. Filing early — even when a long wait is expected — locks in
              your priority date and protects your place in line.
            </p>
          </div>
        </div>
      </section>

      <FaqBlock
        title="I-130 Frequently Asked Questions"
        items={[
          {
            q: "Can I file I-130 for someone who is already in the U.S. illegally?",
            a: "You can file the I-130 regardless of the beneficiary's location or status. However, their ability to adjust status in the U.S. depends on separate eligibility rules, including how they entered and whether bars to adjustment apply.",
          },
          {
            q: "How long is an approved I-130 valid?",
            a: "An approved I-130 generally remains valid indefinitely as long as the petitioner remains eligible and the relationship continues. However, delays in following up can create practical complications.",
          },
          {
            q: "Can I appeal an I-130 denial?",
            a: "Yes. You may file Form I-290B (Notice of Appeal or Motion) within 30 days of the denial. We evaluate whether appeal or refiling is the better strategy.",
          },
        ]}
      />

      <TopicFooter cta="File Your I-130 Petition" relatedService="family-based-petitions" />
    </div>
  );
}
