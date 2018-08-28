---
title: 基础使用
order: 0
---

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" /> You selected: {{ self.get('time') }}
    <br /><br />
    <Timepicker v-model="timeArray" multiple /> You selected: {{ JSON.stringify(self.get('timeArray')) }}
</div>
```
