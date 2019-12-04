import request from '@/utils/request';

//获取首页弹窗数据
export let getMakeListByMasterBrandId = (id) => {
    return request.get(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}