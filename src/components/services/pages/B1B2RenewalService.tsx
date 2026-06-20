import {
  ServiceBanner,
  ServiceIntro,
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
    </div>
  );
}
