---
title: 固定时间点范围选择
order: 3
---

添加`range`属性，同时指定`step`可以展示固定时间点范围选择

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" step="00:30" range clearable />
    You selected: {{ JSON.stringify(self.get('time')) }}
</div>
```

