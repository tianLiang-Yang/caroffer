import Vue from 'vue'
import Vuex from 'vuex'
import popuplist from './modules/popuplist'
import img from './modules/img'
import detail from './modules/detail'
import home from './modules/home'
import color from './modules/color'
import base from './modules/base'
import share from './modules/share'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        base,
        popuplist,
        img,
        detail,
        home,
        color,
        base,
        share
    },
    plugins: [creareLogger()]
})