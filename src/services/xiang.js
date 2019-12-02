import request from '@/utils/request';

//获取详情页数据
export let getInfoAndListById = (obj) => {
    return request.get(`/v2-car-getInfoAndListById.html?SerialID=${obj.SerialID}`)
}