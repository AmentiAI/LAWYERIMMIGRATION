import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

const phases = [
  {
    title: "Eligibility Screening Before You File",
    body: "Not everyone qualifies to adjust inside the U.S. We review manner of entry, current status, prior removals, criminal history, and immigration violations before recommending I-485. Filing when ineligible can trigger a Notice to Appear in immigration court.",
  },
  {
    title: "Concurrent Filing Strategy",
    body: "Immediate relatives often file I-485 together with I-130, I-765, and I-131 in one package. Preference category beneficiaries must wait until their priority date is current on the Visa Bulletin before filing I-485. We determine the optimal filing sequence for your case.",
  },
  {
    title: "Medical Examination (Form I-693)",
    body: "A USCIS-designated civil surgeon must complete your medical exam. The I-693 is valid for two years but must not expire before adjudication. We coordinate timing so your medical results remain valid throughout processing.",
  },
  {
    title: "Biometrics Appointment",
    body: "USCIS schedules fingerprinting and photograph collection after receiving your I-485. Failure to attend biometrics can result in denial. We ensure you receive and respond to all USCIS notices promptly.",
  },
  {
    title: "USCIS Adjustment Interview",
    body: "Most employment-based and family-based adjustment applicants attend an in-person interview. Marriage-based cases receive heightened scrutiny. We conduct a full mock interview, review every application answer, and address red flags before your appointment.",
  },
  {
    title: "Card Production and Delivery",
    body: "Upon approval, USCIS produces your green card and mails it to the address on file. We verify the card category (conditional vs. unconditional) and calendar any I-751 deadline if you received a two-year conditional card.",
  },
];

export default function AdjustmentOfStatusService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-485 · Application to Register Permanent Residence"
        title="Obtain a Green Card While Remaining in the United States"
        lead="Adjustment of status is the path from temporary presence to lawful permanent residence without departing the country. Attorney Goncalves manages your I-485 from eligibility review through biometrics, interview, and card delivery."
      />

      <ServiceIntro>
        <p>
          Form I-485 allows eligible foreign nationals already present in the United
          States to become lawful permanent residents without returning to their home
          country for consular processing. This is the most common path to a green card
          for spouses, parents, and children of U.S. citizens who entered lawfully.
        </p>
        <p>
          Adjustment is not available to everyone. Entry without inspection, certain
          visa overstays combined with the 90-day rule, and prior deportation orders
          can bar adjustment or require waivers. Attorney Goncalves conducts a thorough
          eligibility review before any forms are filed.
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
        title="I-485 Eligibility Requirements"
        subtitle="You must meet every requirement below. Missing even one can result in denial."
        variant="alt"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              req: "Approved immigrant petition or immediate relative status",
              detail: "An approved I-130, I-140, or other qualifying petition — or concurrent filing with I-130 for immediate relatives.",
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
              req: "Admissible under INA §212",
              detail: "Certain criminal convictions, fraud, health conditions, and prior immigration violations render applicants inadmissible. Waivers may be available.",
            },
            {
              req: "Physically present in the U.S. at time of filing",
              detail: "You must be inside the United States when I-485 is submitted. Departing after filing without advance parole abandons the application.",
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

      <ServiceSection title="Forms Filed With Your I-485 Package">
        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceChecklist
            title="Core Adjustment Forms"
            items={[
              "Form I-485 Application to Register Permanent Residence",
              "Form I-130 Petition for Alien Relative (if not previously approved)",
              "Form I-864 Affidavit of Support from financial sponsor",
              "Form I-693 Report of Medical Examination and Vaccination Record",
              "Form G-1145 E-Notification of Application/Petition Acceptance",
            ]}
          />
          <ServiceChecklist
            title="Optional Concurrent Forms"
            items={[
              "Form I-765 Application for Employment Authorization (EAD)",
              "Form I-131 Application for Travel Document (Advance Parole)",
              "Form I-485 Supplement A (if adjusting under INA §245(i))",
              "Form I-601 Application for Waiver of Grounds of Inadmissibility (if needed)",
              "Form I-212 Application for Permission to Reapply (if previously removed)",
            ]}
          />
        </div>
      </ServiceSection>

      <ServiceSection
        title="The 90-Day Rule and Marriage-Based Adjustment"
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          If you entered the U.S. on a B-2 tourist visa or other nonimmigrant visa and
          married a U.S. citizen within 90 days of entry, USCIS may presume you
          misrepresented your intent at the port of entry. This can result in denial
          and a permanent bar for fraud. Attorney Goncalves evaluates whether your
          circumstances support adjustment or whether consular processing abroad is safer.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Entered on B-2 and married within 90 days — highest scrutiny",
            "Entered on B-2 and married after 90 days — still requires bona fide marriage proof",
            "Entered on F-1 student visa — must maintain status or have valid adjustment basis",
            "Entered on K-1 fiancé visa — must marry within 90 days, then file I-485",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Work and Travel While I-485 Is Pending" variant="banner">
        <div className="grid md:grid-cols-2 gap-8 text-white/85">
          <div>
            <h3 className="font-bold text-white text-lg mb-3">Employment Authorization (EAD)</h3>
            <p className="text-sm leading-relaxed mb-4">
              Filing I-765 with I-485 typically results in an EAD within 3–6 months,
              allowing you to work legally while your adjustment is pending. You may
              also use an EAD as a List C document for I-9 employment verification.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-3">Advance Parole for Travel</h3>
            <p className="text-sm leading-relaxed">
              Departing the U.S. without advance parole while I-485 is pending
              abandons your application. I-131 filed with I-485 allows international
              travel and return. Do not travel on advance parole if you have unlawful
              presence that could trigger a 3- or 10-year bar.
            </p>
          </div>
        </div>
      </ServiceSection>

      <ServiceFaq
        title="Adjustment of Status Questions"
        items={[
          {
            q: "How long does I-485 processing take?",
            a: "Currently 12–24 months for most field offices, though times vary by location and case type. Marriage-based cases in high-volume offices may take longer.",
          },
          {
            q: "Can I work while my I-485 is pending?",
            a: "Only if you receive an EAD or maintain independent valid work authorization. Filing I-485 alone does not grant work permission.",
          },
          {
            q: "What happens if my I-485 is denied?",
            a: "Denial may place you in removal proceedings depending on your status. We evaluate risks before filing and prepare waiver applications when needed.",
          },
          {
            q: "Do I need an attorney for my adjustment interview?",
            a: "You are not required to have an attorney, but marriage-based and complex cases benefit significantly from legal representation. Attorney Goncalves attends interviews with clients when appropriate.",
          },
          {
            q: "What is adjustment under INA §245(i)?",
            a: "A limited provision allowing certain individuals who had a petition filed before April 30, 2001 to adjust despite entering without inspection or working without authorization, upon payment of a penalty fee.",
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
