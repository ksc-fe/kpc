---
title: 栅格
category: 组件
order: 1
sidebar: doc
---

# 属性

## Row

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间距，单位`px`；也可以以对象的方式指定响应式间距 | `Number` &#124; `Object` | `0` |
| justify | 定义列水平方向布局，会自动启用`flex`布局 | `"start"` &#124; `"end"` &#124; `"center"` &#124; `"between"` &#124; `"around"` &#124; `"evenly"` | `undefined` |
| align | 定义列垂直方向布局，会自动启用`flex`布局 | `"top"` &#124; `"bottom"` &#124; `"middle"` &#124; `"stretch"` &#124; `"baseline"` | `undefined` |
| flex | 是否强制启用`flex`布局 | `Boolean` | `false` |

## Col

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格所占宽度，可选值为0到24的整数 | `String` &#124; `Number` | `24` |
| offset | 栅格左侧偏移量 | `String` &#124; `Number` | `0` |
| order | 定义列的顺序，会自动启用`flex`布局 | `String` &#124; `Number` | `0` |
| pull | 定义列距离右边界的栅格数 | `String` &#124; `Number` | `0` |
| push | 定义列距离左边界的栅格数 | `String` &#124; `Number` | `0` |
| xs | 响应式宽度 `<576px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| sm | 响应式宽度 `≥576px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| md | 响应式宽度 `≥768px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| lg | 响应式宽度 `≥992px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| xl | 响应式宽度 `≥1200px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| xxl | 响应式宽度 `≥1600px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
