

### 基本用法
---
<div class="demon-block">
    <rich-text :innerHtml="innerHtml" @onChange="onchange"/>    
</div>
<script>
import lyPopup from '../../packages/popup/index.js'
export default {
   data(){
     return{
      innerHtml:'<h1>文本</h1>'
     }
  },
  methods:{
    onchange(e){
      alert(e)
    }
  }
}
</script>

---

基础用法

::: demo
```html
 <div class="demon-block">
  <rich-text :innerHtml="innerHtml" @onChange="onchange"/>    
</div>
<script>
export default {
   data(){
     return{
        innerHtml:'<h1>文本</h1>'
     }
  },
  methods:{
    onchange(e){
      alert(e)
    }
  }
}
</script>

```
:::


### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|innerHtml      |	默认富文本内容 |	String   |	—           | default |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onChange         |文本内容change时触发| String  |
