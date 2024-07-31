import type { RARITY } from "./enums";
import type { GenericSchema } from "./types";

export type RelicReward = {
  rewardName: string;
  rarity: RARITY;
  tier: number;
  itemCount: number;
};

export type VoidRelic = GenericSchema & {
  relicRewards: RelicReward[];
};

export type Arcane = GenericSchema & {
  rarity: RARITY;
  levelStats: Array<{ stats: string[] }>;
};
