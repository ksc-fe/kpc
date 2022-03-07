---
title: 滑块
category: 组件
order: 8
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max | 最大值 | `Number` | 100 |
| min | 最小值 | `Number` | 0 |
| value | 当前值，可用`v-model`双向绑定 | `number` &#124; `[number, number]` | `0` |
| range | 是否是范围选择 | `Boolean` | `false` |
| unit | 单位，用于刻度展示 | `String` | `""` |
| showEnd | 是否展示最小值和最大值刻度 | `Boolean` | `true` |
| showInput | 是否展示输入框 | `Boolean` | `true` |
| step | 步长，支持动态步长，详见示例 | `Number` &#124; `StepObject` &#124; `StepFunction` | `1` |
| points | 是否展示间隔点，或者指定哪些值展示间隔点 | `boolean` &#124; `number[]` | `false` |
| marks | 标注刻度 | `Marks` | `undefined` |
| disabled | 是否禁用 | `boolean` | `false` |
| showTooltip | 是否展示提示气泡，默认不展示 | `Boolean` | `false` |
| always | 当展示气泡时，是否一直展示 | `Boolean` | `false` |
| animate | 滑块的移动是否使用缓动动画 | `Boolean` | `true` |
| tooltipProps | 设置内置的`Tooltip`的所有属性 | `TooltipProps`见[Tooltip](/components/tooltip/) | `undefined` |
| spinnerProps | 设置内置的`Spinner`的所有属性 | `SpinnerProps`见[Spinner](/components/spinner/) | `undefined` |
| forceStep | 是否限制`value`除边界之外，满足`min + step * n`(`n`为整数) | `Boolean` | `true` |

```ts
export type StepObject = {
    [key in number]: number
} & {
    $?: number
}
export type StepFunction = (value: number) => number

type MarkKey = string | number
type MarkValue = MarkKey | [MarkKey] | [MarkKey, MarkKey]
type Marks = Record<MarkKey, MarkValue>
```

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| tooltip | 当展示提示气泡，定义气泡的内容，和`Tooltip`组件行为一样，如果你传入空的内容，则不会展示气泡 | <code>(value: number &#124; [number, number]) => Children</code> |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 当值`value`变化时触发，拖动过程中不会触发，而是拖动结束触发 | <code>(newValue: number &#124; [number, number], oldValue: number &#124; [number, number]) => void</code> |
