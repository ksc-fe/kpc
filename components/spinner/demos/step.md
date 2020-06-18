---
title: 最大/小值及步长
order: 1
---

`max`和`min`可指定取值范围，`step`指定步长

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner v-model="value1" max={{ 10 }} min={{ 0 }} step={{ 1.2 }} />
    <Spinner v-model="value2" max={{ 10 }} min={{ -10 }} step={{ 0.1 }} devideByStep />
</div>
```

```styl
.k-spinner
    margin-right 20px
```
