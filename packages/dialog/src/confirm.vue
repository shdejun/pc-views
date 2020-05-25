<template>
  <toast-inner 
  :title="title"
  :content="content"
  :showClose="showClose"
  @onReject="onReject">
    <div slot="footer">
      <yj-button @click.native="onReject" size="mini">取消</yj-button>
      <yj-button type="primary" @click.native="submit" size="mini">确定</yj-button>
    </div>
  </toast-inner>
</template>
<script>
import toastInner from './toastInner';
import yjButton from '../../buttton/index'
export default {
  name:'confirm',
  props:{
    title:String,
    content:{
      type:String,
      default:'这是content'
    },
    showClose:{
      type:Boolean,
      default:true
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