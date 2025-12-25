---
title: 抽屉
category: 组件
order: 30
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 弹窗标题 | `string` | `"提示"` |
| value | 弹窗是否展示出来 | `boolean` | `false` |
| size | 弹窗尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| loading | “确定”按钮是否为加载状态 | `boolean` | `false` |
| disabledOk | “确定”按钮是否为禁用状态 | `boolean` | `false` |
| okText | “确定”按钮文案 | `string` | `"确定"` |
| cancelText | “取消”按钮文案 | `string` | `"取消"` |
| ok | “确定”按钮点击后自定义回调函数 | `() => void` | `undefined` |
| cancel | “取消”按钮点击后自定义回调函数 | `() => void` | `undefined` |
| container | 指定弹层插入的位置，默认会追加到`body`中，你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| hideClose | 是否隐藏右上角关闭按钮 | `boolean` | `false` |
| overlay | 是否展示遮罩层 | `boolean` | `true` |
| closable | 点击遮罩层是否可以关闭弹窗 | `boolean` | `true` |
| terminate | 指定在用户点击“关闭”按钮，点击遮罩层或者按ESC键时的回调函数 | `() => void` | `undefined` |
| escClosable | 是否按ESC时关闭弹窗 | `boolean` | `true` |
| width | 指定弹窗宽度，`number`类型时，单位为`px`；`string`类型时，需要指定单位 | `number` &#124; `string` | `undefined` |
| mode | 指定主体元素在关闭状态下的渲染方式，`"destroy"`代表直接销毁，`"hide"`代表只是隐藏 | `"destroy"` &#124; `"hide"` | `"hide"` |
| placement | 自定义位置 | `"top"` &#124; `"bottom"` &#124;`"left"` &#124;`"right"`|`"right"`|
| resizable | 是否可调整大小。 | `boolean` | `false` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| content | 定义整个弹窗体，包括header，body，footer | 
| header | 扩展弹窗头部 |
| body | 扩展弹窗主体部分 |
| footer | 扩展弹窗底部 |
| footer-wrapper | 扩展弹窗整个底部，上述`footer`是它下面一个子扩展点 |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| show | 弹出弹窗 | - | `Promise` |
| close | 关闭弹窗 | - | `undefined` |
| showLoading | “确定”按钮变为加载状态 | - | `undefined` |
| hideLoading | “确定”按钮变为正常状态 | - | `undefined` |
| disableOk | “确定”按钮变为禁用状态 | - | `undefined` |
| enableOk | “确定”按钮变为正常状态 | - | `undefined` |
| ok | 点击“确定”按钮的回调方法，继承`Dialog`时，可以复写该方法实现自定义需求 | - | `undefined` |
| cancel | 点击“取消”按钮的回调方法，继承`Dialog`时，可以复写该方法实现自定义需求 | - | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| open | 弹窗打开后触发 | - |
| close | 弹窗关闭后触发，不管是什么原因导致的关闭 | - |
| ok | 点击确定按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| terminate | 用户强行关闭弹窗时触发，即：点击“关闭”按钮，点击遮罩层，按ESC键 | - |
| afterClose | 弹窗退出动画执行完成后触发 | - |
