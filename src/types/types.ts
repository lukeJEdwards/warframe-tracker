import type { LocationQueryRaw } from "vue-router";

export type route = {
  path: string;
  name: string;
  query?: LocationQueryRaw;
};
