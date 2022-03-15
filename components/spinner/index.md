---
title: 数字输入框
category: 组件
order: 6
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 组件的值，可用`v-model`进行双向绑定 | `number` | `0` |
| disabled | 是否禁用 | `boolean` | `false` |
| max | 最大值 | `number` | `Number.POSITIVE_INFINITY` |
| min | 最小值 | `number` | `Number.NEGATIVE_INFINITY` | 
| step | 步长，支持动态步长，详见示例 | `number` &#124; `StepObject` &#124; `StepFunction` | `1` |
| size | 尺寸 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| vertical | 控制按钮是否竖直排列 | `boolean` | `false` |
| precision | 控制展示精度，该值必须为正整数或0 | `number` | `undefined` |
| formatter | 定义格式化展示值的函数 | `(value: number) => string` | `undefined` |
| parser | 与`formatter`结合使用，定义解析格式化的值的函数 | `(value: string) => number` | `undefined` |
| prefix | 定义展示的值的前缀，优先级低于`formatter` | `string` | `undefined` |
| suffix | 定义展示的值的后缀，优先级低于`formatter` | `string` | `undefined` |
| width | 指定`Input`输入框的宽度 | `string` &#124; `number` | `undefined` |
| forceStep | `value`值除了边界值，都必须被满足`min + step * n`(`n`为整数) | `boolean` | `false` |

```ts
export type StepObject = {
    [key in number]: number
} & {
    $?: number
}
export type StepFunction = (value: number) => number
```

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | `value`值变化时触发，与默认事件`$change:value`不同的是，该事件仅在`input` `change`事件触发或者点击加减按钮改变`value`时触发 | `(value: number) => void` |
