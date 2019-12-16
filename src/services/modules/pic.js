import Axios from "@/utils/request.js";

// 获取图片列表
export let getImageList = (params) => {
    return Axios("/v2-car-getImageList.html", { params })
}

// 获取图片分类列表
export let getImageTypeList = (params) => {
    return Axios("/v2-car-getCategoryImageList.html", { params })
}