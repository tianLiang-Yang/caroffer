import request from '@/utils/request';

export let getMakeListByMasterBrandId = (id) => {
    return request.get(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}