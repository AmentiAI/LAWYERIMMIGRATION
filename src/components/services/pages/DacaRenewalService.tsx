import {
  ServiceBanner,
  ServiceIntro,
  ServiceSection,
  ServiceFaq,
} from "../shared";

export default function DacaRenewalService() {
  return (
    <div className="bg-tan-50">
      <ServiceBanner
        eyebrow="Deferred Action for Childhood Arrivals"
        title="DACA Renewal and Work Authorization Extensions"
        lead="DACA provides protection from deportation and eligibility for employment authorization for qualifying individuals brought to the U.S. as children. Timely renewal is critical — Attorney Goncalves files your renewal package together and calendars your expiration date so you never lose protection."
      />

      <ServiceIntro>
        <p>
          Deferred Action for Childhood Arrivals (DACA) provides temporary protection
          from removal and eligibility for work authorization to certain individuals who
          were brought to the United States as children. DACA is not a path to a green
          card or citizenship, but it allows recipients to work legally and live without
          fear of deportation while the program remains in effect.
        </p>
        <p>
          Renewal requires filing your DACA renewal package and employment authorization
          application before your current grant expires. Filing late can result in loss
          of protection and work authorization. Attorney Goncalves tracks court decisions
          affecting DACA and advises on optimal filing timing.
        </p>
      </ServiceIntro>

      <ServiceSection title="DACA Policy Landscape" variant="banner">
        <p className="text-white/85 leading-relaxed max-w-3xl mb-4">
          DACA has faced ongoing litigation since 2017. Court orders have repeatedly
          blocked full termination of the program while limiting new initial applications.
          Attorney Goncalves monitors federal court decisions and USCIS policy updates
          to advise current recipients on renewal timing and eligibility.
        </p>
        <p className="text-white/85 leading-relaxed max-w-3xl mb-4">
          If you are a current DACA recipient, renewal remains available regardless of
          most court challenges. Do not let your protection lapse while waiting for
          policy clarity — timely renewal is your best protection.
        </p>
        <p className="text-white/85 leading-relaxed max-w-3xl">
          Processing times vary case by case.
        </p>
      </ServiceSection>

      <ServiceFaq
        title="DACA Renewal Questions"
        items={[
          {
            q: "Can I file a new initial DACA application?",
            a: "Initial DACA applications have been restricted by court orders since 2021. Eligibility depends on current litigation status. We advise whether initial filing is available at the time of your consultation.",
          },
          {
            q: "What happens if my DACA renewal is denied?",
            a: "Denial ends your deferred action protection and work authorization. Depending on the reason, you may face enforcement action. We evaluate denial notices and advise on motions to reconsider or reopen.",
          },
          {
            q: "Can DACA lead to a green card?",
            a: "DACA alone does not provide a path to permanent residence. However, some recipients may qualify through marriage to a U.S. citizen, employment sponsorship, or other pathways. We evaluate individual circumstances.",
          },
        ]}
      />
    </div>
  );
}
