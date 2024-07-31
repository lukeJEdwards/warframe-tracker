<template>
    <div class="warframe">
        <img :src="warframe.textureLocation"/>
        <span></span>
        <p>{{ warframe.name }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Warframe } from '@/types/warframe';

const props = defineProps<{warframe:Warframe}>()
</script>

<style lang="scss" scoped>
.warframe{
    position: relative;
    width: 138px;
    height: 150px;

    margin: 16px;

    border-right: 1px solid #e0e0e015;
    border-left: 1px solid #e0e0e015;
    border-radius: 6px;

    img{
        width: 100%;
    }

    span{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 138px;
        height: 150px;
        
        background: rgb(45, 46, 64);
        background: linear-gradient(0deg, rgba(45, 46, 64, 1) 0%, rgba(45, 46, 64, 0) 20%);
        border-radius: 6px;
    }
    p{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        margin-bottom: 8px;
        
        color: white;
        
        text-align: center;
        font-size: 15px;
    }

    &:hover{
        span {
            cursor: pointer;
            background: linear-gradient(0deg, rgba(45, 46, 64, 1) 0%, rgba(45, 46, 64, 0) 50%);
        }
    }
}
</style>