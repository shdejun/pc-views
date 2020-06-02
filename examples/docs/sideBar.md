

### 提示(alert)
---
<div class="demon-block">
    <yj-button @click.native="init">init初始化</yj-button>
    <yj-button @click.native="hidden">hidden隐藏</yj-button>
    <yj-button @click.native="show">show显示</yj-button>
</div>
<script>
import demonCard from '../components/demonCard.vue'
export default {
   data(){
     return{
       sideBar:this.$sideBar({component:demonCard})
     }
  },
  methods:{
    init(){
      this.sideBar.init((res) => {
        // setTimeout(() => {
        //    res.hidden()
        //   }, 3000);
      })
    },
    hidden(){
      this.sideBar.hidden()
    },
    show(){
      this.sideBar.show((res)=>{
         setTimeout(() => {
           res.hidden()
          }, 3000);
      })
    }
  }
}
</script>

::: demo
```html
<template>
  <yj-button @click.native="init">init初始化</yj-button>
  <yj-button @click.native="hidden">hidden隐藏</yj-button>
  <yj-button @click.native="show">show显示</yj-button>
<template>
<script>
import demonCard from '../components/demonCard.vue'
export default {
   data(){
     return{
       sideBar:this.$sideBar({component:demonCard})
     }
  },
  methods:{
    init(){
      this.sideBar.init((res) => {
        // setTimeout(() => {
        //    res.hidden()
        //   }, 3000);
      })
    },
    hidden(){
      this.sideBar.hidden()
    },
    show(){
      this.sideBar.show((res)=>{
         setTimeout(() => {
           res.hidden()
          }, 3000);
      })
    }
  }
}
</script>


<!-- PROP:component--demonCard
<template>
  <div>
    <div 
      class="yj-card has-shadow" 
      v-for="it in 10" 
      :key="it" 
      class="demon-card"
    >
      <div class="yj-card_header" class="header">
        <span>title</span><a href="#sideBar" size="mini" type="primary">操作</a>
      </div>
      <div class="yj-card_body" class="">
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
</style> -->
```
:::

### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|component      | VNode |	VNode   |	—           | '' |
|params      |	VNode.$propData |	Object  |	—           | {} |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|init         |初始化| sideBar  |
|hidden       |隐藏| sideBar |
|show         |显示| sideBar |
|destroy      |销毁| —  |


