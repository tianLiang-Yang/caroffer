<template>
  <div class="cartype">
     <div class="title">2019</div>
     <!-- ------------------------------------------ -->
     <div class="content" v-for="(item,index) in currentList" :key="index">
         <p class="text">{{item.key}}</p>
         <div @click="close" class="box" v-for="(val,ind) in item.list" :key="ind">  
           <p>
             <span>{{val.market_attribute.year}}款{{val.car_name}}</span>
             <span>{{val.market_attribute.dealer_price_min}}起</span>
           </p>
           <p>
             <span>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</span>
             <span>指导价{{val.market_attribute.official_refer_price}}</span>
           </p>
         </div>
     </div>
     <!-- ------------------------------------------ -->
  </div>
</template>

<script>
export default {
 props:["currentList"],
 methods:{
   close(){ 
      this.$emit('change',false);
   }
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
        overflow: auto;
        position: fixed;
        left:0;
        top:0;
    }
    .title{
      width:100%;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      background: #fff;
      color: rgb(99, 169, 248);
      padding:0 10px;
      margin-top: 10px;
    }
    .content{
      flex:1;
     
    }
    .text{
      font-size: 13px;
      padding:0 10px;
      line-height: 20px;
    }
    .box{
      width:100%;
      background: #fff;
      padding:0px 15px;
       border-bottom: 1px solid #888;
      p{
        display: flex;
       
        justify-content: space-between;
      }
    }
    .box p:first-child{
       line-height: 40px;
       display: flex;
    }
    .box p:last-child{
     line-height: 30px;
    }
   .box p:first-child span:first-child{
     font-size: 16px;
     flex:3;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
   }
   .box p:first-child span:last-child{
     color:red;
     flex:1;
     text-align: right;
     font-size: 14px;
   }
   .box p:last-child span:first-child{
     font-size: 12px;
     color:#888;
   }
    .box p:last-child span:last-child{
     font-size: 12px;
     color:#888;
   }
</style>