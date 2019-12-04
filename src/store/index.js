import Vue from 'vue'
import Vuex from 'vuex'
import xiang from './modules/xiang'
import home from './modules/home'
import popuplist from './modules/popuplist'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        xiang,
        home,
        popuplist
    },
    plugins: [creareLogger()]
})