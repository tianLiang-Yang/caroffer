import Vue from 'vue'
import Vuex from 'vuex'
import detail from './modules/detail'
import home from './modules/home'
import carlist from './modules/carlist'
import color from './modules/color'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        detail,
        home,
        carlist,
        color
    },
    plugins: [creareLogger()]
})