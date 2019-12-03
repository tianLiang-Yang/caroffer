<template>
  <div class="home">
    <div class="block" v-for="(item,index) in list" :key="index">
      <p :id="item.title">{{item.title}}</p>
      <ul v-for="(val,key) in item.data" :key="key" @click="block(val.MasterID)">
        <li>
          <img :src="val.CoverPhoto" v-lazy="val.CoverPhoto" alt />
          <span>{{val.Name}}</span>
        </li>
      </ul>
    </div>
    <div class="box">
      <p>#</p>
      <ul v-for="(item,index) in list" :key="index">
        <li>
          <a :href="'#'+item.title">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <Popup v-show="flag" @change='change' :carid="carid"></Popup>
  </div>
</template>

<script>
import Popup from "../../components/popup";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
       list: [],
     carid:'',
      flag: false
    };
  },
  name:'home',
  components: {
    Popup
  },
  computed: {
  
    ...mapState({
      lists: state => state.home.list
    })
  },
  methods: {
      change(mes){
      this.flag = mes
    },
    //弹窗
    block(MasterID){
      this.flag = true,
      this.carid = MasterID;
    },
    // ----------------------------------------------
  ...mapActions({
      getMasterBrandList: "home/getMasterBrandList"
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
  overflow: auto;
}
.home .block {
  width: 100%;
}
.home .block p {
  width: 100%;
  height: 30px;
  line-height: 30px;
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
  margin-top: 5px;
}
.home .block ul li span {
  display: inline-block;
  margin-left: 20px;
  line-height: 50px;
}
.home .box {
  position: fixed;
  top: 24%;
  right: 5px;
}
</style>