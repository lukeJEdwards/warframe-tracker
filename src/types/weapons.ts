import type { WEAPON_CATEGORY } from "./enums";
import type { GenericSchema } from "./types";

export type Weapon = GenericSchema & {
  damagePerShot: number[];
  totalDamage: number;
  criticalChance: number;
  criticalMultiplier: number;
  procChance: number;
  fireRate: number;
  masteryReq: number;
  productCategory: WEAPON_CATEGORY;
  slot: number;
  accuracy: number;
  omegaAttenuation: number;
  maxLevelCap: number;
};

export type Gun = Weapon & {
  noise: string;
  trigger: string;
  magazineSize: number;
  reloadTime: number;
  sentinel: boolean;
  multishot: number;
};

export type Melee = Weapon & {
  blockingAngle: number;
  comboDuration: number;
  followThrough: number;
  range: number;
  slamAttack: number;
  slamRadialDamage: number;
  slamRadius: number;
  slideAttack: number;
  heavyAttackDamage: number;
  heavySlamAttack: number;
  heavySlamRadialDamage: number;
  heavySlamRadius: number;
  windUp: number;
};
