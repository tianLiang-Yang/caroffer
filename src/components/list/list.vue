<template>
  <div class="list">
    <div class="content"
        v-for="(item,index) of list" 
        :key="index"
     >
      <div class="box" v-for="(val,ind) in item.list" :key="ind">
        <p class="text">{{item.key}}</p>
        <p>{{val.market_attribute.year}}款{{val.car_name}}</p>
        <p>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</p>
        <p>
          <span>指导价{{val.market_attribute.official_refer_price}}</span>
          <span>{{val.market_attribute.dealer_price_min}}</span>
        </p>
        <p @click="$router.push({path:'/base',query:{car_id:val.car_id,val}})">询问底价</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["list","lists"],
  computed:{
     
  },
  created(){
    
  }
};
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  background: #eee8e8;
}

.box {
  width: 100%;
  background: #fff;
}
.box .text {
  padding: 0 10px;
  color: #888;
  font-size: 14px;
  line-height: 20px;
  background: #eee8e8;
}
.box p:nth-child(2) {
  font-size: 18px;
  line-height: 40px;
  padding: 0 10px;
}
.box p:nth-child(3) {
  color: #ccc;
  font-size: 14px;
  padding: 0 10px;
}
.box p:nth-child(4) {
  text-align: right;
  font-size: 13px;
  color: #888;
  padding: 0 10px;
  line-height: 30px;
}
.box p:nth-child(4) span:last-child {
  color: red;
  font-size: 14px;
  margin-left: 10px;
}
.box p:last-child {
  line-height: 50px;
  text-align: center;
  color: rgb(99, 169, 248);
  border-top: 1px solid #888;
  font-size: 18px;
}

</style>