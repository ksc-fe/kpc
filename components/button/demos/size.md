---
title: 按钮尺寸
order: 4
---

通过`size`属性可以指定按钮的尺寸：`large`, `default`,`small`, `mini`。

```vdt
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Button size="large">large</Button>
    <Button>default</Button>
    <Button size="small">small</Button>
    <Button size="mini">mini</Button>
    <br /><br />
    <Button icon circle size="large"><Icon class="ion-ios-search" size="large" /></Button>
    <Button icon circle><Icon class="ion-ios-search" /></Button>
    <Button icon circle size="small"><Icon class="ion-ios-search" size="small" /></Button>
    <Button icon circle size="mini"><Icon class="ion-ios-search" size="mini" /></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```
