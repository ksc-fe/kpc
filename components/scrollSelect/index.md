---
title: 滚动选择框
category: 组件
order: 3
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前取值，可用`v-model`进行双向绑定 | `*` | `undefined` |
| data | 组件的可选项 | `Array<Object> [{label, value}]` | `[]` |
| disabled | 是否禁用组件 | `Boolean` | `false` |
| disable | 定义选项禁用逻辑，返回`true`则禁用该项 | `Function` | `undefined` |
| count | 渲染可选项的DOM的个数，如果选区较大，可以增大该值 | `Number` | `19` |
