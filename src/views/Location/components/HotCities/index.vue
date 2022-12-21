<script>
import { GetCities } from '@/api/location'
import { ref } from '@vue/reactivity'
export default {
    setup(props, ctx) {
        let hot_cities = ref([])
        return {
            hot_cities
        }
    },
    methods: {
        async getHotCities() {
            // 热门城市
            const hot_cities = await GetCities('hot')
            this.hot_cities.push(...hot_cities)
        }
    },
    mounted() {
        this.getHotCities()
    }
}
</script>

<template>
    <div id="hot_cities">
        <div class="title">热门城市</div>
        <div class="content">
            <div v-for="hot_city in hot_cities" :key="hot_city.area_code" class="item flex_center" @click="$router.push({ name: 'search_city', query: { cname: hot_city.name, cid: hot_city.id } })">
                <span>{{ hot_city.name }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#hot_cities {
    width: 100%;

    .title {
        height: 30px;
        display: flex;
        align-items: center;
        padding: 0 0.6rem;
        font-size: 0.8rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .item {
            width: 25%;
            height: 40px;
            font-size: 0.9rem;
            color: var(--pri_clr);
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            span {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        :nth-child(4n) {
            border-right: none;
        }
        :nth-child(n+5) {
            border-bottom: none;
        }
    }
}
</style>