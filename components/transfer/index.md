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
| value | 已选择的数据项，可用`v-model`进行双向绑定 | `Array` | `[]` |
| leftChecked | 左边已勾选的数据项 | `Array` | `[]` |
| rightChecked | 右边已勾选的数据项 | `Array` | `[]` |
| filterable | 是否需要过滤列表功能，默认根据`data`中定义的`label`进行过滤 | `Boolean` | `false` |
| filter | 指定自定义的过滤函数，组件会将每行数据`data`以及关键词`keywords`传给它 | `Function` | `(data, keywords) => data.label.includes(keywords)` |
| label | 指定自定义的渲染函数，用于渲染每行数据，组件会将每行数据`data`以及当前数据的索引`index`传给它 | `Function` | `(data, index) => data.label` |
| placeholder | 当开启过滤功能时，用于输入框展示的占位文案 | `String` | `"请输入"` |
| leftTitle | 左边顶部展示的标题 | `String` | `"请选择"` |
| rightTitle | 右边顶部展示的标题 | `String` | `"已选择"` |
| keyName | 指定每一行数据的哪个属性当做列表的`key`属性，默认会取`key`或者`label`当做`key` | `String` | `"key"` |

