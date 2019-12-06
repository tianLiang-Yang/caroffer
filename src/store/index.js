import Vue from 'vue'
import Vuex from 'vuex'
import xiang from './modules/xiang'
import home from './modules/home'
import popuplist from './modules/popuplist'
import img from './modules/img'
import detail from './modules/detail'
import home from './modules/home'
import carlist from './modules/carlist'
import color from './modules/color'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        xiang,
        home,
        popuplist,
        img,
        detail,
        home,
        carlist,
        color
    },
    plugins: [creareLogger()]
})