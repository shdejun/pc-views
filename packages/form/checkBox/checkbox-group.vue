<template>
  <div class="yj-checkbox-group" role="checkboxgroup">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:'yj-checkbox-group',
  props:{
    value:{}
  },
  methods:{
    handleChange(val){
      this.$emit('onChange',val)
      this.$emit('input',val)
    }
  }
}
</script>