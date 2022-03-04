---
title: 进度条
category: 组件
order: 14 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 |`"bar"` &#124; `"circle"` | `"bar"` |
| percent | 当前百分比(0~100) | `number` &#124; `string` | `0` |
| size | 尺寸 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| showOuterText | 是否展示后面的百分比 | `Boolean` | `true` |
| showInnerText | 是否展示进度条上面的百分比 | `Boolean` | `false` |
| status | 进度条状态 | `"success"` &#124; `"error"` &#124; `"active"` &#124; `"normal"` &#124; `"warning"` | `"active"` |
| strokeWidth | 进度条指示线的宽度，单位`px`，只对`type="circle"`圆形进度有效 | `Number` | `10` |
| color | 进度条背景颜色，支持根据百分比自定义颜色。会覆盖status设置的颜色 | `string` &#124; `Color[]` &#124; `((percent: number) => string)` | `undefined`

```ts
type Color = {
    percent: string | number
    color: string
}
```
