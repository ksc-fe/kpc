---
title:
    zh-CN: 无边框样式
    en-US: Borderless style
order: 1.1
---

## zh-CN

添加`noBorder`属性，可以展示无边框的样式效果

## en-US

Add the `noBorder` property to display borderless style effects

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
