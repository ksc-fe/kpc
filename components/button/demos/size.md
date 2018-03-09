---
title: 按钮尺寸
order: 4
---

通过`size`属性可以指定按钮的尺寸：`default`,`small`, `mini`。

```vdt
import Button from 'kpc/components/button';

<div>
    <Button>default</Button>
    <Button type="small">small</Button>
    <Button type="mini">mini</Button>
    <br /><br />
    <Button icon circle><i class="k-icon ion-ios-search"></i></Button>
    <Button icon circle size="small"><i class="k-icon ion-ios-search"></i></Button>
    <Button icon circle size="mini"><i class="k-icon ion-ios-search"></i></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```
