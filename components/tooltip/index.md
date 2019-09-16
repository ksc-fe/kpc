---
title: 提示弹层
category: 组件
order: 13
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 提示弹层的展示隐藏状态，可用`v-model`进行双向绑定 | `Boolean` | `false` |
| trigger | 触发方式，点击触发`click`, 悬浮触发`hover` | `"hover"` &#124; `"click"` | `"hover"` |
| canHover | 对于悬浮触发`hover`的方式，提示内容弹层是否在鼠标悬浮时仍然展示，默认鼠标离开触发元素弹层就会关闭 | `Boolean` | `false` |
| showArrow | 弹层是否展示箭头 | `Boolean` | `true` |
| position | 弹层的位置 | `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` &#124; `Object` | `{my: 'center bottom-10', at: 'center top'}` |
| transition | 弹层动画，默认只提供`c-fade`，你也可以传入任意自定义动画类型 | `String` | `"c-fade"` |
| class | 样式名。特别说明：该属性会往内容弹出层上添加，vue下会同时往触发元素和弹层元素上添加 | `String` &#124; `Object` | `undefined` |
| confirm | 带“确认”和“取消”按钮的确认弹层 | `Boolean` | `false` |
| onText | `confirm`模式下的“确认”按钮文案 | `String` | `"确认"` |
| cancelText | `confirm`模式下的“取消”按钮文案 | `String` | `"取消"` |
| container | 指定弹出提示内容追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
| theme | 指定主题 | `"dark"` &#124; `"light"` | `"dark"` |
| disabled | 是否禁用提示 | `Boolean` | `false` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 弹层展开事件 | - |
| hide | 弹层隐藏事件 | - |
| ok | `confirm`模式下，点击“确认”按钮触发 | - |
| cancel | `confirm`模式下，点击“取消”按钮触发 | - |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| content | 自定义提示内容 |
