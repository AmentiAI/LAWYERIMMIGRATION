import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
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
          Goncalves works with entrepreneurs across Connecticut to
          structure investments and prepare consular applications.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Core E-2 Eligibility Elements"
        subtitle="All four requirements must be met — weakness in any one area can result in denial."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Treaty Country Nationality",
              body: "You must be a citizen of a country that maintains a treaty of commerce and navigation with the United States. Portugal, Spain, Italy, Germany, France, Japan, South Korea, Mexico, and many other nations qualify. Permanent residents of treaty countries do not qualify — citizenship is required.",
            },
            {
              title: "Substantial Investment at Risk",
              body: "Funds must be committed to the enterprise and subject to partial or total loss if the business fails. There is no fixed minimum dollar amount — 'substantial' is measured relative to the total cost of establishing the business. A $100,000 investment may be substantial for a small franchise but insufficient for a manufacturing plant.",
            },
            {
              title: "Real and Operating Enterprise",
              body: "The business cannot be marginal — it must have the present or future capacity to generate more than enough income to provide a minimal living for you and your family. A marginal enterprise exists solely to support the investor. Startups must show realistic growth projections.",
            },
            {
              title: "Develop and Direct the Enterprise",
              body: "You must enter the U.S. solely to develop and direct the investment enterprise. This means you control at least 50% of the enterprise or have operational control through a managerial position. Passive investors do not qualify.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-tan-200">
              <h3 className="font-bold text-olive-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Qualifying Investment Types"
        subtitle="E-2 investments span industries — from restaurants to technology startups."
        variant="alt"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Restaurant or food service franchise",
            "Retail store or e-commerce business",
            "Professional services firm (consulting, legal, accounting)",
            "Real estate development or property management",
            "Technology startup or software company",
            "Manufacturing or import/export enterprise",
            "Hotel or hospitality business",
            "Healthcare practice or medical clinic",
            "Purchase of existing operating business",
          ].map((type) => (
            <div key={type} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              {type}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Business Plan and Source-of-Funds Documentation">
        <ServiceChecklist
          title="Consular Application Package"
          items={[
            "Five-year business plan with financial projections and market analysis",
            "Entity formation documents (Articles of Incorporation, Operating Agreement)",
            "Evidence of investment funds transferred to U.S. business account",
            "Source of funds documentation — tax returns, sale of property, inheritance, gifts",
            "Lease agreement or property deed for business premises",
            "Equipment purchase receipts, inventory records, vendor contracts",
            "Organizational chart showing your role in developing and directing",
            "Employee hiring plan and payroll projections",
            "Franchise agreement (if applicable) with franchisor financial disclosures",
            "Form DS-160 and visa application fee payment",
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="E-2 for Essential Employees"
        subtitle="The principal investor is not the only person who can obtain E-2 status."
        variant="alt"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Executive, Supervisory, or Essential Skills
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Employees of the treaty enterprise who share the same treaty country
              nationality may qualify for E-2 visas if they serve in an executive or
              supervisory capacity, or possess skills essential to the enterprise&apos;s
              operations.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Must share nationality with the principal treaty investor</li>
              <li>• Executive/supervisory role over the enterprise or a major component</li>
              <li>• Essential skills must be unique and not readily available in the U.S. labor market</li>
            </ul>
          </div>
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              E-2 Dependents
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Spouse receives E-2 dependent status</li>
              <li>• Spouse eligible for employment authorization (I-765)</li>
              <li>• Unmarried children under 21 receive E-2 dependent status</li>
              <li>• Children may attend U.S. schools but cannot work</li>
              <li>• Children age out at 21 — must change to another status</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="Consular Processing vs. Change of Status">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Consular Processing Abroad
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Most E-2 applicants apply at a U.S. embassy or consulate in their home
              country. The consular officer reviews your complete investment package
              and conducts a visa interview. E-2 visas are typically issued for up to
              five years depending on reciprocity agreements with your country.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Change of Status (Form I-129)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              If you are already lawfully present in the U.S. on another nonimmigrant
              status, you may file Form I-129 to change to E-2 status without departing.
              However, change of status does not give you a visa stamp — you must
              consular process on your next international trip.
            </p>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="E-2 vs. EB-5 Immigrant Investor" variant="banner">
        <div className="overflow-x-auto rounded-xl border border-white/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/10">
                <th className="text-left px-6 py-4 text-white">Factor</th>
                <th className="text-left px-6 py-4 text-white">E-2 Treaty Investor</th>
                <th className="text-left px-6 py-4 text-white">EB-5 Immigrant Investor</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Immigrant or nonimmigrant?", "Nonimmigrant — temporary", "Immigrant — leads to green card"],
                ["Minimum investment", "Substantial relative to business cost", "$800,000 (TEA) or $1,050,000"],
                ["Treaty country required?", "Yes — citizenship required", "No — any nationality"],
                ["Job creation requirement?", "No specific number", "10 full-time U.S. jobs"],
                ["Renewable?", "Yes — indefinitely while enterprise operates", "Permanent upon approval"],
              ].map(([factor, e2, eb5], i) => (
                <tr key={factor} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                  <td className="px-6 py-4 font-medium text-white">{factor}</td>
                  <td className="px-6 py-4 text-white/85">{e2}</td>
                  <td className="px-6 py-4 text-white/85">{eb5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ServiceSection>

      <ServiceFaq
        title="E-2 Treaty Investor Questions"
        items={[
          {
            q: "How much money do I need to invest for an E-2 visa?",
            a: "There is no fixed minimum. USCIS and consular officers evaluate whether your investment is substantial relative to the total cost of the business. We assess your specific business plan to estimate the appropriate investment level.",
          },
          {
            q: "Can I buy an existing business with E-2?",
            a: "Yes. Purchasing a going concern is a common E-2 strategy. You must show the business is not marginal and that your investment is at risk in the purchased enterprise.",
          },
          {
            q: "How long can I stay in the U.S. on E-2?",
            a: "E-2 visas are issued for up to five years (depending on reciprocity with your country). Each entry is typically admitted for two years. The visa can be renewed indefinitely while the enterprise remains operational.",
          },
          {
            q: "Can E-2 lead to a green card?",
            a: "E-2 is a nonimmigrant visa and does not directly lead to permanent residence. However, some E-2 holders later transition to EB-5, EB-1C multinational manager, or other immigrant categories.",
          },
        ]}
      />

      <ServiceFooter
        heading="Evaluate Your E-2 Investment Strategy"
        description="Entrepreneurs in Connecticut trust Attorney Goncalves for treaty investor visa planning."
        buttonLabel="Discuss E-2 Visa Options"
      />
    </div>
  );
}
