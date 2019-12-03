<template>
  <div class="xiang">
    <div class="div">
      <div class="header">
        <img :src="lists.CoverPhoto" alt />
      </div>
      <!--询问底价 -------------------------------------------- -->
      <div class="cont">
        <div class="left">
          <p>{{lists.market_attribute.dealer_price}}</p>
          <p>指导价 {{lists.market_attribute.official_refer_price}}</p>
        </div>
        <div class="right" @click="$router.push('/base')">询问底价</div>
      </div>
      <!-- ----------------------------------------------- -->
      <div class="title">
        <span>全部</span>
        <span>{{years}}</span>
      </div>
      <!-- 列表 ------------------------------------------------- -->
      <List :lists="lists"/>
      <!-- ------------------------------------------- -->
      <div class="footer" @click="$router.push('/base')">
        <p>{{lists.BottomEntranceTitle}}</p>
        <p>本地经销商</p>
      </div>
    </div>
  </div>
</template>
<script>
import List from '../components/list/list';
import { mapState, mapActions } from "vuex";
export default {
  components:{
    List
  },
  data(){
    return {
      lists:{},
      years:'',
      lists:{
        market_attribute:{dealer_price:''}
      }
  }
  },
  name: "xiang",
  computed: {
    ...mapState({
      list: state => state.xiang.list,
      year: state => state.xiang.year
    })
  },
  methods: {
    ...mapActions({
      getInfoAndListById: "xiang/getInfoAndListById"
    })
  },
  async created() {
   await this.getInfoAndListById(2593);
    this.lists=this.list;
    this.years=this.year;
    console.log(this.lists);
    
  }
};
</script>

<style lang='scss' scoped>
.xiang,
.div {
  width: 100%;
  height: 100%;
  background: #eee8e8;
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
  .left {
    padding: 20px 0;
  }
  .left p:first-child {
    color: red;
    font-size: 20px;
  }
  .left p:last-child {
    font-size: 14px;
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
  background: #fff;
  margin-top: 8px;
  line-height: 40px;
  font-size: 18px;
  span {
    padding: 0 15px;
  }
}
.title span:first-child {
  color: rgb(99, 169, 248);
}


.footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgb(99, 169, 248);
  color: #fff;
  text-align: center;
}
.footer p:first-child {
  font-size: 18px;
  padding-top: 5px;
}
.footer p:last-child {
  font-size: 13px;
  line-height: 30px;
}
</style>