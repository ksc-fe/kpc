---
title:
    zh-CN: 独立使用
    en-US: Independent usage
order: 3
---

## zh-CN

不给组件指定子元素，可以展示单独的徽标

## en-US

If you don't set a child element to this component, it can display a seperate badge.

```vdt
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

<div>
    <Badge />
    <Badge text="new" />
    <Badge text={{ 19 }} />
    <Badge text={{ 100 }} max={{ 99 }} />
</div>
```

```styl
.k-badge
    margin-right 30px
```
