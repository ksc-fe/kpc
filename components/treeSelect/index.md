---
title: 下拉树选择
category: 组件
order: 99 
sidebar: doc
---

> `TreeSelect`继承自`Select`，所以它们很多属性都是相通的

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选择的元素，可用`v-model`双向绑定 | `any` | `""` |
| multiple | 是否支持多选 | `boolean` | `false` |
| filterable | 是否支持筛选 | `boolean` | `false` |
| loading | 数据加载状态 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 表单元素的`name` | `string` | `undefined` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| hideIcon | 是否隐藏后面的图标 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| fluid | 是否宽度100% | `boolean` | `false` |
| inline | 展示内联模式，该模式下，组件没有边框，宽度和高度如同内联元素一样由内容撑开 | `boolean` | `false` |
| placeholder | 占位文案 | `string` | `"请选择"` |
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| width | 指定宽度，组件自动添加单位`px` | `number` &#124; `string` | `undefined` | 
| data | 要渲染的数据 | `TreeDataItem<K>[]` | `undefined` |
| uncorrelated | 是否让父子`checkbox`选中状态互不关联 | `boolean` | `false` |
| load | 指定异步加载节点数据的函数，该函数通过`Promise`返回数组来添加子节点数据 | <code>(node: TreeNode<K>) => Proomise<void> &#124; void</code> | `undefined` |
| showLine | 是否展示`Tree`的对齐线 | `boolean` | `true` |
| defaultExpandAll | 是否默认展开所有节点 | `boolean` | `true` |
| checkbox | 是否展示复选框 | `boolean` | `false` |
| filter | 当支持筛选时，可以自定义筛选规则 | `(keywords: string, data: TreeDataItem<K>) => boolean` | `undefined` |
| show | 是否展示菜单项 | `boolean` | `false` |
| position | 菜单弹出的位置，默认与触发器左侧对齐向下偏移`8px`的地方 | `Position` &#124; `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` | `{my: 'left top+8', 'left bottom'}` |
| flat | 是否展示扁平样式 | `boolean` | `false` |

```ts
import {Key, Children} from 'intact';

export type Container = string | ((parentDom: Element, anchor: Node | null) => Element)

export type TreeDataItem<K extends Key> = {
    label?: Children 
    key?: K
    disabled?: boolean
    loaded?: boolean
    children?: TreeDataItem<K>[]
}

type Position = {
    my?: string | [string, string]
    at?: string | [string, string]
    collision?: Collision | [Collision, Collision] 
    collisionDirection?: ['left'] | ['top'] | ['left', 'top']
}

type Collision = 'fit' | 'flip' | 'flipfit' | 'none'
```

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| value | 自定义选择结果的展示 | `([value: any, label: Children]) => Children` |
| values | 自定义多选的选择结果的展示 | `([values: any[], labels: Children[]]) => Children` |
| prefix | 自定义输入款前面展示的内容 | - |
| suffix | 自定义输入框后面展示的内容 | - |
| menu | 自定义整个菜单的内容 | - |

```ts
import {Children} from 'intact';
```

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 菜单弹出时触发 | - |
| hide | 菜单隐藏时触发 | - |
