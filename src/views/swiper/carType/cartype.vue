<template>
    <div class="cartype">
        <div class="header"  @click="$router.go(-1)">全部车款</div>
        <div class="year">2019</div>
        <div class="content">
            <p>看达到搜索</p>
            <div class="block">
                
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cartype{
    width: 100%;
    height:100%;
    background:#eee;
}
.cartype .header{
    width: 100%;
    height:50px;
    line-height: 50px;
    text-align: center;
    background:white;
}
.cartype .year{
    width: 100%;
    height:50px;
    line-height: 50px;
    margin-top:10px;
    background:white;
    padding-left: 20px;
    color:skyblue;
    font-size: 18px;
}
.cartype .content{
    width: 100%;
}
.cartype .content p{
    width: 100%;
}
.cartype .content .block{
    width: 100%;
    background:white;
}
</style>