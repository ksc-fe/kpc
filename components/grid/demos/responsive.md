---
title: 响应式布局
order: 6
---

响应式布局参考[bootstrap v4](https://getbootstrap.com/docs/4.0/layout/grid/)，分为5个等级：
`xs` `sm` `md` `lg` `xl`。你也可以以对象的方式指定多个属性(包括：`span` `offset` `pull` 
`push` `order`)的响应式，其中`xs="2"`等价于`xs={{ {span: 2} }}`

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <h5>指定每一个断点Col所占的栅格数</h5>
    <Row> 
        <Col xs="2" sm="4" md="6" lg="8" xl="10">col</Col>
        <Col xs="20" sm="16" md="12" lg="8" xl="4">col</Col>
        <Col xs="2" sm="4" md="6" lg="8" xl="10">col</Col>
    </Row>
    <h5>指定一个断点，当宽度小于该断点时，Col将以100%宽度纵向排列</h5>
    <Row> 
        <Col md="16">col-md-18</Col>
        <Col md="8">col-md-8</Col>
    </Row>
    <h5>同时指定多个属性</h5>
    <Row>
        <Col md={{ {span: 4, offset: 4, order: 1} }} lg={{ {span: 8, offset: 8, order: 2} }}>1 col</Col>
        <Col md={{ {span: 8, offset: 8, order: 2} }} lg={{ {span: 4, offset: 4, order: 1} }}>2 col</Col>
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
h5
    margin-bottom 8px
```
