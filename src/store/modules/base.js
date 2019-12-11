import { getIpAddress,getCarId } from '@/services/index'

const state = {
    list: [],
    location:0,
    name:'',
    cityid:'',
    flag:false
}

const mutations = {
    upgetCarId(state, payload) {
        state.location = payload
    },
    upgetIpAddress(state,payload){
        state.list = payload
    },
    upsetClick(state,payload){
        state.name = payload.name;
        state.cityid = payload.cityid;
        console.log(state.cityid)
    },
    upsetFlag(state,payload){
        state.flag = payload
    }
}

const actions = {
    async getCarId({ commit }, payload) {
        let res = await getCarId();
        
        commit('upgetCarId', res.data)
    },
    async getIpAddress({commit},payload){
        let res = await getIpAddress(payload);
        console.log('res>>>',res)
        commit('upgetIpAddress',res.data)
    },
    async setClick({commit},payload){
        let res = await payload;
        commit('upsetClick',res)
    },
    async setFlag({commit},payload){
        let res = await payload;
        commit('upsetFlag',res)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}