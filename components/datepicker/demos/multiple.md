---
title: 
    zh-CN: 日期多选
    en-US: Multiple Selection
order: 4
---

## zh-CN

添加`multiple`属性，即可支持日期多选。

## en-US

Add the `multiple` property to make it support multiple selections of dates.

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker multiple v-model="date" />
    You selected: {{ JSON.stringify(self.get('date')) }}
    <br /><br />
    <Datepicker multiple v-model="datetime" type="datetime" />
    You selected: {{ JSON.stringify(self.get('datetime')) }}
</div>
```
