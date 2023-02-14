---
title: 提示弹层
category: 组件
order: 13
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式，`hover`为悬停触发，`click`为点击触发 | `"hover"` &#124; `"click"` &#124; `"focus"` | `"hover"` |
| disabled | 是否禁用整个菜单 | `boolean` | `false` |
| value | 是否将弹出菜单展示出来，可通过`v-model`双向绑定 | `boolean` | `false` |
| position | 菜单弹出的位置，默认在触发器正上方向上偏移`10px`的地方 | `Position` &#124; `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` | `{my: 'center bottom-10', at: 'center top', collision: 'flipfit'}` |
| of | 弹出菜单的位置是相对当前触发元素，还是触发元素所在的菜单元素，这在嵌套菜单中可能会用到，可以使所有子菜单保持统一的对齐方式，例如：级联选择（Cascader）组件 | `"self"` &#124; `"parent"` &#124; `Event` | `"self"` |
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| showArrow | 弹层是否展示箭头 | `boolean` | `true` |
| theme | 指定主题 | `"dark"` &#124; `"light"` | `"dark"` |
| hoverable | 对于悬浮触发`hover`的方式，提示内容弹层是否在鼠标悬浮时仍然展示，默认鼠标离开触发元素弹层就会关闭 | `boolean` | `false` |
| always | 是否一直保持当前展示/隐藏状态 | `boolean` | `false` |
| size | 弹层尺寸 | `"default"` &#124; `"small"` | `"default"` |
| confirm | 带“确认”和“取消”按钮的确认弹层 | `boolean` | `false` |
| onText | `confirm`模式下的“确认”按钮文案 | `string` | `"确认"` |
| cancelText | `confirm`模式下的“取消”按钮文案 | `string` | `"取消"` |
| content | 指定提示的内容，当然你也可以用`content`扩展点指定 | `string` &#124; `VNode` | `undefined` |

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

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 弹层展开事件 | - |
| hide | 弹层隐藏事件 | - |
| ok | `confirm`模式下，点击“确认”按钮触发 | - |
| cancel | `confirm`模式下，点击“取消”按钮触发 | - |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| content | 自定义提示内容 |
