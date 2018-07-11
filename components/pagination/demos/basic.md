---
title: 基本用法
order: 0
---

`Pagination`的基本用法，通过`total`指定数据总条数，`limit`指定每页数据条数，`limits`数组定义
可供选择的条数。可以通过`change`事件来监听组件`current`和`limit`的变化，组件会将`current`和`limit`
以对象的方式传给事件回调函数。

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} ref="__test" ev-change={{ (v) => console.log(v) }}/>
    <Pagination total={{ 200 }} limit={{ 20 }} />
    <Pagination total={{ 200 }} limit={{ 20 }} limits={{ [10, 20, 50, 100] }}/>
</div>
```

```styl
.k-pagination
    margin-bottom 20px 
```
