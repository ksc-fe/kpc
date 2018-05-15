---
title: 基本用法
order: 0
---

`Pagination`的基本用法，通过`total`指定数据总条数，`limit`指定每页数据条数，`limits`数组定义
可供选择的条数

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} ref="__test" />
    <Pagination total={{ 200 }} limit={{ 20 }} />
    <Pagination total={{ 200 }} limit={{ 20 }} limits={{ [10, 20, 50, 100] }}/>
</div>
```

```styl
.k-pagination
    margin-bottom 20px 
```
