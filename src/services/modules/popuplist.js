import request from '@/utils/request';

//获取首页弹窗 数据
export let getPopupList = (id) => {
    return request.get(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}