---
title: 
    zh-CN: 指定分隔符
    en-US: Specify Separator
order: 1
---

## zh-CN

通过`separator`属性或者`separator`扩展点可以指定分隔符

## en-US

You can specify the separator by `separator` property or `separator` block.

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Breadcrumb>
    <b:separator>
        <b class="separator">=></b>
    </b:separator>
    <BreadcrumbItem to="/">
        <i class="ion-home" /> item 1
    </BreadcrumbItem>
    <BreadcrumbItem to="/components/breadcrumb/">
        <i class="ion-earth" /> item 2
    </BreadcrumbItem>
    <BreadcrumbItem>
        <i class="ion-planet" /> item 3
    </BreadcrumbItem>
</Breadcrumb>
```

```styl
.separator
    color #ffa133
i
    margin-right 3px
```
