---
title: 警告提示
category: 组件
order: 89 
sidebar: doc
---

> `Tip`组件继承`Tag`组件，所以很多属性都是一样的

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 组件类型 | `"default"` &#124; `"primary"` &#124; `"success"` &#124; `"warning"` &#124; `"danger"` | `"default"` |
| disabled | 是否展示禁用状态 | `Boolean` | `false` |
| closable | 是否可关闭 | `Boolean` | `false` |
| closed | 是否已关闭 | `Boolean` | `false` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| title | 自定义标题内容 |
| close | 自定义关闭按钮内容 |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| close | 标签关闭事件 | - |
