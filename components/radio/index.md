---
title: 单选框
category: 组件
order: 3
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `Boolean` | `false` |
| value | 单选框取值，用于`v-model`进行双向绑定 | `*` | `false` |
| trueValue | 单选框选中后的值 | `*` | `true` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 当点击组件导致值变化时触发，与`$change:value`事件有所不同的是，该事件只会触发一次，而且一定是用户点击行为触发的 | `value` |
