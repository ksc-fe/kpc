---
title: 输入框
category: 组件
order: 2
sidebar: doc
---

# 属性

## Input

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 在原生`input`标签的`type`取值的基础上扩展了`textarea`值,当取该值时渲染成`<textarea>` | `string` | `"text"` |
| name | 原生`input`标签的`name`属性 | `string` | `undefined` |
| value | 输入框的值,可用`v-model`进行双向绑定 | `string` | `undefined` |
| defaultValue | `input`的`defaultValue`，首次渲染使用该值 | `string` | `undefined` |
| placeholder | 占位文案 | `string` | `undefined` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否展示快速清除按钮 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| rows | 当`type = "textarea"`时，默认展示文本行数 | `number` &#124; `string` | `2` |
| autoWidth | 是否宽度随输入的文本的长度变化而变化 | `boolean` | `false` |
| fluid | 是否宽度100% | `boolean` | `false` |
| width | 指定宽度，组件会加上单位`px` | `string`  &#124; `number` | `undefined` |
| stackClearIcon | 是否将清空按钮覆盖在`suffix`按钮上展示来节省空间 | `boolean` | `false` |
| frozenOnInput | 是否在输入的过程中冻结`value`更新到视图 | `boolean` | `false` |
| inline | 是否展示内联模式 | `boolean` | `flase` |
| resize | 指定textarea输入框拖动调整大小的方向，默认只能垂直方向调整 | `"none"` &#124; `"vertical"` &#124; `"horizontal"` &#124; `"both"`' | `"vertical"` |
| flat | 是否展示扁平样式 | `boolean` | `false` |

## Search

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 组件输入的值 | `string` | `""` |
| placeholder | 展位文案 | `string` | `"请输入关键字"` |
| type | 类型 | `"default"` &#124; `"line"` | `"default"` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| open | 是否展开状态 | `boolean` | `false` |

# 扩展点

## Input

| 名称 | 说明 |
| --- | --- |
| prepend | 往`input`前面追加内容 |
| append | 往`input`后面追加内容 |
| prefix | 往`input`头部追加前缀 |
| suffix | 往`input`尾部追加后缀 |


# 事件

## Input

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 点击清除按钮时触发 | - |
| change | 原生`change`事件，绑定在组件内部`input`元素上 | `Event` |
| keydown | 原生`keydown`事件，绑定在组件内部`input`元素上 | `Event` |
| keyup | 原生`keyup`事件，绑定在组件内部`input`元素上 | `Event` |
| keypress | 原生`keypress`事件，绑定在组件内部`input`元素上 | `Event` |
| click | 原生`click`事件，绑定在组件最外层元素上 | `Event` |
| mouseenter | 原生`mouseenter`事件，绑定在组件最外层元素上 | `Event` |
| mouseleave | 原生`mouseleave`事件，绑定在组件最外层元素上 | `Event` |

## Search

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| submit | 表单提交事件 | `keywords` |
