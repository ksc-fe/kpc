---
title: 栅格
category: 组件
order: 1
sidebar: doc
---

# 属性

## Row

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间距，单位`px`；也可以以对象的方式指定响应式间距 | `PrimitiveValue` &#124; `BreakpointValue` | `undefined` |
| justify | 定义列水平方向布局，会自动启用`flex`布局 | `"start"` &#124; `"end"` &#124; `"center"` &#124; `"between"` &#124; `"around"` &#124; `"evenly"` | `undefined` |
| align | 定义列垂直方向布局，会自动启用`flex`布局 | `"top"` &#124; `"bottom"` &#124; `"middle"` &#124; `"stretch"` &#124; `"baseline"` | `undefined` |

```ts
export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type PrimitiveValue = string | number
export type BreakpointValue = {
    [key in Breakpoint]?: PrimitiveValue
};
export type Value = PrimitiveValue | BreakpointValue;
```

## Col

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格所占宽度，可选值为0到24的整数 | `string` &#124; `number` | `24` |
| offset | 栅格左侧偏移量 | `string` &#124; `number` | `0` |
| order | 定义列的顺序，会自动启用`flex`布局 | `string` &#124; `number` | `0` |
| pull | 定义列距离右边界的栅格数 | `string` &#124; `number` | `0` |
| push | 定义列距离左边界的栅格数 | `string` &#124; `number` | `0` |
| xs | 响应式宽度 `<576px` | `BreakpointValue` | `undefined` |
| sm | 响应式宽度 `≥576px` | `BreakpointValue` | `undefined` |
| md | 响应式宽度 `≥768px` | `BreakpointValue` | `undefined` |
| lg | 响应式宽度 `≥992px` | `BreakpointValue` | `undefined` |
| xl | 响应式宽度 `≥1200px` | `BreakpointValue` | `undefined` |
| xxl | 响应式宽度 `≥1600px` | `BreakpointValue` | `undefined` |

```ts
export type BaseColProps = {
    span?: PrimitiveValue, 
    offset?: PrimitiveValue, 
    order?: PrimitiveValue,
    pull?: PrimitiveValue,
    push?: PrimitiveValue,
}
type BreakpointValue = 
    | PrimitiveValue
    | {[key in keyof BaseColProps]?: PrimitiveValue}
```
