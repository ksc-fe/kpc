---
title: 将搜索框内嵌到弹出菜单中
order: 0
---

给`Select`添加`searchable`属性即可在弹出菜单中展示搜索框，如果此时开启`multiple`支持多选，则还会展示`Checkbox`并添加“全选”，“反选”，
“清空”操作按钮

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" searchable>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    <Select v-model="days" searchable multiple>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
        <b:values params="value">
            <div class="k-value">
                已选择{{ value.length }}项 / 共7项
            </div>
        </b:values>
    </Select>
</div>
```

```styl
.k-select
    margin-right 16px
```
