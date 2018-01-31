---
title: 单选框
category: 组件
order: 0
---

## Radio 单选框

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

## 示例
<div class="example"></div>

```jsx
var Radio = require('kpc/components/radio');

<div>
    <Radio />单选框
</div>
```

## 常规属性

`disabled` 是否禁用(默认启用)
* @type `{Boolean}`
* @default `false`

<div class="example"></div>

```jsx
var Radio = require('kpc/components/radio');

<div>
    <Radio disabled={true}/>禁用
    <Radio disabled={false}/>启用
</div>
```

`value` radio值
* @type 无具体类型
* @default `false`
使用`v-model`可以双向绑定数据。是否选中会与组件的`trueValue`值做比较(绝对等于`===`)

<div class="example"></div>

```jsx
var Radio = require('kpc/components/radio');

<div>
    <Radio value={true}/>单选框
</div>
```

`trueValue` radio实际值
* @type 无具体类型
* @default `true`

<div class="example"></div>

```jsx
var Radio = require('kpc/components/radio');

<div>
    <Radio value={true} trueValue={1} disabled={true}/>value值与trueValue值不相等
    <Radio value={1} trueValue={1} disabled={true}/>value值与trueValue值相等
</div>
```


## 自定义属性

你可以自定义任何属性，这些属性会挂载到`input`标签上
<div class="example"></div>

```jsx
var Radio = require('kpc/components/radio');

<div>
    <Radio disabled={false}  
        ev-click={function() {alert(this.element.innerHTML);}.bind(self)}
    />点我查看DOM结构
</div>
```



