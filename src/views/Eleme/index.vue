<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute()
let isShowBottom = ref(true)
const mapTabs = ['food_deliver', 'search', 'order', 'my']

watch($route, route => {
    isShowBottom.value = mapTabs.includes(route.name)
}, {
    immediate: true,
    deep: true
})

</script>

<template>
    <div id="eleme">
        <router-view #default="{ Component }">
            <keep-alive>
                    <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
            </keep-alive>
            <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
        </router-view>
        <transition name="bottom" :duration="300">
            <Bottom v-show="isShowBottom"/>
        </transition>
    </div>
</template>

<style lang="less" scoped>
#eleme {
    width: 100%;
    .bottom-enter-active {
        transform: translateY(100%);
    }
    .bottom-leave-active {
        transform: translateY(100%);
    }
}
</style>