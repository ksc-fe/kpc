---
title: 
    zh-CN: 禁用组件
    en-US: Disable component
order: 3
---
## zh-CN

添加`disabled`禁用组件

## en-US

Add `disabled` to disable components

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider disabled value={{ 50 }} />
    <Slider disabled isRange value={{ [55, 80] }} min={{ 50 }} max={{ 100 }} />
</div>
```
