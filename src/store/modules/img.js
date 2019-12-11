import { getImageList, getYearColorList, getCarTypeImage } from '@/services/index'

const state = {
    colorId: "4216", // 车系颜色
    carId: '', // 车款
    yearData: {}, //汽车颜色年份数据
    imgList: [], //全部车系图片数据
    EnlargementImgfalg: false,
    carId: '' //选择的车款
}

const mutations = {
    getImgList(state, payload) {
        state.imgList = payload.map((item, index) => { //由于数据中的图片url有问题 先给他处理一下
            item.List = item.List.map((val, i) => {
                val.Url = val.Url.replace('{0}', 3)
                return val;
            })
            return item;
        });
    },
    getYear(state, payload) {
        state.yearData = payload;
    },
    setColorId(state, payload) {
        state.colorId = payload;
    },
    setCarId(state, payload) {
        state.carId = payload;
    },
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
    async getImageList({ commit, state }, payload) {
        let params = { SerialID: payload };
        if (state.CarId) { //如果车款有值
            params.CarId = state.carId;
        }
        if (state.ColorID) { //如果车系有值
            params.ColorID = state.colorId;
        }
        let res = await getImageList(params)
        commit('getImgList', res.data)
    },

    async getYearColorList({ commit }, payload) {
        let res = await getYearColorList(payload)
        commit('getYear', res.data)

    },
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