import { getModelImageYearColor } from '@/services/index'

const state = {
    list: []
}

const mutations = {
    colorList(state, payload) {
        state.list = payload
    }
}

const actions = {
    async getModelImageYearColor({ commit }, payload) {
        let res = await getModelImageYearColor(payload);
        commit('colorList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}