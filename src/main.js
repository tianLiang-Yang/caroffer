import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './reset.css'
import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(VueLazyload,{
    preload:1.3,
    error:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3462925376,2324488602&fm=26&gp=0.jpg',
    loading:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3462925376,2324488602&fm=26&gp=0.jpg'
})
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')