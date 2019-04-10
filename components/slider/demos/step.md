---
title: 
    zh-CN: 设置步长
    en-US: Set step size
order: 1
---
## zh-CN

通过`step`可以设置步长，默认步长为`1`

## en-US

The step size can be set by `step`, the default step size is `1`

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
