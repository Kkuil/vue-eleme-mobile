<script setup>
import { ref, onActivated } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import LocatedCity from '@/views/Location/components/LocatedCity/index.vue'
import HotCities from '@/views/Location/components/HotCities/index.vue'
import AllCities from '@/views/Location/components/AllCities/index.vue'

const $route = useRoute()
const $router = useRouter()

</script>

<template>
    <div id="location">
        <div class="top">
            <Top :isShowUser="true">
                <template #left>
                    <i class="iconfont icon-location"></i>
                    <span style="margin-left: 3px;">定位</span>
                </template>
                <template #title>
                    <span>定位服务</span>
                </template>
            </Top>
        </div>
        <div class="located_city">
            <LocatedCity />
        </div>
        <div class="hot_city">
            <HotCities />
        </div>
        <div class="all_city">
            <AllCities />
        </div>
    </div>
</template>

<style lang="less" scoped>
#location {
    background-color: #f5f5f5;
    width: 100%;
    > div[class$=city] {
        width: 100%;
        background-color: #fff;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }
}
</style>