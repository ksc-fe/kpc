---
title: 分页
category: 组件
order: 17 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"mini"` &#124; `"small"` | `"default"` |
| counts | 展示按钮个数 | `Number` | `7` |
| total | 数据总条数 | `Number` | `0` |
| showTotal | 显示总条数 | `Boolean` | `true` |
| current | 当前页码 | `Number` | `1` |
| showGoto | 显示快速跳转框 | `Boolean` | `false` |
| limit | 页面条数 | `Number` | `10` |
| limits | 页面条数 | `Array<Number>` | `[10, 20, 50]` |
| noBorder | 是否展示无边框样式，默认有边框 | `Boolean` | `false` |


# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| changePage | 切换页码 | 要切换到的页码 | `undefined` |
| prev | 上一页 | - | `undefined` |
| next | 下一页 | - | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | `current`和`limit`变化时触发，同时变化不会重复触发 | `{current, limit}` |
