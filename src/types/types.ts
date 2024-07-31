import type { LocationQueryRaw } from "vue-router";

export type route = {
  path: string;
  name: string;
  query?: LocationQueryRaw;
};


export type GenericSchema = {
  uniqueName: string;
  name: string;
  description: string;
  codexSecret: boolean;
  textureLocation?: string;
  parentName?: string;
  excludeFromCodex?: boolean;
};