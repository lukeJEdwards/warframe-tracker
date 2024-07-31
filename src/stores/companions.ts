import { computed, ref, type Ref } from "vue";
import { defineStore } from "pinia";

import axios from "axios";

import type { Warframe } from "../types/warframe";
import { WARFRAME_CATEGORY } from "@/types/enums";

export const useCompanionsStore = defineStore("companionsStore", () => {
  const warframes: Ref<Array<Warframe>> = ref([]);
  const currentWarframe: Ref<Warframe | undefined> = ref(undefined);

  async function load_warframes(get_texture: (uniqueName: string) => string) {
    let data: string = (
      await axios.get(
        `https://content.warframe.com/PublicExport/Manifest/${
          import.meta.env.VITE_WARFRAMES_URL
        }`
      )
    ).data;
    data = data.replace(/\\r\s+/gi, "");
    const warframeJson = JSON.parse(data)["ExportWarframes"];
    warframeJson.forEach((w: Warframe) => {
      w.productCategory = (WARFRAME_CATEGORY as any)[w.productCategory];
      w.textureLocation = get_texture(w.uniqueName);
    });
    warframes.value = warframeJson;
  }
  return { warframes, currentWarframe, load_warframes };
});
