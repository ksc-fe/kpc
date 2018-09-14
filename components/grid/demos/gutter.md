---
title: 间距
order: 1
---

给`Row`添加`gutter`，可以定义`Col`之间的间距，单位为`px`；如果要支持响应式，可以以对象的方式
定义，如：`{lg: 16, md: 4}`

> IE9不支持matchMedia，如果要使`gutter`在IE9下支持响应式，需要引入[matchMedia polyfill](https://github.com/paulirish/matchMedia.js)

```vdt
import {Row, Col} from 'kpc/components/grid';

<div>
    <Row gutter="16"> 
        <Col span="12"><div>col-12</div></Col>
        <Col span="12"><div>col-12</div></Col>
    </Row>
    <Row gutter={{ {lg: 16, md: 4} }}>
        <Col span="4"><div>col-4</div></Col>
        <Col span="6"><div>col-6</div></Col>
        <Col span="8"><div>col-8</div></Col>
        <Col span="6"><div>col-6</div></Col>
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
