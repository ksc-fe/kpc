---
title: 创建新选项
order: 8
---

同时指定`filterable`和`creatable`支持筛选到不存在的条目时，创建新的选项供选择

```vdt
import {Select, Option} from 'kpc';

<div>
    <Select v-model="day" filterable creatable style="margin-right: 10px">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    Day: {this.get('day')}
    <br /><br />
    <Select v-model="days" filterable multiple creatable style="margin-right: 10px" nowrap>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    Days: {JSON.stringify(this.get('days'))}
    <br /><br />
    <Select v-model="dayWithKeywords" filterable multiple creatable keepKeywords={false} style="margin-right: 10px">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    Day with keepKeywords=false: {JSON.stringify(this.get('dayWithKeywords'))}
</div>
```

```ts
interface Props {
    day?: string | null
    days?: string[]
    dayWithKeywords?: string[]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            day: null,
            days: [],
            dayWithKeywords: [],
        } as Props;
    }
}
```
