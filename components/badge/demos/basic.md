---
title:
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

给子元素展示红点

## en-US

Show red dots to children.

```vdt
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

<div>
    <Badge>Message</Badge>
    <Badge>
        <Button>Message</Button>
    </Badge>
</div>
```

```styl
.k-badge
    margin-right 30px
```
