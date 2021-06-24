---
title: 头部附加内容
order: 2
---

使用`extra`扩展点，可以在头部右侧追加内容

```vdt
import {Card} from 'kpc/components/card';

<div>
    <Card title="用户信息">
        <b:extra>
            数据继承
        </b:extra>
        <div>11111</div>
        <div>11111</div>
    </Card>
    <Card title="用户信息" type="border">
        <b:extra>
            数据采集
        </b:extra>
        <div>11111</div>
        <div>11111</div>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
    .k-tabs
        border none
    &.k-border
        .k-tabs
            height 48px
            line-height 46px
```
