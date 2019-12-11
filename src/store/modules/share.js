import { getCityIdList ,getCity} from '@/services/index'

const state = {
    list: [],  //全国省数据
    city:[]    //全国市数据
}

const mutations = {
    upgetCityIdList(state, payload) {
        state.list = payload
    },
    upgetCity(state,payload){
        state.city = payload
    }
}

const actions={
    async getCityIdList({ commit }) {
        let res = await getCityIdList();
        
        commit('upgetCityIdList', res.data)
    },
    async getCity({commit},payload){
        let res = await getCity(payload);
        console.log("share<<",res.data)
        commit('upgetCity',res.data)
    }
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}