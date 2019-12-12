import request from '@/utils/request';

//获取详情页数据
export let getInfoAndListById = (obj) => {
    return request(`/v2-car-getInfoAndListById.html?SerialID=${obj}`)
}