import { getMakeListByMasterBrandId } from '@/services/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload) {
        state.list = payload
    }
}

const actions = {
    async getMakeListByMasterBrandId({ commit }, payload) {
        let res = await getMakeListByMasterBrandId(payload);
        console.log(res.data);
        commit('updateList', res.data)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}