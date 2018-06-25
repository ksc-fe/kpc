---
title: 弹窗
category: 组件
order: 10
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 弹窗标题 | `String` | `"提示"` |
| value | 弹窗是否展示出来 | `Boolean` | `false` |
| size | 弹窗尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| loading | “确认”按钮是否为加载状态 | `Boolean` | `false` |
| okText | “确认”按钮文案 | `String` | `"确认"` |
| cancelText | “取消”按钮文案 | `String` | `"取消"` |
| disabledOk | “确认”按钮是否为禁用状态 | `Boolean` | `false` |
| ok | “确认”按钮点击后自定义回调函数 | `Function` | `undefined` |
| cancel | “取消”按钮点击后自定义回调函数 | `Function` | `undefined` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| header | 扩展弹窗头部 |
| footer | 扩展弹窗底部 |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| show | 弹出弹窗 | - | `Promise` |
| close | 关闭弹窗 | - | `undefined` |
| showLoading | “确认”按钮变为加载状态 | - | `undefined` |
| hideLoading | “确认”按钮变为正常状态 | - | `undefined` |
| disableOk | “确认”按钮变为禁用状态 | - | `undefined` |
| enableOk | “确认”按钮变为正常状态 | - | `undefined` |
| ok | 点击“确认”按钮的回调方法，继承`Dialog`时，可以复写该方法实现自定义需求 | - | `undefined` |
| cancel | 点击“取消”按钮的回调方法，继承`Dialog`时，可以复写该方法实现自定义需求 | - | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| cancel | 点击取消按钮时触发 | - |
| ok | 点击确定按钮时触发 | - |
| open | 弹窗打开后触发 | - |
| close | 弹窗关闭后触发 | - |
