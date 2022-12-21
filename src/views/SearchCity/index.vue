<script setup>
import { ref, watch, onActivated, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import emitter from '@/utils/eventBus'

import Drawer from '@/components/Drawer/index.vue'

import { GetSearch } from '@/api/location'

const $route = useRoute()
const $router = useRouter()
let isFocus = ref(false)
let keywords = ref('')
let search_result = ref([])
let search_history = ref([])
let isShowSwCity = ref(false)

async function search() {
    const result = await GetSearch($route.query.cid, keywords.value)
    search_result.value = result
}

function finish_location(address) {
    const { latitude, longitude } = address
    const ori_history = JSON.parse(localStorage.getItem('search_history'))
    if (ori_history) {
        let isExist = false
        for (var i = 0; i < ori_history.length; i++) {
            if (ori_history[i].address == address.address) {
                isExist = true
                break
            }
        }
        isExist || localStorage.setItem('search_history', JSON.stringify([...ori_history, address]))
    } else {
        localStorage.setItem('search_history', JSON.stringify([address]))
    }
    $router.push({
        name: 'food_deliver'
    })
    localStorage.setItem('location', JSON.stringify({
        address: address.address,
        latitude,
        longitude
    }))
}

function init_his_search() {
    const ori_history = JSON.parse(localStorage.getItem('search_history'))
    if (ori_history) search_history.value = ori_history
}

function switch_city() {
    isShowSwCity.value = true
    emitter.emit('show_sw_city')
}

function hide_search_result() {
    setTimeout(() => {
        isFocus.value = false
    })
}

watch(keywords, newValue => {
    if (newValue) search()
    else search_result.value = []
})

onMounted(() => {
    emitter.on('hide_sw_city', () => {
        isShowSwCity.value = false
    })
})

onActivated(() => {
    // 初始化历史记录
    init_his_search()
})

</script>

<template>
    <div id="search_city">
        <Top>
            <template #left>
                <i class="iconfont icon-arrow-left-bold" @click="$router.back()"></i>
            </template>
            <template #title>
                <span>{{ $route.query.cname }}</span>
            </template>
            <template #right>
                <span @click.stop="switch_city">切换城市</span>
            </template>
        </Top>
        <div class="search">
            <input v-model="keywords" type="text" placeholder="输入学校、商务楼、地址" @keyup.enter="search"
                @focus="isFocus = true" @blur="hide_search_result">
            <button @click="search">提交</button>
            <div v-show="isFocus && search_result.length" class="search_result">
                <div v-for="res in search_result" :key="res.geohash" class="item" @click="finish_location(res)">
                    <span>{{ res.name }}</span>
                    <div class="intact_address">{{ res.address }}</div>
                </div>
            </div>
        </div>
        <div class="search_history">
            <div class="title">
                <span>搜索历史</span>
            </div>
            <div class="history">
                <div class="content">
                    <div v-for="h in search_history" :key="h.geohash" class="his_item" @click="finish_location(h)">
                        <span class="name">{{ h.name }}</span>
                        <span class="address">{{ h.address }}</span>
                    </div>
                </div>
                <div v-show="!search_history.length" class="no_history">
                    <span>暂无历史定位记录</span>
                </div>
            </div>
        </div>
        <Drawer v-show="isShowSwCity" />
    </div>
</template>

<style lang="less" scoped>
#search_city {
    width: 100%;
    height: 100%;

    .search {
        position: relative;
        margin-top: 15px;
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        input {
            position: relative;
            width: 90%;
            height: 40px;
        }

        button {
            width: 90%;
            height: 40px;
            border-radius: 5px;
            color: #fff;
            font-size: 1rem;
            background-color: var(--pri_clr);
        }

        .search_result {
            z-index: 99;
            position: absolute;
            top: 51%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 5px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.295);
            width: 90%;
            height: 200px;
            overflow: auto;
            background-color: #fff;

            .item {
                z-index: 99;
                padding: 5px;
                border-top: 1px solid rgba(0, 0, 0, 0.205);

                .intact_address {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 0.5rem;
                    margin: 5px 0;
                }
            }

            :first-child {
                border: 0;
            }
        }
    }

    .search_history {
        margin-top: 10px;
        background-color: #fff;

        .title {
            padding: 5px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            font-size: 0.8rem;
            opacity: 0.8;
            color: #777;
        }

        .history {
            width: 100%;

            .content {
                width: 100%;

                .his_item {
                    height: 50px;
                    padding: 0 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    border-bottom: 1px solid #777;

                    .address {
                        font-size: 0.5rem;
                    }
                }

                :last-child {
                    border: 0;
                }
            }
        }

        .no_history {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 10px 0;
            font-size: 0.9rem;
            color: #ccc;
        }
    }
}
</style>