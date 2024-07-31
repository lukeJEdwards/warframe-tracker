import { computed, ref } from "vue";
import { defineStore } from "pinia";

import type { ComputedRef, Ref } from "vue";
import type { AxiosResponse } from "axios";

import type { Warframe } from "@/types/warframe";
import { WARFRAME_CATEGORY } from "@/types/enums";

import { load_Manifest } from "./shared";
import { useMaifestStore } from "./manifest";

export const useWarframeStore = defineStore("warframeStore", () => {
  const { get_image, session } = useMaifestStore();

  const warframes: Ref<Array<Warframe>> = ref([]);
  const currentWarframe: Ref<Warframe | undefined> = ref(undefined);

  const suits = computed(() =>
    warframes.value.filter(
      (w) => w.productCategory == WARFRAME_CATEGORY.Suits
    )
  );
  const spaceSuits = computed(() =>
    warframes.value.filter(
      (w) => w.productCategory == WARFRAME_CATEGORY.SpaceSuits
    )
  );
  const mechSuits = computed(() =>
    warframes.value.filter(
      (w) => w.productCategory == WARFRAME_CATEGORY.MechSuits
    )
  );

  function primeFilter(suits: Ref<Warframe[]>){
    return suits.value.filter((w) => w.prime)
  }

  function baseFilter(suits: Ref<Warframe[]>){
    return suits.value.filter((w) => !w.prime)
  }

  function formatManifest(response: AxiosResponse<any, any>): Warframe[] {
    const data = response.data.replace(/\\r\s+/gi, "");
    const warframeJson = JSON.parse(data)["ExportWarframes"];

    warframeJson.forEach((w: Warframe) => {
      w.prime = w.name.includes("Prime");
      w.productCategory = (WARFRAME_CATEGORY as any)[w.productCategory];
      w.textureLocation = get_image(w.uniqueName);
    });

    return warframeJson;
  }

  async function load_warframes() {
    const data = await load_Manifest<Array<Warframe>>(
      session,
      import.meta.env.VITE_WARFRAMES_URL,
      formatManifest
    );

    warframes.value = data as Array<Warframe>;
  }

  return {
    warframes,
    currentWarframe,
    suits,
    spaceSuits,
    mechSuits,
    primeFilter,
    baseFilter,
    load_warframes,
  };
});
