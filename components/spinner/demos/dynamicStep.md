---
title: 动态步长
order: 1.2
---

动态步长是指，步长`step`不是固定不变的，而是定义在不同的取值区间，`step`取不同的步长值。
设置动态步长有两种方式：

1. 通过对象`Object`设置，此时`key`表示小于当前值时`step`的取值，其中`$`代表`Number.POSITIVE_INFINITY`
2. 通过方法`Function`设置，组件会将当前值`value`，以及下一个值变化的方向`direction`（如果存在的话）传给
该方法，函数的返回值即为`step`

该示例中，两种定义方式是等价的

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner v-model="value1" step={{ {
        // 小于-5
        '-5': 5,
        // 大于-5，小于5
        5: 1,
        // 大于5
        $: 5
    } }} />
    <Spinner v-model="value2" step={{ (value, direction) => {
        if (value < -5 || value > 5) return 5;
        if (value > -5 && value < 5) return 1;
        // 需要在临界点的时候，判断是增加还是减少，来返回不同的step
        if (value === -5) {
            return direction === 'increase' ? 1 : 5;
        }
        if (value === 5) {
            return direction === 'decrease' ? 1 : 5;
        }
    } }} />
</div>
```

```styl
.k-spinner
    margin-right 20px
```
