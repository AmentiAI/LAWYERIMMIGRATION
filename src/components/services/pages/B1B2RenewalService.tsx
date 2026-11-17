import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceChecklist,
  ServiceFaq,
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

      <ServiceSection
        title="What Can You Do on a B-1 or B-2 Visa?"
        subtitle="Most visitors receive a combined B-1/B-2 visa, but the purpose of each trip still matters."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceChecklist
            title="Permitted B-1 business activities"
            items={[
              "Consulting with business associates and attending meetings",
              "Attending conferences, conventions, or trade shows",
              "Negotiating contracts",
              "Settling an estate",
            ]}
          />
          <ServiceChecklist
            title="Permitted B-2 visitor activities"
            items={[
              "Tourism and vacations",
              "Visiting family and friends",
              "Medical treatment",
              "Social events and short recreational courses",
            ]}
          />
        </div>
        <p className="mt-6 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Neither visa allows you to work for a U.S. employer, receive payment from a U.S.
          source for local work, or enroll in a full course of study.
        </p>
      </ServiceSection>

      <ServiceSection
        title="How Do You Show You Will Return Home?"
        subtitle="Overcoming the INA §214(b) presumption is the central issue in nearly every visitor visa interview."
        variant="alt"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceChecklist
            title="Evidence of ties to your home country"
            items={[
              "Ongoing employment, with a letter confirming approved leave",
              "A business you own or manage",
              "Property ownership or a long-term lease",
              "Spouse, children, or dependent parents who remain at home",
              "Prior U.S. trips where you left on time",
            ]}
          />
          <ServiceChecklist
            title="Evidence supporting your trip"
            items={[
              "A clear, specific purpose and a defined travel period",
              "Proof you can pay for the trip without working in the U.S.",
              "Invitation letters from family or business contacts, when relevant",
              "Medical appointment letters and payment arrangements for treatment visits",
            ]}
          />
        </div>
      </ServiceSection>

      <ServiceSection
        title="What Is the Difference Between Visa Validity and Length of Stay?"
        subtitle="This is the most common source of accidental overstays."
      >
        <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
          <p>
            The visa in your passport only controls when you may arrive at a U.S. port of
            entry. How long you may stay is set by your I-94 record at admission —
            commonly up to six months for B-2 visitors. A ten-year visa does not allow a
            ten-year stay.
          </p>
          <p>
            If you need more time, you may request an extension with Form I-539 before your
            I-94 date expires. Staying even one day past your authorized stay
            automatically voids your visa under INA §222(g), and you will generally need
            to apply for a new one in your home country.
          </p>
        </div>
      </ServiceSection>

      <ServiceFaq
        title="Visitor Visa Questions"
        items={[
          {
            q: "My last B-1/B-2 visa was approved. Will the renewal be automatic?",
            a: "No. Every application is decided on its own facts under INA §214(b). Changes in your job, family, or travel history since your last visa can affect the result, so each renewal deserves careful preparation.",
          },
          {
            q: "Do I need an interview to renew my visitor visa?",
            a: "Most applicants should expect an in-person interview. Interview-waiver eligibility for renewals is narrow and set by the State Department and the individual consulate, so we confirm current rules for your consulate before you apply.",
          },
          {
            q: "My visa was refused under 214(b). Can I appeal?",
            a: "There is no appeal of a 214(b) refusal. You may reapply, but it is usually worth waiting until your circumstances or evidence have meaningfully changed, and addressing the reason for the refusal directly.",
          },
          {
            q: "Do I need a visa if I am from Portugal?",
            a: "Portugal participates in the Visa Waiver Program, so most Portuguese citizens can visit for up to 90 days with an approved ESTA instead of a visa. A B-1/B-2 visa is still required for longer visits or if you are not eligible for ESTA. Brazilian citizens need a visa.",
          },
        ]}
      />

      <ServiceFooter
        heading="Prepare Your Visitor Visa Application"
        description="We review your DS-160, organize your evidence of ties, and prepare you for the consular interview."
        buttonLabel="Book a Visitor Visa Consultation"
      />
    </div>
  );
}
