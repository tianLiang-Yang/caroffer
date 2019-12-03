<template>
  <div class="home">
    <div class="block" v-for="(item,index) in list" :key="index">
      <p :id="item.title">{{item.title}}</p>
      <ul v-for="(val,key) in item.data" :key="key" @click="block(val.MasterID)">
        <li>
          <img :src="val.CoverPhoto" v-lazy="val.CoverPhoto" alt />
          <span>{{val.Name}}</span>
        </li>
      </ul>
    </div>
    <div class="box">
      <p>#</p>
      <ul v-for="(item,index) in list" :key="index">
        <li>
          <a :href="'#'+item.title">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <Popup v-show="flag" :carlist="carlist"></Popup>
  </div>
</template>

<script>
import axios from "axios";
import Popup from "../../components/popup";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
       list: [],
      carlist: [],
      flag: false
    };
  },
  components: {
    Popup
  },
  computed: {
    // ...mapState({
    //   list: state => state.home.list
    // })
  },
  methods: {
    async block(id) {
      this.flag = true;
      let res = await axios.get(
        `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`
      );
      this.carlist = res.data.data;
      console.log(this.carlist);
    },
     async getlist(){
                let res = await axios.get('https://baojia.chelun.com/v2-car-getMasterBrandList.html');
                console.log(res)
                res.data.data.forEach((item,index) => {
                    item.title = item.Spelling.slice(0,1);
                });

                let data2 = [];
                res.data.data.filter(item => {
                    if(data2.findIndex(val => item.title == val.title) == -1){
                        data2.push({
                            title : item.title
                        });
                    }
                });

                data2.forEach((item,index)=>{
                    item.data = res.data.data.filter(val=> val.Spelling.slice(0,1) == item.title)
                });
                console.log(data2);
                this.list = data2
                    // this.list.forEach((item,index) => {
                    // item.title = item.Spelling.slice(0,1);
                    // });

                    // let data2 = [];
                    // this.list.filter(item => {
                    //     if(data2.findIndex(val => item.title == val.title) == -1){
                    //         data2.push({
                    //             title : item.title
                    //         });
                    //     }
                    // });

                    // data2.forEach((item,index)=>{
                    //     item.data = this.list.filter(val=> val.Spelling.slice(0,1) == item.title)
                    // });
                    // console.log(data2);
                    // this.list = data2
            },
    

    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList"
    })
  },
  created() {
     this.getlist()
    console.log("$store>>>>", this.$store);
    this.getMasterBrandList();
    console.log(this.list)
    
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.home .block {
  width: 100%;
  overflow: hidden;
}
.home .block p {
  width: 100%;
  height: 30px;
  padding-left: 20px;
  background: #ccc;
}
.home .block ul {
  width: 100%;
}
.home .block ul li {
  width: 90%;
  height: 50px;
  line-height: 40px;
  display: flex;
  margin: 0 18px;
  border-bottom: solid 1px #ccc;
}
.home .block ul li img {
  width: 44.16px;
  height: 44.16px;
}
.home .block ul li span {
  display: inline-block;
  margin-left: 20px;
}
.home .box {
  position: fixed;
  top: 24%;
  right: 5px;
}
</style>