---
title: 可编辑文本
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| editing | 是否为编辑状态 | `boolean` | `false` |
| value | 编辑的内容，使用`v-model`进行双向绑定 | `string` | `undefined` |
| required | 是否规定不能为空 | `boolean` | `true` |
| validate | 验证规则，可以为函数/正则/正则字符串，若为字符串将转为正则表达式；函数则会传入当前编辑框的值来调用函数验证，返回`true`则验证通过，否则验证失败 | `(v: string) => boolean` &#124; `RegExp` &#124; `string` | `undefined` |
| disabled | 是否禁用编辑 | `boolean` | `false` |
| tip | 编辑按钮提示文案 | `string` | `"编辑"` |
| trim | 是否去掉前后空白字符 | `boolean` | `true` |
| invalid | 是否为验证失败状态 | `boolean` | `false` |
| rows | 是否自动折行，以及行数控制 | `string`&#124;`number`&#124;`auto`&#124; `AutoRows` | `1` |
```ts
type AutoRows = {
    min?: number
    max?: number
} 
```
# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| error | 验证失败时触发 | `(value: string) => void` |
| change | 当值改变时触发 | `(newValue: string, oldValue: string) => void` |
