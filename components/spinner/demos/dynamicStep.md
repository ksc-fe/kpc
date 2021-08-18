---
title: 动态步长
order: 1.2
---

动态步长是指，步长`step`不是固定不变的，而是定义在不同的取值区间，`step`取不同的步长值。

通过对象`Object`设置，此时`key`表示小于当前值时`step`的取值，其中`$`代表`Number.POSITIVE_INFINITY`

```vdt
import Spinner from 'kpc/components/spinner';

<Spinner v-model="value1" step={{ {
    // 小于-5
    '-5': 5,
    // 大于-5，小于5
    '5': 1,
    // 大于5
    '$': 5
} }} />
```
