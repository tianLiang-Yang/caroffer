import Vue from 'vue'
import Vuex from 'vuex' <<
<< << < HEAD
    ===
    === =
    import base from './modules/base' >>>
    >>> > ytl
import popuplist from './modules/popuplist'
import img from './modules/img'
import detail from './modules/detail'
import home from './modules/home'
import carlist from './modules/carlist'
import color from './modules/color'
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
        carlist,
        color,
        base,
        share
    },
    plugins: [creareLogger()]
})