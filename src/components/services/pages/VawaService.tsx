import {
  ServiceBanner,
  ServiceIntro,
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
    </div>
  );
}
