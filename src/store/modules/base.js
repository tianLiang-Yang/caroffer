import { getIpAddress,getCarId } from '@/services/index'

const state = {
    list: [],
    location:0
}

const mutations = {
    upgetCarId(state, payload) {
        state.location = payload
        console.log(state.location)
    },
    upgetIpAddress(state,payload){
        state.list = payload
    }
}

const actions = {
    async getCarId({ commit }, payload) {
        let res = await getCarId();
        console.log("res<<",res.data)
        commit('upgetCarId', res.data)
    },
    async getIpAddress({commit},payload){
        let res = await getIpAddress(payload);
        console.log(res)
        commit('upgetIpAddress',res.data)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}