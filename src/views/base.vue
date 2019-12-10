<template>
  <div class="base" v-if="list">
    <div class="title">可向多个商家咨询最低价,商家及时回复</div>
    <div class="main" ref="main" @scroll="scroll">
      <!-- -------------------------------------------------------- -->
      <div class="box" @click="$router.push({path:'/share',query:{id:location.CityID}})">
        <div class="left">
          <img :src="list.Picture" alt />
        </div>
        <div class="right">
          <p>{{list.AliasName}}</p>
          <p>{{this.$route.query.type}}</p>
          <div class="jian">&gt;</div>
        </div>
      </div>
      <!-- -------------------------------------------------------- -->
      <p class="details">个人信息</p>
      <!-- ---------------------------------------------------------- -->
      <div class="message">
        <p>
          <span>姓名</span>
          <span><input type="text" placeholder="请输入姓名"></span>
        </p>
        <p>
          <span>手机</span>
          <span><input type="text" placeholder="请输入手机号"></span>
        </p>
        <!-- $router.push({path:'/share',query:{city:location.CityName}}) -->
        <p @click="block">
          <span>城市</span>
          <span>{{ name || location.CityName }}</span>
          <span class="cityj">&gt;</span>
        </p>
        <div class="floor">询最低价</div>
      </div>
      <!-- ---------------------------------------------------------- -->
      <p ref="pp" class="details">选择报价经销商</p>
      <!-- -------------------------------------------------------- -->
      <div class="dealer">
        <div class="content">
          <div class="ipt">
            <input type="checkbox" />
          </div>
          <div class="cont">
            <p>北京中润发奥迪</p>
            <p>北京市丰台区丽泽路99号</p>
          </div>
          <div class="city">
            <p>
              <span></span>
              <span>万</span>
            </p>
            <p>售本市</p>
          </div>
        </div>
      </div>
      <!-- --------------------------------------------------------------- -->
      <div class="btn" v-show="show">询最低价</div>
    </div>
    <!-- 全国省市组件 -->
    <Share v-show="flag" :cityName="location.CityName"></Share>
  </div>
</template>

<script>
import Share from '../components/share'
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      list: [],
      show: false,
      flag:false,
      
    };
  },
  components:{
      Share
  },
  computed:{
      ...mapState({
        lists:state => state.base.list,
        location:state => state.base.location,
        name:state => state.base.name,
        cityid:state => state.base.cityid
      })
  },
  methods: {
    ...mapActions({
        getIpAddress : 'base/getIpAddress',
        getCarId : 'base/getCarId',
        getCityList : 'share/getCityList'   
    }),
    scroll(e) {
      if (this.$refs.main.scrollTop >= this.$refs.pp.offsetTop) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    block(){
      this.flag = true;
    }
  },
  async created() {
    sessionStorage.setItem('id',this.$route.query.carId)
    
     this.item = JSON.parse(sessionStorage.getItem("item"));
     this.list = this.item
      await this.getCarId();
      let params = {};
      if(!this.$route.query.carId){
         params = {
           cityId : this.$route.query.cityid,
           carId : this.$route.query.data
         }
      }else{
        this.carId = sessionStorage.getItem("id");
        console.log(this.carId)
        params = {
           cityId : this.cityid,
           carId : this.carId
        }
      }
      
      await this.getIpAddress(params);
      console.log(params)
   }
};
</script>

<style lang='scss' scoped>
.base {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee8e8;
}
.title {
  width: 100%;
  height: 35px;
  background: rgb(124, 223, 124);
  color: #fff;
  text-align: center;
  line-height: 35px;
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
  }
}
.right p:first-child {
  font-size: 20px;
  line-height: 40px;
}
.right p:last-child {
  font-size: 18px;
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
  line-height: 30px;
  padding: 0 10px;
}
.message {
  width: 100%;
  padding: 0 10px 15px;
  background: #fff;
  p {
    display: flex;
    line-height: 50px;
    border-bottom: 1px solid rgb(236, 231, 231);
    font-size: 18px;
    justify-content: space-between;
    padding-right: 20px;
  }
}
.message p:nth-child(3) {
  position: relative;
}
.message p input{
  border:none;
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
  border-top: 1px solid #ccc;
  display: flex;
  padding: 20px 0;
  .ipt {
    width: 5%;
    input {
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
}
</style>