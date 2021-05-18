---
title: 可编辑文本
category: 组件
order: 99 
sidebar: doc
---

> 如果你不是通过`v-model`指令进行数据双向绑定，而是通过绑定`change`事件去修改的引用数据，则你需要
> 在修改数据后，手动触发更新`this.update()`，这样才能传递新的`children`子元素给组件去渲染。
>
> `vue`因为所有数据修改都会触发更新，所以无需手动触发更新

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

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| error | 验证失败时触发 | 1. 当前组件实例 <br /> 2. 当前输入的值 |
| change | 当值改变时触发，与`$change:value`不同的是，该事件只会在用户输入导致变更时触发 | `Editable, newValue, oldValue` |
