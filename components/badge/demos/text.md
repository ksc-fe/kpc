---
title:
    zh-CN: 展示文字
    en-US: Display Text
order: 0
---

## zh-CN

通过`text`属性，展示文案。如果`text`为`Number`类型，还可以指定`max`来规定最大展示数字，
超过该数字，后面添加加号`+`

## en-US

Show the text through the `text` property. If the `text` is a `Number` type, you can also specify 
the maximum number that can be displayed through the `max` property. If the number is exceeded, it will 
add a plus sign `+` after it.

```vdt
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

<div>
    <Badge text="new">Message</Badge>
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
