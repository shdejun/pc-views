

### 提示(alert)
---
<div class="demon-block">
    <yj-button @click.native="init">init初始化</yj-button>
    <yj-button @click.native="hidden">hidden隐藏</yj-button>
    <yj-button @click.native="show">show显示</yj-button>
</div>
<script>
export default {
   data(){
     return{
       sideBar:this.$sideBar({})
     }
  },
  methods:{
    init(){
      this.sideBar.init((res) => {
        setTimeout(() => {
           res.hidden()
          }, 3000);
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
  <yj-button @click.native="init">init</yj-button>
  <yj-button @click.native="hidden">hidden</yj-button>
  <yj-button @click.native="show">show</yj-button>
<script>
export default {
   data(){
     return{
       sideBar:this.$sideBar({})
     }
  },
  methods:{
    init(){
      this.sideBar.init((res) => {
        setTimeout(() => {
           res.hidden()
          }, 3000);
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


