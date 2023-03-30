---
title: 选项卡
category: 组件
order: 90
sidebar: doc
---

> `Tabs`设计用于页面导航，所以没有定义切换内容区域，仅仅规定了头部样式。如果需要切换内容，可以
> 使用`v-if`来切换。详见示例

# 属性

## Tabs

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 被选中的选项卡,使用`v-model`进行双向绑定 | `T = any` | `undefined`|
| vertical | 垂直排列 | `boolean` | `undefined` |
| size | 选项卡尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| type | 选项卡类型 | `"default"` &#124; `"card"` &#124; `"border-card"` &#124; `"no-border-card"` &#124; `"plane-card"`| `"default"` |
| closable | 是否展示选项卡关闭按钮 | `boolean` | `false` |
| beforeChange | 切换选项卡之前的拦截函数，如果该函数返回`false`则阻止本次切换，支持异步函数，参数为当前`Tab` `value` | <code>(value: T) => boolean &#124; Promise&lt;boolean&gt;</code> | `undefined` |

## Tab

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | `any` | `undefined` |
| disabled | 是否禁用 | `boolean` | `false` |
| to | 点击标签的跳转地址 | `string` | `undefined` |
| closable | 是否展示选项卡关闭按钮 | `boolean` | `false` |

# 事件

## Tabs

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| remove | 关闭选项卡时触发 | `(value: T) => void` |

## Tab

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | `Tab`点击事件，发生在`value`改变之后，`disabled`状态不会触发 | `(e: MouseEvent) => void` |
