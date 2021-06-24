---
title: 无头部
order: 1
---

不指定`title`属性和相关的扩展点，则不会展示头部

```vdt
import {Card} from 'kpc/components/card';

<div>
    <Card>
        <div>11111</div>
        <div>11111</div>
    </Card>
    <Card type="border">
        <div>11111</div>
        <div>11111</div>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
```
