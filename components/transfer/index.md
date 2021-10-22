---
title: 穿梭框
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 需要展示的列表数据, 其中`label`会默认当做列表文案展示，`disabled`用于指定是否禁用该行选择 | `Array` | `[]` |
| value | 已选择key的数据项，可用`v-model`进行双向绑定 | `Array` | `[]` |
| leftCheckedKeys | 通过`key`指定勾选的左侧数据节点 | `Array` | `[]` |
| rightCheckedKeys | 通过`key`指定勾选的右侧数据节点 | `Array` | `[]` |
| filterable | 是否需要过滤列表功能，默认根据`data`中定义的`label`进行过滤 | `Boolean` | `false` |
| filter | 指定自定义的过滤函数，组件会将每行数据`data`以及关键词`keywords`传给它 | `Function` | `(data, keywords) => data.label.includes(keywords)` |
| labelName | 指定每一行数据的哪个属性当做列表的`label`属性，默认会取`label`当做`label` | `String` | `"label"` |
| placeholder | 当开启过滤功能时，用于输入框展示的占位文案 | `String` | `"请输入"` |
| leftTitle | 左边顶部展示的标题 | `String` | `"请选择"` |
| rightTitle | 右边顶部展示的标题 | `String` | `"已选择"` |
| leftKeywords | 左边筛选关键字 | `String` | `undefined` |
| rightKeywords | 右边筛选关键字 | `String` | `undefined` |
| keyName | 指定每一行数据的哪个属性当做列表的`key`属性，默认会取`key`或者`label`当做`key` | `String` | `"key"` |
| enableAdd | 指定右箭头按钮的可用状态 | `Function` | `undefined` |
| enableRemove | 指定左箭头按钮的可用状态 | `Function` | `undefined` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义每一项的渲染函数，类似于`label`属性 | `data, index, type` |
| filter | 自定义检索内容 | `type` | 
| header | 自定义整个头部内容 | `type` |
| list | 自定义整个列表内容 | `type` |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getData | 获取右边的节点数据 | - | `Array` |
| getCheckedData | 获取勾选的节点数据 | `model` 要获取`左边`或`右边`的数据 | `"left"` &#124; `"right"` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| add | 右箭头按钮点击事件 | `-` |
| remove | 左箭头按钮点击事件 | `-` |
