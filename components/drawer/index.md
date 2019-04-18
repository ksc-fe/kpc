---
title: 抽屉
category: 组件
order: 30
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placement | 自定义位置 | `"top"` &#124; `"bottom"` &#124;`"left"` &#124;`"right"`|`"right"`|
| overlay | 是否展示遮罩层 | `Boolean` | `"true"` |
| closable | 点击非抽屉部分是否可以关闭抽屉 | `Boolean` | `"true"` |
| title | 弹窗标题 | `String` | `"提示"` |
| value | 弹窗是否展示出来 | `Boolean` | `false` |
| size | 弹窗尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| loading | “确认”按钮是否为加载状态 | `Boolean` | `false` |
| okText | “确认”按钮文案 | `String` | `"确认"` |
| cancelText | “取消”按钮文案 | `String` | `"取消"` |
| disabledOk | “确认”按钮是否为禁用状态 | `Boolean` | `false` |
| ok | “确认”按钮点击后自定义回调函数 | `Function` | `undefined` |
| cancel | “取消”按钮点击后自定义回调函数 | `Function` | `undefined` |
| container | 指定弹层插入的容器，默认会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
| hideClose | 是否隐藏右上角关闭按钮 | `Boolean` | `false` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| header | 扩展弹窗头部 |
| body | 扩展弹窗主体部分 |
| footer | 扩展弹窗底部 |
| footer-wrapper | 扩展弹窗整个底部，上述`footer`是它下面一个子扩展点 |

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
