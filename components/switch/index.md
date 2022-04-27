---
title: 开关
category: 组件
order: 16
sidebar: doc
---

> Vue不能使用`Switch`作为组件名，可以自定义为`KSwitch`: 
> `import {Switch as KSwitch} from 'kpc';`

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 可定义当前开关的名称 | `string` | `undefined` |
| on | 定义开启时显示文案 | `string` | `undefined` |
| off | 定义关闭时显示文案 | `string` | `undefined` |
| value | 开关当前值，可用`v-model`双向绑定 | `any` | `false` |
| trueValue | 开启时的值 | `any` | `true` |
| falseValue | 关闭时的值 | `any` | `false` |
| width | 开关的宽度 | `number` &#124; `string` | `undefined` |
| height | 开关的高度 | `number` &#124; `string` | `undefined` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| disabled | 控制禁用 | `boolean` | `false` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| on | 扩展开启时的文案 |
| off | 扩展关闭时的文案 |
