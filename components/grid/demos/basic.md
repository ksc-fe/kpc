---
title: 基本用法
order: 0
---

将`Col`嵌套在`Row`中，然后用`span`属性定义所占的宽度，宽度为百分比，每一份是`1/24`

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <Row> 
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <Row>
        <Col span="4">col-4</Col>
        <Col span="6">col-6</Col>
        <Col span="8">col-8</Col>
        <Col span="6">col-6</Col>
    </Row>
</div>
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
.k-row
    margin-bottom 20px
```
