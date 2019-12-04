import { getInfoAndListById } from '@/services/index';

const state = {
    list: [],
    year: ''
}
const mutations = {
    detaillist(state, payload) {
        state.list = payload
        state.year = payload.list[0].market_attribute.year
    }
}
const actions = {
    async getInfoAndListById({ commit }, payload) {
        let res = await getInfoAndListById(payload);
        commit('detaillist', res.data)


    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}