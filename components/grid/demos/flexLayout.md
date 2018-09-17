---
title: flex布局
order: 4
---

给`Row`添加`justify`属性，即可自动启用`flex`布局来定义`Col`水平方向的排列方式，它的可选值为：
`start` `end` `center` `between` `around` `evenly`

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <h5>居左 start</h5>
    <Row justify="start"> 
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>居右 end</h5>
    <Row justify="end"> 
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>居中 center</h5>
    <Row justify="center"> 
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>平均分布，顶边 between</h5>
    <Row justify="between"> 
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>平均分布，与边界的距离是两个子元素的一半 around</h5>
    <Row justify="around"> 
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <h5>平均分布，间距（包括边界）相等 evenly</h5>
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
