<template>
  <div class="p-page">
    <div class="navTitle">
      <span @click="$router.push({path:'/color',query:{id:SerialID}})">颜色</span>
      <span>|</span>
      <span @click="setCar">车款</span>
    </div>
    <!-- 图片列表 -->
    <div class="content">
      <ul v-for="(item,index) in imgList" :key="index">
        <li v-for="(val,i) in item.List" :key="i" :style="{backgroundImage:'url('+val.Url+' )'}"></li>
        <!-- 遮罩层 -->
        <div class="mask">
          <p>{{item.Name}}</p>
          <p>{{item.Count}}&nbsp;张&nbsp;></p>
        </div>
      </ul>
    </div>
    <!-- 车系颜色选择组件 -->
    <transition name="scroll-top">
      <Color v-if="showColor" :SerialID="SerialID" :showColor.sync="showColor"></Color>
      
    </transition>
    <!-- 车系车款选择组件 -->
    <transition name="scroll-top-c">
      <Car v-if="showCar" :SerialID="SerialID" :showCar.sync="showCar"></Car>
    </transition>
    <!-- 图片轮播展示 -->
  </div>
</template>
<script>
import { mapState, mapActions,mapMutations } from "vuex";
import Color from "@/components/Color/carColor.vue";
import Car from "@/components/Color/carType.vue";

//引入分类列表组件
import ImageTypeList from '@/components/ImageTypeList.vue';
//引入轮播组件
import ImageSwiper from '@/components/ImageSwiper.vue';
//引入预览组件
import ImagePreview from '@/components/ImagePreview.vue';
//引入背景图懒加载
import LazyLoad from '@/utils/lazyLoad';

export default {
    data(){
        return {
            type:'全部车款',
            id:this.$route.query.id,
            ColorId:this.$route.query.ColorId,
            SerialID: "",
      showColor: false,
      showCar:false
        }
    },
     components: {
    Color,Car
  },
    computed: {
    ...mapState({
      imgList: state => state.img.imgList
    }),
  },
  methods: {
    //映射函数
    ...mapActions({
      getImageList: "img/getImageList",
      getCarTypeImage:"img/getCarTypeImage"
    }),
 
    setCar(){
      this.showCar = true;
    }
  },
  mounted(){
      this.SerialID = this.$route.query.SerialID;
      this.getCarTypeImage(this.serialId)
       this.getImageList(this.SerialID);
       this.getCarTypeImage(this.SerialID);
      
  }
}
</script>

<style lang="scss" scoped>
.scroll-top-enter,
.scroll-top-leave-to,
.scroll-top-c-enter,
.scroll-top-c-leave-to {
  transform: translate3d(0, 90%, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active,
.scroll-top-c-enter-active,
.scroll-top-c-leave-active {
  transition: transform 0.6s linear;
}
.p-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .navTitle {
    width: 100%;
    display: flex;
    line-height: 50px;
    vertical-align: middle;
    font-size: 14px;
    color: #454545;
    border-bottom: 1px solid #f5f5f5;
    span {
      flex: 5;
      text-align: center;
    }
    span:nth-child(2) {
      flex: 1;
      color: #ccc;
    }
  }
  .content {
    flex: 1;
    box-sizing: border-box;
    overflow: scroll;
    ul {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid #fff;
      position: relative;
      .mask {
        width: 122px;
        height: 130px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(56, 90, 130, 0.5);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding-top: 10px;
        font-size:14px;
        p {
          padding: 4px;
        }
      }
      li {
        background-position: center;
        width: 122px;
        height: 130px;
        margin:3px 2px;
        border: 1px solid #fff;
      }
    }
  }
}
</style>