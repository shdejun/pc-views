

### 提示(alert)
---
<div class="demon-block">
    <yj-button @click.native="showAlert">alert</yj-button>
</div>
<script>
export default {
   data(){
     return{
       show:false,
       title:'标题'
     }
  },
  methods:{
    showAlert(){
      this.$dialog.alert({
        title:'Alert！',
        content:'警告content!!是否继续?'
      }).then(res => {
        alert(res)
      }).catch(rej => {
        alert(rej)
      })
    },
    showConfirm(){
      this.$dialog.confirm({
        title:'Alert！',
        content:'确认content!!是否继续?',
      }).then(res => {
        alert(res)
      }).catch(rej => {
        alert(rej)
      })
    }
  }
}
</script>


::: demo
```html
<div class="demon-block">
    <yj-button @click.native="showAlert">alert</yj-button>
</div>
<script>
export default {
   data(){
     return{
       show:false,
       title:'标题'
     }
  },
  methods:{
    showAlert(){
      this.$dialog.alert({
        title:'Alert！',
        content:'警告content!!是否继续?'
      }).then(res => {
        alert(res)
      }).catch(rej => {
        alert(rej)
      })
    }
  }
}
</script>

```
:::
### 确认提示(confrim)
---
<div class="demon-block">
    <yj-button @click.native="showConfirm">confirm</yj-button>
</div>

::: demo
```html
<div class="demon-block">
    <yj-button @click.native="showConfirm">alert</yj-button>
</div>
<script>
export default {
   data(){
     return{
       show:false,
       title:'标题'
     }
  },
  methods:{
    showConfirm(){
      this.$dialog.confirm({
        title:'Alert！',
        content:'确认content!!是否继续?'
      }).then(res => {
        alert(res)
      }).catch(rej => {
        alert(rej)
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
|title      |标题 |	String   |	—           | '' |
|content      |	消息内容 |	String/Html/VNode  |	—           | '' |
|showClose      |	是否显示关闭按钮 |	Boolean   |	—           | true |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onclick         |点击按钮时触发| —  |
