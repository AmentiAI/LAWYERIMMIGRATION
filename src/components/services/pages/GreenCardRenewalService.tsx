import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceFooter,
} from "../shared";

export default function GreenCardRenewalService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Green Card · Permanent Resident Card"
        title="Renew or Replace Your Green Card on Time"
        lead="Permanent resident cards expire every ten years. An expired card does not terminate your status, but it creates problems with employment, travel, and government benefits. Attorney Goncalves handles renewals and replacements and helps you obtain temporary I-551 stamps when needed."
      />

      <ServiceIntro>
        <p>
          Your lawful permanent resident status does not expire when your green card
          expires — but the physical card is how you prove that status to employers,
          airlines, and government agencies.
        </p>
        <p>
          An expired or lost card creates practical problems that can affect your job,
          your ability to re-enter the United States after travel, and your eligibility
          for certain benefits.
        </p>
        <p>
          This process is used for both ten-year renewals and replacements due to loss,
          theft, damage, or USCIS error. Most lawful permanent residents must renew
          their card every ten years. Selecting the correct filing basis on the
          application is critical — an incorrect basis can delay processing or result in
          denial.
        </p>
      </ServiceIntro>

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
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
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
        ]}
      />

      <ServiceFooter
        heading="File Your Application"
        description="Expired green cards complicate job verification and re-entry to the U.S. We file early and monitor your case through card delivery."
        buttonLabel="Renew or Replace Green Card"
      />
    </div>
  );
}
