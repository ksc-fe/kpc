---
title: 虚拟列表
category: 组件
order: 99
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 复制文案值 | `string` | `undefined` |
| showMessage | 复制成功/失败时，是否展示Message | `boolean` | `true` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| success | 复制成功时触发 | `(value: string) => void` |
| error | 复制失败时触发 | `() => void` |

