---
title: 下拉菜单
category: 组件
order: 11 
sidebar: doc
---

> `kpc/component/dropdown`暴露出来的并非`Dropdown`组件本身，而是包装该组件的函数（vdt中称作宏函数）
> 所以不要试图继承它。

# 属性

## Dropdown

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式，`hover`为悬停触发，`click`为点击触发 | `"hover"` &#124; `"click"` | `"hover"` |
| disabled | 是否禁用整个菜单 | `Boolean` | `false` |
| position | 菜单弹出的位置，默认在触发器正下方向下偏移`5px`的地方 | `Object` | `{my: 'center top+5', 'center bottom'}` |

## DropdownItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用该菜单项 | `Boolean` | `false` |
| hideOnSelect | 是否选中该菜单后隐藏整个菜单 | `Boolean` | `true` |

## 事件

## DropdownItem

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 菜单项被选中时触发，不管是点击还是键盘操作选中 | 被选中的`DropdownItem`实例 |
| click | 菜单项被点击时触发 | `Event` |
| mouseenter | 鼠标进入菜单项时触发 | `Event` |
| mouseleave | 鼠标离开菜单项时触发 | `Event` |
