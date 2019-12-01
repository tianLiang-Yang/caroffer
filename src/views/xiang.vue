<template>
  <div class="xiang">
      <div class="div" v-for="(item,index) in list.list" :key="index"> 
    <div class="header">
      <img :src="list.CoverPhoto" alt />
    </div>
    <!--询问底价 -------------------------------------------- -->
    <div class="cont">
      <div class="left">
        <h3>{{item.market_attribute.dealer_price}}</h3>
        <p>指导价 {{item.market_attribute.dealer_price_min}}-{{item.market_attribute.dealer_price_max}}</p>
      </div>
      <div class="right" @click="$router.push('/base')">询问底价</div>
    </div>
    <!-- ----------------------------------------------- -->
    <div class="title">
      <span>全部</span>
      <span>{{item.market_attribute.year}}</span>
    </div>
    <!-- ------------------------------------------------- -->
    <div class="content" >
    <p class="text">{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
    <div class="box">
      <p>{{item.car_name}}</p>
      <p>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
      <p>
        <span>指导价{{item.market_attribute.official_refer_price}}</span>
        <span>{{item.market_attribute.dealer_price_min}}</span>
      </p>
      <p @click="$router.push('/base')">询问底价</p>
    </div>
    </div>
    <!-- ------------------------------------------- -->
    <div class="footer" @click="$router.push('/base')">
      <p>{{list.BottomEntranceTitle}}</p>
      <p>本地经销商</p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { log } from "util";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async getlist(SerialID) {
      let res = await axios.get(
        "https://baojia.chelun.com/v2-car-getInfoAndListById.html",
        { params: { SerialID } }
      );
      if (res.data.code === 1) {
        this.list = res.data.data;
        console.log(res.data.data);
        
      }
    }
  },
  mounted() {
    // let SerialID = localStorage.getItem('SerialID');
    let SerialID = 2593;
    this.getlist(SerialID);
  }
};
</script>

<style lang='scss' scoped>
.xiang ,.div{
  width: 100%;
  height: 100%;
  background: #eee8e8;
}
.header {
  width: 100%;
  height:182px;
  background: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;
  img{
      width:100%;
      position: absolute;
      left:0;
      top:-48px;
  }
}
.cont {
  width: 100%;
  padding: 0 10px;
  position: relative;
  background: #fff;
  .left {
    padding: 20px 0;
    h3 {
      color: red;
    }
    p {
      font-size: 14px;
      color: #ccc;
    }
  }
  .right {
    color: #fff;
    position: absolute;
    top: 22px;
    right: 10px;
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
.title span:first-child {
  color: rgb(99, 169, 248);
}
.text {
  padding: 0 10px;
  color: #888;
}
.content{
    width:100%;
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
  padding-bottom: 10px;
}
</style>