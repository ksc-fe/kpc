---
title: 设置步长
order: 1
---

通过`step`可以设置步长，默认步长为`1`

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider v-model="value1" step={{ 5 }} isShowEnd={{ false }} />
    <Slider v-model="value2" min={{ 50 }} max={{ 500 }} step={{ 0.1 }} />
</div>
```

```styl
.k-slider
    margin-bottom 20px
```
