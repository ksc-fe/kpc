---
title: 日期多选
order: 4
---

添加`multiple`属性，即可支持日期多选。

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker multiple v-model="date" clearable />
    You selected: {JSON.stringify(this.get('date'))}
    <br /><br />
    <Datepicker multiple v-model="datetime" type="datetime" />
    You selected: {JSON.stringify(this.get('datetime'))}
    <br /><br />
    <Datepicker multiple v-model="year" type="year" />
    You selected: {JSON.stringify(this.get('year'))}
    <br /><br />
    <Datepicker multiple v-model="month" type="month" />
    You selected: {JSON.stringify(this.get('month'))}
    <br /><br />
    <Datepicker multiple range v-model="dateRange" />
    You selected: {JSON.stringify(this.get('dateRange'))}
    <br /><br />
    <Datepicker multiple range type="datetime" v-model="datetimeRange" />
    You selected: {JSON.stringify(this.get('datetimeRange'))}
    <br /><br />
</div>
```

```ts
interface Props {
    date?: string[]
    datetime?: string[]
    year?: string[]
    month?: string[]
    dateRange?: [string, string][]
    datetimeRange?: [string, string][]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            date: [],
            datetime: [],
            year: [],
            month: [],
            dateRange: [],
            datetimeRange: [],
        } as Props;
    }
}
```
