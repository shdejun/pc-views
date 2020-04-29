

### 基本用法
---
<div class="demon-block">
  <div>这是个对话框</div>
     <ly-Table />
  <yj-button @click.native="handlerActionSheet" type="primary">弹出菜单</yj-button>
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
    handlerActionSheet(){
      this.show = !this.show
    },
    onSelected(item){
      alert(item.name)
    }
  }
}
</script>

---

基础用法
通过v-model控制显示和隐藏

::: demo
```html
 <div class="demon-block">
  <yj-button @click.native="handlerActionSheet" type="primary">弹出菜单</yj-button>
  <action-sheet v-model="show"></action-sheet>
</div>
<script>
export default {
   data(){
     return{
       show:false
     }
  },
  methods:{
    handlerActionSheet(){
      this.show = true
    }
  }
}
</script>

```
:::


### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type      |	类型，可选值为 primary info warning danger |	String   |	—           | default |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onclick         |点击按钮时触发| —  |
