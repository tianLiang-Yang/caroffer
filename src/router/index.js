import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: () =>
            import ('../views/Home/home.vue')
    },
    {
        path: '/swiper',
        component: () =>
            import ('../views/swiper/swiper.vue')
    },
    {
        path: '/allcolor',
        component: () =>
            import ('../views/swiper/allColor/allcolor.vue')
    },
    {
        path: '/cartype',
        component: () =>
            import ('../views/swiper/carType/cartype.vue')
    },
    {
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
        path: "/share",
        component: () =>
            import ('../views/share')
    },
    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router