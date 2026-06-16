import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function RemovalOfConditionsService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-751 · Petition to Remove Conditions"
        title="Convert Your Two-Year Conditional Card to Permanent Residence"
        lead="Marriage-based green cards issued within two years of the wedding are conditional. You must file I-751 within the 90-day window before expiration — or risk termination of your status. Attorney Goncalves handles joint filings, divorce waivers, and abuse-based waivers."
      />

      <ServiceIntro>
        <p>
          If you received your green card through marriage to a U.S. citizen or lawful
          permanent resident, and your marriage was less than two years old at the time
          of approval, USCIS issued a two-year conditional green card. This is not a
          permanent card — it expires automatically unless you file to remove conditions.
        </p>
        <p>
          Form I-751 must be filed during the 90-day period immediately before your
          conditional card expires. Filing late can result in automatic termination of
          your permanent resident status and placement in removal proceedings. Attorney
          Goncalves tracks your expiration date from the moment your original green card
          is approved.
        </p>
      </ServiceIntro>

      <ServiceSection title="The 90-Day Filing Window">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "90 days before expiration", detail: "Earliest date you may file I-751. Filing before this window opens results in rejection." },
            { label: "Expiration date", detail: "If I-751 is not filed, conditional resident status terminates automatically on this date." },
            { label: "While pending", detail: "Timely filing extends your conditional status. You receive an extension letter valid 24 months while USCIS adjudicates." },
          ].map((d) => (
            <div key={d.label} className="bg-white rounded-xl p-6 border border-tan-200 text-center">
              <p className="font-bold text-olive-900 mb-2">{d.label}</p>
              <p className="text-sm text-slate-600">{d.detail}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Joint Filing vs. Waiver Filing"
        subtitle="If you are still married, you file jointly. If not, you need a waiver."
        variant="alt"
      >
        <div className="space-y-6">
          {[
            {
              title: "Joint Filing With Your Spouse",
              body: "If you are still married and living together, you and your U.S. citizen or LPR spouse file I-751 jointly. You must submit evidence that your marriage remains bona fide — the same type of proof used in your original green card case.",
            },
            {
              title: "Waiver — Good-Faith Marriage Ended in Divorce",
              body: "If your marriage ended in divorce or annulment, you may file alone with a waiver. You must prove the marriage was entered in good faith, not to obtain immigration benefits. The final divorce decree is required.",
            },
            {
              title: "Waiver — Battery or Extreme Cruelty",
              body: "If you or your child were subjected to battery or extreme cruelty by your U.S. citizen or LPR spouse, you may self-petition under VAWA protections. Police reports, medical records, and restraining orders strengthen the case.",
            },
            {
              title: "Waiver — Extreme Hardship",
              body: "Available in limited circumstances where removal would cause exceptional hardship. Less commonly used as the sole basis but available in combination with other factors.",
            },
          ].map((w) => (
            <div key={w.title} className="bg-white rounded-xl p-6 border border-tan-200">
              <h3 className="font-bold text-olive-900 mb-2">{w.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Evidence of Bona Fide Marriage for I-751">
        <ServiceChecklist
          title="Documents We Compile for Your I-751"
          items={[
            "Form I-751 with correct waiver box checked (if applicable)",
            "Copy of conditional green card (front and back)",
            "Final divorce decree (waiver cases) or joint filing with spouse signature",
            "Joint federal tax returns for each year of marriage",
            "Joint bank account statements and credit card statements",
            "Joint lease, mortgage, or utility bills in both names",
            "Photos together throughout the marriage with dates and locations",
            "Birth certificates of children born during the marriage",
            "Affidavits from friends, family, and employers who know your marriage",
            "Insurance policies listing spouse as beneficiary",
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="I-751 Interview and Adjudication"
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          USCIS may approve I-751 without an interview, particularly for joint filings
          with strong evidence. Waiver cases and cases with fraud indicators more often
          require an in-person interview. If you receive an interview notice, Attorney
          Goncalves prepares you thoroughly — reviewing your entire file and practicing
          responses about your marriage history.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Current processing time: 18–36 months for most cases",
            "Extension letter valid 24 months while case is pending",
            "Approval results in a 10-year unconditional green card",
            "Denial may result in Notice to Appear in immigration court",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="What If You Receive a Notice to Appear?" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl">
          If your conditional card expires before I-751 is filed or approved, USCIS may
          issue a Notice to Appear (NTA) placing you in removal proceedings. You can
          still file I-751 in immigration court. Contact Attorney Goncalves immediately
          if you receive an NTA — time limits apply for filing in court.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="I-751 Removal of Conditions Questions"
        items={[
          {
            q: "Can I file I-751 before the 90-day window opens?",
            a: "No. USCIS will reject early filings. The 90-day period begins 90 days before your card expiration date printed on your green card.",
          },
          {
            q: "Will USCIS contact my ex-spouse in a waiver case?",
            a: "Generally no. Waiver cases are adjudicated on the evidence you submit without contacting the petitioning spouse.",
          },
          {
            q: "Can I work while I-751 is pending?",
            a: "Yes. Your conditional card plus the I-751 receipt notice (or extension letter) serves as proof of work authorization for up to 24 months.",
          },
          {
            q: "What if we are separated but not divorced?",
            a: "You cannot file jointly if you are not living together. You may need to wait until divorce is final or explore other waiver bases. We advise on optimal timing.",
          },
        ]}
      />

      <ServiceFooter
        heading="Don't Miss Your I-751 Deadline"
        description="We calendar your conditional card expiration from day one and begin gathering evidence months before the filing window opens."
        buttonLabel="Schedule I-751 Review"
      />
    </div>
  );
}
