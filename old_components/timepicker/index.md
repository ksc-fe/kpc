---
title: 时间选择
category: 组件
order: 7 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的时间字符串 | `String` | `undefind` |
| clearable | 是否能清空当前值 | `Boolean` | `false` |
| step | 固定时间点的步长 | `String` | `undefined` |
| max | 最大可选时间 | `String` | `undefined` |
| min | 最小可选时间 | `String` | `undefined` |
| placeholder | 占位文字 | `String` | `"请选择时间"` |
| disabled | 是否禁用 | `Boolean` | `false` |
| multiple | 是否支持多选 | `Boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| range | 是否选择时间范围 | `Boolean` | `false` |
| container | 指定弹出选择层追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
| format | 指定时间格式化字符串 | `String` | `HH:mm:ss` |
| valueFormat | 指定`value`值时间格式化字符串 | `String` | `undefined` |
| showFormat | 指定展示的时间格式化字符串 | `String` | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| selectStart | 该事件尽在范围选择(`range`)，并且只选择了第一个值时触发 | `timeString` |
| change | 当用户操作完成且值`value`变化时触发 | `dateString` |
