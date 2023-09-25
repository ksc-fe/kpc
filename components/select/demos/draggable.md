---
title: 多选值拖动排序
order: 13 
---

`Select`添加`draggable`属性，多选时，可以拖动值进行排序

```vdt
import {Select, Option} from 'kpc';

<div>
    <Select multiple draggable 
        v-model="days1"
    >
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    {JSON.stringify(this.get('days1'))}
    <br /><br />
    <Select multiple draggable nowrap
        v-model="days2"
    >
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    {JSON.stringify(this.get('days2'))}
</div>
```

```ts
interface Props {
   days1?: string[]
   days2?: string[]
}

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            days1: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            days2: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        } as Props;
    }
}
```
