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
| labelWidth | 定义所有子孙`FormItem`组件的`label`宽度 | `string` &#124; `number` | `undefined` |
| layout | 指定表单布局方式 | `"horizontal"` &#124; `"vertical"` &#124; `"inline"` | `"horizontal"` |
| starOnRequired | 当`FormItem`必填时，是否在`label`前面展示`*` | `boolean` | `false` |
| size | 定义表单之间的间隔大小 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |

## FormItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定需要验证的数据 | `any` | `undefined` |
| rules | 指定验证规则 | `Record<string, any>` | `undefined` |
| messages | 指定验证失败时错误提示文案 | `Record<string, Message>` | `undefined` |
| classNames | 指定验证失败时添加的className | `Record<string, Classname>` | `undefined` |
| errorClassName | 指定验证失败时统一添加的className，不管是哪个规则导致的失败 | `string` | `undefined` |
| label | 指定表单每一项前面展示的标题 | `string` | `undefined` |
| htmlFor | 指定`label`的`for`属性 | `string` | `undefined` | 
| hideLabel | 是否隐藏`label`，默认会展示`label`，即使该属性为空，也会展示占位元素 | `boolean` | `false` |
| fluid | `FormItem`的宽度默认是被子元素撑开的，添加该属性可以渲染`100%`的宽度 | `boolean` | `false` |
| validateOnStart | 是否组件一渲染就开始验证，而不是等用户输入完成再验证 | `boolean` | `false` |

```ts
export declare type Method = (value: any, param: any) => boolean | string | Promise<boolean | string>
export declare type Message = string | ((value: any, param: any) => string)
export declare type ClassName = string | ((value: any, param: any) => string)
```

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
| submit | 当表单提交并且所有规则都验证通过时触发 | `(event: Event) => void` |

# 方法

## Form

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 验证表单所有规则 | - | `Promise<boolean>`: `.then(valid => {})`，`valid`为`true`验证成功，否则失败 |
| reset | 重置表单验证状态 | - | `undefined` |
| getFirstInvalidFormItem | 获取第一条校验失败的`FormItem` | - | `FormItem` |
| getAllInvalidFormItems | 获取所有校验失败的`FormItem` | - | `FormItem[]` |

# 静态方法

## Form

`Form`还提供了一个静态方法，用于全局添加验证规则，通过`Form.addMethod()`调用

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| addMethod | 添加全局验证规则，这样在所有`FormItem`中如果需要使用该规则，只需要在`rules`中写上该规则名即可 | 1. `name` 指定规则名称，不能重复 <br /> 2. `method` 指定该规则的验证函数，该函数返回`true`或`false`来标识验证成功或失败，如果返回字符串，则直接当做错误文案展示，该函数将传入2个参数：1. 当前验证的值，2. 当前规则的参数，即使用该规则时指定的值 <br /> 3. `message` 验证失败时的错误提示文案，该值可以为字符串或者函数，如果为函数，传入参数同`method`，用于个性化文案提示 <br /> 4. `className` 验证失败时添加的类名 | `undefined` |

```ts
export declare type Method = (value: any, param: any) => boolean | string | Promise<boolean | string>
export declare type Message = string | ((value: any, param: any) => string)
export declare type ClassName = string | ((value: any, param: any) => string)
export declare const addMethod: (
    name: string,
    method: Method,
    message?: Message | undefined,
    className?: ClassName | undefined
) => void;
```

[1]: https://github.com/ksc-fe/kpc/issues/6
