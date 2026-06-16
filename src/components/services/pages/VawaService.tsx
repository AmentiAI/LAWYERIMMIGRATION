import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function VawaService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="VAWA Self-Petition · Form I-360"
        title="Confidential Immigration Relief for Abuse Survivors"
        lead="The Violence Against Women Act allows certain abuse survivors to self-petition for immigration benefits without their abuser's knowledge or participation. Attorney Goncalves provides discreet, compassionate representation from initial screening through approval."
      />

      <ServiceIntro>
        <p>
          VAWA — the Violence Against Women Act — created a confidential pathway for
          abuse survivors to obtain immigration status independent of their abuser.
          Despite the name, VAWA protections apply to abused spouses, children, and
          parents of any gender.
        </p>
        <p>
          A VAWA self-petition allows you to file Form I-360 on your own behalf without
          your abuser&apos;s knowledge, consent, or participation. USCIS has strict
          confidentiality rules — your abuser will not be notified that you filed.
          Attorney Goncalves handles every stage with discretion and sensitivity.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Who May Self-Petition Under VAWA?"
        subtitle="Three categories of abuse survivors qualify for VAWA self-petitions."
      >
        <div className="space-y-6">
          {[
            {
              who: "Abused Spouses of U.S. Citizens or LPRs",
              detail: "You must show the marriage was entered in good faith and that you suffered battery or extreme cruelty during the marriage. You may file even if still married, separated, or divorced — timing rules apply for divorced spouses.",
              evidence: ["Police reports and restraining orders", "Medical records documenting injuries", "Photos of injuries", "Shelter or counseling records", "Affidavits from witnesses to abuse"],
            },
            {
              who: "Abused Children of U.S. Citizens or LPRs",
              detail: "Unmarried children under 21 who were abused by a citizen or LPR parent. Children ages 21–25 may qualify if the abuse caused the delay in filing.",
              evidence: ["CPS or child protective services records", "School counselor or therapist records", "Medical records", "Police reports", "Affidavits from teachers or family members"],
            },
            {
              who: "Abused Parents of U.S. Citizens",
              detail: "Parents who were subjected to battery or extreme cruelty by their adult U.S. citizen son or daughter. The abuser must be at least 21 years old.",
              evidence: ["Police reports", "Medical records", "Protective order documentation", "Witness affidavits", "Evidence of cohabitation with abuser"],
            },
          ].map((item) => (
            <div key={item.who} className="bg-white rounded-xl border border-tan-200 overflow-hidden">
              <div className="p-6 border-b border-tan-100">
                <h3 className="font-bold text-olive-900 text-lg">{item.who}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">{item.detail}</p>
              </div>
              <div className="p-6 bg-tan-50">
                <p className="text-xs font-bold text-olive-600 uppercase mb-3">Types of Supporting Evidence</p>
                <div className="flex flex-wrap gap-2">
                  {item.evidence.map((e) => (
                    <span key={e} className="text-xs bg-white px-3 py-1 rounded-full border border-tan-200 text-slate-700">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Your Abuser Will Not Be Notified"
        variant="banner"
      >
        <p className="text-white/85 leading-relaxed max-w-3xl mb-6">
          USCIS maintains strict confidentiality for VAWA petitions under 8 USC §1367.
          Government officials are prohibited from disclosing your filing to your abuser.
          Your abuser is not contacted, interviewed, or asked to sign any documents.
          We explain every safeguard before you decide to file.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "USCIS cannot use your filing against you in removal proceedings initiated by your abuser",
            "Safe address options available if you fear your abuser will intercept mail",
            "Separate mailing address for all USCIS correspondence",
            "Representation without your abuser present at any appointment",
          ].map((item) => (
            <div key={item} className="bg-white/10 rounded-xl p-4 text-sm text-white/90">
              ✓ {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Proving Battery or Extreme Cruelty"
        subtitle="You do not need a police report or criminal conviction — but you must present credible evidence."
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          Extreme cruelty includes psychological, emotional, and controlling abuse —
          not only physical violence. USCIS evaluates the totality of your evidence.
          Many successful VAWA cases rely on detailed personal declarations supported
          by corroborating documents.
        </p>
        <ServiceChecklist
          title="Evidence We Help You Gather"
          items={[
            "Your detailed personal declaration describing the abuse",
            "Affidavits from friends, family, neighbors, or coworkers who witnessed abuse",
            "Police reports, 911 call records, or arrest records",
            "Protective orders or restraining orders",
            "Medical records, hospital records, or photographs of injuries",
            "Domestic violence shelter records or hotline documentation",
            "Mental health counseling or therapy records",
            "Evidence of controlling behavior — financial control, isolation, threats",
            "Proof of good-faith marriage (for spouse petitions)",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Path From I-360 Approval to Green Card">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "I-360 Approval",
              body: "USCIS approves your self-petition and you become the beneficiary of an approved immigrant petition. You may be eligible for work authorization while waiting for your green card.",
            },
            {
              title: "Adjustment of Status (I-485)",
              body: "If you are physically present in the U.S. and admissible, you file I-485 to become a permanent resident without leaving the country. Available to spouses, children, and parents of U.S. citizens immediately.",
            },
            {
              title: "Consular Processing",
              body: "If you are outside the U.S. or ineligible to adjust, you complete immigrant visa processing at a U.S. embassy. Waivers may be needed for certain inadmissibility grounds.",
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
        title="VAWA and Removal Proceedings"
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
          If you are already in removal (deportation) proceedings, you may still file
          a VAWA self-petition. An approved I-360 can be presented to the immigration
          judge as a basis for cancellation of removal or termination of proceedings.
          Time is critical — contact Attorney Goncalves immediately if you have a court date.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "VAWA cancellation of removal for those in proceedings 3+ years",
            "Special rule cancellation for approved VAWA self-petitioners",
            "Continued presence while I-360 is pending",
            "Work authorization available with prima facie determination",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceFaq
        title="VAWA Self-Petition Questions"
        items={[
          {
            q: "Can I file VAWA if I am divorced from my abuser?",
            a: "Yes, but you must file within two years of the divorce. You must still prove the marriage was bona fide and that abuse occurred during the marriage.",
          },
          {
            q: "What is a prima facie determination?",
            a: "If USCIS finds your petition initially credible, they issue a prima facie letter. This can qualify you for certain public benefits and demonstrates progress while your case is fully adjudicated.",
          },
          {
            q: "Can men file VAWA self-petitions?",
            a: "Yes. VAWA protects all genders. Abused husbands and fathers of U.S. citizen or LPR relatives may self-petition under the same standards.",
          },
          {
            q: "Will filing VAWA affect my abuser's immigration status?",
            a: "USCIS does not notify your abuser. However, if your abuser committed immigration fraud by marrying solely for immigration benefits, that is a separate matter USCIS may investigate independently.",
          },
        ]}
      />

      <ServiceFooter
        heading="Private VAWA Consultation Available"
        description="Your safety and confidentiality come first. Speak with Attorney Goncalves in a secure, judgment-free consultation."
        buttonLabel="Request Confidential Consultation"
      />
    </div>
  );
}
