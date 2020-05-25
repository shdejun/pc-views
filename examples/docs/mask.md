

### 基本用法
---
<div class="demon-block">
    <yj-button @click.native="onMaskShow">弹出遮罩层</yj-button>
</div>
<script>
export default {
   data(){
     return{
     }
  },
  methods:{
    onMaskShow(e){
       this.$mask.show()
    }
  }
}
</script>

---

基础用法

::: demo
```html
<div>
    <yj-button @click.native="onMaskShow">弹出遮罩层</yj-button>
</div>
<script>
export default {
   data(){
     return{
     }
  },
  methods:{
    onMaskShow(){
       this.$mask.show()
    }
  }
}
</script>

```
:::


### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|nothing      |	nothing |	nothing   |	— nothing          | nothing |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|nothing         |nothing| nothing  |
