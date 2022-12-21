<script setup>
</script>

<template>
    <div id="app">
        <router-view #default="{ Component }">
            <keep-alive>
                    <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
            </keep-alive>
            <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
        </router-view>
    </div>
</template>

<style lang="less" scoped>
#app {
    margin: 3.5rem 0 3.1rem;
}
</style>