<template>
  <div class="cartype">
     <p>自动定位</p>
     <div class="title">{{name || cityName}}</div>
     <!-- ------------------------------------------ -->
     <p>省市</p>
     <!-- 省 -->
     <div class="content">
         <p v-for="(item,index) in list" :key="index" @click="block(item.CityID)">
            <span class="sl">{{item.CityName}}</span>
            <span class="sr">&gt;</span>
         </p>
     </div>
     <!-- ------------------------------------------ -->
     <!-- 市 -->
     <AllCity v-show="flag" :flag="flag" :none="none" :city="city"></AllCity>
  </div>
</template>

<script>
import AllCity from './allCity'
import {mapState,mapActions} from 'vuex'
export default {
    props:['cityName'],
    data(){
        return {
            flag:false
        }
      },
      components:{
          AllCity
      },
    computed:{
        ...mapState({
          list : state => state.share.list,
          city : state => state.share.city,
          name : state => state.base.name
        })
    },
    methods: {
      
      ...mapActions({
         getCityIdList:'share/getCityIdList', 
         getCity:'share/getCity' ,
         setFlag:'base/setFlag' 
      }),
      block(id){
        this.flag = true;
        this.getCity(id)
      },
      none(){
        this.flag = false;
        this.setFlag(false)
      }
    },
     created() {
         this.getCityIdList()
    }
}
</script>

<style scoped lang='scss'>
    .cartype{
        width:100%;
        height:100%;
        background:  #eee8e8;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        box-sizing: border-box;
        position: fixed;
        left: 0;
        top:0;
    }
    .cartype>p{
       width:100%;
       height:20px;
       line-height: 20px;
       font-size: 12px;
       padding:0 12px;
    }
    .title{
      width:100%;
      height: 40px;
      line-height: 40px;
      background: #fff;
      color: rgb(99, 169, 248);
      padding:0 10px;
      margin-top: 10px;
    }
    .content{
      flex:1;
      font-size: 14px;
    }
    .content p{
      width: 100%;
      height:44.16px;
      font-size: 14px;
      padding:0 10px;
      line-height: 44.16px;
      background:white;
      padding:0 15px;
      display: flex;
      justify-content: space-between;
    }
    .content p .sr{
      font-size: 16px;
    }
</style>