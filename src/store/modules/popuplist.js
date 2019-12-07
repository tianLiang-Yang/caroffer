import {getPopupList} from '@/services/index'

const state = {
    carList : []
}

const mutations = {
    popupList(state,payload){
        state.carList = payload
        console.log(state.carList)
    }
}

const actions = {
    async getPopupList({commit},payload){
        let res = await getPopupList(payload);
        console.log("res>>>>",res)
        commit('popupList',res.data);
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}