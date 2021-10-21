---
title: 指定分隔符
order: 1
---

通过`separator`属性或者`separator`扩展点可以指定分隔符

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import {Icon} from 'kpc/components/icon';

<Breadcrumb>
    <b:separator>
        <b class="separator">=></b>
    </b:separator>
    <BreadcrumbItem to="/">
        <Icon class="ion-home" /> item 1
    </BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb/">
        <Icon class="ion-earth" /> item 2
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Icon class="ion-planet" /> item 3
    </BreadcrumbItem>
</Breadcrumb>
```

```styl
.separator
    color #ffa133
i
    margin-right 3px
```
