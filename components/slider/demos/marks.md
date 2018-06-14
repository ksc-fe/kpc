---
title: 展示标签
order: 5
---

通过`marks`属性，可以给`Slider`标注刻度，该属性类型为`Object`，`key`表示组件的值，`value`为该
值对应展示的标注文案。

```vdt
import Slider from 'kpc/components/slider';

const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6月',
    7: '7',
    8: '8',
    9: '9',
    10: '1年',
    11: '2年',
    12: '3年',
};

<div>
    <Slider min={{ 1 }} max={{ 12 }} value={{ 6 }} 
        isShowInput={{ false }}
        marks={{ marks }}
    />
    <Slider min={{ 1 }} max={{ 12 }} value={{ [2, 6] }} 
        isShowInput={{ false }}
        isRange
        marks={{ marks }}
    />
</div>
```
