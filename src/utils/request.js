import axios from 'axios';
import Vant from 'vant';
//创建axios实例
const instance = axios.create({
        baseURL: 'https://baojia.chelun.com',
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    })
    //请求拦截器
instance.interceptors.request.use(function(config) {
        return config;
    }, function(error) {
        return Promise.reject(error);
    })
    //响应拦截器
instance.interceptors.response.use(function(response) {
    if (response.status == 200) {
        return response.data;
    } else {
        Vant.$notify({
            type: 'warning',
            message: response.text
        })
    }
}, function(error) {
    this.$notify({
        type: 'warning',
        message: error
    })
})
export default instance;