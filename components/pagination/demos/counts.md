---
title:
    zh-CN: 改变翻页按钮数量
    en-US: Change the number of page turning buttons
order: 2
---

## zh-CN

组件默认会展示7个翻页按钮（包括省略号...)，通过`counts`属性我们可以指定按钮个数。

> 最好不要小于7个，否则影响体验。使用奇数可以使页码对称分布

## en-US

By default, the component will display 7 page-turning buttons (including ellipsis...), and we can specify the number of buttons by the `counts` property.

> It is best not to be less than 7, otherwise it will affect the experience. Use odd numbers to make page numbers symmetrically distributed

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
