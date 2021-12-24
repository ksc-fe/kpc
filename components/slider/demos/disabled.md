---
title: 禁用组件
order: 3
---

添加`disabled`禁用组件

```vdt
import {Slider} from 'kpc';

<div>
    <Slider disabled value={50} ref="__test" />
    <Slider disabled isRange value={[55, 80]} min={50} max={100} />
</div>
```
