---
title: 数字输入框
category: 组件
order: 6
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 组件的值，可用`v-model`进行双向绑定 | `Number` | `0` |
| max | 最大值 | `Number` | `Number.POSITIVE_INFINITY` |
| min | 最小值 | `Number` | `Number.NEGATIVE_INFINITY` | 
| step | 步长 | `Number` | `1` |
| disabled | 是否禁用 | `Boolean` | `false` |
| size | 尺寸 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| vertical | 控制按钮是否竖直排列 | `Boolean` | `false` |
| precision | 控制展示精度，该值必须为正整数或0 | `Number` | `undefined` |
| formatter | 定义格式化展示值的函数 | `Function` | `undefined` |
| parser | 与`formatter`结合使用，定义解析格式化的值的函数 | `Function` | `undefined` |
| prefix | 定义展示的值的前缀，优先级低于`formatter` | `String` | `undefined` |
| suffix | 定义展示的值的后缀，优先级低于`formatter` | `String` | `undefined` |
