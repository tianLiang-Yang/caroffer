import { getMakeListByMasterBrandId } from '@/services/index'

const state = {
    list: []
}

const mutations = {
    upDateList(state, payload) {
        state.list = payload
    }
}

const actions = {
    async getMakeListByMasterBrandId({ commit }, payload) {
        let res = await getMakeListByMasterBrandId(payload);
        commit('upDateList', res.data)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}