import request from '@/utils/request';

// 获取详情页车系图片列表

export let getCarTypeImage = (id) => {
    return request.get(`/v2-car-getImageList.html?SerialID=${id}`)
}