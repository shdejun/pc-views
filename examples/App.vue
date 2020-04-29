<template>
  <div id="app">
    <header-top/>
    <div class="content">
      <left-nav class="nav"/>
      <router-view class="center-views"/>
    </div>
  </div>
</template>

<script>
import leftNav from './components/leftNav';
import headerTop from './components/headerTop'
export default {
  name: 'App',
  data(){
    return{
      route:'/'
    }
  },
  components:{
    leftNav,
    headerTop
  },
  watch:{
    // '$route.path'(n,o){
    //   this.route = n
    // }
  }
}
</script>

<style lang="scss">
@import './assets/css/index';
#app {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .content{
    height: calc(100% - 60px);
    display: flex;
    flex: row;
    .nav{
      width: 200px;
      height: 100%;
    }
    .center-views{
      flex: 1;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
