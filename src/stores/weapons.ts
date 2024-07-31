import { computed, ref, type Ref } from "vue";
import { defineStore } from "pinia";

import axios from "axios";

import type { Gun, Melee, Weapon } from "../types/weapons";
import { WEAPON_CATEGORY } from "@/types/enums";

export const useWeaponStore = defineStore("weaponStore", () => {
  const weapons: Ref<Array<Weapon>> = ref([]);

  const currentMelee: Ref<Melee | undefined> = ref(undefined)
  const currentWeapon: Ref<Gun | undefined> = ref(undefined)

  function filter_check(this: any, Obj: Weapon): boolean {
    return Obj.productCategory == this;
  }

  const primary = computed(
    () => weapons.value.filter(filter_check, WEAPON_CATEGORY.LongGuns) as Array<Gun>
  );
  const secondary = computed(
    () => weapons.value.filter(filter_check, WEAPON_CATEGORY.Pistols) as Array<Gun>
  );
  const melee = computed(
    () => weapons.value.filter(filter_check, WEAPON_CATEGORY.Melee) as Array<Melee>
  );

  async function load_weapons(get_texture: (uniqueName:string) => string) {
    let data: string = (
      await axios.get(
        `https://content.warframe.com/PublicExport/Manifest/${
          import.meta.env.VITE_WEAPONS_URL
        }`
      )
    ).data;
    data = data.replace(/\\r\s+/gi, "");
    const gunJson = JSON.parse(data)["ExportWeapons"];
    gunJson.forEach((w: Weapon) => {
      w.productCategory = (WEAPON_CATEGORY as any)[w.productCategory];
      w.textureLocation = get_texture(w.uniqueName)
    });
    weapons.value = gunJson;
  }
  return { load_weapons, weapons, currentWeapon, primary, secondary, melee };
});
