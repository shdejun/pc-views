

#### 基本类型

<yj-card class="demon-card">
  <div slot="header" class='header'>
    <span>title</span><yj-button size="mini" type="primary">操作</yj-button>
  </div>
  <p v-for="num in 5">{{'content&nbsp;' + num}}</p>
</yj-card>

<style>
.demon-card{
  width:500px;
}
.header{
  display:flex;
  align-items: center;
  justify-content: space-between;

}
</style>
::: demo
```html
<template>
  <yj-card class="demon-card">
    <div slot="header" class='header'>
      <span>title</span><yj-button size="mini" type="primary">操作</yj-button>
    </div>
    <p v-for="num in 5">{{'content&nbsp;' + num}}</p>
  </yj-card>
</template>
<style>
.demon-card{
  width:500px;
}
.header{
  display:flex;
  align-items: center;
  justify-content: space-between;

}
</style>
```
:::

### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type       |	类型 | String | 可选值为 primary info warning danger | default |
|plain      | 是否朴素按钮 |	Boolean  | true/false | false |
|size      | 尺寸 |	String  | normal/primary/small/mini | normal |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|click         |点击按钮时触发| —  |
