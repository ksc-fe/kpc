---
title: 禁用状态
order: 2
---

不管是哪种展示类型，只要添加`disabled`属性，就不展示徽标

```vdt
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

<div>
    <Badge disabled>Message</Badge>
    <Badge disabled>
        <Button>Message</Button>
    </Badge>
    <Badge text={{ 19 }} disabled>
        <Button>Message</Button>
    </Badge>
    <Badge text={{ 100 }} max={{ 99 }} disabled>
        <Button>Message</Button>
    </Badge>
</div>
```

```styl
.k-badge
    margin-right 30px
```
