<template>
  <div class="base" >
    <div class="title">可向多个商家咨询最低价,商家及时回复</div>
    <div class="main" ref="main" @scroll="scroll">
      <div class="box" @click="CarPage">
        <div class="left">
          <img :src="data.Picture" alt />
        </div>
        <div class="right">
          <p>{{data.AliasName}}</p>
          <p>{{data.list[0].market_attribute.year}}款 {{data.list[0].car_name}}</p>
          <div class="jian">&gt;</div>
        </div>
      </div>
      <p class="details">个人信息</p>
      <div class="message">
        <p>
          <span>姓名</span>
          <span>
            <input type="text" placeholder="输入你的真实中文姓名" />
          </span>
        </p>
        <p>
          <span>手机</span>
          <span>
            <input type="text" placeholder="输入你的真实手机号码" />
          </span>
        </p>
        <p>
          <span>城市</span>
          <span @click="getCity">{{CityName || city.CityName}}</span>
          <span class="cityj">&gt;</span>
        </p>
        <div class="floor">询最低价</div>
      </div>
      <p ref="pp" class="details">选择报价经销商</p>

      <DealerList :DealerList="DealerList1"></DealerList>

      <div class="btn" v-show="show">询最低价</div>
    </div>

    <transition name="scroll-top">
      <CityList v-if="showCity" :val="this.$route.query.val" :showCity.sync="showCity"  :CityName="city.CityName"></CityList>
    </transition>
    <transition name="scroll-top">
      <Car v-if="showCar" :showCar.sync="showCar" :SerialID="data.SerialID" :type="'price'"></Car>
    </transition>
  </div>
</template>

<script>
import DealerList from "@/components/dealer.vue";
import CityList from "@/components/cityList.vue";
import Car from "@/components/Color/Car.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      item: {},
      val: {},
      showCar: false
    };
  },
  components: {
    DealerList,
    CityList,
    Car
  },
  computed: {
    ...mapState({
      data: state => state.detail.data,
      city: state => state.base.city,
      DealerList1: state => state.base.DealerList,
      showCity : state => state.base.showCity,
      CityName : state => state.base.CityName
    })
  },
  methods: {
    ...mapActions({
      getDealerList: "base/getDealerList",
      getCityId: "base/getCityId",
      setShowCity:"base/setShowCity"
    }),
    getCity() {
      this.setShowCity(true);
    },
    CarPage() {
      this.showCar = true;
    },
    scroll(e) {
      if (this.$refs.main.scrollTop >= this.$refs.pp.offsetTop) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
   created() {
      this.getCityId();
      let params = { carId: this.$route.query.val.car_id, cityId: this.city.CityID };
      console.log(this.data);
      
      this.getDealerList(params);
  }
};
</script>

<style lang='scss' scoped>
.scroll-top-enter,
.scroll-top-leave-to {
  transform: translate3d(0, 90%, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: transform 0.3s linear;
}
.base {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  font-size: 14px;
}
.title {
  height: 30px;
  line-height: 30px;
  width: 100%;
  background: #79cd92;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.box {
  background: #fff;
  padding: 10px 15px ;
  position: relative;
  height: 75px;
  box-sizing: border-box;
  display: flex;
  .left {
    width: 100px;
    height: 66px;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    margin-left: 10px;
    flex: 4;
    position: relative;
    display: flex;
    flex-direction: column;
    p {
      margin-top: 8px;
      max-width: 200px;
      color: #555;
    }
    p:nth-child(1) {
      margin-top: 5px;
      font-size: 14px;
      line-height: 1.2;
      color: #333;
    }
  }
}
.right p:first-child {
  font-size: 20px;
  line-height: 40px;
}
.right p:last-child {
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.jian {
  position: absolute;
  top: 20px;
  right: 0;
  font-size: 20px;
  color: #ccc;
  font-weight: 900;
}
.details {
  height: 20px;
  line-height: 20px;
  padding: 0 15px;
  font-size: 12px;
  color: #666;
  background: #eee;
}
.message {
  width: 100%;
  padding: 0 10px 15px;
  background: #fff;
  p {
    display: flex;
    line-height: 40px;
    border-bottom: 1px solid rgb(236, 231, 231);
    justify-content: space-between;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    color: #555;
    position: relative;
    span {
      color: #555;
    }
    input {
      padding-right: 5px;
      border: none;
    }
  }
}
.message p:nth-child(3) {
  padding-right: 20px;
}
.cityj {
  position: absolute;
  right: 0;
  color: #ccc;
  padding-right: 5px;
}
.floor {
  background: #3aacff;
  padding: 15px 10px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 15px 30px 0;
}
.btn {
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: rgb(99, 169, 248);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>