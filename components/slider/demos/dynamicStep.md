---
title: 动态步长
order: 1.1
---

动态步长是指，步长`step`不是固定不变的，而是定义在不同的取值区间，`step`取不同的步长值。
设置动态步长有两种方式：

1. 通过对象`Object`设置，此时`key`表示小于当前值时`step`的取值，其中`$`代表`Number.POSITIVE_INFINITY`
2. 通过方法`Function`设置，组件会将当前值`value`，以及下一个值变化的方向`direction`（如果存在的话）传给
该方法，函数的返回值即为`step`

该示例中，两种定义方式是等价的

```vdt
import Slider from 'kpc/components/slider';

<div>
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
    <Slider v-model="value2" min={{ 0 }} max={{ 500 }}
        step={{ (value, direction) => {
            if (value < 100) return 10;
            if (value === 100) return direction === 'increase' ? 50 : 10;
            return 50;
        } }}
        showTooltip
        isShowStop
    />
</div>
```

```styl
.k-slider
    margin-bottom 20px
```
