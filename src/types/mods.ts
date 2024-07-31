import type { MOD_COMPAT, MOD_TYPE, RARITY } from "./enums";
import type  {GenericSchema}  from "./types";

export type Mod = GenericSchema & {
  polarity: string;
  rarity: RARITY;
  baseDrain: number;
  fusionLimit: number;
  isUtility: boolean;
  compatName: MOD_COMPAT;
  type: MOD_TYPE;
  description: string[];
  subtype: string;
  levelStats: Object[];
};
