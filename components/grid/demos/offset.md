---
title:
    zh-CN: 偏移
    en-US: offset
order: 2
---

## zh-CN

给`Col`添加`offset`属性可以使列相对本来的位置向右偏移相应的列数

## en-US
Give ` Col ` add ` offset ` properties can make relative was the location of the shift to the right column corresponding to the number of columns

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <Row class="no-gutter">
        <Col span="6" offset="6">col-6 offset-6</Col>
        <Col span="6" offset="6">col-6 offset-6</Col>
    </Row>
    <Row gutter="16" class="gutter">
        <Col span="6" offset="6">col-6 gutter-16 offset-6</Col>
        <Col span="6" offset="6">col-6 gutter-16 offset-6</Col>
    </Row>
</div>
```

```styl
.k-col
    line-height 40px
    text-align center
    color #fff
.no-gutter
    .k-col
        &:nth-of-type(even)
            background #0a5eee
        &:nth-of-type(odd)
            background lighten(#0a5eee, 30%)
.gutter
    .k-col
        &:nth-of-type(even)
            div
                background #0a5eee
        &:nth-of-type(odd)
            div
                background lighten(#0a5eee, 30%)
.k-row
    margin-bottom 20px
```
