---
title: 描述列表
category: 组件
order: 30
sidebar: doc
---

# 属性

## Descriptions

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | 垂直排列 | `boolean` | `false` |
| title | 描述列表的标题，显示在最顶部 | `string` | `undefined` |
| items | 描述列表项内容 | `DescriptionItemProps[]` | `[]` |
| columns | 一行的 DescriptionItem 数量 | `number` | `3` |

```ts
import {VNode} from 'intact';

export interface DescriptionItemProps {
    label?: string | number | VNode
    content?: string | number | VNode
    option?: string | number | VNode
}
```

## DescriptionItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的标题 | `string` &#124; `number` &#124; `VNode` | `undefined` |
| content | 包含内容 | `string` &#124; `number` &#124; `VNode` | `undefined` |
| append | 自定义内容 | `string` &#124; `number` &#124; `VNode` | `undefined` |

# 拓展点

## Descriptions

| 名称 | 说明 
| --- | --- | 
| title | 自定义title | 

## DescriptionItem

| 名称 | 说明 
| --- | --- | 
| append | 用于超长省略后的操作区自定义内容 | 
| label | 自定义label | 