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
| color | 描边颜色 | `string` | 主题色 |
| strokeWidth | 描边粗细（viewBox 坐标单位，与尺寸等比缩放） | `number` | `6` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| canvas | 自定义旋转的元素内容 |
