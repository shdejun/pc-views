<template>
  <button class="yj-button yj-button-normal" :class="[type?`yj-button-${type}`:`yj-button-default`,{'is-plain':plain}]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name:'yjButton',
  props:{
    type:{
      type:String,
      default:'default'
    },
    plain:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style lang="scss">
@import './css/bt.scss'
</style>