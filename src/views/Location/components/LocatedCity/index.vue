<script>
import { GetCities } from '@/api/location'
import { ref } from '@vue/reactivity'
export default {
    setup(props, ctx) {
        let cname = ref('')
        let cid = ref('')
        return {
            cname,
            cid
        }
    },
    methods: {
        async getLocatedName() {
            // 定位城市
            const { name, id } = await GetCities('guess')
            this.cname = name
            this.cid = id
        }
    },
    mounted() {
        this.getLocatedName()
    }
}
</script>

<template>
    <div id="located_city">
        <div class="tip_text">
            <span class="text1">当前定位城市：</span>
            <span class="text2">当定位不准时，请在城市列表中选择</span>
        </div>
        <div class="location_name" @click="$router.push({ name: 'search_city', query: { cname, cid } })">
            <span class="name">{{ cname }}</span>
            <i class="iconfont icon-arrow-right-bold arrow_right"></i>
        </div>
    </div>
</template>

<style lang="less" scoped>
#located_city {
    >div {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.6rem;
    }

    .tip_text {
        font-size: 0.8rem;
        border-bottom: 1px solid #e4e4e4;

        [class^=text] {
            opacity: 0.6;
        }

        .text2 {
            color: red;
        }
    }

    .location_name {
        .name {
            font-size: 1.1rem;
            color: var(--pri_clr);
        }

        .arrow_right {
            color: #999;
        }
    }
}
</style>