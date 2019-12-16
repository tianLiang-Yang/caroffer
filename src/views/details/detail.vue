<template>
  <div class="detail" v-if="Object.keys(lists).length">
    <div class="div">
      <div class="header">
        <img :src="lists.CoverPhoto" @click="$router.push(`/swiper?SerialID=${lists.SerialID}`)"/>
        <span class="imgCount">{{lists.pic_group_count}}张图片</span>
      </div>
      <!--询问底价 -------------------------------------------- -->
      <div class="cont">
        <div class="left">
          <p>{{lists.market_attribute.dealer_price}}</p>
          <p>指导价 {{lists.market_attribute.official_refer_price}}</p>
        </div>
        <div class="right" @click="xunjia1(lists.SerialId)">询问底价</div>
      </div>
      <!-- ----------------------------------------------- -->
      <div class="title">
        <span
          :class="{active: curIndex==index}"
          @click="click(index,item)"
          v-for="(item,index) in years"
          :key="index"
        >{{item}}</span>
      </div>
      <!-- 列表 ------------------------------------------------- -->
      <List :list="currentList" :lists="lists"/>
      <!-- ------------------------------------------- -->
      <div class="footer" @click="xunjia1(lists.SerialId)">
        <p>{{lists.BottomEntranceTitle}}</p>
        <p>本地经销商</p>
      </div>
    </div>
  </div>
</template>
<script>
import List from "../../components/list/list";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      curIndex: 0
    };
  },
  components: {
    List
  },
  name: "detail",
  computed: {
    ...mapState({
      lists: state => state.detail.list,
      years: state => state.detail.year,
      current: state => state.detail.current,
      currentList: state => state.detail.currentList
    })
  },
  methods: {
    xunjia1(serialId){
        localStorage.setItem('type',
        JSON.stringify({
          year: this.lists.list[0].market_attribute.year,
          carname:this.lists.list[0].car_name
        })
        )
        this.$router.push({path:'/base',query:{serialId}})
    },
    ...mapMutations({
      setCurrent: "detail/setCurrent"
    }),
    click(index, item) {
      this.curIndex = index;
      this.setCurrent(item);
        _hmt.push(['_trackEvent', 'tab切换', index]);
    },
    ...mapActions({
      getInfoAndListById: "detail/getInfoAndListById"
    })
  },
  async created() {  
    await this.getInfoAndListById(this.$route.query.id);
    console.log( this.lists);
  }
};
</script>

<style lang='scss' scoped>
.detail,
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
  .imgCount {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    right: 20px;
    bottom: 20px;
    border-radius: 10px;
    color: #fff;
    padding: 5px;
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
    font-size: 16px;
    text-align: center;
    padding: 10px 60px;
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
.active {
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