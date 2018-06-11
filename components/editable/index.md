---
title: 可编辑文本
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| editing | 是否为编辑状态 | `Boolean` | `false` |
| value | 编辑的内容，使用`v-model`进行双向绑定 | `String` | `undefined` |
| required | 是否规定不能为空 | `Boolean` | `true` |
| validate | 验证规则，可以为函数/正则/正则字符串，若为字符串将转为正则表达式；函数则会传入当前编辑框的值来调用函数验证，返回`true`则验证通过，否则验证失败 | `Function` &#124; `RegExp` &#124; `String` | `undefined` |
| disabled | 是否禁用编辑 | `Boolean` | `false` |
| tip | 编辑按钮提示文案 | `String` | `"编辑"` |
| trim | 是否去掉前后空白字符 | `Boolean` | `true` |
| invalid | 是否为验证失败状态 | `Boolean` | `false` |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| reset | 还原到上次的结果 | - | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| error | 验证失败时触发 | 1. 当前组件实例 <br /> 2. 当前输入的值 |
