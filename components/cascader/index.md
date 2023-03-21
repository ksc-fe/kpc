---
title: 级联选择
category: 组件
order: 5.1
sidebar: doc
---

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
| data | 组件要展示的数据 | `CascaderData<V>[]` | `undefined` |
| trigger | 子菜单触发方式，默认点击触发 | `"click"` &#124; `"hover"` | `"click"` |
| changeOnSelect | 是否选中父级即改变`value`值  | `boolean` | `false` |
| format | 自定义结果显示，组件会将当前选择的所有数据项以数组的格式作为参数传入 | `Function` | `(values: string[]) => values.map(value => value.label).join(' / ')` |
| loadData | 如果`data`中的`children`属性值为空数组`[]`，则可以使用该属性定义动态加载逻辑，组件会将当前选中的数据项作为参数传入 | `(data: CascaderData<V>) => any` | `undefined` |
| filter | 如果可搜索，你可以传入`filter`改变搜索逻辑，组件会将搜索关键词和数据项作为参数传入 | `(keywords: string, data: CascaderData<V>) => boolean` | `(keywords: string, data: CascaderData<V>) => data.label.includes(keywords)` |
| show | 是否展示菜单项 | `boolean` | `false` |

```ts
export type CascaderData<V> = {
    value: V 
    label: string
    disabled?: boolean
    loaded?: boolean
    children?: CascaderData<V>[]
}

export type Container = string | ((parentDom: Element, anchor: Node | null) => Element)
```

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| value | 自定义选择结果的展示 | `([value: any, label: Children]) => Children` |
| values | 自定义多选的选择结果的展示 | `([values: any[], labels: Children[]]) => Children` |
| prefix | 自定义输入框前面展示的内容 | - |
| suffix | 自定义输入框后面展示的内容 | - |

```ts
import {Children} from 'intact';
```

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 菜单弹出时触发 | - |
| hide | 菜单隐藏时触发 | - |
