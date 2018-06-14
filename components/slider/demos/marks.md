---
title: 展示标签
order: 5
---

给`Slider`指定`isShowStop`属性，可以展示间隔点，在间隔点不密集时使用。

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
