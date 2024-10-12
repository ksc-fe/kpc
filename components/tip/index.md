---
title: 警告提示
category: 组件
order: 89 
sidebar: doc
---

> `Tip`组件继承`Tag`组件，所以属性是一样的

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 组件类型 | `"default"` &#124; `"primary"` &#124; `"success"` &#124; `"warning"` &#124; `"danger"` | `"default"` |
| closable | 是否可关闭 | `boolean` | `false` |
| closed | 是否已关闭 | `boolean` | `false` |
| disabled | 是否展示禁用状态 | `boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| border | 定义边框样式 | `"solid"` &#124; `"dashed"` &#124; `"none"` | `"solid"` |
| showIcon | 展示Icon | `boolean` | `false` |


# 扩展点

| 名称 | 说明 |
| --- | --- |
| title | 自定义标题内容 |
| close | 自定义关闭按钮内容 |
| icon | 自定义Icon内容 |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| close | 标签关闭事件 | `(e: MouseEvent) => void` |
