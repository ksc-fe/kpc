---
title: 基础用法
order: 0
---

通过`disabled`禁用组件，`v-model`进行数据双向绑定。

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch v-model="value" />
    <Switch disabled />
</div>
```

```styl
.k-switch
    margin-right 20px
```
