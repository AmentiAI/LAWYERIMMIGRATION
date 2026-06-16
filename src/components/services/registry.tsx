import FamilyBasedPetitionsService from "./pages/FamilyBasedPetitionsService";
import AdjustmentOfStatusService from "./pages/AdjustmentOfStatusService";
import ConsularProcessingService from "./pages/ConsularProcessingService";
import RemovalOfConditionsService from "./pages/RemovalOfConditionsService";
import CitizenshipNaturalizationService from "./pages/CitizenshipNaturalizationService";
import FiancePetitionsService from "./pages/FiancePetitionsService";
import WorkPermitRenewalService from "./pages/WorkPermitRenewalService";
import GreenCardRenewalService from "./pages/GreenCardRenewalService";
import VawaService from "./pages/VawaService";
import DacaRenewalService from "./pages/DacaRenewalService";
import E2InvestmentVisaService from "./pages/E2InvestmentVisaService";
import B1B2RenewalService from "./pages/B1B2RenewalService";

export const servicePageRegistry = {
  "family-based-petitions": FamilyBasedPetitionsService,
  "adjustment-of-status": AdjustmentOfStatusService,
  "consular-processing": ConsularProcessingService,
  "removal-of-conditions": RemovalOfConditionsService,
  "citizenship-naturalization": CitizenshipNaturalizationService,
  "fiance-petitions": FiancePetitionsService,
  "work-permit-renewal": WorkPermitRenewalService,
  "green-card-renewal": GreenCardRenewalService,
  vawa: VawaService,
  "daca-renewal": DacaRenewalService,
  "e2-investment-visa": E2InvestmentVisaService,
  "b1-b2-renewal": B1B2RenewalService,
} as const;
