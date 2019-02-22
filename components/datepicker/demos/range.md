---
title: 
    zh-CN: 日期范围选择
    en-US: Date Range Selection
order: 6
---

## zh-CN

添加`range`来支持范围选择

## en-US

Add the `range` property to make it support date range selection.

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker range v-model="date" />
    You selected: {{ JSON.stringify(self.get('date')) }}
    <br /><br />
    <Datepicker range type="datetime" v-model="time" />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```
