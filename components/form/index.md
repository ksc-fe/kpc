---
title: 表单
category: 组件
order: 9
sidebar: doc
---

# 属性

## Form

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| labelWidth | 定义所有子孙`FormItem`组件的`label`宽度 | `String` &#124; `Number` | `undefined` |
| layout | 指定表单布局方式 | `"horizontal"` &#124; `"vertical"` &#124; `"inline"` | `"horizontal"` |
| starOnRequired | 当`FormItem`必填时，是否在`label`前面展示`*` | `Boolean` | `false` |

## FormItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 指定需要验证的属性名称 | `String` | `undefined` |
| rules | 指定验证规则 | `Object` | `{}` |
| messages | 指定验证失败时错误提示文案 | `Object` | `{}` |
| classNames | 指定验证失败时添加的className | `Object` | `{}` |
| label | 指定表单每一项前面展示的标题 | `String` | `undefined` |
| htmlFor | 指定`label`的`for`属性 | `String` | `undefined` | 
| hideLabel | 是否隐藏`label`，默认会展示`label`，即使该属性为空，也会展示占位元素 | `Boolean` | `false` |
| isDirty | 组件是否被污染，组件只有被污染后，才会进行表单验证 | `Boolean` | `false` |
| force | 如果组件被污染，让`FormItem`更新时，强制验证。你也可以配合`isDirty`属性，指定强制验证的时机 [#6][1]。`force`的意思是：在组件的`update`生命周期函数中去调用`validate`验证`FormItem`；默认情况下组件会`watch` `rules`以及`model`，只有在它们变化时才验证 | `Boolean` | `false` |
| fluid | `FormItem`的宽度默认是被子元素撑开的，添加该属性可以渲染`100%`的宽度 | `Boolean` | `false` |
| size | 控制`FormItem`的间距 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |

# 扩展点

## FormItem

| 名称 | 说明 |
| --- | --- |
| label | 扩展前面的标题`label` |
| content | 扩展后面的内容，也可以使用`children`代替 |
| append | 往后面追加的内容 |

# 事件

## Form

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| submit | 当表单提交并且所有规则都验证通过时触发 | 1. `Event` <br /> 2. `Form`实例 |

# 方法

## Form

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 验证表单所有规则 | - | `Promise`: `.then(valid => {})`，`valid`为`true`验证成功，否则失败 |
| reset | 重置表单 | - | `undefined` |
| getFirstInvalidFormItem | 获取第一条出错的`FormItem` | - | `FormItem` |

# 静态方法

## Form

`Form`还提供了一个静态方法，用于全局添加验证规则，通过`Form.addMethod()`调用

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| addMethod | 添加全局验证规则，这样在所有`FormItem`中如果需要使用该规则，只需要在`rules`中写上该规则名即可 | 1. `name` 指定规则名称，不能重复 <br /> 2. `method` 指定该规则的验证函数，该函数返回`true`或`false`来标识验证成功或失败，如果返回字符串，则直接当做错误文案展示，该函数将传入3个参数：1. 当前验证的值，2. 当前验证的`FormItem`实例，3. 当前规则的参数，即使用该规则时指定的值 <br /> 3. `message` 验证失败时的错误提示文案，该值可以为字符串或者函数，如果为函数，传入参数同`method`，用于个性化文案提示 <br /> 4. `className` 验证失败时添加的类名 | `undefined` |

[1]: https://github.com/ksc-fe/kpc/issues/6
