---
title: 
    zh-CN: 禁用状态
    en-US: Disabled state
order: 1
---
## zh-CN

给`Select`添加`disabled`禁用整个选择框选择；给`Option`添加`disabled`禁用该项选择

## en-US

Add `disabled` to `Select` to disable the entire selection box selection; add `disabled` to `Option` to disable the selection

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" disabled style="margin-right: 10px">
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    <Select v-model="day">
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday" disabled>Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
</div>
```
