---
title: 展示间隔点
order: 4
---

给`Slider`指定`isShowStop`属性，可以展示间隔点，在间隔点不密集时使用。

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider value={{ 45 }} step={{ 5 }} isShowStop isShowInput={{ false }}/>
    <Slider value={{ [0.3, 0.6] }} min={{ 0 }} max={{ 1 }} step={{ 0.1 }} isRange isShowStop />
</div>
```
