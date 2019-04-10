---
title: 
    zh-CN: 长/宽
    en-US: Length/width
order: 2
---

## zh-CN

通过`width`/`height`，可定义开关长度/高度，不用加单位（默认`px`）。

## en-US

With `width`/`height`, you can define the switch length/height without adding a unit (default `px`).

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch on="on" off="off" width="62" />
    <Switch height="22" />
    <Switch on="on" off="off" width="100" height="30" />
</div>
```

```styl
.k-switch
    margin-right 20px
```
