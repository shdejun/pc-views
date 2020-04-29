

### 基本用法
<yj-button>默认按钮</yj-button>
<yj-button type="primary">主要按钮</yj-button>
<yj-button type="info">信息按钮</yj-button>
<yj-button type="danger">危险按钮</yj-button>
<yj-button type="warning">警告按钮</yj-button>
::: demo
```html
按钮类型
支持default、primary、info、warning、danger五种类型，默认为default~
<yj-button>默认按钮</yj-button>
<yj-button type="primary">主要按钮</yj-button>
<yj-button type="info">信息按钮</yj-button>
<yj-button type="danger">危险按钮</yj-button>
<yj-button type="danger">警告按钮</yj-button>

```
:::


<yj-button plain style="marginTop:20px">默认按钮</yj-button>
<yj-button type="primary" plain>主要按钮</yj-button>
<yj-button type="info" plain>信息按钮</yj-button>
<yj-button type="danger" plain>危险按钮</yj-button>
<yj-button plain type="warning">警告按钮</yj-button>
::: demo
```html
朴素按钮
通过plain属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
<yj-button plain>默认按钮</yj-button>
<yj-button type="primary" plain>主要按钮</yj-button>
<yj-button type="info" plain>信息按钮</yj-button>
<yj-button type="danger" plain>危险按钮</yj-button>
<yj-button plain type="warning">警告按钮</yj-button>
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
