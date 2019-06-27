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
| value | 是否将弹出菜单展示出来，可通过`v-model`双向绑定 | `Boolean` | `false` |
| of | 弹出菜单的位置是相对当前触发元素，还是触发元素所在的菜单元素，这在嵌套菜单中可能会用到，可以使所有子菜单保持统一的对齐方式，例如：级联选择（Cascader）组件 | `"self"` &#124; `"parent"` | `"self"` |
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |

## DropdownItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用该菜单项 | `Boolean` | `false` |
| hideOnSelect | 是否选中该菜单后隐藏整个菜单 | `Boolean` | `true` |

## 事件

## DropdownMenu

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 菜单展示事件 | - |

## DropdownItem

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 菜单项被选中时触发，不管是点击还是键盘操作选中 | 被选中的`DropdownItem`实例 |
| click | 菜单项被点击时触发 | `Event` |
| mouseenter | 鼠标进入菜单项时触发 | `Event` |
| mouseleave | 鼠标离开菜单项时触发 | `Event` |
