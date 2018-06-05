---
title: 开关
category: 组件
order: 16
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 可定义当前开关的名称 | `String` | `undefined` |
| on | 定义开启时显示文案 | `String` | `undefined` |
| off | 定义关闭时显示文案 | `String` | `undefined` |
| width | 开关的宽度 | `Number` | `undefined` |
| height | 开关的高度 | `Number` | `undefined` |
| size | 开关的型号 | `String` | `"default"` |
| disabled | 控制禁用 | `Boolean` | `false` |
| value | 开关当前值，可用`v-model`双向绑定 | `*` | `false` |
| trueValue | 开启时的值 | `*` | `true` |
| falseValue | 关闭时的值 | `*` | `false` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| on | 扩展开启时的文案 |
| off | 扩展关闭时的文案 |


# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| isChecked | 判断是否开启 | - | `Boolean` |
| check | 开启按钮 | - | `undefined` |
| uncheck | 关闭按钮 | - | `undefined` |
