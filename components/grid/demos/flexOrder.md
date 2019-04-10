---
title:
    zh-CN: flex排序
    en-US: flex sort
order: 5.1
---

## zh-CN

给`Col`添加`order`属性，即可自动启用`flex`布局来定义`Col`的顺序

## en-US

Give ` Col ` add ` order ` attributes, can be automatically enabled ` flex ` layout to define ` Col ` order

```vdt
import {Row, Col} from 'kpc/components/grid';

<Row>
    <Col span="6" order="4">1 col-6 order-4</Col>
    <Col span="6" order="3">2 col-6 order-3</Col>
    <Col span="6" order="2">3 col-6 order-2</Col>
    <Col span="6" order="1">4 col-6 order-1</Col>
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
