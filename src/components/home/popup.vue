<template>
<!-- 弹窗组件 -->
    <div class="popup">
       <div class="left" @click="close"></div>
       <div class="right">
            <div class="box" v-for="(item,index) in carlist" :key="index">
            <P>{{item.GroupName}}</P>
            <div class="ul" v-for="(val,key) in item.GroupList" :key="key" @click="login(val.SerialID)">
                <li><img :src="val.Picture" v-lazy="val.Picture" alt=""> <span><h4>{{val.AliasName}}</h4> <p>{{val.DealerPrice}}</p></span></li>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:['carlist','flag'],

    name:'carlist',
    methods:{
        close(){
          this.$emit('change',false);
        },
         login(id){
             this.$router.push({path:'/detail',query:{id}})
         }
    }
}
</script>

<style lang="scss" scoped>
.popup{
    width:100%;
    display: flex;
    position: fixed;
    top:0;
    right:0;
    height:100%;
    overflow: hidden;
    .left{
        flex:1;
        background: rgba(0,0,0,0.5);
    }
    .right{
        flex: 3;
        background: #fff;
        overflow: auto;
    }
}
.right .box{
    width: 100%;
}
.right .box>p{
    width: 100%;
    height:30px;
    line-height: 30px;
    padding-left: 20px;
    background: #ccc;
}
.right .box .ul{
    width: 100%;
}
.right .box .ul li{
    width: 100%;
    height:69px;
    display: flex;
    padding: 0 18px;
    border-bottom: solid 1px #888;
}
.right .box .ul li img{
    width: 99.36px;
    height: 66.23px;
}
.right .box .ul li span{
    display: inline-block;
    margin-left:20px;
    margin-top: 10px;
}
.right .box .ul li span h4{
    margin: 5px 0;
}
.right .box .ul li span p{
    color:red;
}
</style>