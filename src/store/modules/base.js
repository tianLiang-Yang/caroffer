import { getIpAddress, getDealerList, getCityId, getCarId } from '@/services/index'

const state = {
    list: {},
    location: 0,
    name: '',
    cityid: '',
    flag: false,
    flag2: false
}

const mutations = {
    upgetCarId(state, payload) {
        state.location = payload
    },
    upgetIpAddress(state, payload) {
        state.list = payload


    },
    upsetClick(state, payload) {
        state.name = payload.name;
        state.cityid = payload.cityid;
        state.flag = payload.flag;
    },
    upDealerList(state, payload) {
        state.list = payload
        console.log(state.list);
    },
    upCityId(state, payload) {
        state.location = payload
    },
    upflag(state, payload) {
        state.flag = payload
        state.flag2 = payload
    }
}

const actions = {

    async getCarId({ commit }, payload) {
        let res = await getCarId();

        commit('upgetCarId', res.data)
    },
    async getIpAddress({ commit }, payload) {
        let res = await getIpAddress(payload);
        console.log('res>>>', res.data)
        commit('upgetIpAddress', res.data)
    },
    async setClick({ commit }, payload) {

        commit('upsetClick', payload)
    },
    async setFlag({ commit }, payload) {
        commit('upflag', payload)
    },
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