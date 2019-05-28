---
title: 日期多选
order: 4
---

添加`multiple`属性，即可支持日期多选。

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker multiple v-model="date" clearable />
    You selected: {{ JSON.stringify(self.get('date')) }}
    <br /><br />
    <Datepicker multiple v-model="datetime" type="datetime" />
    You selected: {{ JSON.stringify(self.get('datetime')) }}
</div>
```
