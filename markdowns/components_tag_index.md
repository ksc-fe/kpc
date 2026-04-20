---
title: 标签
category: 组件
order: 88 
sidebar: doc
---

# 属性

## Tag

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 组件类型 | `"default"` &#124; `"primary"` &#124; `"success"` &#124; `"warning"` &#124; `"danger"` | `"default"` |
| color | 颜色 | `"default"` &#124; `"primary"` &#124; `"success"` &#124; `"warning"` &#124; `"danger"` &#124; `"purple"` &#124; `"teal"` &#124; `"blue"` &#124; `"yellow"` | `undefined` | 
| closable | 是否可关闭 | `boolean` | `false` |
| closed | 是否已关闭 | `boolean` | `false` |
| disabled | 是否展示禁用状态 | `boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| border | 定义边框样式 | `"solid"` &#124; `"dashed"` &#124; `"none"` | `"none"` |

## Tags

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 定义“更多”标签尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| border | 定义“更多”标签边框样式 | `"solid"` &#124; `"dashed"` &#124; `"none"` | `"none"` |
| nowrap |  是否单行展示标签组，超出的部分会隐藏，仅展示隐藏数量 | `boolean` | `flase` |
| draggable | 标签是否支持拖动排序 | `boolean` | `false` |

# 扩展点

## Tags

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| append | 追加到后面的元素，不参与到`Tags`对`Tag`的管理中  | - |


# 事件

## Tag

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| close | 标签关闭事件 | `(e: MouseEvent) => void` |

## Tags

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| dragstart | 拖动开始 | `(v: TagsDragStartParam) => void` |
| dragend | 拖动结束 | `(v: TagsDragEndParam) => void` |

```ts
type Key = string | number

export type TagsDragStartParam = {
    key: Key
    from: number
}

export type TagsDragEndParam = TagsDragStartParam & {
    to: number
} 
```
