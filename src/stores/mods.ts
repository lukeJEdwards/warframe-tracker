import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

import axios from "axios";

import type { Mod } from "../types/mods"

export const useWarframeStore = defineStore("warframeStore", () => {
  const mods: Ref<Array<Mod>> = ref([]);
  const currentMod: Ref<Mod | undefined> = ref(undefined);

  async function load_mods(get_texture: (uniqueName: string) => string) {
    let data: string = (
      await axios.get(
        `https://content.warframe.com/PublicExport/Manifest/${
          import.meta.env.VITE_MOD_URL
        }`
      )
    ).data;
    data = data.replace(/\\r\s+/gi, "");
    const modJson = JSON.parse(data)["ExportWarframes"];
    modJson.forEach((w: Mod) => {
      w.textureLocation = get_texture(w.uniqueName);
    });
    mods.value = modJson;
  }
  return { mods, currentMod, load_mods };
});
