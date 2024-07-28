import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import VueRouter from "unplugin-vue-router/vite";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // how and what folders to scan for files
      routesFolder: [
        {
          src: "src/routes",
          path: "",
          // override globals
          exclude: (excluded) => excluded,
          filePatterns: (filePatterns) => filePatterns,
          extensions: (extensions) => extensions,
        },
      ],

      extensions: [".vue"],
      filePatterns: ["**/*"],
      exclude: [],
      dts: "./typed-router.d.ts",
      importMode: "async",
      root: process.cwd(),
      pathParser: {
        dotNesting: true,
      },
    }),
    vue(),
    vueDevTools(),
    imagetools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
