<template>
  <div class="list">
        <div class="content" v-for="(item,index) in lists.list" :key="index">
        <p class="text">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
        <div class="box">
          <p>{{item.market_attribute.year}}款{{item.car_name}}</p>
          <p>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
          <p>
            <span>指导价{{item.market_attribute.official_refer_price}}</span>
            <span>{{item.market_attribute.dealer_price_min}}</span>
          </p>
          <p @click="$router.push('/base')">询问底价</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['lists']
}
</script>

<style scoped lang='scss'>
 .content {
  width: 100%;
  .text {
    padding: 0 10px;
    color: #888;
    background: #eee8e8;
  }
}

.box {
  width: 100%;
  background: #fff;
}
.box p:first-child {
  font-size: 18px;
  line-height: 40px;
  padding: 0 10px;
}
.box p:nth-child(2) {
  color: #ccc;
  font-size: 14px;
  padding: 0 10px;
}
.box p:nth-child(3) {
  text-align: right;
  font-size: 13px;
  color: #888;
  padding: 0 10px;
  line-height: 30px;
}
.box p:nth-child(3) span:last-child {
  color: red;
  font-size: 18px;
  margin-left: 10px;
}
.box p:last-child {
  line-height: 50px;
  text-align: center;
  color: rgb(99, 169, 248);
  border-top: 1px solid #ccc;
  font-size: 18px;
}
</style>