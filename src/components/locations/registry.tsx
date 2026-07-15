import type { ComponentType } from "react";
import ImmigrationLawyerMysticCt from "./pages/ImmigrationLawyerMysticCt";
import ImmigrationAttorneyMysticCt from "./pages/ImmigrationAttorneyMysticCt";
import ImmigrationLawFirmMysticCt from "./pages/ImmigrationLawFirmMysticCt";
import ImmigrationLawyerConnecticut from "./pages/ImmigrationLawyerConnecticut";
import ImmigrationAttorneyConnecticut from "./pages/ImmigrationAttorneyConnecticut";
import ImmigrationLawyerNearMe from "./pages/ImmigrationLawyerNearMe";
import GreenCardLawyerConnecticut from "./pages/GreenCardLawyerConnecticut";
import CitizenshipLawyerConnecticut from "./pages/CitizenshipLawyerConnecticut";
import NaturalizationAttorneyConnecticut from "./pages/NaturalizationAttorneyConnecticut";
import DeportationDefenseLawyerConnecticut from "./pages/DeportationDefenseLawyerConnecticut";
import ImmigrationAttorney from "./pages/ImmigrationAttorney";
import ImmigrationLaw from "./pages/ImmigrationLaw";
import UsImmigration from "./pages/UsImmigration";
import ImmigrationServices from "./pages/ImmigrationServices";
import ImmigrationLegalServices from "./pages/ImmigrationLegalServices";
import ImmigrationOffice from "./pages/ImmigrationOffice";
import ImmigrationLawOffice from "./pages/ImmigrationLawOffice";
import ImmigrationLawFirm from "./pages/ImmigrationLawFirm";
import ImmigrationAttorneyConsultation from "./pages/ImmigrationAttorneyConsultation";
import ImmigrationAttorneyBridgeport from "./pages/ImmigrationAttorneyBridgeport";
import ImmigrationLawyerHartford from "./pages/ImmigrationLawyerHartford";
import GreenCardRenewalLawyer from "./pages/GreenCardRenewalLawyer";

export const locationPageRegistry: Record<string, ComponentType> = {
  "immigration-lawyer-mystic-ct": ImmigrationLawyerMysticCt,
  "immigration-attorney-mystic-ct": ImmigrationAttorneyMysticCt,
  "immigration-law-firm-mystic-ct": ImmigrationLawFirmMysticCt,
  "immigration-lawyer-connecticut": ImmigrationLawyerConnecticut,
  "immigration-attorney-connecticut": ImmigrationAttorneyConnecticut,
  "immigration-lawyer-near-me": ImmigrationLawyerNearMe,
  "green-card-lawyer-connecticut": GreenCardLawyerConnecticut,
  "citizenship-lawyer-connecticut": CitizenshipLawyerConnecticut,
  "naturalization-attorney-connecticut": NaturalizationAttorneyConnecticut,
  "deportation-defense-lawyer-connecticut": DeportationDefenseLawyerConnecticut,
  "immigration-attorney": ImmigrationAttorney,
  "immigration-law": ImmigrationLaw,
  "us-immigration": UsImmigration,
  "immigration-services": ImmigrationServices,
  "immigration-legal-services": ImmigrationLegalServices,
  "immigration-office": ImmigrationOffice,
  "immigration-law-office": ImmigrationLawOffice,
  "immigration-law-firm": ImmigrationLawFirm,
  "immigration-attorney-consultation": ImmigrationAttorneyConsultation,
  "immigration-attorney-bridgeport-connecticut": ImmigrationAttorneyBridgeport,
  "immigration-lawyer-hartford-ct": ImmigrationLawyerHartford,
  "green-card-renewal-lawyer": GreenCardRenewalLawyer,
};
