<template>
<div class="home">
    <div class="box" ref="box">
        <div class="select" v-for="(item,index) in list" :key="index" ref="select">
            <div class="top" :id="index">{{item.title}}</div>
            <div class="bottom">
                <li v-for="(val,i) in item.data" :key="i" @click="showPopup(val.MasterID)">
                    <div class="image"><img v-lazy="val.CoverPhoto" /></div>
                    <span>{{val.Name}}</span>
                </li>
            </div>
        </div>
    </div>

    <!-- 弹窗组件 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%' }">
        <div class="dialog" v-for="(item,index) in carlist" :key="index">
            <div class="v-top">{{item.GroupName}}</div>
            <div class="c-bottom" v-for="(val,i) in item.GroupList" :key="i">
                <dl @click="detail(val)">
                    <dt>
                        <img v-lazy="val.Picture" />
                    </dt>
                    <dd>
                        <span>{{val.AliasName}}</span>
                        <b>{{val.DealerPrice}}</b>
                    </dd>
                </dl>
            </div>
        </div>
    </van-popup>

    <!-- 点击跳转 -->
    <Drawer :list="list" @skip="skip"></Drawer>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex";
import BScroll from "better-scroll";
import Drawer from "@/components/home/drawer.vue";
export default {
    name: "home",
    components: {
        Drawer
    },
    data() {
        return {
            show: false, //弹层显示隐藏
            left: null,
            right: null,
            ind: 0,
            scrollH: 0
        };
    },
    computed: {
        ...mapState({
            list: state => state.home.list,
            carlist: state => state.home.carlist
        })
    },
    mounted() {
        this.getMasterBrandList();
    },
    methods: {
        ...mapActions({
            getMasterBrandList: "home/getMasterBrandList",
            getMakeListByMasterBrandId: "home/getMakeListByMasterBrandId"
        }),
        //跳转详情
        detail(val) {
            let item = JSON.stringify(val);
            sessionStorage.setItem("item", item);
            this.$router.push({path:"/detail",query:{id:val.SerialID}});
        },
        //点击弹窗
        showPopup(id) {
            this.show = true;
            this.getMakeListByMasterBrandId(id);
        },
        skip(index) {
            let boxel = this.$refs.box;
            boxel.scrollTop = boxel.children[index].offsetTop;
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
}
.main {
    width: 100%;
    height: 100%;
}
.box {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.top {
    font-size: 14px;
    line-height: 20px;
    background: #f4f4f4;
    color: #aaa;
    padding-left: 15px;
}
.select {
    width: 100%;
    .bottom {
        width: 100%;
        li {
            height: 50px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            line-height: 50px;
            align-items: center;
            border-bottom: 1px solid #ccc;
            margin: 0 15px;
            span {
                margin-left: 15px;
                font-size: 14px;
            }
            .image {
                width: 44px;
                height: 44px;
                img {
                    height: 100%;
                }
            }
        }
        li:last-child {
            border: none;
        }
    }
}
.c-bottom {
    width: 100%;
    display: flex;
    padding: 15px;
    color: #5f687a;
    border-bottom: 1px solid #ccc;
    dl {
        display: flex;
        width: 100%;
        dd {
            width: 65%;
            height: 100%;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            span {
                font-size: 14px;
            }
            b {
                color: #f00;
                font-size: 14px;
                font-weight: 400;
            }
        }
        dt {
            width: 35%;
            height: 60px;
            img {
                width: 99.36px;
                height: 66.23px;
            }
        }
    }
}
.v-top {
    width: 100%;
    margin-left: 1px;
    font-size: 14px;
    line-height: 20px;
    background: #f2f2f2;
    padding-left: 15px;
    color: #717171;
}
.van-popup--right {
    width: 75%;
}
</style>