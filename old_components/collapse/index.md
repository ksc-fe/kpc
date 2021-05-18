---
title: 折叠面板
order:  90 
category: 组件
sidebar: doc
---

# 属性

## Collapse

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前展开的`CollapseItem`取值 | `Array` | `undefined` |
| accordion | 是否展示手风琴风格 | `Boolean` | `false` |
| arrow | 指定箭头位置 | `"right"` &#124; `"left"` | `"right"` |
| noBorder | 是否展示无边框的简洁样式 | `Boolean` | `false` |

## CollapseItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前`CollapseItem`的取值，默认会使用`$` + 索引的组合 | `String` | `$${index}` |
| title | 标题内容 | `String` &#124; `vNode` | `undefined` |
| disabled | 是否禁用 | `Boolean` | `false` |

# 扩展点

## CollapseItem

| 名称 | 说明 |
| --- | --- |
| title | 扩展标题 |

# 事件

## CollapseItem

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 展开时触发 | `CollapseItem`实例 |
| hide | 收起时触发 | `CollapseItem`实例 |
