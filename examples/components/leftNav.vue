<template>
  <div id="leftNav">
    <div v-for="(item,index) in Object.keys(lists)" :key="index">
        <p class="title">{{item}}</p>
        <div class="nav-inner common-type" :class="{'high-light':$route.path==name.path}" v-for="(name,index) in lists[item]" :key="index" @click="goContent(name)">
          {{name.desc}}
        </div>
    </div>
  </div>
</template>
<script>
import navJson from '../nav.config.json'
export default {
  name: "left-nav",
  data() {
    return {
      lists:navJson,
      isHighLight:false
    }
  },
  methods: {
    goContent(name){
      this.$router.push({path:name.path})
    }
  },
  mounted(){
    
  },
  watch:{
   '$route.path'(newPath,oldPath){
    
   }
  }
};
</script>
<style lang="scss">
#leftNav{
  width: 200px;
  height: calc(100% - 90px);
  box-shadow: 0 8px 12px #ebedf0;
  margin-right: 20px;
  .title{
    padding: 8px 0 8px 20px;
    color: #2369c1;
    font-weight: 500;
    font-size: 15px;
  }
  .nav-inner{
    cursor: pointer;
  }
 .common-type{
   padding: 8px 0 8px 30px;
   color: #455a64;
   font-weight: 500;
   font-size: 15px;
 }
 .high-light{
   color: #4fc08d;
 }
}
</style>