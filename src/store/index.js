import Vue from 'vue'
import Vuex from 'vuex'
import xiang from './modules/xiang'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        xiang
    },
    plugins: [creareLogger()]
})