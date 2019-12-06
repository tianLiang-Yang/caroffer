import request from '@/utils/request';

//获取汽车颜色数据
export let getModelImageYearColor = (obj) => {
    return request.get(`/v2-car-getModelImageYearColor.html?SerialID=${obj}`)
}