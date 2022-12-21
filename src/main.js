import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import Top from '@/components/Top/index.vue'
import Bottom from '@/components/Bottom/index.vue'

import '@/assets/styles/base.css'
import '@/assets/styles/constant.css'
import '@/assets/font/font.css'
import 'nprogress/nprogress.css'
import 'animate.css';

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.component('Top', Top)
app.component('Bottom', Bottom)

app.mount('#app')
