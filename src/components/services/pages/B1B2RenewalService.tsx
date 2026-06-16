import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
  ServiceChecklist,
  ServiceFooter,
} from "../shared";

export default function B1B2RenewalService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="B-1 / B-2 Visitor Visas"
        title="Business and Tourist Visa Renewal for Return Travel to America"
        lead="Whether you need to attend meetings in Boston, visit family in Hartford, or receive medical treatment in the U.S., B-1 and B-2 visas require a clear temporary purpose and strong ties to your home country. Attorney Goncalves prepares your DS-160 and consular interview strategy."
      />

      <ServiceIntro>
        <p>
          B-1 and B-2 visas are nonimmigrant visas for temporary visits to the United
          States. B-1 covers business activities that do not constitute employment;
          B-2 covers tourism, family visits, and medical treatment. Both require you
          to demonstrate that you intend to return home after your visit.
        </p>
        <p>
          Consular officers apply a presumption of immigrant intent under INA §214(b) —
          every applicant is assumed to want to stay permanently unless they prove
          otherwise. Prior visa approval does not guarantee renewal. Attorney Goncalves
          prepares your application and interview strategy to overcome this presumption.
        </p>
      </ServiceIntro>

      <ServiceSection title="B-1 Business vs. B-2 Tourism Activities">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-olive-600">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              B-1 Business Visitor Activities
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              B-1 permits temporary business activity — not employment in the United States.
              You may not receive salary from a U.S. source while on B-1 status.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Contract negotiations and sales meetings</li>
              <li>• Attending professional conferences and conventions</li>
              <li>• Consulting with U.S. business associates</li>
              <li>• Settling an estate or negotiating contracts</li>
              <li>• Conducting independent research</li>
              <li>• Taking orders for foreign-manufactured goods</li>
              <li>• Installing or servicing equipment sold abroad</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border-l-4 border-tan-400">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              B-2 Tourism and Family Visits
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              B-2 covers pleasure travel, medical treatment, and visiting relatives
              who live in the United States.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Tourism and vacation travel</li>
              <li>• Visiting children, siblings, or parents in the U.S.</li>
              <li>• Medical treatment at U.S. hospitals and clinics</li>
              <li>• Participation in amateur sports or music events</li>
              <li>• Short recreational study (not for degree credit)</li>
              <li>• Social events, weddings, and family gatherings</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Proving Nonimmigrant Intent — INA §214(b)"
        subtitle="The most common reason for B visa denial is failure to overcome the presumption of immigrant intent."
        variant="alt"
      >
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          You must convince the consular officer that you have strong ties to your home
          country and will depart the United States at the end of your authorized stay.
          Ties include employment, property, family, and financial connections that
          anchor you abroad.
        </p>
        <ServiceChecklist
          title="Evidence of Ties to Your Home Country"
          items={[
            "Employment letter stating position, salary, and approved leave dates",
            "Business ownership documents if self-employed",
            "Property deed, lease, or mortgage statements",
            "Bank statements showing financial assets in home country",
            "Marriage certificate and family ties (spouse and children remaining home)",
            "Enrollment verification if currently a student abroad",
            "Detailed travel itinerary with return flight reservation",
            "Letter of invitation from U.S. host with relationship explanation",
            "Prior travel history showing compliance with visa terms",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Interview Waiver vs. In-Person Consular Interview">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              Interview Waiver (Dropbox) Renewal
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Many returning visitors qualify for interview waiver renewal if they
              meet specific criteria. Documents are submitted by mail or courier
              without an in-person appearance.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Prior B visa in same classification</li>
              <li>• Visa expired within the last 48 months (varies by post)</li>
              <li>• Applying in country of nationality or residence</li>
              <li>• No prior visa refusals or immigration violations</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-tan-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              In-Person Consular Interview
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              First-time applicants, those with prior refusals, and applicants who
              do not meet waiver criteria must appear for a visa interview at the
              U.S. embassy or consulate.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• DS-160 completed accurately before scheduling</li>
              <li>• All supporting documents organized and accessible</li>
              <li>• Concise answers focused on temporary purpose</li>
              <li>• Honest disclosure of prior U.S. stays and any violations</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="Special Situations That Complicate B Visa Applications"
        variant="alt"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Close relatives who are U.S. citizens or green card holders — officer may suspect immigrant intent",
            "Prior overstays on B visa or ESTA — may trigger 3-year or 10-year bars",
            "Pending immigrant petition (I-130) filed on your behalf",
            "Young, unmarried applicants with few economic ties",
            "Frequent or extended prior visits to the United States",
            "Prior B visa denial — must address changed circumstances",
            "Planning to visit a romantic partner in the U.S.",
            "Retired applicants with limited employment ties",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-5 text-sm text-slate-700 border border-tan-200">
              {item}
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="B-1/B-2 Combined Visa and Duration of Stay">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              B-1/B-2 Combined Classification
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Most visitor visas are issued as B-1/B-2 combination visas, allowing
              both business and tourism activities during your stay. The visa stamp
              may be valid for up to 10 years with multiple entries, but each entry
              is limited by the I-94 admission period — typically six months.
            </p>
          </div>
          <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200">
            <h3 className="font-serif text-xl font-bold text-olive-900 mb-4">
              What You Cannot Do on a B Visa
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Work for a U.S. employer or receive U.S. salary</li>
              <li>• Enroll in a degree program (requires F-1 or M-1)</li>
              <li>• Perform for paying audiences (requires P or O visa)</li>
              <li>• Stay beyond your I-94 expiration date</li>
              <li>• Apply for change of status to immigrant category without planning departure</li>
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="After a B Visa Denial" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl mb-4">
          A B visa denial under INA §214(b) is not permanently binding — but reapplying
          without changed circumstances usually results in another denial. We review
          the denial, identify weaknesses in your prior application, and develop a
          stronger strategy for reapplication.
        </p>
        <p className="text-white/85 leading-relaxed max-w-3xl">
          Common fixes include stronger employment documentation, evidence of property
          ties, a more detailed and realistic travel itinerary, and addressing any
          prior immigration history honestly and proactively.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="Visitor Visa Questions"
        items={[
          {
            q: "How long can I stay in the U.S. on a B visa?",
            a: "The visa stamp may be valid for up to 10 years, but CBP determines your admission period on each entry — typically six months. Your I-94 shows your authorized departure date.",
          },
          {
            q: "Can I extend my B-2 stay?",
            a: "Yes. File Form I-539 to extend or change nonimmigrant status before your I-94 expires. Extensions require a valid reason and continued nonimmigrant intent.",
          },
          {
            q: "My parents want to visit their grandchildren in Connecticut. What do they need?",
            a: "A letter of invitation from you, proof of your status in the U.S., your parents' ties to their home country (employment, property, pension), and a clear travel plan showing they will return.",
          },
          {
            q: "Does a prior B visa guarantee renewal?",
            a: "No. Each application is evaluated independently. Changed circumstances — such as a new immigrant petition filed on your behalf — can affect renewal eligibility.",
          },
        ]}
      />

      <ServiceFooter
        heading="Plan Your Next U.S. Visit"
        description="Visitor visa denials can affect future applications. Get professional guidance before your consular appointment."
        buttonLabel="Discuss Visitor Visa Renewal"
      />
    </div>
  );
}
