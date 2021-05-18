---
title: 无边框样式
order: 1.1
---

添加`noBorder`属性，可以展示无边框的样式效果

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination noBorder total={{ 200 }} size="large" />
    <Pagination noBorder total={{ 200 }} />
    <Pagination noBorder total={{ 200 }} size="small" />
    <Pagination noBorder total={{ 200 }} size="mini" />
</div>
```

```styl
.k-pagination
    margin-bottom 20px
```
