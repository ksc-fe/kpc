---
title: 响应式布局
order: 6
---

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <Row> 
        <Col xs="2" sm="4" md="6" lg="8" xl="10">col</Col>
        <Col xs="20" sm="16" md="12" lg="8" xl="4">col</Col>
        <Col xs="2" sm="4" md="6" lg="8" xl="10">col</Col>
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
