---
title: 复选框
category: 组件
order: 4
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `boolean` | `false` |
| name |和浏览器原生行为一样，给 `Checkbox` 指定相同的 `name`，它们便组成了复选框组。 | `string` | `undefined` |
| value | 复选框组的取值，用于`v-model`进行双向绑定 | `any` | `false` |
| trueValue | 当前复选框选中应取的值 | `any` | `true` |
| falseValue | 当前复选框取消选中应取的值 | `any` | `false` |
| indeterminate | 是否半选中状态 | `boolean` | `false` |
| required | 原生`required`属性 | `boolean` | `undefined` |
| form | 原生`form`属性 | `string` | `undefined` |
| autofocus | 原生`autofocus`属性 | `boolean` | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 当点击组件导致值变化时触发 | `(value: any, e: MouseEvent) => void` |
