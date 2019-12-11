<template>
  <div class="color">
    <div class="top">全部颜色</div>
    <!-- 选择年份----------------------------------------- -->
    <div class="tab">
      <span
        :class="{active:curIndex==index}"
        @click="tab(item,index)"
        v-for="(item,key,index) in data"
        :key="index"
      >{{key}}</span>
    </div>
    <!-- 内容--------------------------------------------- -->
    <div class="cont">
      <div class="box" @click="$router.push({path:'/swiper',query:{id:$route.query.id,ColorId:item.ColorId}})" v-for="(item,index) in list" :key="index">
        <div class="left" :style="{background:item.Value}"></div>
        <div class="right">{{item.Name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
      curIndex: 0
    };
  },
  computed: {
    ...mapState({
      data: state => state.color.list
    })
  },
  methods: {
    tab(item, index) {
       this.list = item;
      this.curIndex = index;
    },
    ...mapActions({
      getModelImageYearColor: "color/getModelImageYearColor"
    })
  },
  async created() {
    await this.getModelImageYearColor(this.$route.query.id);
    console.log(this.data);
    this.tab(this.data[Object.keys(this.data)[0]], 0);
  }
};
</script>

<style lang="scss" scoped>
.color {
  width: 100%;
  height: 100%;
  background: #f1eeee;
  position: fixed;
  top: 0;
  left: 0;
  .top {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #fff;
    margin-top: 10px;
    margin-bottom: 6px;
    font-size: 18px;
    color: rgb(99, 169, 248);
  }
  .tab {
    width: 100%;
    height: 40px;
    margin-bottom: 6px;
    background: #fff;
    display: flex;
    overflow: auto;
  }
  .cont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    justify-content: space-between;
    padding: 0px 15px;
  }
}
.tab {
  display: flex;
  line-height: 40px;
  font-size: 16px;
  span {
    flex: 1;
    text-align: center;
    padding: 0 10px;
  }
}
.box {
  width: 48%;
  height: 35px;
  border: 1px solid rgb(82, 153, 235);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  .left {
    flex: 1;
    margin: 10px;
  }
  .right {
    flex: 8;
    font-size: 14px;
    line-height: 33px;
  }
}
.active {
  color: rgb(82, 153, 235);
}
</style>