<template>
  <div class="yj-card has-shadow">
    <div class="yj-card_header">
      <slot name="header"></slot>
    </div>
    <div class="yj-card_body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'yjCard'
}
</script>
<style lang="scss">
  .yj-card{
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    .yj-card_header{
      padding: 10px 15px;
      border-bottom: 1px solid #ebeef5;
      box-sizing:border-box;
    }
    .yj-card_body{
      padding: 20px;
    }
    &.has-shadow{
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
  }
</style>