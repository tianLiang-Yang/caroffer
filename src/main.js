import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './reset.css'
import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(VueLazyload)
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')