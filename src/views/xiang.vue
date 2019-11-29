<template>
  <div class="xiang">
      <div class="header">
          <img src="../assets/logo.png" alt="">
      </div>
      <!--询问底价 -------------------------------------------- -->
      <div class="cont">
          <div class="left">
              <h3>226.8-3306</h3>
              <p>指导价</p>
          </div>
          <div class="right" @click="$router.push('/base')">询问底价</div>
      </div>
      <!-- ----------------------------------------------- -->
      <div class="title">
          <span>全部</span>
          <span>20189</span>
      </div>
      <!-- ------------------------------------------------- -->
      <p class="text">40.。/375涡轮增压</p>
      <!-- ------------------------------------------- -->
          <div class="box">
              <p>2019款特别版</p>
              <p>510萨达阿斯达</p>
              <p>
                  <span>指导价289.0万</span>
                  <span>暂无</span>
              </p>
              <p>询问底价</p>
          </div>
      <!-- ------------------------------------------- -->
      <div class="footer" @click="$router.push('/base')">
          <p>询问底价</p>
          <p>本地经销商</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .xiang{
        width:100%;
        height:100%;
        background: #eee8e8;
    }
    .header{
        width:100%;
        background: #fff;
       text-align: center;
    }
    .cont{
        width:100%;
        padding:0 10px;
        position: relative;
        background: #fff;
        .left{
            padding:20px 0;
            h3{
                color:red;
            }
            p{
                font-size: 14px;
                color:#ccc;
            }
        }
      .right{
          color:#fff;
          position: absolute;
          top:22px;
          right:10px;
            text-align: center;
          padding:10px  60px;
            border-radius: 10px;
          background: rgb(99, 169, 248);
      }
    }
    .title{
        width:100%;
        background: #fff;
        margin-top: 8px;
        line-height: 40px;
        font-size: 18px;
        span{
            padding:0 15px;
        }
    }
    .title span:first-child{
        color:rgb(99, 169, 248);
    }
    .text{
        padding:0 10px;
        color:#888;
    }
    .box{
       width:100%;
       background: #fff;
    }
    .box p:first-child{
        font-size: 18px;
        line-height: 40px;
        padding:0 10px;
    }
     .box p:nth-child(2){
         color:#ccc;
         font-size: 14px;
         padding:0 10px;
     }
      .box p:nth-child(3){
        text-align: right;
        font-size: 13px;
        color:#888;
        padding:0 10px;
        line-height: 30px;
     }
      .box p:nth-child(3) span:last-child{
          color:red;
          font-size: 18px;
          margin-left: 10px;
      }
      .box p:last-child{
          line-height: 50px;
          text-align: center;
          color: rgb(99, 169, 248);
          border-top: 1px solid #ccc;
          font-size: 18px;
      }
      .footer{
          width:100%;
          position: fixed;
          left: 0;
          bottom: 0;
          background:rgb(99, 169, 248);
          color:#fff;
          text-align: center;
      }
      .footer p:first-child{
          font-size: 18px;
          padding-top: 5px;
      }
      .footer p:last-child{
          font-size: 13px;
         padding-bottom: 10px;
      }
</style>