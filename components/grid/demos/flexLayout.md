---
title:
    zh-CN: flex 布局
    en-US: flex layout
order: 4
---

## zh-CN

给`Row`添加`justify`属性，即可自动启用`flex`布局来定义`Col`水平方向的排列方式，它的可选值为：
`start` `end` `center` `between` `around` `evenly`

## en-US

Give ` Row ` add ` the justify ` attributes, can be automatically enabled ` flex ` layout to define ` Col ` horizontal arrangement, it's optional value is:
` start ` ` end ` ` center ` ` between ` ` around ` ` evenly `


```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <h5>The left --start</h5>
    <Row justify="start">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>The right --end</h5>
    <Row justify="end">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>The center --center</h5>
    <Row justify="center">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>Average distribution, top edge --between</h5>
    <Row justify="between">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>The average distribution, the distance from the boundary is half the distance between the two child elements --around</h5>
    <Row justify="around">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>Average distribution with equal spacing (including boundaries) --evenly</h5>
    <Row justify="evenly">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
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
    padding 10px 0
    background #e5e5e5
h5
    margin-bottom 8px
```
