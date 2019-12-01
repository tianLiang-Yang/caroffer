<template>
     <div class="allcolor">
        <div class="header" @click="$router.go(-1)">全部颜色</div>
        <div class="year">2019</div>
        <div class="block"></div>
     </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.allcolor{
    width: 100%;
    height:100%;
    background:#eee;
}
.allcolor .header{
    width: 100%;
    height:50px;
    line-height: 50px;
    text-align: center;
     background:white;
}
.allcolor .year{
    width: 100%;
    height:50px;
    line-height: 50px;
    margin-top:10px;
    background:white;
    padding-left: 20px;
    color:skyblue;
    font-size: 18px;
}
.allcolor .block{
    width: 100%;
    background:white;
}
</style>