<template>
     <div class="allcolor">
        <div class="header" @click="$router.go(-1)">全部颜色</div>
        <div class="year">2019</div>
        <ul class="block">
            <li><span></span>阿格斯棕</li>
            <li><span></span>朱鹭白</li>
        </ul>
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
    font-size: 14px;
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
    margin-bottom: 10px;
}
.allcolor .block{
    width: 100%;
    background:white;
    display: flex;
    flex-wrap: wrap;
}
.allcolor .block li{
    width: 190.44px;
    height:39px;
    padding: 0 10px;
    line-height: 49px;
     margin:10px 8px;
    border:solid 1px #09f;
}
.allcolor .block li span{
    display:inline-block;
    width: 22.08px;
    height: 22.08px;
    margin:0 10px;
    background:rgba(70, 44, 44, 0.8);
}
</style>