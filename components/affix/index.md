---
title: 图钉
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| top | 指定元素固定距离顶部的位置 | `Number` | `undefined` |
| bottom | 指定元素固定距离底部的位置 | `Number` | `undefined` |
| shouldFix | 自定义元素固定规则 | `Function` | `undefined` |
| exclude | 排除某些固定的情况 | `Function` | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 固定状态改变时触发 | `isFixed` |
