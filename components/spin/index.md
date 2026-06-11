---
title: 加载中
category: 组件
order: 8
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 组件尺寸，支持预设和自定义像素值 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` &#124; `number` | `"default"` |
| center | 是否居中展示，需要父元素为定位元素 | `boolean` | `false` |
| overlay | 是否展示带遮罩层的加载动画，需要父元素为定位元素 | `boolean` | `false` |
| color | 描边颜色，未设置渐变时生效 | `string` | 主题色 |
| gradientFrom | 渐变起始色；与 gradientTo 同时传入时启用 SVG 线性渐变描边 | `string` | |
| gradientTo | 渐变结束色 | `string` | |
| gradientX1 | linearGradient 起点 x（objectBoundingBox 0–1 或百分比） | `string` | `"0%"` |
| gradientY1 | linearGradient 起点 y | `string` | `"0%"` |
| gradientX2 | linearGradient 终点 x | `string` | `"100%"` |
| gradientY2 | linearGradient 终点 y | `string` | `"100%"` |
| strokeWidth | 描边粗细（viewBox 坐标单位，与尺寸等比缩放） | `number` | `6` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| canvas | 自定义旋转的元素内容 |
