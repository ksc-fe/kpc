---
title: 幽灵按钮
order: 6
---

给组件添加`ghost`属性，可以展示透明背景的按钮，常用于深色背景下

```vdt
import {Button, Icon} from 'kpc';

<div class="wrapper">
    <Button ghost><Icon class="k-icon-left" />default</Button>
    <Button type="primary" ghost>primay<Icon class="k-icon-right" /></Button>
    <Button type="warning" ghost>warning</Button>
    <Button type="danger" ghost>danger</Button>
    <Button type="success" ghost>success</Button>
    <Button color="rgb(183, 18, 193)" ghost>custom</Button>
    <Button type="none" ghost>none</Button>
    <Button type="primary" ghost disabled>primay</Button>
</div>
```

```styl
.wrapper
    background #5a5a5d
    padding 20px
.k-btn
    margin-right 20px
```
