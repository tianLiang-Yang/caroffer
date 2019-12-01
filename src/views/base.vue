<template>
  <div class="base">
      <div class="title">可向多个商家咨询最低价,商家及时回复</div>
      <div class="main" ref="main" @scroll="scroll">
        <!-- -------------------------------------------------------- -->
        <div class="box" @click="$router.push('/share')">
          <div class="left">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="right">
            <p>奥迪A4</p>
            <p>2019款阿斯顿阿斯顿撒奥迪</p>
            <div class="jian">&gt;</div>
          </div>
        </div>
        <!-- -------------------------------------------------------- -->
        <p class="details">个人信息</p>
        <!-- ---------------------------------------------------------- -->
        <div class="message">
          <p>
            <span>姓名</span>
            <span>阿斯顿</span>
          </p>
          <p>
            <span>手机</span>
            <span>15135351744</span>
          </p>
          <p @click="$router.push('/share')">
            <span>城市</span>
            <span>北京</span>
            <span class="cityj">&gt;</span>
          </p>
          <div class="floor">询最低价</div>
        </div>
        <!-- ---------------------------------------------------------- -->
        <p ref="pp" class="details">选择报价经销商</p>
        <!-- -------------------------------------------------------- -->
        <div class="dealer">
          <div class="content">
            <div class="ipt">
              <input type="checkbox">
            </div>
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
        <!-- --------------------------------------------------------------- -->
        <div class="btn" v-show="show">询最低价</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  },
  methods:{
   scroll(e){
   if(this.$refs.main.scrollTop>=this.$refs.pp.offsetTop){
     this.show=true
   }else{
      this.show=false
   }
    
   }
  }
}
</script>

<style lang='scss' scoped>
  .base{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background: #eee8e8;
  }
  .title{
    width:100%;
    height:35px;
    background: rgb(124, 223, 124);
    color:#fff;
    text-align: center;
    line-height: 35px;
  }
  .main{
    width:100%;
    flex: 1;
    overflow: auto;
  }
  .box{
    width:100%;
    display: flex;
    background: #fff;
    padding: 15px 10px;
    .left{
      border: 1px solid #ccc;
      flex:2;
      height:70px;
      margin-right: 10px;
      img{
        width:100%;
        height:100%;
      }
    }
    .right{
      flex: 4;
     position: relative;
    }
  }
  .right p:first-child{
    font-size: 20px;
    line-height: 40px;
  }
  .right p:last-child{
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .jian{
    position: absolute;
    top: 20px;
    right:0;
    font-size: 20px;
    color:#ccc;
    font-weight: 900;
  }
  .details{
    font-size: 13px;
    line-height: 30px;
    padding:0 10px;
  }
  .message{
    width:100%;
    padding:0 10px 15px;
    background: #fff;
    p{
      display: flex;
      line-height: 50px;
      border-bottom: 1px solid rgb(236, 231, 231);
      font-size: 18px;
      justify-content: space-between;
      padding-right: 20px;
    }
  }
  .message p:nth-child(3){
    position: relative;
  }
  .cityj{
    position: absolute;
    right:0;
    color:#ccc;
  }
 .floor{
   background:  rgb(99, 169, 248);
   padding:10px 30px;
   color:#fff;
   text-align: center;
   border-radius: 5px;
   margin: 15px 30px 0;
 }
 .dealer{
   width:100%;
   background: #fff;
   padding:0 10px;
 }
 .content{
   width:100%;
   border-top: 1px solid #ccc;
   display: flex;
   padding:20px 0;
   .ipt{
    width:5%;
    input{
      margin-top: 20px;
    }
   }
   .cont{
     flex:3;
   }
   .city{
     flex:1;
     text-align: right;
   }
 }
 .dealer .content:first-child{
   border-top: none;
 }
 .cont p:first-child{
   font-size: 18px;
   line-height: 30px;
 }
 .cont p:last-child{
   font-size: 14px;
   color:#ccc;
 }
 .city p:first-child span:last-child{
   color:red;
   font-size: 14px;
 }
 .city p:last-child{
   font-size: 14px;
   color:#ccc;
   line-height: 35px;
 }
 .btn{
   line-height: 50px;
   text-align: center;
   color:#fff;
   background: rgb(99, 169, 248);
   position: fixed;
   left: 0;
   bottom:0;
   width:100%;
 }
</style>