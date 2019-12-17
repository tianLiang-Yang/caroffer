<template>
  <div class="citylist-page">
    <div class="city">
      <div class="autolocal">
        <p class="details">自动定位</p>
        <li @click="$emit('update:showCity', false)">{{CityName}}</li>
      </div>
      <div class="province">
        <p class="details">省份</p>
        <li
          v-for="(item,index) in cityList"
          :key="index"
          @click="getProvince(item.CityID)"
        >{{item.CityName}}</li>
      </div>
    </div>

    <transition name="scroll-top">
      <MaskBox v-if="showMask" :val="val" :showMask.sync="showMask" :countyList="countyList"></MaskBox>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MaskBox from "@/components/mask";
export default {
  props: ["CityName","val"],
  data() {
    return {
      showMask: false
    };
  },
  components: {
    MaskBox
  },
  computed: {
    ...mapState({
      cityList: state => state.base.cityList,
      countyList: state => state.base.countyList
    })
  },
  methods: {
    ...mapActions({
      getCityList: "base/getCityList"
    }),
    getProvince(id) {
      this.showMask = true;
      let params = { provinceid: id };
      this.getCityList(params);
    }
  },
  async created() {
    localStorage.setItem('val',JSON.stringify(this.val));
    await this.getCityList();
    console.log(this.cityList);
  }
};
</script>

<style lang="scss" scoped>
.scroll-top-enter,
.scroll-top-leave-to {
  transform: translate3d(100%, 0, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: transform 0.1s linear;
}
.citylist-page {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #ffffff;
  left: 0;
  top: 0;
}
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.details {
  height:30px;
  line-height: 30px;
  font-size: 13px;
  padding: 0 15px;
  font-size: 14px;
  color: #666;
  background: #eee;
}
.province {
  width: 100%;
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
</style>