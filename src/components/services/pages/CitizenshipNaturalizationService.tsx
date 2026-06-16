import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function CitizenshipNaturalizationService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Form N-400 · Naturalization"
        title="From Permanent Resident to United States Citizen"
        lead="Naturalization grants you voting rights, a U.S. passport, and protection from deportation. Attorney Goncalves prepares your N-400, evaluates good moral character issues, and coaches you through the civics test and oath ceremony."
      />

      <ServiceIntro>
        <p>
          Becoming a U.S. citizen is the final step in the immigration journey for most
          green card holders. Naturalization through Form N-400 requires meeting
          residence and physical presence requirements, demonstrating good moral character,
          passing English and civics tests, and taking the Oath of Allegiance at a
          public ceremony.
        </p>
        <p>
          The process seems straightforward on paper, but denials are common when
          applicants fail to disclose arrests, miscalculate physical presence days, or
          file before meeting continuous residence requirements. Attorney Goncalves
          reviews your complete immigration and criminal history before filing to
          identify risks that could derail your application.
        </p>
      </ServiceIntro>

      <ServiceSection
        title="Five-Year vs. Three-Year Naturalization Paths"
        subtitle="Your eligibility timeline depends on how you obtained your green card."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              General Five-Year Rule
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Most lawful permanent residents must wait five years from the date shown on
              their green card before filing N-400. During those five years you must
              maintain continuous residence and meet physical presence requirements.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• 30 months physical presence in the U.S. during the five-year period</li>
              <li>• 3 months residence in the state or USCIS district where you file</li>
              <li>• No single trip abroad of one year or more (breaks continuity)</li>
              <li>• Trips of 6+ months may raise rebuttable presumption of abandonment</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Three-Year Rule for Spouses of U.S. Citizens
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              If you obtained your green card through marriage to a U.S. citizen and remain
              married and living in marital union, you may file after three years of LPR
              status — provided you have been married to the same citizen for three years.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• 18 months physical presence during the three-year period</li>
              <li>• Spouse must have been a U.S. citizen for entire three years</li>
              <li>• Living in marital union — not separated at time of filing or interview</li>
              <li>• Divorce before oath ceremony ends three-year eligibility</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Good Moral Character — The Five-Year Lookback"
        subtitle="USCIS evaluates your conduct during the statutory period and may look further back for serious offenses."
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          You must demonstrate good moral character for the five years immediately
          preceding your N-400 filing (three years for marriage-based applicants).
          Certain conduct permanently bars naturalization; other issues create a
          rebuttable presumption of bad moral character.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Any arrest must be disclosed — even if charges were dismissed or expunged",
            "DUI convictions within the statutory period raise GMC concerns",
            "Failure to pay child support or file taxes can block approval",
            "Voting in a U.S. election as a non-citizen is a serious violation",
            "Claiming to be a U.S. citizen on Form I-9 or other documents",
            "Selective Service registration failure (men ages 18–26)",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-4 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Civics and English Test Preparation">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              What USCIS Tests at Your Interview
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• <strong>Speaking:</strong> Officer assesses English ability during the interview conversation</li>
              <li>• <strong>Reading:</strong> Read aloud one of three sentences correctly</li>
              <li>• <strong>Writing:</strong> Write one of three sentences correctly as dictated</li>
              <li>• <strong>Civics:</strong> Answer 6 of 10 questions correctly from the 100-question bank</li>
            </ul>
          </div>
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Age and Disability Exemptions
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Age 50+ with 20 years as LPR — exempt from English (civics still required)</li>
              <li>• Age 55+ with 15 years as LPR — exempt from English (civics still required)</li>
              <li>• Age 65+ with 20 years as LPR — simplified civics (20 questions)</li>
              <li>• Medical disability — Form N-648 from licensed physician for English/civics waiver</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Documents for Your N-400 Application"
        variant="alt"
      >
        <ServiceChecklist
          title="Evidence We Compile"
          items={[
            "Form N-400 with accurate travel history for the past five years",
            "Copy of green card (front and back)",
            "Passport-style photos (2) meeting USCIS specifications",
            "Tax returns or IRS transcripts for the statutory period",
            "Marriage certificate and spouse's proof of citizenship (3-year rule)",
            "Certified court dispositions for any arrests or citations",
            "Child support payment records if applicable",
            "Selective Service registration confirmation (male applicants)",
            "List of all trips outside the U.S. with exact departure and return dates",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="From Filing to Oath Ceremony">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1", label: "File N-400", detail: "Receipt notice with biometrics appointment date" },
            { step: "2", label: "Biometrics", detail: "Fingerprints and photo at Application Support Center" },
            { step: "3", label: "Interview", detail: "English, civics, and N-400 review with USCIS officer" },
            { step: "4", label: "Oath Ceremony", detail: "Take Oath of Allegiance — you are a citizen" },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-6 border border-tan-200 text-center">
              <span className="inline-flex w-10 h-10 rounded-full bg-olive-700 text-white font-bold items-center justify-center mb-3">
                {s.step}
              </span>
              <p className="font-bold text-olive-900 mb-1">{s.label}</p>
              <p className="text-xs text-slate-600">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-sm mt-6 max-w-3xl">
          Current processing times vary by field office — typically 6–12 months from filing
          to oath ceremony. Some offices offer same-day oath ceremonies immediately after
          a successful interview.
        </p>
      </ServiceSection>

      <ServiceSection title="Benefits of U.S. Citizenship" variant="banner">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Vote in federal, state, and local elections",
            "Apply for a U.S. passport for visa-free travel to many countries",
            "Petition parents, siblings, and married children without visa backlogs (immediate relatives)",
            "Protection from deportation — citizens cannot be removed",
            "Eligibility for federal jobs and elected offices",
            "Pass citizenship automatically to children born abroad",
          ].map((benefit) => (
            <div key={benefit} className="bg-white/10 rounded-xl p-4 text-sm text-white/90">
              ✓ {benefit}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceFaq
        title="Naturalization Questions"
        items={[
          {
            q: "Can I travel while my N-400 is pending?",
            a: "Yes, with your green card and N-400 receipt. Trips abroad do not stop the clock on physical presence already accumulated, but very long trips during the pending period can raise abandonment concerns.",
          },
          {
            q: "What if I fail the civics or English test?",
            a: "USCIS schedules a re-examination interview, typically within 60–90 days. You get a second chance on the portions you failed. We provide additional study materials before the retest.",
          },
          {
            q: "Will USCIS look at my old criminal record?",
            a: "Yes. USCIS reviews your entire history, not just the statutory period. Certain convictions permanently bar naturalization regardless of when they occurred.",
          },
          {
            q: "Can my children become citizens when I naturalize?",
            a: "Children under 18 living with you in the U.S. may derive citizenship automatically under INA §320 if you naturalize. We evaluate each child's eligibility.",
          },
        ]}
      />

      <ServiceFooter
        heading="Take the Final Step Toward Citizenship"
        description="N-400 errors and undisclosed arrests are common denial reasons. Let Attorney Goncalves review your record before you file."
        buttonLabel="Begin Naturalization Case"
      />
    </div>
  );
}
