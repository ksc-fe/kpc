---
title: 虚拟列表
category: 组件
order: 99
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| estimatedItemHeight | 列表每行预估高度 | `number` | `40` |
| bufferSize | 虚拟列表缓冲区数量 | `number` | `6` |
| height | 虚拟滚动区域的高度，不设置则继承父级容器高度 | `number` &#124; `string` | `undefined` |

# 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollToIndex | 滚动到指定索引位置 | `(index: number, behavior?: 'auto' \| 'smooth') => void` |

