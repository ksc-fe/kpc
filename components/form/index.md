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
| starOnRequired | 当`FormItem`必填时，是否在`label`前面展示`*`（若 FormItem 设置了 `required: true`，Form 需要设置 `starOnRequired: true` 来展示必填星号） | `boolean` | `false` |
| size | 定义表单之间的间隔大小 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |

## FormItem

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 指定需要验证的数据。如果不指定，则不会进行任何验证 | `any` | `undefined` | |
| rules | 指定验证规则。如果不指定，则不会进行任何验证。内置规则请参考下文 `Rules` 类型定义 | `Rules` | `undefined` | |
| messages | 指定验证失败时错误提示文案。如果不指定，则使用内置规则的默认文案 | `Record<string, Message>` | `undefined` |
| classNames | 指定验证失败时针对特定规则添加的 className | `Record<string, ClassName>` | `undefined` |
| errorClassName | 指定验证失败时统一添加的 className，不管是哪个规则导致的失败 | `string` | `undefined` |
| label | 指定表单每一项前面展示的标题 | `string` | `undefined` |
| htmlFor | 指定 `label` 的 `for`属性 | `string` | `undefined` | 
| hideLabel | 是否隐藏 `label`，默认会展示 `label`，即使该属性为空，也会展示占位元素 | `boolean` | `false` |
| fluid | `FormItem` 默认宽度由子元素撑开，添加后渲染 `width: 100%` 撑满父容器。前提：父元素（比如`Form`）须有明确宽度，否则无效果 | `boolean` | `false` |
| validateOnStart | 是否组件一渲染就开始验证，而不是等用户输入完成再验证 | `boolean` | `false` | 3.1.1 |

```ts
export declare type MethodReturn = boolean | string | Promise<boolean | string>
/**
 * @param value 当前验证的值
 * @param param rules 中为该规则指定的参数
 */
export declare type Message = string | ((value: any, param: any) => string)
/**
 * @param value 当前验证的值
 * @param param rules 中为该规则指定的参数
 */
export declare type ClassName = string | ((value: any, param: any) => string)

/**
 * 内置验证规则
 */
export declare type Rules = {
    /** 必须填写。支持字符串（非空且去除空格）、数组（长度大于0）、null/undefined 判断 */
    required?: boolean;
    /** 必须是数字（0-9） */
    digits?: boolean;
    /** 必须是正确的邮箱地址 */
    email?: boolean;
    /** 必须是正确的网址（支持 IP 地址，但排除部分私有/保留 IP） */
    url?: boolean;
    /** 必须是正确的日期 */
    date?: boolean;
    /** 必须是正确的日期格式（YYYY-MM-DD） */
    dateISO?: boolean;
    /** 必须是正确的数（支持负数、逗号分隔、小数点） */
    number?: boolean;
    /** 最大长度。字符串：最多输入 n 个字符；数组：最多选择 n 项 */
    maxLength?: number;
    /** 最小长度。字符串：最少输入 n 个字符；数组：最少选择 n 项 */
    minLength?: number;
    /** 长度范围。字符串：输入 n 到 m 个字符；数组：选择 n 到 m 项 */
    rangeLength?: [number, number];
    /** 最大值。请输入不大于 n 的数 */
    max?: number | string;
    /** 最小值。请输入不小于 n 的数 */
    min?: number | string;
    /** 数值范围。请输入 n 到 m 之间的数 */
    range?: [number | string, number | string];
    /** 步长。请输入步长为 n 的数 */
    step?: number;
    /** 两次输入一致性检查。通常用于密码确认 */
    equal?: any;
    /** 自定义验证函数 */
    [key: string]: any | ((value: any, param: any) => MethodReturn);
}
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

| 方法名 | 说明 | 参数 | 返回值 | 版本 |
| --- | --- | --- | --- | --- |
| validate | 验证表单所有规则。`const valid = await form.validate()`，`valid` 为 `true` 表示全部通过，`false` 表示存在验证失败 | - | `Promise<boolean>` | |
| reset | 重置表单验证状态 | - | `undefined` | |
| submit | 提交表单并验证 | `(e: Event)` | `void` | |
| getFirstInvalidFormItem | 获取第一条校验失败的`FormItem` | - | `FormItem` | |
| getAllInvalidFormItems | 获取所有校验失败的`FormItem` | - | `FormItem[]` | 3.6.1 |

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
