---
title: 日期多选
order: 4
---

添加`multiple`属性，即可支持日期多选。

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker multiple v-model="date" />
    You selected: {{ JSON.stringify(self.get('date')) }}
</div>
```
