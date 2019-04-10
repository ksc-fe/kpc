---
title: 
    zh-CN: 展示间隔点
    en-US: Display interval
order: 4
---
## zh-CN

给`Slider`指定`isShowStop`属性，可以展示间隔点，在间隔点不密集时使用。

## en-US

Specify the `isShowStop` attribute for `Slider` to display the interval points and use them when the interval is not dense

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider value={{ 45 }} step={{ 5 }} isShowStop isShowInput={{ false }}/>
    <Slider value={{ [0.3, 0.6] }} min={{ 0 }} max={{ 1 }} step={{ 0.1 }} isRange isShowStop />
</div>
```
