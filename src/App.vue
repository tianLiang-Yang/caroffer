<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
html,body,#app{
  width: 100%;
  height:100%;
  
}
html{
    font-size: calc(100vw / 750 * 100);
}
body{
  font-size: 14px;
}

a{
  color:#888;
}
</style>
