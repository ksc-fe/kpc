---
title: 分割面板
category: 组件
order: 15 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 指定分割模式，`horizontal`水平分割；`vertical`垂直分割 | `"horizontal"` &#124; `"vertical"` | `"horizontal"` |
| firstSize | 指定第一个面板的大小，需要带单位 | `String` | `"auto"` |
| lastSize | 指定第二个面板的大小，需要带单位 | `String` | `"auto"` |
| min | 指定面板最小尺寸，不用带单位，可以通过百分比指定 | `Number` &#124; `String` | `0` |
| max | 指定面板最大尺寸，不用带单位，可以通过百分比指定 | `Number` &#124; `String` | `"100%-6"` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| first | 指定第一个面板的内容 | - |
| last | 指定第二个面板的内容 | - |
| drag | 指定分割线的内容 | - |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| moveStart | 开始拖动面板分割线时触发 | `Event` |
| moveing | 拖动面板分割线的过程中触发 | `Event` |
| moveEnd | 拖动面板分割线结束时触发 | `Event` |
