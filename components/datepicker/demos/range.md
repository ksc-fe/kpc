---
title: 日期范围选择
order: 6
---

给组件添加`range`属性，可以选择日期范围

```vdt
import {Datepicker} from 'kpc/components/datepicker';

<div>
    <Datepicker range v-model="date" clearable />
    You selected: {JSON.stringify(this.get('date'))}
    <br /><br />
    <Datepicker range type="datetime" v-model="time" clearable />
    You selected: {JSON.stringify(this.get('time'))}
    <br /><br />
    <Datepicker range type="year" v-model="year" clearable />
    You selected: {JSON.stringify(this.get('year'))}
    <br /><br />
    <Datepicker range type="month" v-model="month" clearable />
    You selected: {JSON.stringify(this.get('month'))}
    <br /><br />
</div>
```
