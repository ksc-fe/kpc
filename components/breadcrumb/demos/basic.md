---
title: 
    zh-CN: 基础用法
    en-US: Basic Usage
order: 0
---

## zh-CN

通过添加`to`属性，来展示超链接

> `to`属性支持`vue-router`或者`react-router` `push`方法参数用法

## en-US

You can sepecify the hyperlink by add `to` property.

> The `to` propperty support the parameter usage of the `push` mehtod of `vue-router` or `react-router`.

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Breadcrumb>
    <BreadcrumbItem to="#/">item 1</BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb/">item 2</BreadcrumbItem>
    <BreadcrumbItem>item 3</BreadcrumbItem>
</Breadcrumb>
```
