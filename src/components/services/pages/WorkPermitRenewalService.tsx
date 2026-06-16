import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function WorkPermitRenewalService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form I-765 · Employment Authorization"
        title="Renew or Replace Your Employment Authorization Document"
        lead="An expired EAD means your employer cannot legally keep you on payroll. Attorney Goncalves files I-765 renewals and replacements on time, tracks automatic extension eligibility, and resolves category code errors that cause rejections."
      />

      <ServiceIntro>
        <p>
          The Employment Authorization Document (EAD) is the card that proves to employers
          you are authorized to work in the United States. Unlike a green card, most EADs
          expire on a specific date and must be renewed before that date to avoid an
          interruption in work authorization.
        </p>
        <p>
          Form I-765 is used for both renewals and replacements, but selecting the wrong
          eligibility category is one of the most common reasons USCIS rejects applications.
          Attorney Goncalves matches your current immigration status to the correct
          category code and files with enough lead time for processing.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="When to File Your EAD Renewal"
        subtitle="Timing matters — file too early and USCIS rejects; file too late and you lose work authorization."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "180 days before expiration",
              detail: "Earliest you may file a renewal I-765. USCIS rejects filings more than 180 days before expiration.",
            },
            {
              label: "90–120 days before expiration",
              detail: "Recommended filing window. Allows time for USCIS processing before your current card expires.",
            },
            {
              label: "After expiration",
              detail: "Late filing may still be accepted but you lose work authorization until the new EAD arrives unless automatic extension applies.",
            },
          ].map((d) => (
            <div key={d.label} className="bg-white rounded-xl p-6 border border-tan-200 text-center">
              <p className="font-bold text-olive-900 mb-2">{d.label}</p>
              <p className="text-sm text-slate-600">{d.detail}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Automatic 180-Day EAD Extension"
        subtitle="Certain categories qualify for continued work authorization while renewal is pending."
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          If you file a timely renewal in an eligible category and USCIS has not adjudicated
          your application before your current EAD expires, you may continue working for
          up to 180 days with your expired card plus the I-797C receipt notice.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Adjustment of status applicants — category (c)(9)",
            "Asylum applicants with pending I-589 — category (c)(8)",
            "DACA recipients — category (c)(33)",
            "TPS beneficiaries — category (a)(12) or (c)(19)",
            "Pending I-821D renewal with timely filing",
            "Certain H-4 spouses with approved I-140 — category (c)(26)",
          ].map((cat) => (
            <div key={cat} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              {cat}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Renewal vs. Replacement">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Renewal — Before Your Card Expires
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A renewal extends your existing work authorization for another period.
              You must still be in the same qualifying status that supported your
              original EAD.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Same eligibility category as prior approval</li>
              <li>• Copy of current or recently expired EAD</li>
              <li>• Copy of underlying status document (I-797, I-94, etc.)</li>
              <li>• Two passport-style photos</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Replacement — Lost, Stolen, or Incorrect Cards
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Replacements use a different I-765 filing basis. We document the reason
              for replacement and attach supporting evidence.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Card never received from USCIS (check tracking first)</li>
              <li>• Lost or stolen card (police report recommended)</li>
              <li>• Name change after marriage or court order</li>
              <li>• USCIS printing error on name or dates</li>
              <li>• Damaged or mutilated card</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Documentation for Employers During Processing"
        variant="alt"
      >
        <ServiceChecklist
          title="What Your Employer Needs to Keep You on Payroll"
          items={[
            "Copy of your expired EAD (front and back)",
            "I-797C receipt notice showing timely I-765 renewal filing",
            "Proof of eligibility category for automatic extension under 8 CFR §274a.12",
            "Updated Form I-9 with List A or List C documentation as applicable",
            "For some categories: copy of pending underlying application receipt (I-485, I-589, I-821D)",
            "Letter from immigration attorney confirming automatic extension eligibility (optional but helpful)",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Common EAD Renewal Problems">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Wrong eligibility category selected — application rejected without refund",
            "Filing more than 180 days before expiration — rejected",
            "Underlying status expired or denied — EAD renewal not available",
            "Missing biometrics appointment — application denied for abandonment",
            "Address change not updated with USCIS — card mailed to old address",
            "Criminal arrest since last approval — may affect renewal eligibility",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Processing Times and What to Expect" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl mb-4">
          USCIS EAD processing currently averages 3–7 months depending on the service
          center and category. We monitor your case online and request expedited processing
          when you face job loss, employer deadline, or severe financial hardship.
        </p>
        <p className="text-white/85 leading-relaxed max-w-3xl">
          After approval, your new EAD card is mailed to the address on file. If you
          move during processing, update your address with USCIS immediately using
          Form AR-11 and your online USCIS account.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="EAD Renewal Questions"
        items={[
          {
            q: "Can I keep working if my EAD expires before the renewal arrives?",
            a: "Only if you filed timely in an eligible category and qualify for the automatic 180-day extension. Otherwise, you must stop working when your card expires.",
          },
          {
            q: "Do I need a new EAD if I change employers?",
            a: "No. The EAD authorizes you to work for any employer in the United States. It is not employer-specific unless issued under certain restricted categories.",
          },
          {
            q: "My EAD was denied — what are my options?",
            a: "We review the denial notice, determine whether you can file a motion to reopen or reconsider, and evaluate whether your underlying immigration status supports a new application.",
          },
          {
            q: "Can I expedite my EAD renewal?",
            a: "USCIS grants expedite requests for severe financial loss, humanitarian reasons, or USCIS error. We prepare expedite requests with supporting documentation.",
          },
        ]}
      />

      <ServiceFooter
        heading="Keep Your Work Authorization Current"
        description="Don't risk an employment gap. We track your EAD expiration and file with enough lead time for USCIS processing."
        buttonLabel="Renew or Replace EAD"
      />
    </div>
  );
}
