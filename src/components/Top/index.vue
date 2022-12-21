<script>
import { ref } from 'vue'
export default {
    setup(props, ctx) {
        const { attrs: { isShowUser } } = ctx
        let isLogin = ref(false)
        return {
            isShowUser,
            isLogin
        }
    }
}
</script>

<template>
    <div id="top">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div v-if="!isShowUser" class="right">
            <slot name="right"></slot>
        </div>
        <div v-else class="right">
            <div v-if="isLogin" class="user">
                <i class="iconfont icon-user" style="font-size: 1.3em;" @click="$router.push({ name: 'my' })"></i>
            </div>
            <div v-else class="login_registry" @click="$router.push({ name: 'login_registry' })">
                <span class="login——registry">登录/注册</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#top {
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5rem;
    background-color: var(--pri_clr);
    display: flex;

    >div {
        overflow: hidden;
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
    }

    .left {
        width: 33.33%;
        padding-left: 1rem;
        justify-content: flex-start;
    }

    .title {
        width: 33.33%;
        justify-content: center;
    }

    .right {
        width: 33.33%;
        padding-right: 1rem;
        justify-content: flex-end;
    }
}
</style>