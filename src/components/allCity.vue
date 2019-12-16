<template>
  <div class="allCity" v-show="flag">
      <div class="box" @click="close"></div>
    <div class="block">
      <p v-for="(item,index) in city" :key="index" @click="set(item)">{{item.CityName}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["flag", "city"],
  methods: {
    ...mapActions({
      setClick: "base/setClick"
    }),
    set(item) {
      this.setClick({ name: item.CityName, cityid: item.CityID, flag: false });
    },
    close(){
         this.$emit("change", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.allCity {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  .box{
      flex:1;
      background: rgba(0,0,0,0.5);
  }
}
.allCity .block {
    flex:3;
  background: white;
}
.allCity .block p {
  width: 100%;
  height: 44.16px;
  font-size: 14px;
  padding: 0 10px;
  line-height: 44.16px;
  background: white;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}
</style>