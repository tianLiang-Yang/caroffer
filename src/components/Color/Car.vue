<template>
  <div class="car-page">
    <div class="top-c" v-if="type!=='price'" @click="$emit('update:showCar', false)">全部车款{{type}}</div>
    <!-- 年份列表 -->
    <div class="nav-c">
      <span
        v-for="(item,index) of yearList"
        :key="index"
        @click="active(index,item)"
        :class="index===Index?'active':''"
      >{{item}}</span>
    </div>
    <!-- 车款列表 -->
    <div class="bottom-c">
      <div class="block" v-for="(item,index) in tabData" :key="index">
        <p>{{item.key}}</p>
        <div class="tabBox" v-for="(val,i) in item.list" :key="i" @click="enter">
          <li>{{val.market_attribute.year}} 款&nbsp;{{val.car_name}}</li>
          <li>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</li>
          <li>
            <span>&nbsp;&nbsp;&nbsp;{{val.market_attribute.dealer_price_min}}起&nbsp;&nbsp;&nbsp;</span>
            指导价 &nbsp;&nbsp;&nbsp;{{val.market_attribute.official_refer_price}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["SerialID","type"],
  data() {
    return {
      colorList: [],
      curIndex: 0,
      Index:0
    };
  },
  computed: {
    ...mapState({
      yearList: state => state.detail.yearList,
      tabData: state => state.detail.tabData
    })
  },
  methods: {
    ...mapActions({ getlist: "detail/getInfoAndListById" }),
    ...mapMutations({changeYearList: "detail/changeYearList"}),
    active(index, year) {
      this.Index = index;
      this.changeYearList(year);
    },
    selectCar(colorId) {
      this.$emit("update:showCar", false);
    },
    enter(){
        this.$emit('update:showCar', false)
    }
  },
  mounted(){
      this.getlist(this.SerialID);
  },
  created() {
    
    
  }
};
</script>

<style lang="scss" scoped>
.car-page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #f4f4f4;
  overflow: scroll;
  font-size: 16px;
}
.top-c {
  margin-top: 5px;
  background: #fff;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #09f;
}
.nav-c {
  margin-top: 5px;
  background: #fff;
  width: 100%;
  text-align: center;
  line-height: 40px;
  height: 40px;
  display: flex;
  overflow: auto;
  font-size: 16px;
  span {
    flex-shrink: 0;
    width: 60px;
  }
  span.active {
    color: #09f;
  }
}
.block {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size:14px;
  border: none;
  p {
    padding-left:15px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
    background: #eee;
  }
  .tabBox {
    width: 100%;
    background: #fff;
    border-bottom:1px solid #f4f4f4;
    position: relative;
    height: 80px;
    li {
      font-size: 14px;
      padding:15px 0 0 15px;
      font-weight: 348;
      color: #3d3d3d;
      span {
        margin-left: 5px;
        color: red;
        padding-top: 3px;
        font-size: 14px;
      }
    }
    li:nth-child(2) {
      font-size: 12px;
      color: #bdbdbd;
    }
    li:nth-child(3) {
      display: flex;
      color: #818181;
      line-height: 15px;
      flex-direction: column;
      padding-right: 10px;
      position: absolute;
      right: 0;
      top: 5px;
    }
    button {
      font-size: 14px;
      margin-top: 5px;
      width: 100%;
      background: #fff;
      outline: none;
      line-height: 15px;
      border: none;
      color: #3aacff;
      border-top: 2px solid #f4f4f4;
    }
  }
}
</style>