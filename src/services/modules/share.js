import request from '@/utils/request';

//获取全国省数据
export let getCityIdList = () => {
    return request.get(`/v1-city-alllist.html`)
}

// 获取全国市数据
export let getCity = (id) => {
    return request.get(`/v1-city-alllist.html?provinceid=${id}`)
}