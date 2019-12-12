<template>
    <div class="preview">
        <van-image-preview
        v-model="showPreview"
        :images="list"
        @change="change"
        :start-position="current"
        >
             <template v-slot:index>{{`${current+1}/${count}`}}</template>
        </van-image-preview>
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
        }),
        list(){
            return this.imageList.map(item=>{
                return item.Url.replace('{0}', item.HighSize)
            })
        },
        showPreview: {
            get () {
                return this.showImageSwiper
            },
            set (value) {
                this.$emit("update:showImageSwiper",false)
            }
        }
    },
    props: {
        showImageSwiper: {
            type: Boolean,
            default: false
        }
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

<style lang="scss">
    .preview /deep/ .van-image-preview__overlay{
        background: #000;
    }
</style>