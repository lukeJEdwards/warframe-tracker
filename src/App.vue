<template>
  <Navbar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
import { onMounted } from 'vue';

import { useMaifestStore } from './stores/manifest';
const { load_manifest } = useMaifestStore()


onMounted(async () => {
  await load_manifest()
})
</script>