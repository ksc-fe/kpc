---
title: 尺寸
order: 4
---

通过`size`属性可以指定组件的尺寸（主要改变padding）：`large`, `default`,`small`, `mini`。

```vdt
import {Card} from 'kpc';

<div>
    <Card title="用户信息" type="border" size="large">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
    <Card title="用户信息" type="border">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
    <Card title="用户信息" type="border" size="small">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
    <Card title="用户信息" type="border" size="mini">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
```
