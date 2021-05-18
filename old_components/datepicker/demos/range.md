---
title: 日期范围选择
order: 6
---

给组件添加`range`属性，可以选择日期范围

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker range v-model="date" clearable />
    You selected: {{ JSON.stringify(self.get('date')) }}
    <br /><br />
    <Datepicker range type="datetime" v-model="time" clearable />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```
