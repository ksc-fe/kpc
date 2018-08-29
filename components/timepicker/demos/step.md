---
title: 固定时间点
order: 2
---

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" step="00:30:00"/>
    You selected: {{ JSON.stringify(self.get('time')) }}
    <br /><br />
    <Timepicker v-model="timeArray" multiple clearable
        step="00:30:00" 
        min="09:00:00"
        max="18:00"
    />
    You selected: {{ JSON.stringify(self.get('timeArray')) }}
</div>
```
