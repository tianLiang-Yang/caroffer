import { getIpAddress,getCarId } from '@/services/index'

const state = {
    list: [],
    location:0,
    name:'',
    cityid:0
}

const mutations = {
    upgetCarId(state, payload) {
        state.location = payload
        console.log(state.location)
    },
    upgetIpAddress(state,payload){
        state.list = payload
    },
    upsetClick(state,payload){
        state.name = payload.name;
        state.cityid = payload.cityid;
    }
}

const actions = {
    async getCarId({ commit }, payload) {
        let res = await getCarId();
        
        commit('upgetCarId', res.data)
    },
    async getIpAddress({commit},payload){
        let res = await getIpAddress(payload);
        console.log(res)
        console.log("list<<",res)
        commit('upgetIpAddress',res.data)
    },
    async setClick({commit},payload){
        let res = await payload;
        console.log(res)
        console.log("set<<",res)
        commit('upsetClick',res)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}