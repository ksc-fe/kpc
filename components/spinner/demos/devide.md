---
title: 必须输入步长的整数倍 
order: 1
---

当指定`step`并且同时指定`devideByStep`，则输入值除了边界值之外，都必须被`step`整除

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner v-model="value1" max={{ 10 }} min={{ 0 }} step={{ 1.2 }} devideByStep />
    <Spinner v-model="value2" max={{ 10 }} min={{ -10 }} step={{ 2 }} devideByStep />
</div>
```

```styl
.k-spinner
    margin-right 20px
```
