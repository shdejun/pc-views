<template>
  <label 
    class="yj-checkbox" 
    :class="{
      'is-checked':this.isChecked,
      'is-disabled':this.disabled
      }"
    @click="updateValue"
    >
    <!-- 方框 -->
    <span class="yj-checkbox__box">
      <span class="yj-checkbox_inner">

      </span>
    </span>
    <!-- label -->
    <span class="yj-checkbox_label">
      <slot></slot>
      <template v-if="!this.$slots.default&&this.isGroup">
          {{label}}
      </template>
    </span>
  </label>
</template>
<script>
export default {
  name:'yjCheckbox',
  props:[
    //[Boolean, Array] 布尔值，或者数组（表单多选时），v-model绑定值
    'value',
    //是否禁用
    'disabled',
    //当value 为Array时 提供resetValue值,标记当前checkBox的值
    'label',
    'checked'
  ],
  computed:{
    isChecked(){
      if(typeof this.value == 'boolean'){
        return this.value
      }else if(this.valueIsArray){
        return this.model.includes(this.label)
      }else{
        return this.model
      }
      return false
    },
    model:{
      get(){
        return this.isGroup?this.resetValue
        :this.value == undefined?this.checked
        :this.value
      },
      set(val){}
    },
    //是否是多选框组
    isGroup(){
      let parent = this.$parent;
      while(parent){
        if(parent.$options._componentTag !=='yj-checkbox-group'){
          parent = parent.$parent
        }else{
          this._group = parent
          return true
        }
      }
      return false
    },
    //是否使用GroupValue
    resetValue(){
      return this._group?this._group.value:this.value
    }
  },
  created(){
    //如果value isArray
    this.cc = this.isGroup
    this.valueIsArray = Array.isArray(this.model)
  },
  methods:{
    updateValue(){
      if(this.disabled) return;
      let check;
      if(this.value !== undefined && {}.toString.call(this.value) == '[object Boolean]'){
          this.$emit('input',!this.value)
      }else if(this.valueIsArray){
        if(this.model.includes(this.label)){
          check = JSON.parse(JSON.stringify(this.model));
          delete check[this.model.indexOf(this.label)];
        }else{
          check = JSON.parse(JSON.stringify(this.model));
          check.push(this.label)
        }
      }
      this.$emit('onChange',this.model)
      this.isGroup && this._group.handleChange(check)
    }
  }
}
</script>
<style lang="scss">
  .yj-checkbox{
    position: relative;
    cursor: pointer;
    display: inline-block;
    user-select: none;
    box-sizing: border-box;
    margin-right: 10px;
    &.is-checked{
      .yj-checkbox_inner{
        background-color: #6575f6;
        border-color: #6575f6;
        &::after{
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    &.is-disabled{
      cursor: not-allowed;
      .yj-checkbox_inner{
        background-color: #edf2fc;
        border-color: #dcdfe6;
        &:hover{
          border-color:#dcdfe6;
        }
        &::after{
          border-color: #c0c4cc;
        }
      }
      .yj-checkbox_label{
        color:#c0c4cc;
      }
    }
    .yj-checkbox__box{
      display: inline-block;
      line-height: 1;
    }
    .yj-checkbox_inner{
      display: inline-block;
      position: relative;
      border: 1px solid #c4cad7;
      border-radius: 2px;
      width: 1em;
      height: 1em;
      background-color: #fff;
      z-index: 1;
      vertical-align: middle;
      transition: all .3s;
      &:hover{
        border-color:#6575f6;
      }
      &::after{
        position: absolute;
        content:'';
        width: 3px;
        height: 0.5em;
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        left: 0.25em;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        transform-origin: center;
      }
    }
    .yj-checkbox_label{
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      padding-left: 6px;
    }
  }
</style>