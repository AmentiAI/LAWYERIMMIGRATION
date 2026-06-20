import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceFooter,
} from "../shared";

const phases = [
  {
    title: "Eligibility Screening Before You File",
    body: "Not everyone qualifies to adjust inside the U.S. We review manner of entry, current status, prior removals, criminal history, and immigration violations before recommending adjustment. Filing when ineligible can trigger a Notice to Appear in immigration court.",
  },
  {
    title: "Concurrent Filing Strategy",
    body: "Immediate relatives may often file concurrently in one package.",
  },
  {
    title: "Medical Examination",
    body: "A USCIS-designated civil surgeon must complete your medical exam. Results must remain valid through adjudication. We coordinate timing so your medical examination remains current throughout processing.",
  },
  {
    title: "Biometrics Appointment",
    body: "USCIS schedules fingerprinting and photograph collection after receiving your application. Failure to attend biometrics can result in denial. We ensure you receive and respond to all USCIS notices promptly.",
  },
  {
    title: "USCIS Adjustment Interview",
    body: "Most employment-based and family-based adjustment applicants attend an in-person interview. Marriage-based cases receive heightened scrutiny. We conduct a full mock interview, review every application answer, and address red flags before your appointment.",
  },
  {
    title: "Green Card Production and Delivery",
    body: "Upon approval, USCIS produces your green card and mails it to the address on file.",
  },
];

export default function AdjustmentOfStatusService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Adjustment of Status · Green Card Application"
        title="Obtain a Green Card While Remaining in the United States"
        lead="Adjustment of status is the path from temporary presence to lawful permanent residence without departing the country. Attorney Goncalves manages your application from eligibility review through biometrics, interview, and card delivery."
      />

      <ServiceIntro>
        <p>
          Adjustment of status allows eligible foreign nationals already present in the
          United States to become lawful permanent residents without returning to their
          home country for consular processing. This is the most common path to a green
          card for spouses, parents, and children of U.S. citizens who entered lawfully.
        </p>
        <p>
          Adjustment is not available to everyone. Entry without inspection, certain
          visa overstays, and prior deportation orders can bar adjustment or require
          waivers. Attorney Goncalves conducts a thorough eligibility review before any
          application package is filed.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Six Stages of an Adjustment of Status Case"
        subtitle="From initial filing through green card delivery — each stage requires careful attention."
      >
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div key={phase.title} className="flex gap-6 bg-white rounded-xl p-6 border border-tan-200">
              <span className="font-mono text-2xl font-bold text-olive-400 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-olive-900 mb-2">{phase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{phase.body}</p>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Adjustment Eligibility Requirements"
        subtitle="You must meet every requirement below. Missing even one can result in denial."
        variant="alt"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              req: "Approved immigrant petition or immediate relative status",
              detail: "An approved family or employment petition — or concurrent filing for immediate relatives.",
            },
            {
              req: "Lawful admission or parole into the United States",
              detail: "Generally requires entry with a valid visa or under the Visa Waiver Program. Entry without inspection (EWI) bars adjustment except in limited cases.",
            },
            {
              req: "Visa immediately available",
              detail: "Immediate relatives always have visas available. Preference categories must wait until the priority date is current on the Visa Bulletin.",
            },
            {
              req: "Admissible under immigration law",
              detail: "Certain criminal convictions, fraud, health conditions, and prior immigration violations render applicants inadmissible. Waivers may be available.",
            },
            {
              req: "Physically present in the U.S. at time of filing",
              detail: "You must be inside the United States when your application is submitted. Departing after filing without advance parole abandons the application.",
            },
            {
              req: "Maintained lawful status (with exceptions)",
              detail: "Immediate relatives and certain other categories may adjust despite status violations. We analyze whether exceptions apply to your case.",
            },
          ].map((item) => (
            <div key={item.req} className="bg-white rounded-xl p-6 border border-tan-200">
              <h3 className="font-bold text-olive-900 mb-2 text-sm">{item.req}</h3>
              <p className="text-slate-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceFaq
        title="Adjustment of Status Questions"
        items={[
          {
            q: "How long does adjustment processing take?",
            a: "Processing times vary case by case depending on location and case type. Marriage-based cases in high-volume offices may take longer.",
          },
          {
            q: "Can I work while my adjustment is pending?",
            a: "Only if you receive employment authorization or maintain independent valid work authorization. Filing an adjustment application alone does not grant work permission.",
          },
          {
            q: "What happens if my adjustment is denied?",
            a: "Denial may place you in removal proceedings depending on your status. We evaluate risks before filing and prepare waiver applications when needed.",
          },
          {
            q: "Do I need an attorney for my adjustment interview?",
            a: "You are not required to have an attorney, but marriage-based and complex cases benefit significantly from legal representation. Attorney Goncalves attends interviews with clients when appropriate.",
          },
        ]}
      />

      <ServiceFooter
        heading="Find Out If Adjustment Fits Your Situation"
        description="A wrong filing can trigger removal proceedings. Get a thorough eligibility review before you submit anything to USCIS."
        buttonLabel="Evaluate Adjustment Eligibility"
      />
    </div>
  );
}
