<template>
  <div class="home">
      <div id="box">
        <div ref="row">
          <!-- 汽车列表 -->
            <CarList v-for="(item,index) in list" :key="index" :item="item" :flag="flag" :block="block"></CarList>
        </div>
      </div>
      <!-- 点击跳到相应列表 -->
      <div class="box">
          <p>#</p>
          <ul v-for="(item,index) in list" :key="index">
              <li @click="changeindex(index)">
                {{item.title}}
              </li>
          </ul>
      </div>

      <!-- 弹窗组件 -->
      <Popup v-show="flag" :carlist="carlist"></Popup>

        
  </div>
</template>

<script>
// 汽车列表组件
import CarList from '../../components/carList'
// 弹窗组件
import Popup from "../../components/popup";
// 楼层组件
// import Floor from '../../components/floor'

import BScroll from 'better-scroll';

import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
       list: [],  //全部car 数据
       carlist:[],  // 弹窗页数据
       flag: false,  // 控制弹窗显示隐藏
       scrollH:[], // 获取每个元素的高度
       homeBScroll:null,  //声明实例变量
       curIndex:0  //默认下标
    };
  },
  components: {
     CarList,
     Popup
    //  Floor
  },
  computed: {
    ...mapState({
      lists: state => state.home.list,
      carlists:state => state.popuplist.carList
    })
  },
  methods: {
    // 获取每个元素 row 的高度
    getHeight(){
      let height = 0; //初始距离顶部的高度为0
      let children = this.$refs.row.children; //通过$refs 获取 row 下的所有子元素dom节点
      this.scrollH.push(height);
      for(var i = 0; i < children.length; i++){
        height += children[i].offsetHeight;
        console.log(height)
        this.scrollH.push(height);
      }
      console.log(this.scrollH);
    },
    // 实力化BScroll
    init(){
       this.homeBScroll = new BScroll("#box",{
         click: true,  //代表在滚动的时候可以进行点击事件
         probeType: 3  //实时监听滚动事件
       })
    },
    // 点击右侧楼层
    changeindex(index){
        this.curIndex = index ;
        let children = this.$refs.row.children;
        console.log(children)
        this.homeBScroll.scrollToElement(children[index],1000);
    },
    // 控制弹窗显示   传入数据
    async block(id) {
      this.flag = true;
      await this.getPopupList(id);
      this.carlist = this.carlists;
      console.log(this.carlist);
    },
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList",
      getPopupList:"popuplist/getPopupList"
    })
  },
  mounted(){
    this.$nextTick(() => {
      this.init();
      this.getHeight();
    })
  },
  async created() {
    await this.getMasterBrandList();
    this.list = this.lists;
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.home #box{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.home .box{
    //font-size: 14px;
    width: 32.55px;
    height:422.13px;
    text-align: center;
    position: fixed;
    top: 50%;
    margin-top:-211.56px;
    right: 5px;
}
.home .box {
  line-height: 20px;
}

</style>