---
title:
    zh-CN: 响应式布局
    en-US: Responsive layout
order: 6
---

## zh-CN

响应式布局参考[bootstrap v4](https://getbootstrap.com/docs/4.0/layout/grid/)，分为6个等级：`xs` `sm` `md` `lg` `xl` `xxl`。你也可以以对象的方式指定多个属性(包括：`span` `offset` `pull` `push` `order`)的响应式，其中`xs="2"`等价于`xs={{ {span: 2} }}`

## en-US

The responsive layout reference [bootstrap v4] (https://getbootstrap.com/docs/4.0/layout/grid/) is divided into 6 levels: `xs` `sm` `md` `lg` `xl` `xxl `. You can also specify multiple properties (including :`span` `offset` `pull` `push` `order`) in the form of an object, where `xs="2"` is equivalent to `xs={{ {span: 2} }}`

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <h5>Specify the number of grids per Col breakpoint</h5>
    <Row>
        <Col xs="2" sm="4" md="6" lg="8" xl="10" xxl="11">col</Col>
        <Col xs="20" sm="16" md="12" lg="8" xl="4" xxl="2">col</Col>
        <Col xs="2" sm="4" md="6" lg="8" xl="10" xxl="11">col</Col>
    </Row>
    <h5>Specifies a breakpoint, and when the width is less than that, Col will range in width by 100%</h5>
    <Row>
        <Col md="16">col-md-18</Col>
        <Col md="8">col-md-8</Col>
    </Row>
    <h5>Multiple attributes are specified at the same time</h5>
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
