---
title: 自定义内容
order: 2
---

`Ellipsis`支持任意自定义内容。

```vdt
import {Ellipsis, Split, Button, Icon} from 'kpc';

<div style={{width: '200px'}}>
    <Ellipsis class="panel tooltip-class">
        <Icon class="ion-heart" />
        <Button type="primary">测试</Button>
        <Icon class="ion-heart" />
        <Button type="primary">测试</Button>
        <Icon class="ion-heart" />
        <Button type="primary">测试</Button>
        <Icon class="ion-heart" />
        <Button type="primary">测试</Button>
        <Icon class="ion-heart" />
        <Button type="primary">测试</Button>
    </Ellipsis>
</div>
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
    margin-bottom 20px
.k-btn
    margin 10px
.panel
    margin 10px
```