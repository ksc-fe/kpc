---
title: 日期多选
order: 4
---

添加`multiple`属性，即可支持日期多选。

```vdt
import {Datepicker} from 'kpc/components/datepicker';

<div>
    <Datepicker multiple v-model="date" clearable />
    You selected: {JSON.stringify(this.get('date'))}
    <br /><br />
    <Datepicker multiple v-model="datetime" type="datetime" />
    You selected: {JSON.stringify(this.get('datetime'))}
    <br /><br />
    <Datepicker multiple v-model="year" type="year" />
    You selected: {JSON.stringify(this.get('year'))}
    <br /><br />
    <Datepicker multiple v-model="month" type="month" />
    You selected: {JSON.stringify(this.get('month'))}
</div>
```
