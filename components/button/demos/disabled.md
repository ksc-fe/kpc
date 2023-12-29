---
title: 禁用状态
order: 5
---

添加`disabled`属性，可以禁用按钮

```vdt
import {Button, Icon} from 'kpc';

<div>
    <Button disabled>disabled</Button>
    <Button disabled type="none">disabled text</Button>
    <Button disabled icon circle><Icon class="k-icon-search" /></Button>
    <Button disabled type="link">link</Button>
    <Button disabled type="flat">flat</Button>
</div>
```
