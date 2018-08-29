---
title: 基础使用
order: 0
---

基础用法，通过`v-model`双向绑定，值为时间字符串，并非`Date`对象。添加`multiple`属性可以支持多选

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" /> You selected: {{ self.get('time') }}
    <br /><br />
    <Timepicker v-model="timeArray" multiple /> You selected: {{ JSON.stringify(self.get('timeArray')) }}
</div>
```
