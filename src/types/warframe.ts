import type { GenericSchema } from "./types";
import { WARFRAME_CATEGORY } from "./enums"


export type Ability = {
  abilityUniqueName: string;
  abilityName: string;
  description: string;
};

export type Warframe = GenericSchema & {
  health: number;
  shield: number;
  armor: number;
  power: number;
  masteryReq: number;
  sprnumberSpeed: number;
  passiveDescription: string;
  exalted: string[];
  abilities: Ability[];
  productCategory: WARFRAME_CATEGORY;
  prime?: boolean
};
