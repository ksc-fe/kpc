---
title: flex对齐
order: 5
---

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <h5>顶端对齐</h5>
    <Row align="top" justify="center"> 
        <Col span="4" style="height: 100px">col-4</Col>
        <Col span="4" style="height: 60px">col-4</Col>
        <Col span="4" style="height: 80px">col-4</Col>
        <Col span="4" style="height: 40px">col-4</Col>
    </Row>
    <h5>底部对齐</h5>
    <Row align="bottom" justify="center"> 
        <Col span="4" style="height: 100px">col-4</Col>
        <Col span="4" style="height: 60px">col-4</Col>
        <Col span="4" style="height: 80px">col-4</Col>
        <Col span="4" style="height: 40px">col-4</Col>
    </Row>
    <h5>居中对齐</h5>
    <Row align="middle" justify="center"> 
        <Col span="4" style="height: 100px">col-4</Col>
        <Col span="4" style="height: 60px">col-4</Col>
        <Col span="4" style="height: 80px">col-4</Col>
        <Col span="4" style="height: 40px">col-4</Col>
    </Row>
    <h5>撑开成容器高度</h5>
    <Row align="stretch" justify="center" style="height: 100px;"> 
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>基线对齐</h5>
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
