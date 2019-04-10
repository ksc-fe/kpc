---
title: 
    zh-CN: 分组
    en-US: Grouping
order: 6
---
## zh-CN

用`OptionGroup`嵌套`Option`可以实现分组功能。我们还可以通过添加`card`属性来支持卡片式分组功能。
`OptionGroup`支持`label`扩展点，用来定义复杂的分组标签展示

## en-US

The grouping function can be implemented by nesting `OptionGroup` with `OptionGroup`. We can also support card grouping by adding the `card` attribute.
`OptionGroup` supports `label` extension points to define complex grouping label displays

```vdt
import {Select, Option, OptionGroup} from 'kpc/components/select';

<div>
    <Select v-model="day">
        <OptionGroup label="Working day">
            <Option value="Monday">Monday</Option>
            <Option value="Tuesday">Tuesday</Option>
            <Option value="Wednesday">Wednesday</Option>
            <Option value="Thursday">Thursday</Option>
            <Option value="Friday">Friday</Option>
        </OptionGroup>
        <OptionGroup label="playday">
            <Option value="Saturday">Saturday</Option>
            <Option value="Sunday">Sunday</Option>
        </OptionGroup>
    </Select>
    <Select v-model="day" card>
        <OptionGroup label="working day">
            <Option value="Monday">Monday</Option>
            <Option value="Tuesday">Tuesday</Option>
            <Option value="Wednesday">Wednesday</Option>
            <Option value="Thursday">Thursday</Option>
            <Option value="Friday">Friday</Option>
        </OptionGroup>
        <OptionGroup>
            <b:label><i class="ion-wineglass"></i>playday</b:label>
            <Option value="Saturday">Saturday</Option>
            <Option value="Sunday">Sunday</Option>
        </OptionGroup>
    </Select>
</div>
```

```styl
.k-select
    margin-right 10px
/.k-select-dropdown
    .ion-wineglass
        margin-right 8px
    .k-tab
        text-align right
```
