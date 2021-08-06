---
title: 滑块
category: 组件
order: 8
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | `Number` | 0 |
| max | 最大值 | `Number` | 100 |
| value | 当前值，可用`v-model`双向绑定 | `Number` &#124; `Array` | `min` |
| unit | 单位，用于刻度展示 | `String` | `""` |
| isShowEnd | 是否展示最小值和最大值刻度 | `Boolean` | `true` |
| isShowInput | 是否展示输入框 | `Boolean` | `true` |
| step | 步长，支持动态步长，详见示例 | `Number` &#124; `Object` | `1` |
| isShowStop | 是否展示间隔点 | `Boolean` | `false` |
| marks | 标注刻度 | `Object` | `undefined` |
| showTooltip | 是否展示提示气泡，默认不展示 | `Boolean` | `false` |
| always | 当展示气泡时，是否一直展示 | `Boolean` | `false` |
| animate | 滑块的移动是否使用缓动动画 | `Boolean` | `true` |
| tooltipProps | 设置`Tooltip`的所有属性 | `Object` | `undefined` |
| spinnerPrefix | 定义输入框展示的值的前缀 | `String` | `undefined` |
| spinnerSuffix | 定义输入框展示的值的后缀 | `String` | `undefined` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| tooltip | 当展示提示气泡，定义气泡的内容，和`Tooltip`组件行为一样，如果你传入空的内容，则不会展示气泡 | 当前组件取值`value` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 当值`value`变化时触发，和`$change:value`默认事件不同的是，拖动过程中不会触发，而是拖动结束触发 | `value` |
