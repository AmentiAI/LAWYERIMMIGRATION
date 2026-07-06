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
};
