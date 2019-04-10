---
title:
    zh-CN: 指定尺寸
    en-US: Specified size
order: 1
---

## zh-CN

通过`size`可以指定组件的尺寸：`large`, `default`, `small`, `mini`

## en-US

The size of the component can be specified by `size`: `large`, `default`, `small`, `mini`

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} size="large" />
    <Pagination total={{ 200 }} />
    <Pagination total={{ 200 }} size="small" />
    <Pagination total={{ 200 }} size="mini" />
</div>
```

```styl
.k-pagination
    margin-bottom 20px
```
