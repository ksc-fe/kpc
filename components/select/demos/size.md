---
title: 
    zh-CN: 尺寸
    en-US: Size
order: 7
---
## zh-CN

`size`指定尺寸：`large` `default` `small` `mini`

## en-US

`size` specifies the size: `large` `default` `small` `mini`

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" size="large">
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
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    <Select v-model="day" size="small">
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    <Select v-model="day" size="mini">
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

```styl
.k-select
    margin-right 10px
```
