import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function FamilyBasedPetitionsService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-130 · Petition for Alien Relative"
        title="Family Immigration Petitions That Reunite Loved Ones Across Borders"
        lead="Whether you are sponsoring a spouse in Mystic, a parent in Providence, or an adult child abroad, Attorney Goncalves builds your I-130 petition from the ground up — documenting the relationship, choosing the correct visa category, and guiding your family through every federal step."
      />

      <ServiceIntro>
        <p>
          A family-based immigration petition is often the first step toward lawful
          permanent residence for a foreign national relative. Form I-130 establishes
          the qualifying relationship between you — the petitioner — and your family
          member abroad or in the United States. Without an approved petition, no
          immigrant visa or green card can be issued.
        </p>
        <p>
          Attorney Jacquelyn R. Goncalves personally reviews every I-130 before filing.
          Clients throughout Rhode Island, Connecticut, and nationwide work directly
          with the attorney from consultation through approval — never passed between
          paralegals or support staff.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Who Can File an I-130 Petition?"
        subtitle="Your immigration status as the petitioner determines which relatives you may sponsor and how long the process will take."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-bold text-olive-900 mb-4">U.S. Citizen Petitioner</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Spouse — immediate relative, no visa backlog</li>
              <li>• Unmarried children under 21 — immediate relative</li>
              <li>• Unmarried adult children (21+) — F1 preference category</li>
              <li>• Married children of any age — F3 preference category</li>
              <li>• Parents — immediate relative (petitioner must be 21+)</li>
              <li>• Brothers and sisters — F4 preference (longest wait)</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-bold text-olive-900 mb-4">Lawful Permanent Resident Petitioner</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Spouse — F2A category, subject to Visa Bulletin</li>
              <li>• Unmarried child under 21 — F2A category</li>
              <li>• Unmarried adult child (21+) — F2B category</li>
              <li>• Cannot petition for parents, married children, or siblings</li>
              <li>• Naturalizing to U.S. citizen may upgrade category and eliminate wait</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Immediate Relatives vs. Preference Categories"
        subtitle="Understanding the difference determines whether your relative waits months or years."
        variant="alt"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-3">
              Immediate Relatives — No Annual Cap
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Spouses, unmarried children under 21, and parents of U.S. citizens are
              immediate relatives. Visas are always available — there is no waiting
              line. These cases typically move fastest, often allowing concurrent
              I-485 filing if the beneficiary is already in the U.S.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Spousal cases where the marriage is less than two years old at approval
              result in conditional permanent residence (CR-1), requiring a later
              I-751 filing to remove conditions.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-3">
              Family Preference — Subject to Visa Bulletin
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              All other family relationships fall into preference categories (F1, F2A,
              F2B, F3, F4) with annual visa caps. Your priority date — the date USCIS
              receives your I-130 — determines your place in line. The monthly Visa
              Bulletin published by the Department of State shows which priority dates
              are current.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sibling petitions (F4) routinely involve waits of 15+ years depending on
              country of birth. Filing early establishes your priority date even if
              the wait is long.
            </p>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Documentation Attorney Goncalves Prepares"
        subtitle="Incomplete or inconsistent evidence is the leading cause of I-130 delays and Requests for Evidence (RFEs)."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceChecklist
            title="For All I-130 Petitions"
            items={[
              "Form I-130 with correct filing fee",
              "Proof of petitioner's U.S. citizenship (passport, naturalization certificate, or birth certificate) or green card",
              "Beneficiary's birth certificate with certified English translation",
              "Passport-style photos of petitioner and beneficiary",
              "G-1145 e-notification form (optional)",
            ]}
          />
          <ServiceChecklist
            title="Additional for Spousal Petitions"
            items={[
              "Marriage certificate",
              "Proof marriage is bona fide — joint lease, bank accounts, photos, affidavits",
              "Divorce decrees or death certificates for prior marriages",
              "Evidence of termination of any prior marriages for both parties",
              "Children's birth certificates showing both parents' names",
            ]}
          />
        </div>
      </ServiceSection>

      <ServiceSection
        title="Common Reasons USCIS Issues an RFE on I-130"
        variant="alt"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Name discrepancies across birth certificates, passports, and marriage records",
            "Insufficient proof of bona fide marriage in spousal cases",
            "Missing certified translations of foreign-language documents",
            "Failure to establish step-parent or adoptive parent relationship",
            "Prior immigration violations not addressed in the petition",
            "Incomplete proof of petitioner's U.S. citizenship or LPR status",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="What Happens After I-130 Approval"
        subtitle="An approved petition is only the beginning. We guide your family through every subsequent step."
      >
        <div className="space-y-6">
          {[
            {
              step: "If beneficiary is in the U.S. and visa is available",
              detail: "File Form I-485 for adjustment of status, often concurrently with I-765 (work permit) and I-131 (travel document). Attorney Goncalves prepares the full adjustment package.",
            },
            {
              step: "If beneficiary is outside the U.S.",
              detail: "Case transfers to National Visa Center (NVC) for document collection, then to the U.S. embassy or consulate for immigrant visa interview. We manage NVC correspondence and embassy preparation.",
            },
            {
              step: "If priority date is not yet current",
              detail: "Beneficiary waits abroad or maintains valid nonimmigrant status in the U.S. We monitor the Visa Bulletin monthly and notify you when your date becomes current.",
            },
            {
              step: "Affidavit of Support (I-864)",
              detail: "Required for most family immigrants to prove they will not become a public charge. We calculate household size, income requirements, and prepare the financial sponsor package.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-xl p-6 border border-tan-200">
              <h3 className="font-bold text-olive-900 mb-2">{item.step}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Typical I-130 Processing Times" variant="banner">
        <div className="grid sm:grid-cols-3 gap-6 text-white/90 text-sm">
          <div className="bg-white/10 rounded-xl p-6">
            <p className="font-bold text-white text-lg mb-2">Immediate Relatives</p>
            <p>Currently 12–18 months for USCIS adjudication. Concurrent I-485 may add 12–24 months for the full green card.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <p className="font-bold text-white text-lg mb-2">Preference Categories</p>
            <p>I-130 approval: 12–24 months. Visa wait depends on category and country — F4 siblings often 15–20+ years after filing.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <p className="font-bold text-white text-lg mb-2">Consular Processing</p>
            <p>After I-130 approval and visa availability: 6–12 months through NVC and embassy interview.</p>
          </div>
        </div>
      </ServiceSection>

      <ServiceFaq
        title="Family Petition Questions"
        items={[
          {
            q: "Can I petition for my same-sex spouse?",
            a: "Yes. Since the Supreme Court's Windsor decision, same-sex marriages valid where performed are recognized for federal immigration purposes. The I-130 process is identical to opposite-sex spousal petitions.",
          },
          {
            q: "What if my relative is already in the U.S. illegally?",
            a: "Unlawful presence creates serious complications. Depending on how long they have been present and whether they entered with inspection, they may need a waiver (I-601) or may be ineligible to adjust. We evaluate this before filing.",
          },
          {
            q: "Can I upgrade my petition if I become a U.S. citizen?",
            a: "Yes. If you naturalize while an LPR petition is pending, your relative's category may upgrade — for example, from F2A to immediate relative — potentially eliminating years of wait.",
          },
          {
            q: "Does filing I-130 give my relative legal status?",
            a: "No. An I-130 alone does not grant work authorization or protection from deportation. Your relative must maintain independent valid status or wait abroad until a visa is available.",
          },
          {
            q: "What is the filing fee for I-130?",
            a: "USCIS filing fees change periodically. Attorney Goncalves confirms current fees at consultation and includes all government fees in your case estimate.",
          },
        ]}
      />

      <ServiceFooter
        heading="Start Your Family Petition Consultation"
        description="Discuss your I-130 case with Attorney Goncalves — serving Rhode Island, Connecticut, and families nationwide."
        buttonLabel="Discuss Family Petition"
      />
    </div>
  );
}
