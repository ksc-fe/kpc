---
title: 面包屑
category: 组件
order: 16 
sidebar: doc
---

# 属性

## Breadcrumb

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 指定分隔符 | `string` | `''` |

## BreadcrumbItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| to | 指定跳转的地址。支持字符串路径，也支持 `vue-router` 或 `react-router` 的对象参数格式（如 `{name: '...', params: {...}}`） | `string` &#124; `object` | `undefined` |

# 扩展点

## Breadcrumb

| 名称 | 说明 |
| --- | --- |
| separator | 指定分隔符 |
