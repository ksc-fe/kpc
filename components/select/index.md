---
title: 选择框
category: 组件
order: 5
sidebar: doc
---

# 属性

## Select

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
| filter | 当支持筛选时，可以自定义筛选规则 | `(keywords: string, props: any) => boolean` | `(keywords: string, props: any) => props.label.toLowerCase().includes(keywords) || props.value.toLowerCase().includes(keywords)` |
| searchable | 是否将在弹出菜单中展示搜索框 | `boolean` | `false` |
| creatable | 是否支持创建新的选项，可以配合`filterable`使用 | `boolean` | `false` |
| labelMap | 建立值`value`到展示标签`label`的映射，可以在`value`不在`Option`集合中时，依然能够正确展示相应的`label` | `Map<any, string>` | `new Map()` |
| card | 是否展示`card`模式 | `boolean` | `false` |
| autoDisableArrow | 是否在没有更多可选项时，给箭头一个`disabled`状态来提示用户 | `boolean` | `false` |
| keepKeywords | 是否在选中选项后保留搜索关键字，配合`filterable`使用 | `boolean` | `true` |
| show | 是否展示菜单项 | `boolean` | `false` |
| position | 菜单弹出的位置，默认与触发器左侧对齐向下偏移`8px`的地方 | `Position` &#124; `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` | `{my: 'left top+8', 'left bottom'}` |
| flat | 是否展示扁平样式 | `boolean` | `false` |
| draggable | 多选值是否支持拖动排序 | `boolean` | `false` |
| virtual | 是否开启虚拟列表 | `boolean` | `false` |

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

## Option

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | `any` | `undefined` |
| label | 该值有两个作用，1. 当`children`不存在时，作为展示文案；2. 作为筛选的内容，不存在时，则使用`children`的文本作为筛选内容 | `string`  | `undefined` |
| disabled | 是否禁用该项选择 | `boolean` | `false` |

## OptionGroup

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 分组标签名 | `string` &#124; `number` &#124; `VNode` | `undefined` |


# 扩展点

## Select

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| value | 自定义选择结果的展示 | `([value: any, label: Children]) => Children` |
| values | 自定义多选的选择结果的展示 | `([values: any[], labels: Children[]]) => Children` |
| prefix | 自定义输入框前面展示的内容 | - |
| suffix | 自定义输入框后面展示的内容 | - |
| menu | 自定义整个菜单的内容 | - |

```ts
import {Children} from 'intact';
```

## OptionGroup

| 名称 | 说明 |
| --- | --- |
| label | 定义复杂的分组标签名 |


# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 菜单弹出时触发 | - |
| hide | 菜单隐藏时触发 | - |
