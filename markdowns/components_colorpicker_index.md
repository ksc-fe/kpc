---
title: 拾色器
category: 组件
order: 7
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前颜色值 | `string` | `undefined` |
| presets | 预选颜色 | `string[]` | `['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| disabled | 是否禁用 | `boolean` | `false` |
| show | 是否展示颜色选择面板 | `boolean` | `false` |
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| position | 菜单弹出的位置，默认与触发器左侧对齐向下偏移`8px`的地方 | `Position` &#124; `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` | `{my: 'left top+8', 'left bottom', collison: 'fit'}` |

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

