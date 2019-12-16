<template>
    <div class="wrap" @click.self="hideImageSwiper">
        <van-swipe 
            :duration="3000"
            :loop="false"
            :initial-swipe="current"
            @change="change"
            :show-indicators="false"
        >
            <van-swipe-item v-for="(image, index) in imageList" :key="index">
                <img class="img" v-lazy="image.Url.replace('{0}', image.HighSize)" />
            </van-swipe-item>
        </van-swipe>

        <p>{{`${current+1}/${count}`}}</p>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
            imageList: state=>state.pic.imageList,
            current: state=>state.pic.current,
            count: state=>state.pic.count,
            page: state=>state.pic.page
        })
    },
    methods: {
        ...mapMutations({
            setCurrent: 'pic/setCurrent'
        }),
        ...mapActions({
            getImageTypeList: 'pic/getImageTypeList'
        }),
        change(index){
            // 提前两张加载下一页图片
            if (index > this.imageList.length-2){
                if (this.imageList.length < 30){
                    this.getImageTypeList(1)
                }else{
                    this.getImageTypeList(this.page + 1);
                }
            }
            this.setCurrent(index);
        },
        hideImageSwiper(){
            this.$emit("update:showImageSwiper",false)
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrap /deep/ .van-swipe{
    width: 100%;
}
.img{
    width: 100%;
}
p{
    position: absolute;
    bottom: 50px;
    color: #fff;
    text-align: center;
}
</style>