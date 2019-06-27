---
title: 简洁样式
order: 1.2
---

添加`simple`属性，可以展示简洁样式

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
