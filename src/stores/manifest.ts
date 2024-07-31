import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { AxiosInstance, AxiosResponse } from "axios";

import type { GenericSchema } from "@/types/types";
import { load_Manifest } from "./shared";
import axios from "axios";

export const useMaifestStore = defineStore("maifestStore", () => {

  const manifest: Ref<{[key:string] : string}> = ref({});
  const session: Ref<AxiosInstance> = ref(axios.create())

  function formatManifest(response: AxiosResponse<any, any>): {[key:string] : string}{
    return response.data["Manifest"].reduce((obj: any, item: GenericSchema) => {
      obj[item.uniqueName] = item.textureLocation;
      return obj;
    }, {});
  }


  async function load_manifest() {
    const data = await load_Manifest<{ [key: string]: string }>(
      session.value,
      import.meta.env.VITE_MANIFEST_URL,
      formatManifest
    );

    manifest.value = data as { [key: string]: string };
  }

  function get_image(uniqueName:string){
    return `https://content.warframe.com/PublicExport${manifest.value[uniqueName]}`;
  }

  return { load_manifest, get_image, session, manifest };
});
