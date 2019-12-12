<template>
   <div class="allCity" v-show="flag" @click="nones">
       <div class="block">
           <!-- $router.push({path:'/base',query:{name:item.CityName,cityid:item.CityID}} -->
           <p v-for="(item,index) in city" :key="index" @click="set(item)">
               {{item.CityName}}
            </p>
       </div>
   </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:['nones','flag','city'],
    methods:{
        ...mapActions({
            setClick : 'base/setClick'
        }),
        set(item){
            this.setClick({name:item.CityName,cityid:item.CityID,flag:false});
            
        }
    }
}
</script>

<style lang="scss" scoped>
.allCity{
    width: 100%;
    height:100%;
    background:rgba(0, 0, 0, .1);
    position: fixed;
    top:0;
    left:0;
}
.allCity .block{
    width: 75%;
    height:100%;
    position: absolute;
    top:0;
    right:0;
    background:white;
}
.allCity .block p{
      width: 100%;
      height:44.16px;
      font-size: 14px;
      padding:0 10px;
      line-height: 44.16px;
      background:white;
      padding:0 15px;
      display: flex;
      justify-content: space-between;
    }
</style>