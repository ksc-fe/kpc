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
| separator | 指定分隔符 | `String` | `undefined` |

## BreadcrumbItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| to | 指定超链接地址 | `String` | `undefined` |
| separator | 指定分隔符，会覆盖`Breadcrumb`中的定义 | `String` | `">"` |

# 扩展点

## Breadcrumb

| 名称 | 说明 |
| --- | --- |
| separator | 扩展分隔符 |

## BreadcrumbItem

| 名称 | 说明 |
| --- | --- |
| separator | 扩展分隔符，优先级高于`Breadcrumb`中的定义 |
