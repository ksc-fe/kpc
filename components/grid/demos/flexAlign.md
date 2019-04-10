---
title:
    zh-CN: flex 对齐
    en-US: flex algin
order: 5
---

## zh-CN

给`Row`添加`align`属性，即可自动启用`flex`布局来定义`Col`垂直方向的排列方式，它的可选值为：
`top` `bottom` `middle` `stretch` `baseline`

## en-US

Give ` Row ` add ` align ` attributes, can be automatically enabled ` flex ` layout to define ` Col ` vertical arrangement, it's optional value is:
` top ` ` bottom ` ` middle ` ` stretch ` ` baseline `


```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <h5>At the top of the alignment --top</h5>
    <Row align="top" justify="center">
        <Col span="4" style="height: 100px">col-4</Col>
        <Col span="4" style="height: 60px">col-4</Col>
        <Col span="4" style="height: 80px">col-4</Col>
        <Col span="4" style="height: 40px">col-4</Col>
    </Row>
    <h5>At the bottom of the alignment --bottom</h5>
    <Row align="bottom" justify="center">
        <Col span="4" style="height: 100px">col-4</Col>
        <Col span="4" style="height: 60px">col-4</Col>
        <Col span="4" style="height: 80px">col-4</Col>
        <Col span="4" style="height: 40px">col-4</Col>
    </Row>
    <h5>align center --middle</h5>
    <Row align="middle" justify="center">
        <Col span="4" style="height: 100px">col-4</Col>
        <Col span="4" style="height: 60px">col-4</Col>
        <Col span="4" style="height: 80px">col-4</Col>
        <Col span="4" style="height: 40px">col-4</Col>
    </Row>
    <h5>Hold out to container height --stretch</h5>
    <Row align="stretch" justify="center" style="height: 100px;">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>Baseline alignment --baseline</h5>
    <Row align="baseline" justify="center">
        <Col span="4" style="height: 100px; font-size: 20px">col-4</Col>
        <Col span="4" style="height: 60px; font-size: 16px">col-4</Col>
        <Col span="4" style="height: 80px; font-size: 28px">col-4</Col>
        <Col span="4" style="height: 40px; font-size: 12px">col-4</Col>
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
