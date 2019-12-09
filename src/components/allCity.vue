<template>
   <div class="allCity" v-show="flag" @click="none">
       <div class="block"></div>
   </div>
</template>

<script>
export default {
    props:['flag'],
    methods:{
        none(){
            this.flag = false
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
</style>