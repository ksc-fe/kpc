---
title: 
    zh-CN: 固定时间点范围选择
    en-US: Fixed time point range selection
order: 3
---

## zh-CN

添加`range`属性，同时指定`step`可以展示固定时间点范围选择

## en-US

Adding the `range` property, at the same time, you can display the fixed time point range selection by specifing the `step` property.

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" step="00:30:00" range clearable />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```

