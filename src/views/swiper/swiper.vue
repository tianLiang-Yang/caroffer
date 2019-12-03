<template>
    <div class="swiper">
        <div class="header">
            <p @click="$router.push('/allcolor')">全部颜色 ↓</p>
            <p @click="$router.push('/cartype')">全部车款 ↓</p>
        </div>
        <ul class="content">
            <li  v-for="(item,index) in list" :key="index"><img :src="item.video_pic" alt=""></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${2593}`).then(res=>{
            this.list = res.data
            console.log(this.list)
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
.swiper ul{
    flex:1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.swiper ul li{
    width: 135px;
    height:150px;
    margin-top: 2px;
    margin-right: 3px;
}
.swiper ul li img{
    width: 100%;
    height:100%;
    
}
</style>