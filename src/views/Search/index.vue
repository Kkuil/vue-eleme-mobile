<script setup>
import { ref } from 'vue'

</script>

<template>
    <div id="search">
        <Top>
            <template #left>
                <i class="iconfont icon-arrow-left-bold"></i>
            </template>
            <template #title>
                <span>搜索</span>
            </template>
        </Top>
        <div class="search flex_center">
            <input type="text" placeholder="请输入商家或美食名称">
            <button>
                <i class="iconfont icon-sousuoxiao"></i>
            </button>
        </div>
    </div>
</template>

<style lang="less" scoped>
#search {
    width: 100%;
    .search {
        width: 100%;
        height: 50px;
        background-color: #fff;
        input {
            width: 70%;
            height: 35px;
            border-radius: 5px;
            border: 1px solid #ebebeb;
            background-color: #f2f2f2;
        }
        button {
            width: 20%;
            height: 35px;
            color: #fff;
            font-weight: bold;
            border-radius: 5px;
            margin-left: 5px;
            background-color: var(--pri_clr);
        }
    }
}
</style>