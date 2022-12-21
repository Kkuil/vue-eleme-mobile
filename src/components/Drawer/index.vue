<script>
import emitter from '@/utils/eventBus'
import { ref } from '@vue/reactivity'

import AllCities from '@/views/Location/components/AllCities/index.vue'

export default {
    components: {
        AllCities
    },
    setup(props, ctx) {
        let isShowSwCity = ref(false)
        return {
            isShowSwCity
        }
    },
    methods: {
        hide_toast() {
            this.isShowSwCity = false
            setTimeout(() => {
                emitter.emit('hide_sw_city')
            }, 300)
        }
    },
    mounted() {
        emitter.on('show_sw_city', () => {
            this.isShowSwCity = true
        })
    }
}
</script>

<template>
    <div class="drawer">
        <div class="model" :class="isShowSwCity ? 'show_model' : 'hide_model'" @click="hide_toast"></div>
        <div class="toast" :class="isShowSwCity ? 'show_toast' : 'hide_toast'">
            <AllCities />
        </div>
    </div>
</template>

<style lang="less" scoped>
.drawer {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .model {
        width: 100%;
        height: 100%;
        background-color: rgba(69, 67, 67, 0.263);
    }

    .toast {
        position: absolute;
        top: 0;
        right: 0;
        width: 65%;
        height: 100%;
        overflow: scroll;
        background-color: #fff;
    }

    .show_model {
        animation: show_model 0.3s linear forwards;
    }

    .show_toast {
        animation: show_toast 0.3s linear forwards;
    }

    .hide_model {
        animation: hide_model 0.3s linear;
    }

    .hide_toast {
        animation: hide_toast 0.3s linear;
    }
}

@keyframes show_model {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
@keyframes show_toast {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes hide_model {
    to {
        opacity: 0;
    }
}
@keyframes hide_toast {
    to {
        transform: translateX(100%);
    }
}
</style>