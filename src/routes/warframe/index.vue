<template>
    <div class="warframes">
        <RouterLink 
        v-for="warframe, i in warframeArray" 
        :to="`warframe/${warframe.name}`"
        :key="i" 
        >
            <Warframe :warframe="warframe" />
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref, watch } from 'vue';

import { useWarframeStore } from '@/stores/warframe';
import Warframe from '@/components/Warframe.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const { warframes, suits, spaceSuits, mechSuits } = storeToRefs(useWarframeStore())
const { primeFilter, baseFilter } = useWarframeStore()
const { load_warframes } = useWarframeStore()

const warframeArray = ref(suits.value)

onBeforeMount(async () => {
    if (warframes.value.length == 0)
        await load_warframes()
})
</script>

<style scoped>
.warframes{
    display: flex;
    flex-wrap: wrap;
    padding: 64px 176px;
}
</style>