---
title: 
    zh-CN: 最大/小值及步长
    en-US: Maximum/minimum and step size
order: 1
---
## zh-CN

`max`和`min`可指定取值范围，`step`指定步长

## en-US

`max` and `min` can specify the range of values, `step` specifies the step size

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner v-model="value1" max={{ 10 }} min={{ 0 }} step={{ 1.2 }} />
    <Spinner v-model="value2" max={{ 10 }} min={{ -10 }} step={{ 0.1 }} />
</div>
```

```styl
.k-spinner
    margin-right 20px
```
