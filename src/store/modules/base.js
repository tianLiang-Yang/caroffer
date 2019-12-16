import { getDealerList, getCityId, getCityList } from '@/services/index'

const state = {
    DealerList: [],
    city: 0,
    cityList: [],
    countyList: [],
    showCity:false,
    CityName:''
}

const mutations = {
    getDealerData(state, payload) {
        state.DealerList = payload.list
    },
    updateCityId(state, payload) {
        state.city = payload
    },
    updateCityList(state, payload) {
        state.cityList = payload
    },
    updateCountyList(state, payload) {
        state.countyList = payload
    },
    upsetShowCity(state,payload){
        state.showCity = payload
    },
    upgetCityName(state,payload){
        state.CityName = payload
    }
}
const actions = {
    // 获取默认城市id name
    async getCityId({ commit }, payload) {
        let res = await getCityId(payload)
        commit('updateCityId', res.data)
    },
    async getDealerList({ commit }, payload) {
        let res = await getDealerList(payload)
        commit('getDealerData', res.data)
    },
    async getCityList({ commit }, payload) {
        let res = await getCityList(payload)
        if (payload) {
            commit('updateCountyList', res.data)
        } else {
            commit('updateCityList', res.data)
        }
    },
    // 控制省组件显示隐藏
    async setShowCity({commit},payload){
        let res = payload;
        commit('upsetShowCity',res)
    },
    // 获取选中城市的id name
    async getCityName({commit},payload){
        let res = payload;
        commit('upgetCityName',res);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}