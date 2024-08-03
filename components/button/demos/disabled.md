---
title: 禁用状态
order: 5
---

添加`disabled`属性，可以禁用按钮

```vdt
import {Button, Icon} from 'kpc';

<div>
    <Button disabled>disabled</Button>
    <Button type="primary" disabled>primary</Button>
    <Button type="secondary" disabled>secondary</Button>
    <Button type="warning" disabled>warning</Button>
    <Button type="danger" disabled>danger</Button>
    <Button type="success" disabled>success</Button>
    <Button type="none" disabled>none</Button>
    <Button type="link" disabled>link</Button>
    <Button type="flat" disabled>flat</Button>
    <Button color="red" disabled>custom</Button>
</div>
```

```styl
.k-btn
    margin 0 20px 20px 0
```
