---
title: 展示文字
order: 0
---

通过`text`属性，展示文案。如果`text`为`Number`类型，还可以指定`max`来规定最大展示数字，
超过该数字，后面添加加号`+`

```vdt
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

<div>
    <Badge text="new">Message</Badge>
    <Badge text={{ 6 }}>
        <Button>Message</Button>
    </Badge>
    <Badge text={{ 19 }}>
        <Button>Message</Button>
    </Badge>
    <Badge text={{ 100 }} max={{ 99 }}>
        <Button>Message</Button>
    </Badge>
</div>
```

```styl
.k-badge
    margin-right 30px
```
