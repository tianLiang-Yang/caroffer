<template>
    <div class="swiper">
        <div class="header">
            <p @click="$router.push({path:'/color',query:{id}})">全部颜色</p>
            <p @click="$router.push({path:'/cartype',query:{id : serialId}})">
                {{this.type }}
            </p>
        </div>
        <div class="content">
            <ul v-for="(item,index) in imgList" :key="index">
                <div class="layer">
                    <p><span>{{item.Name}}</span> <span>{{item.Count}}张></span> </p>
                </div>
                <li v-for="(item1,index1) in item.List" :key="index1">
                    <span src='' :style="{backgroundImage:'url('+item1.Url+')'}" @click="magnifyImg"></span>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data(){
        return {
            serialId:'',
            type:'全部车款',
            id:this.$route.query.id
        }
    },
    computed: {
    ...mapState({
      imgList: state => state.img.imgList
    }),
    
  },
  methods: {
     ...mapActions({
      getCarTypeImage:"img/getCarTypeImage"
    }),
    ...mapMutations({
        imgFlag:"img/imgFlag"
    }),
    magnifyImg(){
        this.imgFlag()
    }
  },
  mounted(){
      this.serialId = this.$route.query.id
      this.getCarTypeImage(this.serialId)
  },
  created(){
    //  await this.getCarTypeImage(this.$route.query.id)
    // if(this.$route.query.type !== '')
    // this.type = this.$route.query.type
     }
}
</script>

<style lang="scss" scoped>
.swiper{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
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
.swiper .content ul{
    width: 100%;
    height:246px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
.swiper .content ul .layer{
    position: absolute;
    width: 33.3%;
    height:123px;
    text-align: center;
    align-items: center;
    top:2px;
    left:2px;
    background:rgba(0, 0, 0, .4);
}
.swiper .content ul .layer p{
    margin-top:20%;
    color:white;
}
.swiper .content ul .layer p span{
    display: block;
    line-height: 30px;
}
.swiper .content ul li{
    width: 33.3%;
    height:123px;
    padding:2px 2px;
}
.swiper .content ul li span{
    display: inline-block;
    width: 100%;
    height:100%;
    background-position: center;
}
</style>