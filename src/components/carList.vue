<template>
    
        <div class="block">
            <p :id="item.title">{{item.title}}</p>
            <ul v-for="(val,key) in item.data" :key="key" @click="block(val.MasterID)">
                <li>
                <img :src="val.CoverPhoto" v-lazy="val.CoverPhoto" alt />
                <span>{{val.Name}}</span>
                </li>
            </ul>
        </div>
    
</template>

<script>
export default {
    props:['item','flag','block']
}
</script>

<style lang="scss" scoped>
 .block {
  width: 100%;
  overflow: hidden;
}
 .block p {
  width: 100%;
  height: 30px;
  padding-left: 20px;
  background: #ccc;
}
 .block ul {
  width: 100%;
}
 .block ul li {
  width: 90%;
  height: 50px;
  line-height: 40px;
  display: flex;
  margin: 0 18px;
  border-bottom: solid 1px #ccc;
}
 .block ul li img {
  width: 44.16px;
  height: 44.16px;
}
 .block ul li span {
  display: inline-block;
  margin-left: 20px;
}
</style>