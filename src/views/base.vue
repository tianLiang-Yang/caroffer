<template>
  <div class="base" v-if="Object.keys(list).length">
    <div class="title">可向多个商家咨询最低价,商家及时回复</div>
    <div class="main" ref="main" @scroll="scroll">
      <!-- -------------------------------------------------------- -->
      <div class="box" @click="share">
        <div class="left">
          <img :src="list.details.serial.Picture" />
        </div>
        <div class="right">
          <p>{{list.details.serial.AliasName}}</p>
          <p>{{list.details.market_attribute.year}}款{{list.details.car_name}}</p>
          <div class="jian">&gt;</div>
        </div>
      </div>
      <!-- -------------------------------------------------------- -->
      <p class="details">个人信息</p>
      <!-- ---------------------------------------------------------- -->
      <div class="message">
        <p>
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名" />
        </p>
        <p>
          <span>手机</span>
          <input type="text" placeholder="请输入手机号" />
        </p>
        <p>
          <span>城市</span>
          <span @click="click(location.CityName)">{{location.CityName}}</span>
          <span class="cityj">&gt;</span>
        </p>
        <div class="floor">询最低价</div>
      </div>
      <!-- ---------------------------------------------------------- -->
      <p ref="pp" class="details">选择报价经销商</p>
      <!-- -------------------------------------------------------- -->
      <div class="dealer">
        <div class="content" v-for="(item,index) in list.list" :key="index">
          <div class="ipt">
            <input type="checkbox" />
          </div>
          <div class="cont">
            <p>{{item.dealerShortName}}</p>
            <p>{{item.address}}</p>
          </div>
          <div class="city">
            <p>
              <span></span>
              <span>万</span>
            </p>
            <p>售{{item.saleRange}}</p>
          </div>
        </div>
      </div>
      <!-- --------------------------------------------------------------- -->
      <div class="btn" v-show="show">询最低价</div>
    </div>
    <transition name="slide-fade">
      <div v-show="flag" class="animation">
        <Share :currentList="currentList" @change="change" />
      </div>
    </transition>
    <Share2 v-show="shares" :cityname="cityname" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Share from "../components/detail/share";
import Share2 from "./share2";
export default {
  data() {
    return {
      show: false,
      flag: false,
      carid: "",
      cityname: "",
      shares: ""
    };
  },
  components: {
    Share,
    Share2
  },
  computed: {
    ...mapState({
      list: state => state.base.list,
      location: state => state.base.location,
      currentList: state => state.detail.currentList,
      name: state => state.base.name,
      cityid: state => state.base.cityid,
      shareall: state => state.base.flag
    })
  },
  methods: {
    click(item) {
      this.cityname = item;
      this.shares = this.shareall;
    },
    change(obj) {
      this.flag = obj.flag;
      console.log(obj.carid);
      this.carid = obj.carid;
    },
    share() {
      this.flag = true;
    },
    scroll(e) {
      if (this.$refs.main.scrollTop >= this.$refs.pp.offsetTop) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    ...mapActions({
      //首页弹窗列表数据
      getDealerList: "base/getDealerList",
      getCityId: "base/getCityId",
      getIpAddress: "base/getIpAddress",
      getCarId: "base/getCarId",
      getCityList: "share/getCityList",
      setFlag: "base/setFlag"
    })
  },
  async created() {
    await this.getCityId();
    let params = {};
    if (!this.$route.query.car_id) {
      params = {
        cityId: this.location.CityID,
        carId: this.currentList[0].list[0].car_id || this.carid
      };
    } else {
      params = {
        cityId: this.location.CityID,
        carId: this.carid || this.$route.query.car_id
      };
    }
    console.log(params);
    await this.getDealerList(params);
    console.log(this.currentList);
  }
};
</script>

<style lang='scss' scoped>
.animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.slide-fade-enter,
.silde-fade-leave-to {
  transform: translate3d(0, 100%, 0);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.5s linear;
}
.base {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee8e8;
}
.title {
  width: 100%;
  height: 30px;
  background: rgb(124, 223, 124);
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
}
.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.box {
  width: 100%;
  display: flex;
  background: #fff;
  padding: 15px 10px;
  .left {
    border: 1px solid #ccc;
    flex: 2;
    height: 70px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    flex: 4;
    position: relative;
    overflow: hidden;
  }
}
.right p:first-child {
  font-size: 16px;
  line-height: 30px;
}
.right p:nth-child(2) {
  font-size: 16px;
  line-height: 30px;
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
  font-size: 13px;
  line-height: 25px;
  padding: 0 10px;
}
.message {
  width: 100%;
  padding: 0 10px 15px;
  background: #fff;
  p {
    display: flex;
    line-height: 50px;
    border-bottom: 1px solid #888;
    font-size: 18px;
    justify-content: space-between;
  }
}
.message p:nth-child(1),
.message p:nth-child(2) {
  span {
    flex: 1;
  }
  input {
    flex: 3;
    outline: none;
    border: none;
    height: 80%;
  }
  align-items: center;
}
.message p:nth-child(3) {
  position: relative;
  padding-right: 20px;
}
.cityj {
  position: absolute;
  right: 0;
  color: #ccc;
}
.floor {
  background: rgb(99, 169, 248);
  padding: 10px 30px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  margin: 15px 30px 0;
}
.dealer {
  width: 100%;
  background: #fff;
  padding: 0 10px;
}
.content {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #888;
  padding: 10px 0px;
  .ipt {
    width: 5%;
    input {
      width: 10px;
      height: 20px;
      margin-top: 20px;
    }
  }
  .cont {
    flex: 3;
  }
  .city {
    flex: 1;
    text-align: right;
  }
}
.dealer .content:first-child {
  border-top: none;
}
.cont p:first-child {
  font-size: 18px;
  line-height: 30px;
}
.cont p:last-child {
  font-size: 14px;
  line-height: 20px;
  color: #ccc;
}
.city p:first-child span:last-child {
  color: red;
  font-size: 14px;
}
.city p:last-child {
  font-size: 14px;
  color: #ccc;
  line-height: 35px;
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
  font-size: 16px;
}
</style>