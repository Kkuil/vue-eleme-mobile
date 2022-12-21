<script>
export default {
    setup(props, ctx) {

    },
    methods: {
        switchRoute(e) {
            e.path[1].dataset.name && this.$router.push({
                name: e.path[1].dataset.name
            })
        }
    }
}
</script>

<template>
    <div class="bottom" @click="switchRoute">
        <div class="item" data-name="food_deliver" :class="{ active: $route.name == 'food_deliver' }">
            <i class="iconfont icon-eleme" ></i>
            <span class="title">外卖</span>
        </div>
        <div class="item" data-name="search" :class="{ active: $route.name == 'search' }">
            <i class="iconfont icon-searchlist" ></i>
            <span class="title">搜索</span>
        </div>
        <div class="item" data-name="order" :class="{ active: $route.name == 'order' }">
            <i class="iconfont icon-dingdan" ></i>
            <span class="title">订单</span>
        </div>
        <div class="item" data-name="my" :class="{ active: $route.name == 'my' }">
            <i class="iconfont icon-user" ></i>
            <span class="title">我的</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .iconfont {
            font-size: 1.2rem;
        }
        .title {
            font-size: 0.8rem;
        }
    }
    .active {
        color: var(--pri_clr);
    }
}
</style>