<template>
    <div class="swiper">
        <div class="header">
            <p @click="$router.push('/allcolor')">全部颜色 ↓</p>
            <p @click="$router.push('/cartype')">全部车款 ↓</p>
        </div>
        <div class="content">
            <div class="img">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
                <img src="http://dummyimage.com/135x150" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {

        }
    },
    created(){
        axios.get(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${2593}`).then(res=>{
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
.swiper{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.swiper .header{
    width: 100%;
    height:50px;
    line-height: 40px;
    display: flex;
}
.swiper .header p{
    flex:1;
    text-align: center;
    margin: 10px 0;
}
.swiper .header p:nth-child(1){
    border-right:solid 1px #ccc;
}
.swiper .content{
     flex:1;
    width: 100%;
    overflow: auto;
}
.swiper .content .img{
    display: flex;
    flex-wrap: wrap;
}
.swiper .content .img img{
    margin-top: 2px;
    margin-right: 3px;
}
</style>