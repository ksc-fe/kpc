---
title: 引导式导航
category: 组件
order: 99
sidebar: doc
---

# 属性

## Tour

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前显示的步骤索引，从0开始，可通过`v-model`双向绑定 | `number` | `0` |
| visible | 是否展示引导组件 | `boolean` | `true` |
| data | 步骤数据数组，用于数据驱动方式 | `TourStepData[]` | `undefined` |
| beforeChange | 步骤切换前的回调函数，返回false可阻止切换 | `(current: number) => boolean \| Promise<boolean>` | `undefined` |
| maskClosable | 点击遮罩层是否可关闭 | `boolean` | `false` |
| closable | 是否展示关闭图标 | `boolean` | `true` |
| doneText | 完成按钮文本 | `string` | `"完成"` |

## TourStep

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 目标元素，可以是CSS选择器或DOM元素 | `string \| HTMLElement` | `undefined` |
| title | 步骤标题 | `string \| VNode` | `undefined` |
| content | 步骤内容 | `string \| VNode` | `undefined` |
| nextText | 下一步按钮文本 | `string` | `"下一步"` |
| prevText | 上一步按钮文本 | `string` | `"上一步"` |
| position | 弹出位置，可选值：`top`、`right`、`bottom`、`left` | `string` | `"bottom"` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| prev | 点击上一步按钮时触发 | `(index: number)` |
| next | 点击下一步按钮时触发 | `(index: number)` |
| finish | 引导完成时触发 | - |

# 扩展点

## TourStep

| 名称 | 说明 |
| --- | --- |
| title | 自定义标题内容 |
| footer | 自定义底部内容 |
