---
title: 日期范围选择
order: 6
---

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker range v-model="date" />
    You selected: {{ JSON.stringify(self.get('date')) }}
    <!--<br /><br />
    <Datepicker range type="datetime" v-model="time" />
    You selected: {{ JSON.stringify(self.get('time')) }}-->
</div>
```
