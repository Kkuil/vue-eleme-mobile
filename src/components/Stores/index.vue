<script>
import { ElSkeleton, ElSkeletonItem, ElRate } from 'element-plus'

export default {
    setup(props, ctx) {
        const coverBaseUrl = 'https://elm.cangdu.org/img/'
        const { attrs: { stores } } = ctx
        return {
            coverBaseUrl,
            stores
        }
    }
}
</script>

<template>
    <div v-for="store in stores" :key="store.id" class="store">
        <div class="cover">
            <img :src="`${coverBaseUrl}/${store.image_path}`" alt="">
        </div>
        <div class="store_info">
            <div class="top">
                <span class="brand">品牌</span>
                <span class="store_name">{{ store.name }}</span>
                <div class="supports" style="float: right;">
                    <span v-for="s in store.supports" :key="s.id" class="support">{{ s.icon_name
                    }}</span>
                </div>
            </div>
            <div class="center">
                <el-rate v-model="store.rating" show-score disabled :colors="['#ff9a0d', '#ff9a0d', '#ff9a0d']"
                    size="small" :score-template="`${store.rating}`" />
                <span class="recent_sale">月售{{ store.recent_order_num }}单</span>
                <span class="zhunshida">准时达</span>
                <span class="fengniao">蜂鸟专送</span>
            </div>
            <div class="bottom">
                <div class="left">
                    <span class="min_price">
                        <i class="iconfont icon-money"></i>
                        <span>{{ store.float_minimum_order_amount }}起送 /</span>
                    </span>
                    <span class="delivery_fee">
                        <span>配送费约</span>
                        <i class="iconfont icon-money"></i>
                        <span>{{ store.float_delivery_fee }}</span>
                    </span>
                </div>
                <div class="right">
                    <span>{{ store.distance }} /</span>
                    <span> {{ store.order_lead_time }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.stores {
    width: 100%;

    .store {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #eee;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .cover {
            width: 20%;
            height: 80%;
            overflow: hidden;
            img {
                width: 100%;
            }
        }

        .store_info {
            width: 80%;
            height: 80%;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: column;

            .top {
                .brand {
                    display: inline-block;
                    background-color: #ffd930;
                    padding: 2px;
                    border-radius: 3px;
                    margin-right: 5px;
                    font-size: 0.6rem;
                    font-weight: bold;
                }

                .store_name {
                    color: #333333;
                    font-weight: bold;
                }

                .supports {
                    .support {
                        font-size: 0.4rem;
                        margin-right: 2px;
                        border: 1px solid #ccc;
                        padding: 1px;
                    }

                }
            }

            .center {
                .el-rate__item {
                    width: 10px;
                }

                .recent_sale {
                    display: inline-block;
                    width: 60px;
                    height: 1.2em;
                    vertical-align: top;
                    margin: 3.5px 0 0 3px;
                    font-size: 0.8rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .zhunshida,
                .fengniao {
                    float: right;
                    display: inline-block;
                    padding: 0 2px;
                    font-size: 0.5rem;
                    margin-top: 3.5px;
                }

                .zhunshida {
                    border: 1px solid var(--pri_clr);
                }

                .fengniao {
                    color: #fff;
                    margin-right: 3px;
                    border-radius: 3px;
                    background-color: var(--pri_clr);
                }
            }

            .bottom {
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-size: 0.1rem;

                .left,
                .right {
                    display: inline-block;
                    width: 50%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .right {
                    display: flex;
                    justify-content: flex-end;
                }

                .iconfont {
                    font-size: 0.1rem;
                }
            }
        }
    }

    .box {
        display: flex;
        align-items: center;
        padding: 10px;

        .right {
            height: 100%;
            margin-left: 15px;
        }
    }
}
</style>