---
title:
    zh-CN: 简洁样式
    en-US: Simple style
order: 1.2
---

## zh-CN

添加`simple`属性，可以展示简洁样式

## en-US

Add the `simple` attribute to show a clean style

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination simple total={{ 200 }} size="large" />
    <Pagination simple total={{ 200 }} />
    <Pagination simple total={{ 200 }} size="small" />
    <Pagination simple total={{ 200 }} size="mini" />
</div>
```

```styl
.k-pagination
    display inline-block
    vertical-align middle
    margin-right 20px
```
