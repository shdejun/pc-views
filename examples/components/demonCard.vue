<template>
  <div>
    <div class="yj-card has-shadow demon-card" v-for="it in 10" :key="it">
      <div class="yj-card_header header">
        <span>title</span><a href="#sideBar" size="mini" type="primary">操作</a>
      </div>
      <div class="yj-card_body">
        <p v-for="num in 3" :key="num">{{'content&nbsp;' + num}}</p>
      </div>
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
    margin: 10px;
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
  .demon-card{
    width:300px;
  }
.header{
  display:flex;
  align-items: center;
  justify-content: space-between;

}
</style>