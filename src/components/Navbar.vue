<template>
    <nav>
        <RouterLink to="/">
            <img src="../assets/logo.svg" />
        </RouterLink>
        <ul>
            <Dropdown basePath="/warframe" :Routes="WarframeRoutes">
                Warframes
            </Dropdown>
            <Dropdown basePath="/weapons" :Routes="WeaponRoutes">
                Weapons
            </Dropdown>
            <Dropdown basePath="/companions" :Routes="CompanionsRoutes">
                Companions
            </Dropdown>
            <Dropdown basePath="/relics" :Routes="RelicRoutes">
                Relics
            </Dropdown>
            <Dropdown basePath="/mods" :Routes="ModRoutes">
                Mods
            </Dropdown>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import type { route } from "../types/types"
import Dropdown from "./Dropdown.vue"

const WarframeRoutes: route[] = [
    {
        path: "/warframe",
        name: "Original",
        query: { type: "Original" }
    },
    {
        path: "/warframe",
        name: "Prime",
        query: { type: "Prime" }
    }
]
const WeaponRoutes: route[] = [
    {
        path: "/weapons/primary",
        name: "primary"
    },
    {
        path: "/weapons/secondary",
        name: "secondary"
    },
    {
        path: "/weapons/melee",
        name: "melee"
    }
]
const CompanionsRoutes: route[] = [
    {
        path: "/companions",
        name: "Robotics",
        query: {
            type: "Robotics"
        }
    },
    {
        path: "/companions",
        name: "Beasts",
        query: {
            type: "Beasts"
        }
    },
    {
        path: "/companions",
        name: "Deimos Infested Beasts",
        query: {
            type: "Deimos Infested Beasts"
        }
    }
]
const RelicRoutes: route[] = [
    {
        path: "/relics/arcanes",
        name: "Arcanes"
    },
    {
        path: "/relics/void-relics",
        name: "Void Relics"
    }
]
const ModRoutes: route[] = [
    {
        path: "/mods",
        name: "Exilus",
        query: {
            type: "Exilus"
        }
    },
    {
        path: "/mods",
        name: "Warframe",
        query: {
            type: "Warframe"
        }
    },
    {
        path: "/mods",
        name: "Stance",
        query: {
            type: "Stance"
        }
    }
]

</script>