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
| container | 指定弹层插入的容器，默认会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |

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

# 静态方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| success | 成功提示窗口 | `Options` | `Promise` |
| warning | 警告提示窗口 | `Options` | `Promise` |
| error | 错误提示窗口 | `Options` | `Promise` |
| confirm | 确认提示窗口 | `Options` | `Promise` |

其中`Options`对象属性说明如下

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 弹窗标题 | `String` | `"提示"` |
| content | 弹窗内容 | `String` &#124; `Number` &#124; `VNode` &#124; `Array<String Number VNode>` | `undefined` |
| size | 弹窗尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| okText | “确认”按钮文案 | `String` | `"确认"` |
| cancelText | “取消”按钮文案 | `String` | `"取消"` |
| hideIcon | 是否隐藏提示图标 | `Boolean` | `false` |
| hideFooter | 是否隐藏底部按钮 | `Boolean` | `false` |
| showClose | 是否展示关闭按钮 | `Boolean` | `false` |

其中`Promise`对象会在点击“确认”按钮时`resolve()`，在点击“取消”按钮时`reject()`，你可以在`then()`
中书写用户点击不同按钮的逻辑

> 只有`confirm`类型的提示窗口才有“取消”按钮


# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| cancel | 点击取消按钮时触发 | - |
| ok | 点击确定按钮时触发 | - |
| open | 弹窗打开后触发 | - |
| close | 弹窗关闭后触发 | - |
