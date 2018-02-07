---
title: 基本用法
order: 0
---

`Pagination` size用法：mini，small，default

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 201 }} current={{ 2 }} showGoto />
    <Pagination total={{ 201 }} current={{ 2 }} size="small" />
    <Pagination total={{ 201 }} current={{ 2 }} size="mini" />
</div>
```

```styl
.k-pagination
    margin 30px 30px
```
