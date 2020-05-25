<template>
  <toast-inner 
  :title="title"
  :content="content"
  @onReject="onReject">
    <div slot="footer">
      <yj-button type="primary" @click.native="submit" size="mini">确定</yj-button>
    </div>
  </toast-inner>
</template>
<script>
import toastInner from './toastInner';
import yjButton from '../../buttton/index'
export default {
  name:'alert',
  props:{
    title:String,
    content:{
      type:String,
      default:'这是content'
    }
  },
  methods:{
    submit(){
      this.$emit('resolve','点击了确定');
    },
    onReject(){
      this.$emit('reject','点击了取消')
    }
  },
  components:{
    toastInner,
    yjButton
  }
}
</script>
<style lang="scss" scoped>
  
</style>