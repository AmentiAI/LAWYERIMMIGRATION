import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function ConsularProcessingService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Immigrant Visa · Embassy & Consulate"
        title="Consular Processing for Relatives Waiting Outside the United States"
        lead="When your family member cannot adjust status domestically, the immigrant visa path runs through the National Visa Center and a U.S. embassy or consulate. Attorney Goncalves manages NVC document submissions, DS-260 preparation, and embassy interview readiness."
      />

      <ServiceIntro>
        <p>
          Consular processing is the pathway for foreign nationals outside the United
          States to receive an immigrant visa and enter as lawful permanent residents.
          After USCIS approves the underlying I-130 or I-140 petition and a visa
          number becomes available, the case transfers to the Department of State.
        </p>
        <p>
          The process involves multiple agencies — USCIS, the National Visa Center,
          and the embassy or consulate in the beneficiary&apos;s home country. Missing
          deadlines, submitting incorrect civil documents, or failing the embassy
          interview can delay your family&apos;s reunion by months or years.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Three Federal Agencies Handle Your Case"
        subtitle="Each stage has distinct requirements and deadlines."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              agency: "USCIS",
              title: "Petition Adjudication",
              items: [
                "I-130 or I-140 filed and approved",
                "Priority date established on filing date",
                "Approval notice (I-797) sent to petitioner and NVC",
                "Typical processing: 12–24 months",
              ],
            },
            {
              agency: "National Visa Center",
              title: "Document Collection",
              items: [
                "Case number assigned after petition approval",
                "DS-260 immigrant visa application online",
                "Civil documents uploaded electronically",
                "I-864 Affidavit of Support submission",
                "Documentarily qualified status required before embassy scheduling",
              ],
            },
            {
              agency: "U.S. Embassy / Consulate",
              title: "Visa Interview & Issuance",
              items: [
                "Interview scheduled when visa is available",
                "Medical examination by panel physician",
                "Police certificates from all countries of residence",
                "Immigrant visa stamped in passport upon approval",
                "Enter U.S. within 6 months of medical exam validity",
              ],
            },
          ].map((stage) => (
            <div key={stage.agency} className="bg-white rounded-2xl p-8 border border-tan-200">
              <span className="text-xs font-bold text-olive-600 uppercase">{stage.agency}</span>
              <h3 className="font-serif text-xl font-bold text-olive-900 mt-2 mb-4">{stage.title}</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {stage.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        title="Civil Documents Required by NVC"
        subtitle="Every document must meet embassy-specific formatting requirements."
        variant="alt"
      >
        <ServiceChecklist
          title="Standard NVC Document Package"
          items={[
            "Valid passport biographic page (valid 6+ months beyond intended entry)",
            "Birth certificate with certified English translation",
            "Marriage certificate (if applicable) with translation",
            "Divorce decrees or death certificates for prior marriages",
            "Police certificates from every country lived in 6+ months since age 16",
            "Military records (if applicable)",
            "Court and prison records (if applicable)",
            "Two passport-style photos per applicant",
            "Form I-864 Affidavit of Support with tax returns and W-2s",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Embassy Interview Preparation">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              What Consular Officers Evaluate
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The embassy interview is the final hurdle. Officers verify identity,
              confirm the qualifying relationship, assess admissibility under INA §212,
              and review your complete NVC file. Marriage-based cases receive additional
              scrutiny for fraud indicators.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Is the relationship genuine and not entered for immigration benefits?</li>
              <li>• Does the applicant have any criminal, health, or security grounds of inadmissibility?</li>
              <li>• Is the financial sponsor&apos;s income sufficient under I-864 guidelines?</li>
              <li>• Are all civil documents authentic and properly translated?</li>
            </ul>
          </div>
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              How We Prepare Your Relative
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>✓ Full NVC file review before embassy scheduling</li>
              <li>✓ Practice interview covering relationship and background questions</li>
              <li>✓ Medical exam scheduling guidance for panel physicians</li>
              <li>✓ Instructions for 221(g) administrative processing responses</li>
              <li>✓ Port-of-entry guidance for immigrant visa packet presentation</li>
              <li>✓ Green card delivery timeline after U.S. entry</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Common Consular Processing Delays"
        variant="alt"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Administrative processing (221(g)) — additional background checks, can last months",
            "Missing or incorrectly formatted civil documents at NVC stage",
            "Medical exam revealing Class A health conditions requiring waiver",
            "Insufficient financial sponsor income — joint sponsor needed",
            "Prior visa denials or immigration violations not disclosed",
            "Embassy backlog — interview appointments delayed months in high-volume posts",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="After the Visa Is Issued" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl mb-6">
          Your relative must enter the United States within the validity period of the
          immigrant visa and medical examination (typically 6 months). At the port of
          entry, CBP admits them as permanent residents. The physical green card is
          mailed to the U.S. address within 90 days of entry. We explain what to expect
          at customs and how to update your address with USCIS.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="Consular Processing Questions"
        items={[
          {
            q: "How long does consular processing take after I-130 approval?",
            a: "NVC document collection: 3–6 months. Embassy interview scheduling: 1–6 months depending on the post. Total from I-130 approval to visa: typically 8–18 months.",
          },
          {
            q: "Can my relative visit the U.S. while waiting for an immigrant visa?",
            a: "They may apply for a B-2 visitor visa, but must overcome the presumption of immigrant intent. Having a pending immigrant petition makes visitor visa approval difficult.",
          },
          {
            q: "What is administrative processing (221(g))?",
            a: "A temporary refusal pending additional review. The embassy holds your passport and requests more documents or completes background checks. Can last weeks to over a year.",
          },
          {
            q: "What if the embassy denies the visa?",
            a: "Denial reasons vary — inadmissibility, insufficient documents, fraud findings. Some denials are appealable; others require waivers. We analyze the denial and advise on next steps.",
          },
        ]}
      />

      <ServiceFooter
        heading="Coordinate Your Relative's Immigrant Visa"
        description="From NVC upload to embassy day — Attorney Goncalves stays on your case file throughout consular processing."
        buttonLabel="Begin Consular Processing"
      />
    </div>
  );
}
