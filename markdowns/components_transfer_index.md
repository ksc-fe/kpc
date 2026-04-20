---
title: 穿梭框
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 需要展示的列表数据, 其中`label`会默认当做列表文案展示，`disabled`用于指定是否禁用该行选择 | `TransferDataItem[]` | `[]` |
| keyName | 指定每一行数据的哪个属性当做列表的`key`属性，默认会取`key`属性 | `string` | `"key"` |
| labelName | 指定每一行数据的哪个属性当做列表的`label`属性，默认会取`label`属性 | `string` | `"label"` |
| value | 已选择key的数据项，可用`v-model`进行双向绑定 | `string[]` | `[]` |
| leftCheckedKeys | 通过`key`指定勾选的左侧数据节点 | `string[]` | `[]` |
| rightCheckedKeys | 通过`key`指定勾选的右侧数据节点 | `string[]` | `[]` |
| filterable | 是否需要过滤列表功能，默认根据`data`中定义的`label`进行过滤 | `boolean` | `false` |
| filter | 指定自定义的过滤函数，组件会将每行数据`data`以及关键词`keywords`传给它 | `(data: TransferDataItem, keywords: string) => boolean` | `(data: TransferDataItem, keywords: string) => data.label.includes(keywords)` |
| placeholder | 当开启过滤功能时，用于输入框展示的占位文案 | `string` | `"请输入"` |
| leftKeywords | 左边筛选关键字 | `string` | `undefined` |
| rightKeywords | 右边筛选关键字 | `string` | `undefined` |
| leftTitle | 左边顶部展示的标题 | `string` &#124; `VNode` | `"请选择"` |
| rightTitle | 右边顶部展示的标题 | `string` &#124; `VNode` | `"已选择"` |
| enableAdd | 指定右箭头按钮的可用状态 | `() => boolean` | `undefined` |
| enableRemove | 指定左箭头按钮的可用状态 | `() => boolean` | `undefined` |
| pagination | 是否启用分页功能，传入`true`使用默认配置，传入对象可自定义分页配置，详见[Pagination组件](/components/pagination/) | `boolean` &#124; `PaginationProps` | `false` |

```ts
export type TransferDataItem<
    A extends string = 'key',
    B extends string = 'label',
> = {
    [K in A]: Key
} & {
    [K in B]?: Children
} & {
    disabled?: boolean
}
```

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| header | 自定义整个头部内容 | <code>(type: 'left' &#124; 'right') => Children</code> |
| filter | 自定义检索内容 | <code>(type: 'left' &#124; 'right') => Children</code> | 
| list | 自定义整个列表内容 | <code>(type: 'left' &#124; 'right') => Children</code> |
| label | 自定义每一项的渲染函数，类似于`label`属性 | <code>(data: TransferDataItem, key: string, type: 'left' &#124; 'right') => Children</code> |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getData | 获取右边的节点数据 | `() => TransferDataItem[]` | `string[]`: 所有移入右栏的数据 |
| getCheckedData | 获取勾选的节点数据 | <code>(type: 'left' &#124; 'right') => TransferDataItem[]</code> | `TransferDataItem[]`所有`Checkbox`选中的数据 |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| add | 右箭头按钮点击事件 | - |
| remove | 左箭头按钮点击事件 | - |
| page | 当内置翻页改变页码或每页数量时触发 | <code>(model: 'left' &#124; 'right', data: {value: number, limit: number}) => void</code> |
