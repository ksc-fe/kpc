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
| counts | 展示按钮个数 | `number` | `7` |
| total | 数据总条数 | `number` | `0` |
| value | 当前页码 | `number` | `1` |
| limit | 页面条数 | `number` | `10` |
| limits | 页面条数 | `Array<number>` | `[10, 20, 50]` |
| flat | 是否展示无边框样式，默认有边框 | `boolean` | `false` |
| simple | 是否展示简洁样式 | `boolean` | `false` |
| showTotal | 显示总条数 | `boolean` | `true` |
| showGoto | 显示快速跳转框 | `boolean` | `false` |
| showLimits | 是否显示每页条数选择框 | `boolean` | `true` |
| disableBtn | 只禁用页码按钮，“上一页”“下一页”按钮依然可点 | `(page: number, limit: number) => boolean` | `undefined` |
| disablePage | 同时禁用页码按钮和“上一页”“下一页”按钮 | `(page: number, limit: number) => boolean` | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | `value`和`limit`变化时触发，同时变化不会重复触发 | `{value: number, limit: number}` |
