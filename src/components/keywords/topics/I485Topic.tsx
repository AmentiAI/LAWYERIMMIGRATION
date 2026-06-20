import { ArrowRight, MessageSquare } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const phases = [
  {
    title: "Eligibility Screening Before You File",
    body: "Not everyone qualifies to adjust inside the U.S. We review manner of entry, current status, prior removals, criminal history, and immigration violations before recommending adjustment.",
  },
  {
    title: "Concurrent Filing Strategy",
    body: "Immediate relatives may often file concurrently in one package.",
  },
  {
    title: "Medical Examination",
    body: "A USCIS-designated civil surgeon must complete your medical exam. Results must remain valid through adjudication.",
  },
  {
    title: "Biometrics Appointment",
    body: "USCIS schedules fingerprinting and photograph collection after receiving your application.",
  },
  {
    title: "USCIS Adjustment Interview",
    body: "Most adjustment applicants attend an in-person interview. Marriage-based cases receive heightened scrutiny.",
  },
  {
    title: "Green Card Production and Delivery",
    body: "Upon approval, USCIS produces your green card and mails it to the address on file.",
  },
];

export default function I485Topic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-16 bg-white border-b-4 border-teal-600">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-mono text-teal-600 font-bold text-sm mb-3">
            ADJUSTMENT OF STATUS
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6">
            Apply for Your Green Card Without Leaving the United States
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-4">
            Adjustment of status allows eligible individuals already present in
            the United States to become lawful permanent residents without
            departing for consular processing abroad. A complete adjustment
            package often includes multiple applications filed together.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Errors are difficult to correct and can cause denials with serious
            consequences. Attorney Goncalves prepares complete, consistent
            packages and prepares you for the USCIS interview.
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
              "File Package",
              "Receipt Notice",
              "Biometrics",
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
            Six Stages of an Adjustment Case
          </h2>
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <div
                key={phase.title}
                className="flex gap-6 bg-white rounded-xl p-6 border border-cream-200"
              >
                <span className="font-mono text-2xl font-bold text-teal-600 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">{phase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-8 w-8 text-teal-600" />
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              The Adjustment Interview
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most adjustment applicants attend an in-person interview at a USCIS
            field office. The officer reviews your entire application and asks
            questions about your eligibility, background, and — for marriage
            cases — your relationship.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Attorney Goncalves can attend your interview as your legal
            representative to advocate on your behalf.
          </p>
        </div>
      </section>

      <FaqBlock
        title="Adjustment of Status Questions"
        items={[
          {
            q: "How long does adjustment processing take?",
            a: "Processing times vary case by case depending on location and case type.",
          },
          {
            q: "What happens if my adjustment is denied?",
            a: "Denial may place you in removal proceedings depending on your status. We evaluate risks before filing and prepare waiver applications when needed.",
          },
          {
            q: "Do I need an attorney for my adjustment interview?",
            a: "You are not required to have an attorney, but marriage-based and complex cases benefit significantly from legal representation.",
          },
        ]}
      />

      <TopicFooter cta="Evaluate Your Adjustment Eligibility" relatedService="adjustment-of-status" />
    </div>
  );
}
