---
title: 基础用法 
order: 0
---

组件提供了三种样式，可用`type`属性指定：`shadow` (带阴影，默认) `border` (带边框) `none` (无边框和阴影，可用于
深色背景下)

```vdt
import {Card} from 'kpc';

<div>
    <Card title="用户信息">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
    <Card title="用户信息" type="border">
        <div>卡片内容</div>
        <div>卡片内容</div>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
```
