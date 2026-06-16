import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function FiancePetitionsService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-129F · K-1 Fiancé Visa"
        title="Bring Your Fiancé to America on a K-1 Visa"
        lead="U.S. citizens engaged to foreign nationals may petition for a K-1 visa so their partner can enter the U.S. and marry within 90 days. Attorney Goncalves handles the I-129F petition, consular processing, and post-marriage green card adjustment as one continuous case."
      />

      <ServiceIntro>
        <p>
          The K-1 fiancé visa is available only to U.S. citizens — lawful permanent
          residents cannot petition for a fiancé. The process requires proving a bona
          fide engagement, an in-person meeting within two years of filing, and intent
          to marry within 90 days of the beneficiary&apos;s U.S. entry.
        </p>
        <p>
          K-1 cases involve three distinct phases: USCIS petition approval, consular
          visa processing abroad, and adjustment of status after marriage. Attorney
          Goncalves manages all three stages so your fiancé&apos;s status remains
          continuous from entry through green card approval.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Stage One — I-129F Petition at USCIS"
        subtitle="The petitioner must be a U.S. citizen and both parties must be legally free to marry."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border-2 border-olive-700">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Petitioner Requirements
            </h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Must be a U.S. citizen (not LPR)</li>
              <li>• Met fiancé in person within two years of filing</li>
              <li>• Both parties legally free to marry (divorce decrees if applicable)</li>
              <li>• Intent to marry within 90 days of fiancé&apos;s U.S. entry</li>
              <li>• Meet income requirements or provide joint sponsor on I-134</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Evidence of Bona Fide Relationship
            </h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Photos together at different times and locations</li>
              <li>• Travel records showing in-person meetings</li>
              <li>• Chat logs, emails, and call records</li>
              <li>• Engagement ring receipt or ceremony plans</li>
              <li>• Affidavits from friends and family who know the couple</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 text-sm mt-6">
          USCIS processing for I-129F currently averages 8–14 months. After approval,
          the case is sent to the National Visa Center and then to the embassy in your
          fiancé&apos;s home country.
        </p>
      </ServiceSection>

      <ServiceSection
        title="Stage Two — Consular K-1 Visa Processing"
        subtitle="Your fiancé applies for the visa at the U.S. embassy abroad."
        variant="alt"
      >
        <ServiceChecklist
          title="Embassy Application Package"
          items={[
            "Form DS-160 nonimmigrant visa application",
            "Valid passport with 6+ months validity beyond intended stay",
            "Police certificates from all countries of residence since age 16",
            "Medical examination by embassy-approved panel physician",
            "Form I-134 Affidavit of Support with financial documentation",
            "Two passport-style photos",
            "Divorce decrees or death certificates for prior marriages",
            "K-2 applications for unmarried children under 21",
            "Evidence of relationship (same as I-129F filing)",
          ]}
        />
        <p className="text-slate-600 text-sm mt-6 max-w-3xl">
          At the consular interview, the officer verifies the relationship and assesses
          whether your fiancé intends to marry you within 90 days. We conduct mock
          interviews covering relationship history, wedding plans, and background questions.
        </p>
      </ServiceSection>

      <ServiceSection title="Stage Three — Marriage and Green Card">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "90-Day Marriage Deadline",
              body: "Your fiancé must marry you within 90 days of U.S. entry on the K-1 visa. Failure to marry violates status and can result in removal. The K-1 cannot be extended.",
            },
            {
              title: "Adjustment of Status (I-485)",
              body: "After a lawful civil marriage, your spouse files Form I-485 to become a permanent resident. K-1 entrants may only adjust through the petitioning U.S. citizen spouse.",
            },
            {
              title: "Work and Travel While Pending",
              body: "File Form I-765 (work permit) and I-131 (advance parole) concurrently with I-485. Do not travel abroad without advance parole or you abandon the adjustment application.",
            },
          ].map((stage) => (
            <div key={stage.title} className="bg-white rounded-xl p-6 border border-tan-200">
              <h3 className="font-bold text-olive-900 mb-2">{stage.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{stage.body}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="K-1 vs. CR-1/IR-1 Immigrant Visa"
        subtitle="Choosing the right path depends on your timeline and whether you want your spouse to enter with a green card."
        variant="alt"
      >
        <div className="overflow-x-auto rounded-xl border border-tan-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-olive-800 text-white">
                <th className="text-left px-6 py-4">Factor</th>
                <th className="text-left px-6 py-4">K-1 Fiancé Visa</th>
                <th className="text-left px-6 py-4">CR-1/IR-1 Spouse Visa</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Must be married first?", "No — marry within 90 days of U.S. entry", "Yes — must be legally married before filing"],
                ["Who can petition?", "U.S. citizen only", "U.S. citizen or LPR"],
                ["Entry status", "K-1 nonimmigrant, then adjust", "Enters as lawful permanent resident"],
                ["Typical timeline", "12–18 months to U.S. entry", "14–24 months to U.S. entry"],
                ["Work authorization", "After I-485 filed post-marriage", "Immediate upon U.S. entry"],
              ].map(([factor, k1, cr1], i) => (
                <tr key={factor} className={i % 2 === 0 ? "bg-tan-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-olive-900">{factor}</td>
                  <td className="px-6 py-4 text-slate-600">{k1}</td>
                  <td className="px-6 py-4 text-slate-600">{cr1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ServiceSection>

      <ServiceSection title="Common K-1 Pitfalls" variant="banner">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Entering on a visitor visa with intent to marry — visa fraud",
            "Marrying after the 90-day window expires",
            "Children entering on K-2 after turning 21",
            "Traveling abroad during I-485 without advance parole",
            "Insufficient financial documentation at consular interview",
            "Prior immigration violations not disclosed on DS-160",
          ].map((item) => (
            <div key={item} className="bg-white/10 rounded-xl p-4 text-sm text-white/90">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceFaq
        title="K-1 Fiancé Visa Questions"
        items={[
          {
            q: "Can we skip the K-1 and get married abroad instead?",
            a: "Yes. If you marry abroad, you file an I-130 spousal petition and your spouse immigrates on a CR-1 or IR-1 immigrant visa. This path takes longer but your spouse enters as a permanent resident.",
          },
          {
            q: "What if we don't marry within 90 days?",
            a: "Your fiancé falls out of status and should depart the U.S. Overstaying complicates future immigration benefits. There is no extension of K-1 status.",
          },
          {
            q: "Can my fiancé work on the K-1 visa?",
            a: "Not immediately. Work authorization comes only after filing I-765 with the I-485 adjustment application following your marriage.",
          },
          {
            q: "Does my fiancé's child need a separate petition?",
            a: "No. Unmarried children under 21 receive K-2 visas as derivatives of the K-1 petition. They must be listed on the I-129F.",
          },
        ]}
      />

      <ServiceFooter
        heading="Plan Your K-1 Fiancé Visa Timeline"
        description="From engagement to green card — one attorney, one strategy, no handoffs between staff."
        buttonLabel="Start K-1 Petition"
      />
    </div>
  );
}
