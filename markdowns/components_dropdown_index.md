---
title: 下拉菜单
category: 组件
order: 11 
sidebar: doc
---

# 属性

## Dropdown

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式，`hover`为悬停触发，`click`为点击触发 | `"hover"` &#124; `"click"` &#124; `"contextmenu"` &#124; `"focus"` | `"hover"` |
| disabled | 是否禁用整个菜单 | `boolean` | `false` |
| value | 是否将弹出菜单展示出来，可通过`v-model`双向绑定 | `boolean` | `false` |
| position | 菜单弹出的位置，默认与触发器左侧对齐向下偏移`8px`的地方 | `Position` &#124; `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` | `{my: 'left top+8', 'left bottom'}` |
| of | 弹出菜单的位置是相对当前触发元素，还是触发元素所在的菜单元素，这在嵌套菜单中可能会用到，可以使所有子菜单保持统一的对齐方式，例如：级联选择（Cascader）组件 | `"self"` &#124; `"parent"` &#124; `Event` | `"self"` |
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| alwaysShowOnClick | 不管什么触发方式，重复点击触发器，都不隐藏弹层 | `boolean` | `false` |

```ts
type Position = {
    my?: string | [string, string]
    at?: string | [string, string]
    collision?: Collision | [Collision, Collision] 
    collisionDirection?: ['left'] | ['top'] | ['left', 'top']
}

type Collision = 'fit' | 'flip' | 'flipfit' | 'none'

export type Container = string | ((parentDom: Element, anchor: Node | null) => Element)
```

## DropdownItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用该菜单项 | `boolean` | `false` |
| hideOnSelect | 是否选中该菜单后隐藏整个菜单 | `boolean` | `true` |

# 事件

## Dropdown

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 菜单展示事件 | - |
| hide | 菜单隐藏事件 | - |

## DropdownItem

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 菜单项被选中时触发，不管是点击还是键盘操作选中 | 被选中的`DropdownItem`实例 |
| click | 菜单项被点击时触发 | `MouseEvent` |
| mouseenter | 鼠标进入菜单项时触发 | `MouseEvent` |
| mouseleave | 鼠标离开菜单项时触发 | `MouseEvent` |
