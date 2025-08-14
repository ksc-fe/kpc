---
title: 日期选择
category: 组件
order: 7
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选择的元素，可用`v-model`双向绑定 | `Value` &#124; `Value[]` &#124; `[Value, Value]`  &#124; `[Value, Value][]` | `""` |
| multiple | 是否支持多选 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 表单元素的`name` | `string` | `undefined` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| hideIcon | 是否隐藏后面的图标 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| fluid | 是否宽度100% | `boolean` | `false` |
| inline | 展示内联模式，该模式下，组件没有边框，宽度和高度如同内联元素一样由内容撑开 | `boolean` | `false` |
| placeholder | 占位文案 | `string` | `"请选择日期"` |
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| width | 指定宽度，组件自动添加单位`px` | `number` &#124; `string` | `undefined` | 
| range | 是否选择日期范围 | `boolean` | `false` |
| format | 指定日期格式化字符串 | `string` | `YYYY-MM-DD HH:mm:ss` |
| valueFormat | 指定`value`值日期格式化字符串 | `string` | `undefined` |
| showFormat | 指定展示的日期格式化字符串 | `string` | `undefined` |
| max | 最大可选日期 | `Value` | `undefind` |
| min | 最小可选日期 | `Value` | `undefind` |
| disabledDate | 该属性值是一个函数，用于定义那些日期被禁止选择，函数参数为日期字符串，返回`true`则表示禁用该日期 | `(v: Dayjs) => boolean` | `undefined` |
| type | 组件类型：`"date"` 只选择日期；`"datetime"` 选择日期和时间；`"year"` 选择年份；`"month"` 选择月份 |  &#124; `"datetime"` &#124; `"year"` &#124; `"month"` | `"date"` |
| shortcuts | 指定快捷方式 | `Shortcut[]` | `undefined` |
| show | 是否展示菜单项 | `boolean` | `false` |
| position | 菜单弹出的位置，默认与触发器左侧对齐向下偏移`8px`的地方 | `Position` &#124; `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` | `{my: 'left top+8', 'left bottom'}` |
| flat | 是否展示扁平样式 | `boolean` | `false` |
| draggable | 多选值是否支持拖动排序 | `boolean` | `false` |
| nowrap | 日期多选时， 是否换行显示 | `boolean` | `false` |
```ts
import {Dayjs} from 'dayjs';
import {VNode} from 'intact';

export type Value = string | Date | number | Dayjs;
export type Shortcut = {
    label: (() => string | VNode) | string | VNode 
    value: () => Value | [Value, Value]
}

type Position = {
    my?: string | [string, string]
    at?: string | [string, string]
    collision?: Collision | [Collision, Collision] 
    collisionDirection?: ['left'] | ['top'] | ['left', 'top']
}

type Collision = 'fit' | 'flip' | 'flipfit' | 'none'

export type Container = string | ((parentDom: Element, anchor: Node | null) => Element)
```

# 扩展点

## Select

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| value | 自定义选择结果的展示 | `([value: any, label: Children]) => Children` |
| values | 自定义多选的选择结果的展示 | `([values: any[], labels: Children[]]) => Children` |
| prefix | 自定义输入款前面展示的内容 | - |
| suffix | 自定义输入框后面展示的内容 | - |

```ts
import {Children} from 'intact';
```

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| show | 菜单弹出时触发 | - |
| hide | 菜单隐藏时触发 | - |
| selecting | 该事件尽在范围选择(`range`)触发，表示用户正在操作选择，可能只选了一个值，或者正在修改日期的时间 | `(value: [Dayjs, Dayjs?]) => void` |
