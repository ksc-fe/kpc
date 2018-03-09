---
title: 指定尺寸
order: 1
---

通过`size`可以指定组件的尺寸：`default`, `small`, `mini`

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} />
    <Pagination total={{ 200 }} size="small" />
    <Pagination total={{ 200 }} size="mini" />
</div>
```

```styl
.k-pagination
    margin-bottom 20px
```
