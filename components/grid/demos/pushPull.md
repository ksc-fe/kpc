---
title: 排序
order: 2.1
---

通过`pull`和`push`可以改变列的顺序

1. `pull` 定义列距离右边界的栅格数
2. `push` 定义列距离左边界的栅格数

> 通过`pull`和`push`排序可以有比较好的浏览器兼容性，当然如果你无需支持IE9及以下的浏览器，可以
> 使用flex布局的order进行排序

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
