---
title: 指定分隔符
order: 1
---

通过`separator`属性可以指定分隔符，该属性值会使用`innerHTML`写入，所以可以使用任意
html字符串。

> 使用`innerHTML`存在XSS风险，需要自行规避

```vdt
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Breadcrumb separator="<b class='separator'>=></b>">
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
