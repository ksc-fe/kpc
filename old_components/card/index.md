---
title: 卡片
category: 组件
order: 99 
sidebar: doc
---

# 属性

## Card

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `String` &#124; `VNode` | `undefined` | 
| type | 卡片类型 | `"shadow"` &#124; `"border"` &#124; `"none"` | `"shadow"` |

## CardColumn

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 列宽，必须带单位 | `String` | `undefined` |
| center | 该列内容是否居中 | `Boolean` | `false` |

# 扩展点

## Card

| 名称 | 说明 |
| --- | --- |
| header | 扩展整个头部内容 |
| title | 扩展头部标题内容 |
| extra | 扩展头部附加内容 |
