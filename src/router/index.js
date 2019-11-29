import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: "/xiang",
        component: () =>
            import ('../views/xiang')
    },
    {
        path: "/base",
        component: () =>
            import ('../views/base')
    },
    {
        path: "*",
        redirect: "/xiang"
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router