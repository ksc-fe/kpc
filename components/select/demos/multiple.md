---
title: 
    zh-CN: 多选
    en-US: Multiple selection
order: 3
---
## zh-CN

指定`multiple`支持多选

## en-US

Specify `multiple` to support multiple selections

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" multiple>
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    You selected: {{ JSON.stringify(self.get('day')) }} 
</div>
```
