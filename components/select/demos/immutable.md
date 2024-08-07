---
title: disabled选项不可删除
order: 14
---

在指定`multiple`多选的情况下，`Select`指定`value`包含`disabled Option`，则禁止删除

```vdt
import {Select, Option, OptionGroup} from 'kpc';

<div>
    <Select v-model="day" multiple filterable clearable>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday" disabled>星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday" disabled>星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    You selected: {JSON.stringify(this.get('day'))} 
</div>
```

```ts
interface Props {
   day?: string[]
}

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            day: ['Tuesday', 'Sunday', 'Wednesday'],
        } as Props;
    }
}
```
