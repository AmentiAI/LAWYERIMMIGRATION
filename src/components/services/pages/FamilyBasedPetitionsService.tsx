import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceFooter,
} from "../shared";

export default function FamilyBasedPetitionsService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Family-Based Petition · Petition for Alien Relative"
        title="Family Immigration Petitions That Reunite Loved Ones Across Borders"
        lead="Whether you are sponsoring a spouse in Mystic, a parent in Providence, or an adult child abroad, Attorney Goncalves builds your family petition from the ground up — documenting the relationship, choosing the correct visa category, and guiding your family through every federal step."
      />

      <ServiceIntro>
        <p>
          A family-based immigration petition is often the first step toward lawful
          permanent residence for a foreign national relative. The petition establishes
          the qualifying relationship between you — the petitioner — and your family
          member abroad or in the United States. Without an approved petition, no
          immigrant visa or green card can be issued.
        </p>
        <p>
          Attorney Jacquelyn R. Goncalves personally reviews every petition before filing.
          Clients throughout Connecticut and nationwide work directly with the attorney
          from consultation through approval — never passed between paralegals or support
          staff.
        </p>
      </ServiceIntro>

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
              adjustment filing if the beneficiary is already in the U.S.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Spousal cases where the marriage is less than two years old at approval
              result in conditional permanent residence, requiring a later filing to
              remove conditions.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-3">
              Family Preference — Subject to Visa Bulletin
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              All other family relationships fall into preference categories (F1, F2A,
              F2B, F3, F4) with annual visa caps. Your priority date — the date USCIS
              receives your petition — determines your place in line. The monthly Visa
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

      <ServiceSection title="Common Reasons USCIS Issues an RFE on Family Petitions">
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

      <ServiceFaq
        title="Family Petition Questions"
        items={[
          {
            q: "Can I petition for my same-sex spouse?",
            a: "Yes. Since the Supreme Court's Windsor decision, same-sex marriages valid where performed are recognized for federal immigration purposes. The spousal petition process is identical to opposite-sex cases.",
          },
          {
            q: "What if my relative is already in the U.S. illegally?",
            a: "Unlawful presence creates serious complications. Depending on how long they have been present and whether they entered with inspection, they may need a waiver or may be ineligible to adjust. We evaluate this before filing.",
          },
          {
            q: "Can I upgrade my petition if I become a U.S. citizen?",
            a: "Yes. If you naturalize while an LPR petition is pending, your relative's category may upgrade — for example, from F2A to immediate relative — potentially eliminating years of wait.",
          },
          {
            q: "Does filing a family petition give my relative legal status?",
            a: "No. A petition alone does not grant work authorization or protection from deportation. Your relative must maintain independent valid status or wait abroad until a visa is available.",
          },
          {
            q: "What are the government filing fees?",
            a: "USCIS filing fees change periodically. Attorney Goncalves confirms current fees at consultation and includes all government fees in your case estimate.",
          },
        ]}
      />

      <ServiceFooter
        heading="Start Your Family Petition Consultation"
        description="Discuss your family petition with Attorney Goncalves — serving Connecticut and families nationwide."
        buttonLabel="Discuss Family Petition"
      />
    </div>
  );
}
