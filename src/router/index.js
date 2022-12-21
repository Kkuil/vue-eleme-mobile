import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/eleme/food_deliver',
        },
        {
            path: '/eleme',
            name: 'eleme',
            meta: {
                keepAlive: true
            },
            component: () => import('@/views/Eleme/index.vue'),
            children: [
                {
                    path: 'food_deliver',
                    name: 'food_deliver',
                    meta: {
                        keepAlive: true
                    },
                    component: () => import('@/views/FoodDeliver/index.vue'),
                },
                {
                    path: 'search',
                    name: 'search',
                    meta: {
                        keepAlive: true
                    },
                    component: () => import('@/views/Search/index.vue'),
                },
                {
                    path: 'order',
                    name: 'order',
                    meta: {
                        keepAlive: true
                    },
                    component: () => import('@/views/Order/index.vue'),
                },
                {
                    path: 'my',
                    name: 'my',
                    meta: {
                        keepAlive: true
                    },
                    component: () => import('@/views/My/index.vue'),
                },
                {
                    path: 'food',
                    name: 'food',
                    meta: {
                        keepAlive: true
                    },
                    component: () => import('@/views/Food/index.vue'),
                },
            ]
        },
        {
            path: '/location',
            name: 'location',
            meta: {
                keepAlive: true
            },
            component: () => import('@/views/Location/index.vue')
        },
        {
            path: '/search_city',
            name: 'search_city',
            meta: {
                keepAlive: true
            },
            component: () => import('@/views/SearchCity/index.vue')
        },
        {
            path: '/login_registry',
            name: 'login_registry',
            meta: {
                keepAlive: true
            },
            component: () => import('@/views/LoginRegistry/index.vue')
        }
    ]
})

router.afterEach((to, from) => {
    document.title = 'Eleme-' + to.name
})

export default router