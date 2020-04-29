<template>
      <el-dialog
      title="提示"
      :visible.sync="visible"
      append-to-body 
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>
</template>
<script>
export default {
  name:'lyPopup',
  props:{
    visible:{
      type:Boolean,
      default:true
    }
  },
  created() {
     console.log(this,'created')
  },
  methods:{
    handleClose(){
      console.log(this.deletePopup,'father')
      //  this.deletePopup()
     
    }
  }
}
</script>
<style lang="scss">
  
</style>