import Vue from 'vue'
import Vuex from 'vuex'
import xiang from './modules/xiang'
import home from './modules/home'
import carlist from './modules/carlist'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        xiang,
        home,
        carlist
    },
    plugins: [creareLogger()]
})