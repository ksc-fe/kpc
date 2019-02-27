---
title: 
    zh-CN: 时间范围
    en-US: Time range
order: 1
---

## zh-CN

添加`range`属性，支持时间范围选择

## en-US

You can support the time range selection by adding `range` property.

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" range clearable />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```
