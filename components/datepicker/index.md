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
| filterable | 是否支持筛选 | `boolean` | `false` |
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
| max | 最大可选日期，可以为日期字符串或日期对象 | `Value` | `undefind` |
| min | 最小可选日期，可以为日期字符串或日期对象 | `Value` | `undefind` |
| disabledDate | 该属性值是一个函数，用于定义那些日期被禁止选择，函数参数为日期字符串，返回`true`则表示禁用该日期 | `(v: Dayjs) => boolean` | `undefined` |
| type | 组件类型：`"date"` 只选择日期；`"datetime"` 选择日期和时间；`"year"` 选择年份；`"month"` 选择月份 | `"date"` &#124; `"datetime"` &#124; `"year"` &#124; `"month"` | `"date"` |
| shortcuts | 指定快捷方式 | `Shortcut[]` | `undefined` |

```ts
import {Dayjs} from 'dayjs';
import {VNode} from 'intact';

export type Value = string | Date | number | Dayjs;
export type Shortcut = {
    label: (() => string | VNode) | string | VNode 
    value: () => Value | [Value, Value]
}
```

# 静态方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getDateString | 将日期对象转为形如`2019-02-01 12:00:00`的字符串 | 1. `date` 将要转化的日期对象 <br /> 2. `type` `"year"`： 只返回年份；`"month"`：返回年份和月份；`"datetime"`：返回日期和时间字符串；`*`：否则返回日期字符串 | `String` |
| createDate | 传入形如`2019-02-01 12:00:00`或`2019-02-01`的字符串，返回日期对象（跨浏览器） | `dateString` | `Date` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| selectStart | 该事件尽在范围选择(`range`)，并且只选择了第一个值时触发 | `dateString` |
| change | 当用户操作完成且值`value`变化时触发 | `dateString` |
