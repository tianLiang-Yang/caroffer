import {getMasterBrandList} from '@/services/index'

const state = {
    list : []
}

const mutations = {
    updateList(state,payload){
          state.list = payload
    }
}

const actions = {
     async getMasterBrandList({commit},payload){
         let res= await getMasterBrandList();
         
         res.data.forEach((item,index) => {
            item.title = item.Spelling.slice(0,1);
         });

         let data2 = [];
         res.data.filter(item => {
             if(data2.findIndex(val => item.title == val.title) == -1){
                 data2.push({
                     title : item.title
                 });
             }
         });

        data2.forEach((item,index)=>{
            item.data = res.data.filter(val=> val.Spelling.slice(0,1) == item.title)
        });
        this.list = data2;
        commit('updateList', data2);
     }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}