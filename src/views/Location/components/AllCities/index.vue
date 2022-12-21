<script>
import { GetCities } from '@/api/location'
import { reactive, ref } from '@vue/reactivity'
export default {
    setup(props, ctx) {
        const all_cities = reactive({
            'A': [],
            'B': [],
            'C': [],
            'D': [],
            'E': [],
            'F': [],
            'G': [],
            'H': [],
            'I': [],
            'J': [],
            'K': [],
            'L': [],
            'M': [],
            'N': [],
            'O': [],
            'P': [],
            'Q': [],
            'R': [],
            'S': [],
            'T': [],
            'U': [],
            'V': [],
            'W': [],
            'X': [],
            'Y': [],
            'Z': [],
        })
        return {
            all_cities
        }
    },
    methods: {
        async getAllCities() {
            const all_cities = await GetCities('group')
            Object.assign(this.all_cities, all_cities)
        }
    },
    mounted() {
        this.getAllCities()
    }
}
</script>

<template>
    <div id="all_cities">
        <section v-for="cities, shortcut in all_cities" :key="shortcut">
            <div class="title">
                <span>{{ shortcut }}</span>
                <span style="margin-left: 3px; font-size: 0.5rem; color: #777;">{{ shortcut == 'A' ? '(按字母顺序)' : '' }}</span>
            </div>
            <div class="content">
                <div v-for="city in cities" :key="city.area_code" class="item flex_center" @click="$router.push({ name: 'search_city', query: { cname: city.name, cid: city.id } })">
                    <span>{{ city.name }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="less" scoped>
#all_cities {
    width: 100%;

    >section {
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
                    margin-left: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            :nth-child(4n) {
                border-right: none;
            }

            :nth-child(5-n) {
                border-bottom: none;
            }
        }
    }
}
</style>