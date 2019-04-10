---
title: 
    zh-CN: 可清空
    en-US: Clearable
order: 2
---
## zh-CN

指定`clearable`展示清空按钮

## en-US

Specify `clearable` to show the empty button

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" clearable style="margin-right: 10px">
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    <Select v-model="days" multiple clearable>
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
</div>
```
