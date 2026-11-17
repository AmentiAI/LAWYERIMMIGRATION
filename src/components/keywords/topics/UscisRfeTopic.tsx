import { CalendarClock, FileSearch, Send } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const commonAsks = [
  {
    title: "Marriage evidence",
    body: "Joint accounts, leases, photos, and affidavits when USCIS questions whether the marriage is genuine.",
  },
  {
    title: "Financial sponsorship",
    body: "Tax returns, W-2s, or a joint sponsor when the I-864 income does not meet the guideline.",
  },
  {
    title: "Civil documents",
    body: "Birth, marriage, or divorce records, plus certified English translations when the original is not in English.",
  },
  {
    title: "Inconsistencies",
    body: "A written explanation when dates, addresses, or prior applications do not match the current filing.",
  },
];

export default function UscisRfeTopic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-16 bg-white border-b border-tan-200">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-olive-700 text-sm font-semibold uppercase tracking-wider mb-3">
            Request for Evidence
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6">
            Respond to a USCIS RFE Before the Deadline
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            A Request for Evidence means USCIS will not approve the case on
            the papers it has. The notice lists what is missing and the date
            the response must arrive. Missing that date is a common reason
            otherwise approvable cases are denied.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: FileSearch, label: "Read the notice", detail: "Answer only what USCIS asked. Extra paper does not replace a missing item." },
            { icon: CalendarClock, label: "Calendar the deadline", detail: "The response has to reach USCIS by the date printed on the notice." },
            { icon: Send, label: "Send a tracked packet", detail: "A cover letter that follows the RFE line by line, with copies of everything enclosed." },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-tan-200 p-6">
              <item.icon className="h-7 w-7 text-olive-700 mb-4" />
              <h2 className="font-serif text-xl font-bold text-olive-950 mb-2">
                {item.label}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
              What family-case RFEs usually request
            </h2>
            <ul className="space-y-4">
              {commonAsks.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-olive-950">{item.title}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <DocChecklist
            title="Bring these to the review"
            items={[
              "The RFE notice, all pages",
              "A copy of the filing USCIS questioned",
              "Receipt numbers",
              "Documents you already sent",
              "Anything new that answers the request",
            ]}
            columns={1}
          />
        </div>
      </section>

      <FaqBlock
        items={[
          {
            q: "Does an RFE mean the case will be denied?",
            a: "No. It means USCIS needs more evidence before it can decide. A complete, on-time response is often what moves the case to approval.",
          },
          {
            q: "Can I send the response after the deadline?",
            a: "USCIS can deny the case for abandonment if the response is late. Treat the date on the notice as firm and send early enough that delivery is not the risk.",
          },
          {
            q: "Is an RFE the same as a denial?",
            a: "No. A denial ends the application. An RFE is a chance to supply what was missing. A Notice of Intent to Deny is more serious and still has its own response deadline.",
          },
        ]}
      />
      <TopicFooter cta="Review an RFE" relatedService="family-based-petitions" />
    </div>
  );
}
