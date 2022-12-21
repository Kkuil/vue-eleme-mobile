<script setup>
import { ref } from 'vue'

</script>

<template>
    <div id="food">
        <Top>
            <template #left>
                <i class="iconfont icon-arrow-left-bold" @click="$router.back()"></i>
            </template>
            <template #title>
                <span>123</span>
            </template>
        </Top>
    </div>
</template>

<style lang="less" scoped>
#food {
    width: 100%;
}
</style>