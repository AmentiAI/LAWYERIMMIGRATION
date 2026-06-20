import {
  ServiceBanner,
  ServiceIntro,
} from "../shared";

export default function E2InvestmentVisaService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="E-2 Treaty Investor Visa"
        title="Launch or Expand Your Business in the United States"
        lead="Nationals of treaty countries who invest a substantial amount in a U.S. enterprise may qualify for the E-2 visa to develop and direct that business. Attorney Goncalves advises on investment structure, business plan requirements, and consular or change-of-status applications."
      />

      <ServiceIntro>
        <p>
          The E-2 treaty investor visa allows nationals of countries with qualifying
          treaties of commerce and navigation with the United States to enter the U.S.
          to develop and direct a business in which they have invested a substantial
          amount of capital. Unlike the EB-5 immigrant investor program, E-2 is a
          nonimmigrant visa — but it can be renewed indefinitely as long as the enterprise
          remains operational.
        </p>
        <p>
          E-2 applications receive intense scrutiny at U.S. consulates. Officers examine
          your business plan, source of funds, investment amount relative to business
          cost, and whether the enterprise is real and operating — not marginal. Attorney
          Goncalves works with entrepreneurs to structure investments and prepare
          consular applications.
        </p>
      </ServiceIntro>
    </div>
  );
}
