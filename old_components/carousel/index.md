---
title: 走马灯
category: 组件
order: 99 
sidebar: doc
---

# 属性

## Carousel

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前展示的内容块对应的的值 | `String` | `"$0"` |
| autoplay | 是否自动切换，如果指定数值，则表示切换的时间间隔（ms），为`0`则不自动切换 | `Boolean` &#124; `Number` | `false` |
| arrow | 左右快速切换箭头展示的方式，`hover`：鼠标移入展示；`always`：一直展示；`never`：不展示 | `"hover"` &#124; `"always"` &#124; `"never"` | `"hover"` |
| effect | 指定切换动画 | `"slide"` &#124; `"fade"` | `"slide"` |
| clonedAmount | 指定前后克隆的内容块数量 | `Number` | `1` |

## CarouselItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 定义内容块选中后的值 | `String` | `"${index}"` |
