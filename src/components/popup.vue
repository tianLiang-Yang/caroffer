<template>
<!-- 弹窗组件 -->
    <div class="popup">
        <div class="box" v-for="(item,index) in carlist" :key="index">
            <P>{{item.GroupName}}</P>
            <div class="ul" v-for="(val,key) in item.GroupList" :key="key" @click="login(val.SerialID)">
                <li><img :src="val.Picture" v-lazy="val.Picture" alt=""> <span><h4>{{val.AliasName}}</h4> <p>{{val.DealerPrice}}</p></span></li>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
export default {
    props:['carlist'],
    methods:{
        // 跳转详情  传参
        login(id){
            console.log(id)
            this.$router.push({path:'/detail',query:{id}})
        }
    }
}
</script>

<style lang="scss" scoped>
.popup{
    position: fixed;
    top:0;
    right:0;
    width: 75%;
    height:100%;
    background:white;
    overflow-y: auto;
    font-size: 14px;
}
.popup .box{
    width: 100%;
}
.popup .box>p{
    width: 100%;
    height:30px;
    line-height: 30px;
    padding-left: 20px;
    background: #ccc;
}
.popup .box .ul{
    width: 100%;
}
.popup .box .ul li{
    width: 100%;
    height:69px;
    display: flex;
    padding: 0 18px;
    border-bottom: solid 1px #ccc;
}
.popup .box .ul li img{
    width: 99.36px;
    height: 66.23px;
}
.popup .box .ul li span{
    display: inline-block;
    margin-left:20px;
}
.popup .box .ul li span h4{
    margin: 5px 0;
}
.popup .box .ul li span p{
    color:red;
}
</style>