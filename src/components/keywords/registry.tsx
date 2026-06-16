import type { ComponentType } from "react";
import MarriagePetitionsTopic from "./topics/MarriagePetitionsTopic";
import GreenCardPetitionsTopic from "./topics/GreenCardPetitionsTopic";
import FianceVisaTopic from "./topics/FianceVisaTopic";
import I130Topic from "./topics/I130Topic";
import N400Topic from "./topics/N400Topic";
import I485Topic from "./topics/I485Topic";
import I864Topic from "./topics/I864Topic";
import I765Topic from "./topics/I765Topic";
import I90Topic from "./topics/I90Topic";
import NaturalizationCriminalHistoryTopic from "./topics/NaturalizationCriminalHistoryTopic";
import RemovalOfConditionsDivorceTopic from "./topics/RemovalOfConditionsDivorceTopic";
import PetitionForSpouseTopic from "./topics/PetitionForSpouseTopic";
import PetitionForChildrenTopic from "./topics/PetitionForChildrenTopic";
import PetitionForParentsTopic from "./topics/PetitionForParentsTopic";
import PetitionForSiblingTopic from "./topics/PetitionForSiblingTopic";

export const topicPageRegistry: Record<string, ComponentType> = {
  "marriage-petitions": MarriagePetitionsTopic,
  "green-card-petitions": GreenCardPetitionsTopic,
  "fiance-visa": FianceVisaTopic,
  "i-130": I130Topic,
  "n-400": N400Topic,
  "i-485": I485Topic,
  "i-864": I864Topic,
  "i-765": I765Topic,
  "i-90": I90Topic,
  "naturalization-criminal-history": NaturalizationCriminalHistoryTopic,
  "removal-of-conditions-divorce": RemovalOfConditionsDivorceTopic,
  "petition-for-spouse": PetitionForSpouseTopic,
  "petition-for-children": PetitionForChildrenTopic,
  "petition-for-parents": PetitionForParentsTopic,
  "petition-for-sibling": PetitionForSiblingTopic,
};
