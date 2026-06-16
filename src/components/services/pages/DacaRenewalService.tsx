import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function DacaRenewalService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-821D · Deferred Action for Childhood Arrivals"
        title="DACA Renewal and Work Authorization Extensions"
        lead="DACA provides protection from deportation and eligibility for employment authorization for qualifying individuals brought to the U.S. as children. Timely renewal is critical — Attorney Goncalves files your I-821D and I-765 together and calendars your expiration date so you never lose protection."
      />

      <ServiceIntro>
        <p>
          Deferred Action for Childhood Arrivals (DACA) provides temporary protection
          from removal and eligibility for work authorization to certain individuals who
          were brought to the United States as children. DACA is not a path to a green
          card or citizenship, but it allows recipients to work legally and live without
          fear of deportation while the program remains in effect.
        </p>
        <p>
          Renewal requires filing both Form I-821D (DACA request) and Form I-765
          (employment authorization) before your current grant expires. Filing late
          can result in loss of protection and work authorization. Attorney Goncalves
          tracks court decisions affecting DACA and advises on optimal filing timing.
        </p>
      </ServiceIntro>

      <ServiceSection title="When to File Your DACA Renewal">
        <div className="bg-olive-800 text-white rounded-2xl p-6 mb-8 text-center">
          <p className="font-bold text-lg mb-2">File 120–150 Days Before Expiration</p>
          <p className="text-white/85 text-sm">
            I-821D and I-765 filed concurrently · Do not leave the U.S. without valid advance parole
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "150 days before expiration",
              detail: "Earliest recommended filing date. Allows maximum processing time before your current grant lapses.",
            },
            {
              label: "120 days before expiration",
              detail: "Latest recommended filing date. Still within the safe window for most processing times.",
            },
            {
              label: "After expiration",
              detail: "Late filing accepted in some circumstances but you lose protection and work authorization until reapproved.",
            },
          ].map((d) => (
            <div key={d.label} className="bg-white rounded-xl p-6 border border-tan-200 text-center">
              <p className="font-bold text-olive-900 mb-2">{d.label}</p>
              <p className="text-sm text-slate-600">{d.detail}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Continuing Eligibility Requirements"
        subtitle="You must still meet all original DACA criteria at the time of renewal."
        variant="alt"
      >
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            "Entered the U.S. before age 16 and before June 15, 2007",
            "Continuous residence in the U.S. since June 15, 2007",
            "Physical presence on June 15, 2012 and at time of filing",
            "Currently in school, graduated high school, GED, or honorably discharged veteran",
            "No felony, significant misdemeanor, or three or more misdemeanors",
            "No departure from the U.S. without valid advance parole since last approval",
          ].map((req) => (
            <div key={req} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              ✓ {req}
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-sm max-w-3xl">
          Any arrest, charge, or conviction since your last approval must be disclosed
          and evaluated before filing. Certain offenses make you ineligible for renewal
          and may trigger enforcement action.
        </p>
      </ServiceSection>

      <ServiceSection title="Renewal Application Package">
        <ServiceChecklist
          title="Forms and Documents We File"
          items={[
            "Form I-821D — Consideration of Deferred Action for Childhood Arrivals",
            "Form I-765 — Application for Employment Authorization (category c)(33)",
            "Form I-765WS — Worksheet explaining economic need for employment authorization",
            "Two passport-style photos for I-765",
            "Copy of prior DACA approval notice (I-797)",
            "Copy of current EAD (front and back)",
            "Copy of government-issued photo ID",
            "Updated responses to all I-821D eligibility questions",
            "Disclosure of any arrests or immigration violations since last approval",
            "Filing fees for I-821D and I-765 (or fee exemption request if eligible)",
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="What Changed Since Your Last Approval?"
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          Every renewal requires full disclosure of changes since your prior grant.
          USCIS conducts a fresh background check. We review your record before filing
          to identify issues that could result in denial or referral to ICE.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Any arrest — even if charges were dropped or dismissed",
            "Traffic citations that rose to misdemeanor level",
            "Change of address — must be current with USCIS",
            "Travel outside the U.S. without advance parole — terminates DACA",
            "Change in education status (enrollment, graduation)",
            "New criminal convictions of any kind",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Advance Parole and International Travel">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Do Not Travel Without Advance Parole
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Leaving the United States without approved advance parole (Form I-131)
              automatically terminates your DACA status. You may not be able to
              return, and you cannot renew from abroad.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you need to travel for humanitarian, educational, or employment
              purposes, we file I-131 before you depart and wait for approval.
            </p>
          </div>
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Work Authorization While Renewal Is Pending
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Timely filed renewal extends DACA protection while pending</li>
              <li>• Automatic 180-day EAD extension if filed before expiration</li>
              <li>• Expired EAD + receipt notice = continued work authorization</li>
              <li>• Provide employer with receipt notice and expired EAD</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="DACA Policy Landscape" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl mb-4">
          DACA has faced ongoing litigation since 2017. Court orders have repeatedly
          blocked full termination of the program while limiting new initial applications.
          Attorney Goncalves monitors federal court decisions and USCIS policy updates
          to advise current recipients on renewal timing and eligibility.
        </p>
        <p className="text-white/85 leading-relaxed max-w-3xl">
          If you are a current DACA recipient, renewal remains available regardless of
          most court challenges. Do not let your protection lapse while waiting for
          policy clarity — timely renewal is your best protection.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="DACA Renewal Questions"
        items={[
          {
            q: "Can I file a new initial DACA application?",
            a: "Initial DACA applications have been restricted by court orders since 2021. Eligibility depends on current litigation status. We advise whether initial filing is available at the time of your consultation.",
          },
          {
            q: "What happens if my DACA renewal is denied?",
            a: "Denial ends your deferred action protection and work authorization. Depending on the reason, you may face enforcement action. We evaluate denial notices and advise on motions to reconsider or reopen.",
          },
          {
            q: "How long does DACA renewal take?",
            a: "USCIS processing currently averages 3–8 months. Filing 120–150 days before expiration helps ensure continuous protection.",
          },
          {
            q: "Can DACA lead to a green card?",
            a: "DACA alone does not provide a path to permanent residence. However, some recipients may qualify through marriage to a U.S. citizen, employment sponsorship, or other pathways. We evaluate individual circumstances.",
          },
        ]}
      />

      <ServiceFooter
        heading="Renew DACA Before Your Protection Lapses"
        description="We track court decisions affecting DACA and advise you on filing timing as policies evolve."
        buttonLabel="Renew DACA Status"
      />
    </div>
  );
}
