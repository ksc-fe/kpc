---
title: 设置步长
order: 1
---

通过`step`可以设置步长，默认步长为`1`，当该属性值为`0`时，不限制步长

> 如果`step`设为`0`，`Spinner`默认会设置`step = 0.01`来指定加减按钮的步长

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider v-model="value1" step={{ 5 }} isShowEnd={{ false }} />
    <Slider v-model="value2" min={{ 50 }} max={{ 500 }} step={{ 0.1 }} />
    <Slider value={{ 0.234234 }} max={{ 1 }} step={{ 0 }} />
</div>
```

```styl
.k-slider
    margin-bottom 20px
```
