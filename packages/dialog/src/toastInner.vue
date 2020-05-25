<template>
  <div class="yj-toast-box">
    <div class="yj-toast-box_header">
        <span class="yj-toast-box_title">{{title}}</span>
        <yj-icon v-if="showClose" class="icon-iconset0127 icon-close" @click.native="close"></yj-icon>
    </div>
    <div class="yj-toast-content" v-if="content" v-html="content"></div>
    <div class="yj-toast-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import yjIcon from '../../yjIcon/index'
export default {
  name:'toastInner',
  props:{
    title:{
      type:String,
      default:'标题'
    },
    content:{
      type:String,
      default:''
    },
    showClose:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    close(){
      this.$emit('onReject')
    }
  },
  components:{
    yjIcon
  }
}
</script>
<style lang="scss">
  .yj-toast-box{
    display: inline-block;
    width: 400px;
    padding: 10px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border:  1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-align: left;
    overflow: hidden;
    .yj-toast-box_header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .yj-toast-box_title{
        font-size: 18px;
        color:#303133;
      }
      .icon-close{
        cursor: pointer;
      }
    }
    .yj-toast-content{
      padding: 10px 0;
      font-size: 14px;
      color:#606266;
    }
    .yj-toast-footer{
      text-align: right;
    }
  }
</style>