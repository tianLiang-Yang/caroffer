/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:41:05
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 18:55:07
 * @Description: 
 */
import Axios from "@/utils/index.js";

// 获取图片列表
export let getImageList=(params)=>{
    return Axios("/v2-car-getImageList.html", {params})
}

// 获取图片分类列表
export let getImageTypeList=(params)=>{
    return Axios("/v2-car-getCategoryImageList.html", {params})
}