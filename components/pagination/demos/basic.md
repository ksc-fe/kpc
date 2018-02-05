---
title: 基本用法
order: 0
---

`Pagination` size用法：mini，small，default

```jsx
var Pagination = require('kpc/components/pagination');
    
    <Pagination total={{ 201 }} current={{ 2 }} size="default" />
```

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 201 }} current={{ 2 }} size="mini" />
    <Pagination total={{ 201 }} current={{ 2 }} size="small" />
    <Pagination total={{ 201 }} current={{ 2 }} size="default" showGoto />
</div>
```

```styl
.k-pagination
    margin 30px 30px
```
