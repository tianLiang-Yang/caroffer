<template>
  <div class="xiang" v-if="Object.keys(list).length">
    <div class="div">
      <!-- <div class="main"> -->
        <div class="header">
          <img :src="list.CoverPhoto" alt="" @click="$router.push({path:'/swiper',query:{id : list.SerialID}})"/>
        </div>
        <!--询问底价 -------------------------------------------- -->
        <div class="cont">
          <div class="left">
            <p>{{list.market_attribute.dealer_price}}</p>
            <p>指导价 {{list.market_attribute.official_refer_price}}</p>
          </div>
          <div class="right" @click="$router.push('/base')">询问底价</div>
        </div>
        
        <!-- 年份 ----------------------------------------------- -->
        <div class="title">
          <span :class="{active : curIndex==index}"  v-for="(item,index) in year"  :key="index" @click="tab(item,index)">
            {{item}}
          </span>
        </div>

        <!-- 列表 ------------------------------------------------- -->
        <List/>

      <!-- </div> -->
      <!-- ------------------------------------------- -->
      <div class="footer" @click="$router.push('/base')">
        <p>{{list.BottomEntranceTitle}}</p>
        <p>本地经销商</p>
      </div>
    </div>
  </div>
</template>
<script>
import List from '../components/list/list';
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components:{
    List
  },
  data(){
    return {
      id : this.$route.query.id,
      // years:[],
      // lists:[],
      // currentL:[],
       curIndex:0 ,  //默认年份下标
       //current:'全部'    //当前选择年份
    }
  },
  computed: {
    ...mapState({
      list: state => state.xiang.list,
      year: state => state.xiang.year,
      current : state => state.xiang.current,
      // currentList: state => state.xiang.currentList,
    }),
   
  },
  methods: {
     ...mapMutations({
      setCurrent:"xiang/setCurrent"
    }),
    ...mapActions({
      getInfoAndListById: "xiang/getInfoAndListById"
    }),
    // 点击切换年份
    tab(item,index){
      this.curIndex = index
      this.setCurrent(item);
    }
  },
  async created() {
      await this.getInfoAndListById(this.$route.query.id);
  }
};
</script>

<style lang='scss' scoped>
.xiang{
  width: 100%;
  height: 100%;
}
.div {
  width: 100%;
  height: 100%;
  background: #eee8e8;
  font-size: 14px;;
}
 .header {
  width: 100%;
  height: 182px;
  background: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    left: 0;
    top: -48px;
  }
}

.cont {
  width: 100%;
  padding: 0 10px;
  position: relative;
  background: #fff;
  font-size: 12px;
  .left {
    padding: 20px 0;
  }
  .left p:first-child {
    color: red;
    font-size: 14px;
  }
  .left p:last-child {
    //font-size: 14px;
    line-height: 30px;
    color: #ccc;
  }
  .right {
    color: #fff;
    position: absolute;
    top: 22px;
    right: 10px;
    text-align: center;
    padding: 10px 70px;
    border-radius: 10px;
    background: rgb(99, 169, 248);
  }
}
.title {
  width: 100%;
  display: flex;
  background: #fff;
  margin-top: 8px;
  line-height: 40px;
  font-size: 15px;
  span {
    padding: 0 15px;
  }
}

.active{
  color:rgb(99, 169, 248);
}

.footer {
  width: 100%;
  height:50px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgb(99, 169, 248);
  color: #fff;
  text-align: center;
}
.footer p:first-child {
  font-size: 15px;
  padding-top: 5px;
}
.footer p:last-child {
  font-size: 13px;
  line-height: 30px;
}
</style>