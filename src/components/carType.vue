<template>
  <div class="list">
        <div class="content" v-for="(item,index) of currentList" :key="index">
          <p class="text">{{item.key}}</p>
          <div class="box" @click="close" v-for="(item1,index1) in item.list" :key="index1">
            
            <p>{{item1.market_attribute.year}}款{{item1.car_name}}</p>
            <p>{{item1.horse_power}}马力{{item1.gear_num}}档{{item1.trans_type}}</p>
            <p class="right">
              <span>{{item1.market_attribute.dealer_price_min}}</span>
              <span>指导价{{item1.market_attribute.official_refer_price}}</span>
            </p>
          </div>
        </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
   methods:{
     close(){
       this.$emit('cartype',false)
     }
   },
    computed: {
    ...mapState({
      currentList: state => state.detail.currentList
    }),}
 }
</script>

<style scoped lang='scss'>
.list{
  width:100%;
  height:100%;
  position: fixed;
  top: 0;
  left:0;
  background: #fff;
  overflow: auto;
}
 .content {
  width: 100%;
  background:#eee8e8;
  .text {
    padding: 0 10px;
    color: #888;
    font-size: 8px;
    background: #eee8e8;
    line-height: 20px;
  }
}

.box {
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  position: relative;
}
.box p:first-child {
  font-size: 10px;
  line-height: 40px;
  padding: 0 10px;
}
.box p:nth-child(2) {
  color: #ccc;
  font-size: 8px;
  padding: 0 10px;
  line-height: 30px;
}
.box p:nth-child(3) {
  text-align: right;
  font-size: 13px;
  color: #888;
  padding: 0 10px;
}

.right{
    position: absolute;
    top:10px;
    right:5px;
    display: flex;
    flex-direction: column;
}
.right span:nth-child(1){
    color: rgb(99, 169, 248);
    line-height: 30px;
    font-size: 14px;
}
.right span:nth-child(2){
    line-height: 30px;
}
</style>