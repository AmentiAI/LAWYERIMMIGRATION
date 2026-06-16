import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function GreenCardRenewalService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-90 · Replace Permanent Resident Card"
        title="Renew or Replace Your Green Card on Time"
        lead="Permanent resident cards expire every ten years. An expired card does not terminate your status, but it creates problems with employment, travel, and government benefits. Attorney Goncalves files I-90 renewals and replacements and helps you obtain temporary I-551 stamps when needed."
      />

      <ServiceIntro>
        <p>
          Your lawful permanent resident status does not expire when your green card
          expires — but the physical card is how you prove that status to employers,
          airlines, and government agencies. An expired or lost card creates practical
          problems that can affect your job, your ability to re-enter the United States
          after travel, and your eligibility for certain benefits.
        </p>
        <p>
          Form I-90 is used for both ten-year renewals and replacements due to loss,
          theft, damage, or USCIS error. Selecting the correct filing basis on the
          form is critical — an incorrect basis can delay processing or result in denial.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Renewal vs. Replacement — Different I-90 Grounds"
        subtitle="The reason you are filing determines which boxes you check on Form I-90."
      >
        <div className="overflow-x-auto rounded-xl border border-tan-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-olive-800 text-white">
                <th className="text-left px-6 py-4">Situation</th>
                <th className="text-left px-6 py-4">I-90 Basis</th>
                <th className="text-left px-6 py-4">Typical Timeline</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Card expires within 6 months", "Renewal — expiration approaching", "8–12 months"],
                ["Card already expired", "Renewal — card expired", "8–12 months"],
                ["Card lost or stolen", "Replacement — card was lost", "8–12 months"],
                ["Name legally changed", "Replacement — legal name change", "8–12 months"],
                ["USCIS issued card with errors", "Replacement — incorrect data", "8–12 months"],
                ["Never received card from USCIS", "Replacement — card not received", "8–12 months"],
                ["Card damaged or mutilated", "Replacement — card mutilated", "8–12 months"],
              ].map(([sit, basis, time], i) => (
                <tr key={sit} className={i % 2 === 0 ? "bg-tan-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-olive-900">{sit}</td>
                  <td className="px-6 py-4 text-slate-600">{basis}</td>
                  <td className="px-6 py-4 text-slate-500">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Documents for Your I-90 Application"
        variant="alt"
      >
        <ServiceChecklist
          title="What We Prepare"
          items={[
            "Form I-90 with correct filing basis selected",
            "Copy of current green card (front and back) — if available",
            "Government-issued photo ID (driver's license or passport)",
            "Court order or marriage certificate for legal name changes",
            "Police report for lost or stolen cards (recommended)",
            "Passport-style photos if biometrics waiver not granted",
            "Payment of USCIS filing fee (or fee waiver request if eligible)",
            "Evidence of continued residence if card expired years ago",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Biometrics and the I-551 Stamp">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Biometrics Appointment
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most I-90 applicants receive a biometrics appointment notice within
              4–8 weeks of filing. USCIS collects fingerprints, photograph, and
              signature to conduct background checks and produce your new card.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you cannot attend your scheduled appointment, you must reschedule
              through your USCIS online account. Missing biometrics can result in
              denial for abandonment.
            </p>
          </div>
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Temporary I-551 Stamp in Your Passport
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              If you must travel internationally or prove status before your new card
              arrives, we help you schedule an InfoPass appointment at your local USCIS
              field office for a temporary I-551 stamp.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Valid for up to one year</li>
              <li>• Serves as proof of LPR status for travel and employment</li>
              <li>• Requires I-90 receipt notice and passport</li>
              <li>• Essential if your card is lost and you need to travel</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Problems Caused by an Expired Green Card"
        variant="alt"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Employers may refuse to accept an expired card for Form I-9 verification",
            "Airlines may deny boarding for return flights to the United States",
            "State DMVs may refuse to renew driver's licenses",
            "Cannot apply for certain government benefits or professional licenses",
            "Re-entry after international travel becomes complicated without valid proof",
            "Conditional green card holders confuse expiration with I-751 deadline",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Conditional vs. Ten-Year Green Cards" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl mb-4">
          If your card shows a two-year expiration date, you have a conditional green
          card — not a ten-year card. Conditional cards are renewed through Form I-751
          (removal of conditions), not Form I-90. Filing the wrong form delays your
          case. Attorney Goncalves identifies which form applies to your situation.
        </p>
        <p className="text-white/85 leading-relaxed max-w-3xl">
          Ten-year green card holders file I-90. The new card issued after I-90 approval
          is valid for another ten years unless you naturalize before it expires.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="Green Card Renewal Questions"
        items={[
          {
            q: "Does my permanent resident status expire when my card expires?",
            a: "No. Your status as a lawful permanent resident continues. Only the physical card expires. However, you need a valid card or I-551 stamp to prove your status.",
          },
          {
            q: "Can I travel with an expired green card?",
            a: "Returning to the U.S. with only an expired card is risky. Airlines may deny boarding. Obtain an I-551 stamp before traveling if your card is expired or lost.",
          },
          {
            q: "I never received my green card from USCIS. What do I do?",
            a: "File I-90 as a replacement for card not received. We also submit an e-request or service request to USCIS to trace the original mailing.",
          },
          {
            q: "Can I work with an expired green card?",
            a: "Technically your work authorization does not expire with the card, but employers completing Form I-9 may not accept an expired card. An I-551 stamp or I-90 receipt may help.",
          },
        ]}
      />

      <ServiceFooter
        heading="File Your I-90 Before Problems Arise"
        description="Expired green cards complicate job verification and re-entry to the U.S. We file early and monitor your case through card delivery."
        buttonLabel="Renew or Replace Green Card"
      />
    </div>
  );
}
