<script>
import { ref } from 'vue'

import Stores from '@/components/Stores/index.vue'

import { GetStores } from '@/api/store'
export default {
    setup(props, ctx) {
        const stores = ref([])
        let isLoading = ref(true)
        return {
            stores,
            isLoading
        }
    },
    methods: {
        async getStores() {
            const { latitude, longitude } = JSON.parse(localStorage.getItem('location'))
            this.stores = await GetStores({
                latitude,
                longitude
            })
            this.isLoading = false
        }
    },
    mounted() {
        this.getStores()
    }
}
</script>

<template>
    <div class="near_stores">
        <div class="title">
            <i class="iconfont icon-store"></i>
            <span>附近商家</span>
        </div>
        <div class="stores">
            <el-skeleton style="width: 100%;" :loading="isLoading" animated :count="4">
                <template #template>
                    <div class="box">
                        <el-skeleton-item variant="image" style="width: 80px; height: 80px" />
                        <div class="right">
                            <el-skeleton-item variant="text" style="margin-right: 16px" />
                            <el-skeleton-item variant="text" style="margin-right: 16px" />
                            <el-skeleton-item variant="text" style="margin-right: 16px" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <Stores :stores="stores"/>
                </template>
            </el-skeleton>
        </div>
    </div>
</template>

<style lang="less" scoped>
.near_stores {
    width: 100%;
    background-color: #fff;
    margin-top: 15px;

    .title {
        width: 100%;
        padding: 5px 15px;
        border-bottom: 1px solid #ccc;

        span {
            font-size: 0.8rem;
            opacity: 0.8;
            margin-left: 5px;
        }
    }

}
</style>