<template>
  <div id="home">
    <!-- 首页列表---------------------------------------------------------------- -->
    <div id="content">
      <div ref="row">
        <List :list="list" v-for="(item,index) in list" :key="index" :block="block" :item="item" />
      </div>
    </div>
    <!-- 右侧楼层按钮---------------------------------------------------------------- -->
    <div class="box">
      <p>#</p>
      <ul v-for="(item,index) in list" :key="index">
        <li @click="changeindex(index)">{{item.title}}</li>
      </ul>
    </div>
    <!-- 弹窗组件-------------------------------------------------------------------- -->
    <transition name="fade">
      <Popup v-show="flag" @change="change" :carlist="carlist" :MasterID="MasterID"></Popup>
    </transition>
  </div>
</template>

<script>
import List from "../../components/home/list";
import Popup from "../../components/home/popup";
import { mapState, mapActions } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      //控制弹窗显示隐藏
      flag: false,
      //默认下标
      curIndex: 0,
      //保存元素的高度
      scrollH: [],
      //声明实例变量
      homeBScroll: null,
      MasterID:''
    };
  },
  name: "home",
  components: {
    Popup,
    List
  },
  computed: {
    ...mapState({
      //首页列表仓库
      list: state => state.home.list,
      //首页弹窗列表仓库
      carlist: state => state.carlist.list
    })
  },
  methods: {
    //先获取每一个Row的高度--------------------------------------------------
    getHeight() {
      let height = 0; //初始距离顶部高度为0
      let children = this.$refs.row.children; //通过ref方法获取dom节点
      this.scrollH.push(height);
      for (let i = 0; i < children.length; i++) {
        height += children[i].offsetHeight;
        this.scrollH.push(height);
      }
    },
    //实例化BScroll----------------------------------------------------------
    init() {
      this.homeBScroll = new BScroll("#content", {
        click: true, //代表在滚动的时候可以点击事件是成立的
        probeType: 3 //实时监听滚动事件
      });
    },
    //点击右侧楼层------------------------------------------------------------
    changeindex(index) {
      this.curIndex = index;
      let children = this.$refs.row.children;
      this.homeBScroll.scrollToElement(children[index], 1000);
    },
    //弹窗--------------------------------------------------------------------
    async block(MasterID) {
      this.MasterID = MasterID;
      //调用首页弹窗渲染数据
      await this.getMakeListByMasterBrandId(MasterID);
      this.flag = true;
    },
    //接收子组件传的值---------------------------------------------------------
    change(mes) {
      this.flag = mes;
    },
    //调用仓库方法--------------------------------------------------------------
    ...mapActions({
      //首页列表数据
      getMasterBrandList: "home/getMasterBrandList",
      //首页弹窗列表数据
      getMakeListByMasterBrandId: "carlist/getMakeListByMasterBrandId"
    })
  },
  //渲染首页数据----------------------------------------------------------------
  async created() {
    await this.getMasterBrandList();
    console.log(this.carlist);
    
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.getHeight();
    });
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#home {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
#home .box {
  position: fixed;
  top: 20%;
  right: 15px;
  text-align: center;
}
</style>