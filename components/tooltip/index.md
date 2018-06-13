---
title: 提示弹层
category: 组件
order: 13
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式，点击触发`click`, 悬浮触发`hover` | `"hover"` &#124; `"click"` | `"hover"` |
| canHover | 对于悬浮触发`hover`的方式，提示内容弹层是否在鼠标悬浮时仍然展示，默认鼠标离开触发元素弹层就会关闭 | `Boolean` | `false` |
| showArrow | 弹层是否展示箭头 | `Boolean` | `true` |
| position | 弹层的位置 | `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` &#124; `Object` | `{my: 'center bottom-10', at: 'center top'}` |
| transition | 弹层动画，默认只提供`fade`，你也可以传入任意自定义动画类型 | `String` | `"fade"` |
| class | 样式名。特别说明：该属性会往内容弹出层上添加，vue下会同时往触发元素和弹层元素上添加 | `String` &#124; `Object` | `undefined` |
