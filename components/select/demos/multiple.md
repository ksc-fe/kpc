---
title: 多选
order: 3
---

指定`multiple`支持多选

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" multiple>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    You selected: {{ JSON.stringify(self.get('day')) }} 
</div>
```
