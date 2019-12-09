import request from '@/utils/request';

//获取cityid
export let getCityId = () => {
    return request.get('/location-client.html')
};
//获取经销商数据
export let getDealerList = ({ carId, cityId }) => {
    return request.get(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}