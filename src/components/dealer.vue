<template>
  <div class="dealer">
        <div class="content" v-for="(item,index) in DealerList" :key="index">
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

</template>

<script>
export default {
  props: ["DealerList"],
  data() {
    return {
      result: [0, 1, 2, 3]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.dealer {
  width: 100%;
  background: #fff;
  padding: 0 10px;
}
.content {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #888;
  padding:10px 0px;
  .ipt {
    width: 5%;
    input {
      width:10px;
      height:20px;
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
</style>