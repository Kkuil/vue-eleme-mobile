<script setup>
import { ref, reactive, onActivated, onDeactivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Category from './components/Category/index.vue'
import NearStores from './components/NearStores/index.vue'

const $route = useRoute()
const $router = useRouter()
let address = ref('')

function init_location() {
    const location = localStorage.getItem('location') ? localStorage.getItem('location') : ''
    if (location) {
        address.value = JSON.parse(location).address
    }
}

onActivated(() => {
    init_location()
})
</script>

<template>
    <div id="food_deliver">
        <Top :isShowUser="true">
            <template #left>
                <i class="iconfont icon-sousuoxiao"></i>
            </template>
            <template #title>
                <div class="template" @click="$router.replace({ name: 'location' })">
                    <span v-if="address" class="address">{{ address }}</span>
                    <span v-else>快去定位吧</span>
                </div>
            </template>
        </Top>
        <Category />
        <NearStores />
    </div>
</template>

<style lang="less" scoped>
#food_deliver {
    width: 100%;
    .template {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>