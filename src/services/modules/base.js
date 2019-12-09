import request from '@/utils/request';

//获取报价页面数据
export let getCarId = () => {
    return request.get(`/location-client.html`)
}

export let getIpAddress = ({cityId,carId}) => {
    return request.get(`/v2-dealer-alllist.html?cityId=${cityId}&carId=${carId}`)
}