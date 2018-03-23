---
title: 基础用法
order: 0
---

通过添加`to`属性，来展示超链接

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Breadcrumb>
    <BreadcrumbItem to="#/">item 1</BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb/">item 2</BreadcrumbItem>
    <BreadcrumbItem>item 3</BreadcrumbItem>
</Breadcrumb>
```
