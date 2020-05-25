<template>
    <i :class="[name?'icon-iconset' + name:'icon-iconset0102']" :style="{color:color?color:''}"></i>
</template>
<script>
export default {
  name:'yj-icon',
  props:{
    name:{
      type:String,
      defalut:''
    },
    color:{
      type:String
    }
  },
}
</script>