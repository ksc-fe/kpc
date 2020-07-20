---
title: 动态步长
order: 1.1
---

动态步长是指，步长`step`不是固定不变的，而是定义在不同的取值区间，`step`取不同的步长值。

通过对象`Object`设置，此时`key`表示小于当前值时`step`的取值，其中`$`代表`Number.POSITIVE_INFINITY`

```vdt
import Slider from 'kpc/components/slider';

<Slider v-model="value1" min={{ 0 }} max={{ 500 }}
    step={{ {
        // 0~100 step: 10
        '100': 10,
        // 100~500 step: 50
        '500': 50
    } }}
    showTooltip
    isShowStop
/>
```
