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
        path: '/img',
        component: () =>
            import ('../views/img/img')
    },
    {
        path: "/color",
        component: () =>
            import ('../views/img/color')
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
        path: "/detail",
        component: () =>
            import ('../views/details/detail.vue')
    },
    {
        path: "/base",
        component: () =>
            import ('../views/base')
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