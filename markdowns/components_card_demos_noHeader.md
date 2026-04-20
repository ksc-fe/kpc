---
title: 无头部
order: 1
---

不指定`title`属性和相关的扩展点，则不会展示头部

```vdt
import {Card} from 'kpc';

<div>
    <Card>
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
    <Card type="border">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
```
