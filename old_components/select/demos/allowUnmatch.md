---
title: 输入和选择
order: 8
---

同时指定`filterable`和`allowUnmatch`支持筛选到不存在的条目时，可以返回输入的值，而不是清空输入

> 目前只支持单选

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" filterable allowUnmatch style="margin-right: 10px">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    Day: {{ self.get('day') }}
</div>
```
