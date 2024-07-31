import { computed, ref, type Ref } from "vue";
import { defineStore } from "pinia";

import axios from "axios";
import type { Arcane, VoidRelic } from "@/types/relics";
import { RARITY } from "@/types/enums";


export const useRelicStore = defineStore("relicStore", () => {

  const relics: Ref<Array<Arcane | VoidRelic>> = ref([])

  const voidRelics = computed(() => relics.value.filter((v) => "relicRewards" in v));
  const arcanes = computed(() => relics.value.filter((v) => "levelStats" in v));


  async function load_relics(get_texture: (uniqueName: string) => string) {
    let data: string = (
      await axios.get(
        `https://content.warframe.com/PublicExport/Manifest/${
          import.meta.env.VITE_ARCANES_URL
        }`
      )
    ).data;
    data = data.replace(/\\r\s+/gi, "");
    const arcaneJson =  JSON.parse(data)["ExportRelicArcane"];

    arcaneJson.forEach((a: Arcane | VoidRelic) => {
      a.textureLocation = get_texture(a.uniqueName);

      if("relicRewards" in a){
        a.relicRewards.forEach(r => r.rarity = (RARITY as any)[r.rarity])
      }

      if("levelStats" in a){
        a.rarity = (RARITY as any)[a.rarity];
      }
    });

    relics.value = arcaneJson;
  }
  return { load_relics, relics, voidRelics, arcanes };
});
