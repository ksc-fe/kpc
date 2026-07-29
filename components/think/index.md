---
title: 思考过程
category: AI对话组件
order: 110
sidebar: doc
---

> **v3.8.0 新增**

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 状态标题 | `string` | `undefined` |
| content | 思考内容，仅在未使用 `content` 插槽和默认插槽时生效 | `string` &#124; `number` | `undefined` |
| loading | 是否处于思考中状态，会影响默认图标样式 | `boolean` | `false` |
| blink | 是否让标题区域闪动，适合强调思考进行中 | `boolean` | `false` |
| defaultExpanded | 非受控模式下的默认展开状态。仅在未传入 `expanded` 时生效 | `boolean` | `true` |
| expanded | 是否展开内容区。使用 `v-model` 进行双向绑定 | `boolean` | `undefined` |
| maxWidthString | 最大宽度 | `string` | `"640px"` |

# 事件

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| expand | 点击状态栏切换时触发 | `(expanded: boolean) => void` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| icon | 自定义状态图标 |
| title | 自定义状态标题 |
| extra | 状态栏右侧附加信息 |
| content | 自定义思考内容 |
