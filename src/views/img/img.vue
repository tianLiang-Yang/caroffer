<template>
  <div class="img">
     <div class="top">
       <span @click="$router.push({path:'/color',query:{id}})">颜色</span>|
       <span>车款</span>
     </div>
     <div class="main">
       
     </div>
     <div class="footer"></div>
  </div>
</template>

<script>
export default {
     data(){
       return {
         id:this.$route.query.id,
         ColorId:this.$route.query.id
       }
     },
     mounted(){
       console.log(this.ColorId);
       
     }
}
</script>

<style lang="scss" scoped>
  .img{
    width:100%;
    height:100%;
    background: #eee8e8;
    display:flex;
    flex-direction: column;
    .top{
      height:40px;
      background: #fff;
      margin-bottom: 10px;
    }
    .main{
      flex:1;
      overflow: auto;
    }
    .footer{
      height:20px;
      background: #fff;
    }
  }
 .top{
   display: flex;
     line-height: 40px;
     font-size: 14px;
   span{
     flex:1;
     text-align: center;
   }
 }
</style>