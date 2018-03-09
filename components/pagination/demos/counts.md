---
title: 改变翻页按钮数量
order: 2
---

组件默认会展示7个翻页按钮（包括省略号...)，通过`counts`属性我们可以指定按钮个数。

> 最好不要小于7个，否则影响体验。使用奇数可以使页码对称分布

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} counts="10" />
    <Pagination total={{ 200 }} counts="9" />
</div>
```

```styl
.k-pagination
    margin-bottom 20px
```
