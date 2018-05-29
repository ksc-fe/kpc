---
title: 输入框
category: 组件
order: 2
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 在原生`input`标签的`type`取值的基础上扩展了`textarea`值,当我改值时渲染成`textarea` | `String` | `"text"` |
| name | 原生`input`标签的`name`属性 | `String` | `undefined` |
| value | 输入框的值,可用`v-model`进行双向绑定 | `String` | `undefined` |
| defaultValue | `input`的`defaultValue`，首次渲染使用该值 | `String` | `undefined` |
| placeholder | 占位文案 | `String` | `undefined` |
| readonly | 是否只读 | `Boolean` | `false` |
| clearable | 是否展示快速清除按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| rows | 当`type = "textarea"`时，默认展示文本行数 | `Number` &#124; `String` | `2` |
| spellcheck | `textarea`是否进行拼写检查 | `Boolean` | `false` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| autoWidth | 是否宽度随输入的文本的长度变化而变化 | `Boolean` | `false` |
| width | 指定宽度，组件会加上单位`px` | `String`  &#124; `Number` | `undefined` |
| tabindex | 原生`tabindex`属性 | `String` | `undefined` |
| autocomplete | 原生`autocomplete`属性 | `String` | `undefined` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| prepend | 往`input`前面追加内容 |
| append | 往`input`后面追加内容 |
| prefix | 往`input`头部追加前缀 |
| suffix | 往`input`尾部追加后缀 |


# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 点击清除按钮时触发 | - |
