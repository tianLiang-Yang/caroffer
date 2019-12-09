import { getCityIdList } from '@/services/index'

const state = {
    list: []
}

const mutations = {
    upgetCityIdList(state, payload) {
        state.list = payload
    }
}

const actions={
    async getCityIdList({ commit }) {
        let res = await getCityIdList();
        console.log("share<<",res.data)
        commit('upgetCityIdList', res.data)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}