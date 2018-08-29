---
title: 固定时间点范围选择
order: 3
---

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" step="00:30:00" range clearable />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```

