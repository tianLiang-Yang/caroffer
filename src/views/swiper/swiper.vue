<template>
  <div class="p-page">
    <!-- 汽车分类列表 -->
    <div class="title">
      <p @click="setColor">
        <span>{{name}}</span>
        <span class="iconfont">&nbsp;&nbsp;&nbsp;&nbsp;↓</span>
      </p>
      <p @click="setCar">
        <span>{{car}}</span>
        <span class="iconfont">&nbsp;&nbsp;&nbsp;&nbsp;↓</span>
      </p>
    </div>

    <div class="main">
        <div class="img" :v-if="imgList.length" v-for="(item,index) in imgList" :key="index">
          <div>
            <div
              v-for="(item1,index1) in item.List"
              :key="index1"
              @click.self="showSwiper(index1, item.Count, item.List, item.Id)"
              :style="{
              background:'url('+item1.Url+')',
              backgroundSize:'cover',  
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center'}"
              class="imgS"
            >
              <div v-if="index1==0" @click="clickImageID(item.Id)">
                <span>{{item.Name}}</span>
                <span>{{item.Count}}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- banner列表 -->
     <ImageTypeList v-if="showImageList"/>

    <!-- 颜色组件 -->
    <transition name="scroll-top">
      <Color v-if="showColor" :SerialID="SerialID" :showColor.sync="showColor"></Color>
    </transition>

    <!-- 车款组件 -->
    <transition name="scroll-top">
      <Car v-if="showCar" :SerialID="SerialID" :showCar.sync="showCar"></Car>
    </transition>

    <!-- 轮播预加载组件 -->
    <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
//颜色组件
import Color from "@/components/Color/Color.vue";
//引入车款组件
import Car from "@/components/Color/Car.vue";
//引入分类列表组件
import ImageTypeList from "@/components/Color/ImageTypeList.vue";
//引入轮播预览组件
 import ImagePreview from "@/components/Color/ImagePreview.vue";
export default {
  data() {
    return {
      SerialID: "",
      showColor: false,
      showCar: false,
      showImageList:false,
      showImageSwiper:false,
      name: "颜色",
      car: "车款"
    }
  },
  components: {
    Color,
    Car,
    ImageTypeList,
    ImagePreview
  },
  computed: {
    ...mapState({
      imgList: state => state.img.imgList,
      colorName: state => state.img.colorName,
      colorId: state => state.img.colorId,
    })
  },
  watch: {
    colorId() {
      this.getImageList(this.SerialID);
    },
    carId() {
      this.getImageList(this.SerialID);
    }
  },
  methods: {
    //映射函数
    ...mapActions({
      getImageList: "img/getImageList"
    }),
    ...mapMutations({
      setImageID: 'img/setImageId',
      setSerialID:'img/setSerialID',
      setCurrent: 'img/setCurrent',
      setImageTypeList: 'img/setImageTypeList'
    }),
    //显示颜色组件
    setColor() {
      this.showColor = true;
    },
    //显示车款组件
    setCar() {
      this.showCar = true;
    },
    showSwiper(index, Count, List, ImageID){
      
      this.setCurrent(index);
      this.setImageID(ImageID)
      this.setImageTypeList({
        Count,
        List,
        ImageID
      });
      this.showImageSwiper = true;
    },
    // 点击分类进入分类列表
    clickImageID(id){
      console.log(id);
      
      this.setImageID(id);
      this.showImageList = true;
    }
  },
  created() {
    //路由接收参数
    this.SerialID = this.$route.query.SerialID;
    //SerialID 存入store
    this.setSerialID(this.SerialID);
    //调用接口获取图片列表
    this.getImageList(this.SerialID);
  }
};
</script>

<style lang="scss" scoped>
.scroll-top-enter,
.scroll-top-leave-to {
  transform: translate3d(0, 90%, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: transform 0.6s linear;
}
.p-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  p {
    flex: 1;
    text-align: center;
    font-size: 14px;
    display: flex;
    justify-content: center;
    .iconfont {
      line-height: 15px;
      color: #ccc;
    }
  }
  p:first-child {
    border-right: 1px solid #ececec;
  }
}
 .main {
  width: 100%;
  flex: 1;
}
.img {
  margin-top: 3px;
  width: 100%;
  height: auto;
  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      width: 122px;
      height: 120px;
      margin: 3px 2.5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
.imgS div{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
.imgS span {
  color: #fff;
  font-size: 14px;
  
}

</style>