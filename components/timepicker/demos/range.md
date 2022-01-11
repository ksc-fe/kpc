---
title: 时间范围
order: 1
---

添加`range`属性，支持时间范围选择

```vdt
import {Timepicker} from 'kpc';

<div>
    <Timepicker v-model="time" range clearable />
    You selected: {JSON.stringify(this.get('time'))}
    <br />
    <br />
    <Timepicker v-model="timeArr" range clearable multiple />
    You selected: {JSON.stringify(this.get('timeArr'))}
</div>
```
