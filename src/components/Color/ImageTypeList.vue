<template>
  <div class="wrap">
    <scroll
            ref="scroll"
            :data="value"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
        >
            <ul>
                <span :key="index" @click="showSwiper(index)" v-for="(item, index) in value" :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"/>
            </ul>
        </scroll>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CommonList from "./CommonList";
import Scroll from '../better-scroll/scroll';
export default {
  computed: {
    ...mapState({
      count: state => state.img.Count,
      value: state => state.img.imageTypeList,
      Page: state => state.img.Page
    }),
    pullDownRefreshObj: () => {
        return {
            threshold: 90,
            stop: 50,
            txt: '刷新成功'
        }
    },
    pullUpLoadObj: () => {
        return {
            threshold: 50,
            txt: {
                more: '加载更多',
                noMore: '没有更多数据了'
            }
        }
    }
  },
  watch: {
      pullDownRefreshObj: {
          handler(val) {
              const scroll = this.$refs.scroll.scroll
              if (val) {
                  scroll.openPullDown()
              } else {
                  scroll.closePullDown()
              }
          },
          deep: true
      },
      pullUpLoadObj: {
          handler(val) {
              const scroll = this.$refs.scroll.scroll
              if (val) {
                  scroll.openPullUp()
              } else {
                  scroll.closePullUp()
              }
          },
          deep: true
      },
  },
  components: {
    CommonList,
    Scroll
  },
  methods: {
    ...mapActions({
      getImageTypeList: "img/getImageTypeList",
      refreshDispatch: 'img/getImageTypeList',
      loadMoreDispatch: 'img/getImageTypeList'
    }),
    ...mapMutations({
      setCurrent:"img/setCurrent"
    }),
    async onPullingDown() {
        // console.log('pullingdown...');
        // setTimeout(()=>{
        //     this.refreshDispatch(1);
        // }, 10000);
        await this.refreshDispatch(1);
    },
    async onPullingUp() {
        // console.log('pullingup...');
        // setTimeout(()=>{
            // this.loadMoreDispatch(this.page + 1);
        // }, 10000);
        await this.loadMoreDispatch(this.page + 1);
    },
    showSwiper(index) {
      // 显示轮播
      console.log('111');
      
      this.$emit("update:showImageSwiper", true);
      // 修改current
      this.setCurrent(index);
    }
  },
  mounted() {
    this.getImageTypeList();
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul span {
  display: inline-block;
  width: 32.7vw;
  height: 32.7vw;
  margin-bottom: 1vw;
  background-size: cover;
  background-position: center;
}
</style>