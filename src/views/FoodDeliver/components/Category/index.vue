<script>
import { ref } from 'vue';

import { ElSkeleton, ElSkeletonItem } from 'element-plus'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import { GetCates } from '@/api/cate'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(props, ctx) {
        const img_baseUrl = 'https://fuss10.elemecdn.com'
        let cates = ref([])
        let isLoading = ref(true)
        return {
            isLoading,
            img_baseUrl,
            cates,
            modules: [Pagination]
        }
    },
    methods: {
        async getCates() {
            const cates = await GetCates()
            this.cates = cates
            this.isLoading = false
        }
    },
    mounted() {
        this.getCates()
    }
} 
</script>

<template>
    <div class="box">
        <el-skeleton style="width:400px; --el-skeleton-circle-size: 50px" :loading="isLoading" animated :throttle="1000">
            <template #template>
                <div class="swiper_template">
                    <div class="swiper_item">
                        <div v-for="i in 8" :key="i" class="template_item">
                            <el-skeleton-item variant="circle"/>
                            <el-skeleton-item variant="text" style="width: 50%;"/>
                        </div>
                    </div>
                </div>
            </template>
            <template #default>
                <div class="category">
                    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                        clickable: true,
                    }" :modules="modules" class="swiper">
                        <swiper-slide v-for="pagination in Math.ceil(cates.length / 8)" :key="pagination"
                            class="swiper_item">
                            <div v-for="item in cates.slice((pagination - 1) * 8, (pagination - 1) * 8 + 8)"
                                :key="item.id" class="item" @click="$router.push({ name: 'food', query: { food_id: item.id } })">
                                <img class="cover" :src="`${img_baseUrl}${item.image_url}`" :title="item.title">
                                <span class="title">{{ item.title }}</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </template>
        </el-skeleton>
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 100%;
    background-color: #fff;
    overflow: hidden;

    .category {
        width: 100%;
        height: 200px;
    }

    .swiper,
    .swiper_template {
        width: 100%;
        height: 100%;

        .swiper_item {
            width: 100%;
            height: 80%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

            .item, .template_item {
                width: 23%;
                height: 50%;
                padding: 3px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                .cover {
                    height: 90%;
                    object-fit: contain;
                }

                .title {
                    height: 10%;
                    font-size: 10px;
                }
            }
            .template_item {
                padding: 0;
                margin-top: 3px;
            }
        }
    }
}
</style>