---
title: 按钮
category: 组件
order: 0
---

# 属性

## Button

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `"default"` &#124; `"primary"` &#124; `"warning"` &#124; `"danger"` &#124; `"none"` | `"default"` |
| size | 按钮尺寸 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| icon | 是否为图标按钮（宽高相等）| `Boolean` | `false` |
| circle | 是否为圆角按钮 | `Boolean` | `false` |
| loading | 是否为正在加载中的按钮 | `Boolean` | `false` |
| disabled | 是否禁用状态 | `Boolean` | `false` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| htmlType | 按钮`<button>`元素的`type` | `String` | `"button"` |
| tagName | 按钮渲染后的实际html元素，例如我们可以传入`"a"`来渲染成超链接 | `String` | `button` |
| tagProps | 当指定`tagName`时，该属性将传给`tagName`指定的元素 | `Object` | `undefind` |
| value | 对于`radio`类型的按钮组，我们可以给每个按钮指定一个选中时的值 | `*` | `undefined` |
| name | 对于`radio`类型的按钮组，我们给`radio`指定`name`属性 | `String` | `undefined` |

## ButtonGroup

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | 是否垂直排列按钮组 | `Boolean` | `false` |
| radio | 是否为`radio`类型按钮组，`radio`按钮组可以给每个指定`value`来作为选中的值 | `Boolean` | `false` |
| value | 对于`radio`类型按钮组，改值表示选中的按钮的值，可以使用`v-model`进行双向绑定 | `*` | `undefined` |

# 方法

## Button

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showLoading | 展示loading状态 | - | `undefined` |
| hideLoading | 取消loading状态 | - | `undefined` |
| disable | 禁用按钮 | - | `undefined` |
| enable | 启用按钮 | - | `undefined` |

