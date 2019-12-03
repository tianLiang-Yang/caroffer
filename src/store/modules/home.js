import {getMasterBrandList} from '@/services/index'

const state = {
    list : []
}

const mutations = {
    updateList(state,payload){
          state.list = payload
          console.log(state.list)
    }
}

const actions = {
     async getMasterBrandList({commit},payload){
         let res= await getMasterBrandList()
         console.log("res>>>>",res)
         commit('updateList', res.data);
     }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}