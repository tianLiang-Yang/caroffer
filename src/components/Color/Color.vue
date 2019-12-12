<template>
  <div class="color-page">
    <div class="top-c" @click="allColor">全部颜色</div>
    <div class="nav-c">
      <!-- 遍历汽车颜色对象 取他的key 即为年份-->
      <span
        v-for="(item, key, index) of yearData"
        :key="index"
        :class="{active: curIndex==index}"
        @click="changeIndex(item,index)"
      >{{key}}</span>
    </div>
    <!-- 颜色列表 -->
    <div class="bottom-c">
      <ul>
        <li v-for="(item,index) of colorList" :key="index" @click="selectColor(item)">
          <span :style="{background: item.Value}"></span>
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["SerialID"],
  data() {
    return {
      colorList: [],
      curIndex: 0
    };
  },
  computed: {
    ...mapState({
      yearData: state => state.img.yearData,
      colorId: state => state.img.colorId,
      carId: state => state.img.carId
    })
  },
  methods: {
    ...mapActions({
      getYearColorList: "img/getYearColorList"
    }),
    ...mapMutations({
      setColor: "img/setColorId"
    }),
    changeIndex(item, index) {
      this.curIndex = index;
      this.colorList = item;
    },
    selectColor(item) {
      this.$emit("update:showColor", false);
      this.setColor(item);
    },
    allColor(e) {
      let item = { Name: e.target.innerHTML };
      this.setColor(item);
      this.$emit("update:showColor", false);
    }
  },
  watch: {
    colorId() {
      this.getImageList(this.serialId);
    },
    carId() {
      this.getImageList(this.serialId);
    }
  },
  async created() {
    await this.getYearColorList(this.SerialID);
    await this.changeIndex(Object.values(this.yearData)[0], 0);
  }
};
</script>

<style lang="scss" scoped>
.color-page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #f4f4f4;
  
}
.top-c {
  margin-top: 10px;
  background: #fff;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 0.8rem;
  color: #09f;
  font-size: 16x;
}
.nav-c {
    font-size: 14px;
  margin-top: 10px;
  background: #fff;
  width: 100%;
  height:40px;
  text-align: center;
  line-height: 40px;
  display: flex;
  overflow: auto;
  span {
    flex-shrink: 0;
    width: 50px;
  }
  span.active {
    color: #09f;
  }
}
.bottom-c {
  width: 100%;
  background: #fff;
  ul {
    margin-top: 10px;
    padding: 5px 20px;
    overflow: hidden;
    background: #fff;
    li {
      float: left;
      width:150px;
      font-size: 14px;
      line-height: 30px;
      border: 1px solid #3aacff;
      box-sizing: border-box;
      margin: 10px 5px;
      border-radius:5px;
      margin: 5px;
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 20px;
        vertical-align: -12%;
        background: #fe9210;
        box-sizing: border-box;
        border: 1px solid #818181;
      }
    }
  }
}
</style>