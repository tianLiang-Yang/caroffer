<template>
  <div class="cartype">
     <div class="title">2019</div>
     <!-- ------------------------------------------ -->
     <div class="content">
         <p class="text">涡轮增压</p>
         <div class="box">  
            <div class="cont">
              <p>北京中润发奥迪</p>
              <p>北京市丰台区丽泽路99号</p>
            </div>
            <div class="city">
              <p>
                <span></span>
                <span>万</span>
              </p>
              <p>售本市</p>
            </div>
         </div>
     </div>
     <!-- ------------------------------------------ -->
  </div>
</template>

<script>
export default {

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
    }
    .text{
      font-size: 13px;
      padding:0 10px;
    }
    .box{
      width:100%;
      background: #fff;
      display: flex;
      padding:10px 15px;
    }
   
    .cont{
      flex:3;
    }
    .cont p:first-child{
      font-size: 18px;
    }
    .cont p:last-child{
      font-size: 13px;
      color:#888;
      line-height: 30px;
    }
    .city{
      flex:1;
      text-align: right;
    }
    .city p:first-child span{
      color:red;
      font-size: 14px;
    }
    .city p:last-child{
      font-size: 13px;
      color:#888;
      line-height: 30px;
    }
</style>