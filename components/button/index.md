---
title: 按钮
category: 组件
order: 0
sidebar: doc
---

# 属性

## Button

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | `"default"` &#124; `"primary"` &#124; `"warning"` &#124; `"danger"` &#124; `"success"` &#124; `"none"` &#124; `"secondary" `&#124; `"link"` &#124; `"flat"` | `"default"` | |
| size | 按钮尺寸 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` | |
| icon | 是否为图标按钮（宽高相等）| `boolean` | `false` | |
| circle | 是否为圆角按钮 | `boolean` | `false` | |
| loading | 是否为正在加载中的按钮（推荐优先使用此属性控制loading状态，其次才是 `showLoading()`/`hideLoading()` 方法） | `boolean` | `false` | |
| disabled | 是否禁用状态 | `boolean` | `false` | |
| fluid | 宽度撑满父容器（`width: 100%`）。前提：父元素必须有明确的宽度，否则无效果 | `boolean` | `false` | |
| htmlType | 按钮`<button>`元素的`type` | `string` | `"button"` | |
| tagName | 按钮渲染后的实际html元素，例如我们可以传入`"a"`来渲染成超链接 | `string` | `button` | |
| value | 对于`radio/checkbox`类型的按钮组，我们可以给每个按钮指定一个选中时的值 | `*` | `undefined` | |
| name | 对于`radio/checkbox`类型的按钮组，我们给`input`指定`name`属性 | `string` | `undefined` | |
| ghost | 展示透明背景的按钮 | `boolean` | `false` | |
| color | 自定义字体、边框、波纹动效颜色 | `string` | `undefined` | 3.3.3 |
| href | 超链接的`href`属性，当指定该属性时，按钮渲染为超链接，即`tagName`为`a`，点击后跳转到指定的url | `string` | `undefined` | |
| target | 超链接的`target`属性，`tagName`为`a`时生效，指定链接打开方式 | `string` | `undefined` | |
| download | 超链接的`download`属性，`tagName`为`a`时生效，指定下载文件的文件名 | `string` | `undefined` | |

## ButtonGroup

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| vertical | 是否垂直排列按钮组 | `boolean` | `false` | |
| checkType | 指定按钮组为单选或复选类型，此时需要给每个按钮指定`value`来作为选中的值 | `"radio"` &#124; `"checkbox"` &#124; `"none"` | `"none"` | |
| value | 对于`radio`和`checkbox`类型按钮组，该值表示选中的按钮的值，可以使用`v-model`进行双向绑定 | `*` | `undefined` | |
| fluid | 宽度撑满父容器（`width: 100%`）。前提：父元素必须有明确的宽度，否则无效果 | `boolean` | `false` | |
| seperate | 是否展示间隔，此属性为错别字，已经在3.4.4以及之后的版本被删除，请使用正确的属性 `separate` | `boolean` | `false` | |
| separate | 是否展示间隔 | `boolean` | `false` | 3.4.4 |
| btnWidth | 指定按钮组每个按钮的固定宽度，默认根据内容撑开 | `number` &#124; `string` | `undefined` | 3.3.3 |

# 方法

## Button

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showLoading | 展示loading状态 | - | `undefined` |
| hideLoading | 取消loading状态 | - | `undefined` |
| disable | 禁用按钮 | - | `undefined` |
| enable | 启用按钮 | - | `undefined` |

