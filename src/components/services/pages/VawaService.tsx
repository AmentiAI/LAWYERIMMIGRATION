import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceChecklist,
  ServiceFaq,
  ServiceFooter,
} from "../shared";

export default function VawaService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="VAWA Self-Petition"
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
          A VAWA self-petition allows you to file on your own behalf without your
          abuser&apos;s knowledge, consent, or participation. USCIS has strict
          confidentiality rules — your abuser will not be notified that you filed.
          Attorney Goncalves handles every stage with discretion and sensitivity.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Who Can File a VAWA Self-Petition?"
        subtitle="VAWA covers family members of U.S. citizens and lawful permanent residents who were subjected to battery or extreme cruelty."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              who: "Abused spouses",
              detail:
                "Current or former spouses of a U.S. citizen or green card holder. A divorce, the abuser's death, or the abuser's loss of status within the past two years does not automatically end eligibility. Your unmarried children under 21 can be included.",
            },
            {
              who: "Abused children",
              detail:
                "Unmarried children under 21 who were abused by a U.S. citizen or permanent resident parent. In some cases, a child may file until age 25 if the abuse was a central reason for the delay.",
            },
            {
              who: "Abused parents",
              detail:
                "Parents who were abused by their U.S. citizen son or daughter who is 21 or older.",
            },
          ].map((item) => (
            <div key={item.who} className="bg-white rounded-xl p-6 border border-tan-200">
              <p className="font-bold text-olive-900 mb-2">{item.who}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="What Must a VAWA Self-Petition Prove?"
        subtitle="USCIS reviews Form I-360 against each of these requirements. Any credible evidence is accepted — you are not required to have a police report."
        variant="alt"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceChecklist
            title="Core eligibility requirements"
            items={[
              "A qualifying relationship to a U.S. citizen or permanent resident abuser",
              "Battery or extreme cruelty by that family member",
              "You lived with the abuser at some point",
              "Good moral character",
              "For spouses: the marriage was entered in good faith, not for immigration benefits",
            ]}
          />
          <ServiceChecklist
            title="Evidence we commonly gather"
            items={[
              "Marriage or birth certificates and proof of the abuser's status",
              "Leases, mail, or records showing you lived together",
              "Protective orders, police reports, medical or counseling records",
              "Statements from shelters, clergy, friends, or family",
              "Your own detailed declaration describing the abuse",
              "Police clearances supporting good moral character",
            ]}
          />
        </div>
      </ServiceSection>

      <ServiceSection
        title="How Does the VAWA Process Work?"
        subtitle="Approval of the I-360 is the first step toward a green card and work authorization."
      >
        <ol className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "Confidential screening",
              detail: "We review your history, safety concerns, and eligibility in a private consultation.",
            },
            {
              step: "File Form I-360",
              detail:
                "There is no USCIS filing fee for a VAWA I-360. Mail goes to a safe address you choose.",
            },
            {
              step: "Prima facie review",
              detail:
                "USCIS may issue a prima facie determination, which can help with access to certain public benefits while the case is pending.",
            },
            {
              step: "Approval and green card",
              detail:
                "Once approved, you may apply for work authorization and, when eligible, file Form I-485 to adjust status. Spouses of U.S. citizens can often file the I-485 together with the I-360.",
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
        title="VAWA Questions"
        items={[
          {
            q: "Will my abuser find out that I filed?",
            a: "Federal law (8 U.S.C. § 1367) prohibits USCIS and other agencies from disclosing information about your VAWA case to the abuser or using information supplied by the abuser against you. We also use a safe mailing address for all notices.",
          },
          {
            q: "Do I need a police report or protective order?",
            a: "No. USCIS must consider any credible evidence. Many approved self-petitions rely on the survivor's own detailed declaration supported by statements from counselors, shelters, friends, or medical providers.",
          },
          {
            q: "I am divorced from my abuser. Can I still file?",
            a: "Often yes. A former spouse can generally still self-petition if the divorce occurred within the two years before filing and was connected to the abuse.",
          },
          {
            q: "Is VAWA only for women?",
            a: "No. Despite its name, VAWA protects survivors of any gender, including men who were abused by a U.S. citizen or permanent resident spouse.",
          },
          {
            q: "Can I work while my VAWA case is pending?",
            a: "After USCIS approves the I-360, you can apply for an employment authorization document. If you also file an I-485, you can apply for work authorization based on the pending green card application.",
          },
        ]}
      />

      <ServiceFooter
        heading="Speak With an Attorney in Confidence"
        description="Consultations are private. Tell us the safest way to reach you, and we will follow your instructions."
        buttonLabel="Book a Confidential Consultation"
      />
    </div>
  );
}
