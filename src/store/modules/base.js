import { getDealerList, getCityId } from '@/services/index'

const state = {
    list: [],
    location: 0
}

const mutations = {
    upDealerList(state, payload) {
        state.list = payload
    },
    upCityId(state, payload) {
        state.location = payload
    }
}

const actions = {

    async getCityId({ commit }, payload) {
        let res = await getCityId();
        commit('upCityId', res.data)
    },
    async getDealerList({ commit }, payload) {
        let res = await getDealerList(payload);
        commit('upDealerList', res.data)
        console.log(res)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}