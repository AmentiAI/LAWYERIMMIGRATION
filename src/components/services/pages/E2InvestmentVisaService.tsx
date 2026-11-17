import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceChecklist,
  ServiceFaq,
  ServiceFooter,
} from "../shared";

export default function E2InvestmentVisaService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="E-2 Treaty Investor Visa"
        title="Launch or Expand Your Business in the United States"
        lead="Nationals of treaty countries who invest a substantial amount in a U.S. enterprise may qualify for the E-2 visa to develop and direct that business. Attorney Goncalves advises on investment structure, business plan requirements, and consular or change-of-status applications."
      />

      <ServiceIntro>
        <p>
          The E-2 treaty investor visa allows nationals of countries with qualifying
          treaties of commerce and navigation with the United States to enter the U.S.
          to develop and direct a business in which they have invested a substantial
          amount of capital. Unlike the EB-5 immigrant investor program, E-2 is a
          nonimmigrant visa — but it can be renewed indefinitely as long as the enterprise
          remains operational.
        </p>
        <p>
          E-2 applications receive intense scrutiny at U.S. consulates. Officers examine
          your business plan, source of funds, investment amount relative to business
          cost, and whether the enterprise is real and operating — not marginal. Attorney
          Goncalves works with entrepreneurs to structure investments and prepare
          consular applications.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Who Qualifies for an E-2 Visa?"
        subtitle="Every E-2 case must satisfy each of the following requirements."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceChecklist
            title="Investor and enterprise requirements"
            items={[
              "You are a national of a country that has an E-2 treaty with the United States",
              "The U.S. business is at least 50% owned by nationals of that treaty country",
              "You own at least 50% of the business or hold operational control",
              "You are coming to develop and direct the business, not simply to work in it",
              "You intend to depart the U.S. when your E-2 status ends",
            ]}
          />
          <ServiceChecklist
            title="Investment requirements"
            items={[
              "The funds are already invested or irrevocably committed and at risk",
              "The investment is substantial in proportion to the cost of the business",
              "The money came from a lawful, documented source",
              "The business is a real, active commercial enterprise — not passive, like land held for appreciation",
              "The business is not marginal: it must be able to do more than support you and your family",
            ]}
          />
        </div>
      </ServiceSection>

      <ServiceSection
        title="How Much Do You Need to Invest for an E-2 Visa?"
        subtitle="There is no fixed legal minimum. The test is proportionality."
        variant="alt"
      >
        <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
          <p>
            Consular officers compare the amount you invested with the total cost of buying
            or starting the business. A lower-cost business generally needs a higher
            percentage of its cost invested; a very expensive business may qualify with a
            smaller percentage. What matters is that the investment is large enough to show
            commitment and to make the business likely to succeed.
          </p>
          <p>
            Funds sitting in a bank account are not enough. Money should be spent on, or
            legally committed to, the business — a signed lease, equipment, inventory,
            renovations, or a purchase agreement held in escrow pending visa approval.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Which Countries Qualify — and What About Portugal and Brazil?"
        subtitle="Eligibility depends on your nationality, not where you live."
      >
        <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
          <p>
            The U.S. Department of State publishes the list of E-2 treaty countries. Many
            of our Portuguese-speaking clients ask about it: Portugal became an E-2 treaty
            country on March 15, 2024,
            so Portuguese nationals may qualify. Brazil does not have an E-2 treaty, so a
            Brazilian national generally needs a second, qualifying citizenship to use
            this visa.
          </p>
          <p>
            We confirm treaty eligibility at the start of every case before any money is
            committed.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        title="How Do You Apply for an E-2 Visa?"
        subtitle="Most E-2 investors apply at a U.S. consulate abroad; some change status from within the United States."
        variant="alt"
      >
        <ol className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "Treaty and structure review",
              detail: "Confirm your nationality qualifies and plan ownership and investment amounts.",
            },
            {
              step: "Invest and document",
              detail:
                "Commit the funds and assemble source-of-funds records, corporate documents, and a detailed business plan.",
            },
            {
              step: "File the application",
              detail:
                "Submit the DS-160 and the consulate's E-2 application package, or file Form I-129 with USCIS for a change of status.",
            },
            {
              step: "Interview and admission",
              detail:
                "Attend the consular interview. E-2 entrants are typically admitted for up to two years at a time, renewable while the business operates.",
            },
          ].map((item, index) => (
            <li key={item.step} className="bg-white rounded-xl p-6 border border-tan-200 list-none">
              <p className="text-xs font-semibold text-olive-600 mb-1">Step {index + 1}</p>
              <p className="font-bold text-olive-900 mb-2">{item.step}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
      </ServiceSection>

      <ServiceFaq
        title="E-2 Visa Questions"
        items={[
          {
            q: "Can my spouse work on an E-2 visa?",
            a: "Yes. Spouses of E-2 investors are authorized to work incident to their status, and their I-94 record serves as evidence of work authorization. Unmarried children under 21 may attend school in the U.S. but may not work on E-2 dependent status.",
          },
          {
            q: "Does an E-2 visa lead to a green card?",
            a: "Not directly. E-2 is a nonimmigrant visa and requires intent to depart when status ends. Some investors later qualify for a green card through family, employment, or the EB-5 program, which requires separate planning.",
          },
          {
            q: "Can I buy an existing business instead of starting one?",
            a: "Yes. Purchasing an existing, operating business is a common E-2 strategy. The purchase price, plus working capital, forms the investment, and the existing revenue history often strengthens the non-marginality showing.",
          },
          {
            q: "How long can I stay in the U.S. on an E-2 visa?",
            a: "Each admission is typically for up to two years, and you can continue to renew or extend as long as the business remains active and you continue to meet the requirements. There is no maximum number of renewals.",
          },
        ]}
      />

      <ServiceFooter
        heading="Plan Your E-2 Investment Before You Commit Funds"
        description="A consultation before signing a lease or purchase agreement can prevent costly structuring mistakes."
        buttonLabel="Book an E-2 Consultation"
      />
    </div>
  );
}
