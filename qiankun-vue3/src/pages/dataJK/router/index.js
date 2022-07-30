import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router