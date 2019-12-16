<template>
  <div class="mask">
    <div class="left"></div>
    <div class="right">
      <li v-for="(item,index) in countyList" :key="index" @click="back(item)">{{item.CityName}}</li>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["countyList","val"],
  computed:{
    ...mapState({
      DealerList1: state => state.base.DealerList
    })
  },
  methods: {
    ...mapActions({
      getDealerList: "base/getDealerList",
      getCityId: "base/getCityId",
      setShowCity:"base/setShowCity",
      getCityName:"base/getCityName"
    }),
    back(item) {
      console.log(item);
      // let val = JSON.parse(localStorage.getItem(val));
      let params ={carId:this.val.car_id,cityId:item.CityID};
      console.log(params);
      this.getCityId(item.CityID);
      this.getCityName(item.CityName);
      this.setShowCity(false);
      this.$emit("update:showMask", false);
      this.getDealerList(params)
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  font-size: 14px;
}
li {
  padding-left: 15px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 10px;
  position: relative;
}
.left {
  width: 30%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.right {
  width: 70%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
</style>