import { Plane, AlertTriangle, FileText } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const steps = [
  {
    title: "Confirm you need it",
    body: "If Form I-485 is pending, leaving the United States without advance parole — or another status that lets you return — can be treated as abandoning the application.",
  },
  {
    title: "File Form I-131",
    body: "The travel document is requested on Form I-131, often together with the adjustment filing or while that case is still pending.",
  },
  {
    title: "Wait for approval",
    body: "Do not depart until the document is approved and in hand. A pending I-131 is not permission to travel.",
  },
  {
    title: "Re-enter with the document",
    body: "You present the advance parole document with your passport when you return. It is not a visa and it does not guarantee admission.",
  },
];

export default function AdvanceParoleTopic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 bg-tan-50 border-b border-tan-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="h-7 w-7 text-olive-700" />
            <p className="text-olive-700 text-sm font-semibold uppercase tracking-wider">
              Form I-131
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6">
            Advance Parole: Travel While Your Green Card Case Is Pending
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            Advance parole lets an adjustment applicant leave the United States
            and come back without giving up a pending Form I-485. Attorney
            Goncalves reviews your history before you book a trip.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <AlertTriangle className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-950 leading-relaxed">
              A receipt notice for Form I-131 is not a travel document. Leaving
              before advance parole is approved can end the adjustment
              application. Ask before you travel if you have unlawful presence,
              a prior removal order, or a status that already allows travel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">
            How the request moves
          </h2>
          <ol className="grid md:grid-cols-2 gap-5">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-tan-200 p-6 bg-cream-50"
              >
                <p className="text-gold-600 font-serif text-3xl font-bold mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-semibold text-olive-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="h-6 w-6 text-olive-700 shrink-0" />
            <h2 className="font-serif text-2xl font-bold text-olive-950">
              What we look at first
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Not every pending green card case should travel. We check how you
            last entered, whether the I-485 is actually pending, and whether a
            trip would create a new problem at the airport. If advance parole
            is the right document, we prepare Form I-131 with a clear reason
            for the travel.
          </p>
        </div>
      </section>

      <FaqBlock
        items={[
          {
            q: "Can I travel as soon as I file Form I-131?",
            a: "No. You need the approved advance parole document before you leave. Filing the form, or holding a receipt, does not authorize travel.",
          },
          {
            q: "Is advance parole the same as a re-entry permit?",
            a: "No. Advance parole is for people with a pending application who are not yet permanent residents. A re-entry permit is for lawful permanent residents who will be outside the United States for an extended period.",
          },
          {
            q: "Does advance parole guarantee I will be admitted?",
            a: "No. Customs and Border Protection makes the admission decision when you return. The document allows you to seek entry; it is not a visa.",
          },
        ]}
      />
      <TopicFooter cta="Ask About Travel" relatedService="adjustment-of-status" />
    </div>
  );
}
