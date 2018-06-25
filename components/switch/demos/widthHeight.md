---
title: 长/宽
order: 2
---

通过`width`/`height`，可定义开关长度/高度，不用加单位（默认`px`）。

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch on="开启" off="关闭" width="62" />
    <Switch height="30" />
    <Switch on="开启" off="关闭" width="100" height="30" />
</div>
```

```styl
.k-switch
    margin-right 20px
```
