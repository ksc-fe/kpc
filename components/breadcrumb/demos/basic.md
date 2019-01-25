---
title: 基础用法
order: 0
---

通过添加`to`属性，来展示超链接

> 对于`to`属性，组件会通过它直接改变`location.href`，对于html5 history路由，我们使用各个框架的
> 路由组件。Vue: `router-link`; React: `Link`，即：
>
> `<BreadcrumbItem><router-link to="/home">Home</router-link></BreadcrumbItem>`
>
> `<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>`

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Breadcrumb>
    <BreadcrumbItem to="#/">item 1</BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb/">item 2</BreadcrumbItem>
    <BreadcrumbItem>item 3</BreadcrumbItem>
</Breadcrumb>
```
