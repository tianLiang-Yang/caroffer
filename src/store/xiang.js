import { getInfoAndListById } from '@/services/index';

const state = {
    list: []
}
const mutations = {
    xianglist(state, payload) {
        state.list = payload
    }
}
const actions = {
    async getInfoAndListById({ commit }, payload) {
        let res = await getInfoAndListById(payload);
        commit('xianglist', res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}