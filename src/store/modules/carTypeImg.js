import {getCarTypeImage1} from '@/services/index'

const state = {
    imgList : [],  //全部车系图片数据
    EnlargementImgfalg: false,
    carId:''   //选择的车款
}

const mutations = {
    updateImage1(state,payload){
        //   state.imgList = payload
          console.log("payload>>>>",payload)
          state.imgList = payload.map(item => {
              item.List = item.List.map(val => {
                  val.Url = val.Url.replace('{0}',3);
                  return val
              })
              return item
          })
    },
    imgFlag1(){
        state.EnlargementImgfalg = true;
    }
}

const actions = {
     async getCarTypeImage1({commit},payload){
         let res= await getCarTypeImage1(payload);
         console.log("carTypeImg>>>>",res.data)
         commit('updateImage1', res.data);
     }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}