<template>
  <button 
    class="yj-button yj-button-normal" 
    :class="[
    type?`yj-button-${type}`:`yj-button-default`,
    {'is-plain':plain},
    size&&`yj-button-${size}`
    ]">
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
    },
    size:{
      type:String,
      default:'normal'
    }
  }
}
</script>
<style lang="scss">
@import './css/bt.scss';
$types:(
  (
    size:'normal',
    pad:12px 20px,
    fs:14px,
    radius:4px,
  )
  (
    size:'medium',
    pad:10px 20px,
    fs:14px,
    radius:4px,
  )
  (
    size:'small',
    pad:9px 15px,
    fs:12px,
    radius:3px
  )
  (
    size:'mini',
    pad:7px 15px,
    fs:12px,
    radius:3px
  )
);
@for $i from 1 through length($types) {
  $item: nth($types, $i);
  .yj-button-#{map-get($item, size)}{
    padding: map-get($item, pad);
    font-size: map-get($item, fs);
    border-radius: map-get($item,radius);
  }
  
}
</style>