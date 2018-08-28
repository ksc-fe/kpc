---
title: 时间范围
order: 1
---

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" range clearable />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```
