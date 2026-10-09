---
title: 单选框
category: 组件
order: 3
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 和浏览器原生行为一样，给 `Radio` 指定相同的 `name`，它们便组成了单选框组。 | `string` | `undefined` |
| value | 单选框当前取值，用于`v-model`进行双向绑定 | `any` | `false` |
| trueValue | 选中当前项时应取的值；同组各选项应各不相同 | `any` | `true` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击时触发（无论值是否变化） | `(e: MouseEvent) => void` |
| change | 当点击组件导致值变化时触发 | `(value: any, e: MouseEvent) => void` |
