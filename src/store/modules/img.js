import { getCarTypeImage } from '@/services/index'

const state = {
    imgList: [], //全部车系图片数据
    EnlargementImgfalg: false,
    carId: '' //选择的车款
}

const mutations = {
    updateImage(state, payload) {
        //   state.imgList = payload
        state.imgList = payload.map(item => {
            item.List = item.List.map(val => {
                val.Url = val.Url.replace('{0}', 3);
                return val
            })
            return item
        })
    },
    imgFlag() {
        state.EnlargementImgfalg = true;
    },
    setCarId(state, payload) {

    }
}

const actions = {
    async getCarTypeImage({ commit }, payload) {
        let res = await getCarTypeImage(payload);
        commit('updateImage', res.data);

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}