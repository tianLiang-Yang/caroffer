import request from '@/utils/request';

// 根据车系图片 id 获取相应图片列表

export let getCarTypeImage1 = (id) => {
    return request.get(`/v2-car-getImageList.html?SerialID=${id}`)
}