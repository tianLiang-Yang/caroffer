<template>
  <div class="home">
    <!-- 汽车列表 -->
    <div class="block" v-for="(item,index) in list" :key="index">
      <p :id="item.title">{{item.title}}</p>
      <ul v-for="(val,key) in item.data" :key="key" @click="block(val.MasterID)">
        <li>
          <img :src="val.CoverPhoto" v-lazy="val.CoverPhoto" alt />
          <span>{{val.Name}}</span>
        </li>
      </ul>
    </div>
    <!-- 点击跳到相应列表 -->
    <div class="box">
      <p>#</p>
      <ul v-for="(item,index) in list" :key="index">
        <li>
          <a :href="'#'+item.title">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 弹窗组件 -->
    <Popup v-show="flag" :carlist="carlist"></Popup>
  </div>
</template>

<script>
import Popup from "../../components/popup";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
       list: [],
       carlist:[],
       flag: false
    };
  },
  components: {
     Popup
  },
  computed: {
    ...mapState({
      lists: state => state.home.list,
      carlists:state => state.popuplist.carList
    })
  },
  methods: {
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
}
.home .block {
  width: 100%;
  overflow: hidden;
}
.home .block p {
  width: 100%;
  height: 30px;
  padding-left: 20px;
  background: #ccc;
}
.home .block ul {
  width: 100%;
}
.home .block ul li {
  width: 90%;
  height: 50px;
  line-height: 40px;
  display: flex;
  margin: 0 18px;
  border-bottom: solid 1px #ccc;
}
.home .block ul li img {
  width: 44.16px;
  height: 44.16px;
}
.home .block ul li span {
  display: inline-block;
  margin-left: 20px;
}
.home .box {
  position: fixed;
  top: 24%;
  right: 5px;
}
</style>