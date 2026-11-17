import type { ComponentType } from "react";
import ImmigrationLawyerMysticCt from "./pages/ImmigrationLawyerMysticCt";
import ImmigrationLawyerConnecticut from "./pages/ImmigrationLawyerConnecticut";
import GreenCardLawyerConnecticut from "./pages/GreenCardLawyerConnecticut";
import CitizenshipLawyerConnecticut from "./pages/CitizenshipLawyerConnecticut";
import ImmigrationLawyerHartford from "./pages/ImmigrationLawyerHartford";

export const locationPageRegistry: Record<string, ComponentType> = {
  "immigration-lawyer-mystic-ct": ImmigrationLawyerMysticCt,
  "immigration-lawyer-connecticut": ImmigrationLawyerConnecticut,
  "green-card-lawyer-connecticut": GreenCardLawyerConnecticut,
  "citizenship-lawyer-connecticut": CitizenshipLawyerConnecticut,
  "immigration-lawyer-hartford-ct": ImmigrationLawyerHartford,
};
