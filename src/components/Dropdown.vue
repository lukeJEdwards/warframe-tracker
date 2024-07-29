<template>
    <li class="drop-down">
        <RouterLink :to="basePath">
            <slot></slot>
            <IconDropDown />
        </RouterLink>
        <ul class="drop-down-links">
            <RouterLink v-for="route, i in Routes" :key="i" :to="{ path:route.path, query:route.query }">
                <li>
                    {{ route.name }}
                </li>
            </RouterLink>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import type { RouteLocationRaw } from "vue-router"
import type { route } from "../types/types"

import IconDropDown from '~icons/material-symbols/arrow-drop-down-rounded'

const props = defineProps<{ basePath: RouteLocationRaw, Routes: route[] }>()
</script>

<style lang="scss" scoped>
</style>