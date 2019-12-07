<template>
    <div class="cartype">
        <div class="header"  @click="$router.go(-1)">全部车款</div>
        <div class="content">
            <!-- 年份 ----------------------------------------------- -->
            <div class="title">
                <span :class="{active : curIndex==index}"  v-for="(item,index) in year"  :key="index" @click="tab(item,index)">
                    {{item}}
                </span>
            </div>

            <!-- 列表 ------------------------------------------------- -->
            <div class="cont" v-for="(item,index) of currentList" :key="index">
                <p class="text">{{item.key}}</p>
                <div class="box" v-for="(item1,index1) in item.list" :key="index1" @click="$router.push({path:'/swiper',query:{type:`${item1.market_attribute.year}款${item1.car_name}`}})">
                    
                   <div class="left2">
                        <p>{{item1.market_attribute.year}}款{{item1.car_name}}</p>
                        <p>{{item1.horse_power}}马力{{item1.gear_num}}档{{item1.trans_type}}</p>
                   </div>
                    <p class="right2">
                        <span>{{item1.market_attribute.dealer_price_min}}</span>
                        <span>指导价{{item1.market_attribute.official_refer_price}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
// import List from '../../../components/carType';
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data(){
        return {
            curIndex:0
        }
    },
    components:{
        
    },
     computed: {
        ...mapState({
        list: state => state.xiang.list,
        year: state => state.xiang.year,
        current : state => state.xiang.current,
         currentList: state => state.xiang.currentList,
        }),
   
  },
   methods: {
     ...mapMutations({
      setCurrent:"xiang/setCurrent"
    }),
    ...mapActions({
      getInfoAndListById: "xiang/getInfoAndListById"
    }),
    // 点击切换年份
    tab(item,index){
      this.curIndex = index
      this.setCurrent(item);
    }
  },
  async created() {
      await this.getInfoAndListById(this.$route.query.id);
  }
};

</script>

<style lang="scss" scoped>
.cartype{
    width: 100%;
    height:100%;
    background:#eee;
    font-size: 14px;
}
.cartype .header{
    width: 100%;
    height:50px;
    line-height: 50px;
    text-align: center;
    background:white;
}
.cartype .year{
    width: 100%;
    height:50px;
    line-height: 50px;
    margin-top:10px;
    background:white;
    padding-left: 20px;
    color:skyblue;
    font-size: 18px;
}
.content {
  width: 100%;
  // padding: 0 10px;
  position: relative;
  background: #fff;
  font-size: 12px;
  .left {
    padding: 20px 0;
  }
  .left p:first-child {
    color: red;
    font-size: 14px;
  }
  .left p:last-child {
    //font-size: 14px;
    line-height: 30px;
    color: #ccc;
  }
  .right {
    color: #fff;
    position: absolute;
    top: 22px;
    right: 10px;
    text-align: center;
    padding: 10px 70px;
    border-radius: 10px;
    background: rgb(99, 169, 248);
  }
}
.title {
  width: 100%;
  display: flex;
  background: #fff;
  margin-top: 8px;
  line-height: 40px;
  font-size: 15px;
  span {
    padding: 0 15px;
  }
}
.cont {
  width: 100%;
  font-size: 14px;
  background:#eee8e8;
  .text {
    margin-left: 10px;
    line-height: 20px;
    background: #eee8e8;
  }
}

.box {
  width: 100%;
  background: #fff;
  border-bottom: solid 1px #ccc;
  position: relative;
}
.box .left2 p:first-child {
  font-size: 15px;
  line-height: 30px;
  margin: 0 10px;
  
}
.box .left2 p:nth-child(2) {
  color: #ccc;
  font-size: 14px;
  padding: 0 10px;
  margin-bottom: 6px;
}
// .box p:nth-child(3) {
//   text-align: right;
//   font-size: 13px;
//   color: #888;
//   padding: 0 10px;
// }
.left2{
    padding:10px 0px; 
}
.right2{
    position: absolute;
    margin-right: 10px;
    top:10px;
    right:3px;
    width: 100px;
    text-align: right;
    display: flex;
    flex-direction: column;
}
.right2 span:nth-child(1){
    color: rgb(99, 169, 248);
    line-height: 30px;
}
.active{
  color:rgb(99, 169, 248);
}

</style>