---
title: 指定分隔符
order: 1
---

通过`separator`属性或者`separator`扩展点可以指定分隔符

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Breadcrumb>
    <b:separator>
        <b class="separator">=></b>
    </b:separator>
    <BreadcrumbItem to="/">
        <i class="ion-home"></i> item 1
    </BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb/">
        <i class="ion-earth"></i> item 2
    </BreadcrumbItem>
    <BreadcrumbItem>
        <i class="ion-planet"></i> item 3
    </BreadcrumbItem>
</Breadcrumb>
```

```styl
.separator
    color #ffa133
i
    margin-right 3px
```
