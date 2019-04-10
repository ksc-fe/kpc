---
title:
    zh-CN: 排序
    en-US: sort
order: 2.1
---

## zh-CN

通过`pull`和`push`可以改变列的顺序

1. `pull` 定义列距离右边界的栅格数
2. `push` 定义列距离左边界的栅格数

> 通过`pull`和`push`排序可以有比较好的浏览器兼容性，当然如果你无需支持IE9及以下的浏览器，可以使用flex布局的order进行排序

## en-US

The order of the columns can be changed by `pull` and `push`

1. `pull` defines the number of rasters whose columns are from the right border
2. `push` defines the number of rasters in the column from the left border

> Sorting by `pull` and `push` can have better browser compatibility. Of course, if you don't need to support IE9 and below, you can use the order of flex layout to sort.

```vdt
import {Row, Col} from 'kpc/components/grid';

<Row>
    <Col span="18" push="6">1 col-18 push-6</Col>
    <Col span="6" pull="18">2 col-6 push-18</Col>
</Row>
```

```styl
.k-col
    line-height 40px
    text-align center
    color #fff
    &:nth-of-type(even)
        background #0a5eee
    &:nth-of-type(odd)
        background lighten(#0a5eee, 30%)
```
