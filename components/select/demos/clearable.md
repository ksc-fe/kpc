---
title: 可清空
order: 2
---

指定`clearable`展示清空按钮

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" clearable style="margin-right: 10px">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    <Select v-model="days" multiple clearable>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
</div>
```
