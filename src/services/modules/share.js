import request from '@/utils/request';

//获取全国城市数据
export let getCityIdList = () => {
    return request.get(`/v1-city-alllist.html`)
}

