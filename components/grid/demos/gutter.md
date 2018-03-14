---
title: 间距
order: 1
---

给`Row`添加`gutter`，可以定义`Col`之间的间距

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <Row gutter="16"> 
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <Row gutter="16">
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
        div
            background #0a5eee
    &:nth-of-type(odd)
        div
            background lighten(#0a5eee, 30%)
.k-row
    margin-bottom 20px
```
