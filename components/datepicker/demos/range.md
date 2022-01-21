---
title: 日期范围选择
order: 6
---

给组件添加`range`属性，可以选择日期范围

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker range v-model="date" clearable />
    You selected: {JSON.stringify(this.get('date'))}
    <br /><br />
    <Datepicker range type="datetime" v-model="time" clearable />
    You selected: {JSON.stringify(this.get('time'))}
    <br /><br />
    <Datepicker range type="year" v-model="year" clearable />
    You selected: {JSON.stringify(this.get('year'))}
    <br /><br />
    <Datepicker range type="month" v-model="month" clearable />
    You selected: {JSON.stringify(this.get('month'))}
    <br /><br />
</div>
```

```ts
interface Props {
    date?: [string, string] | null
    time?: [string, string] | null
    year?: [string, string] | null
    month?: [string, string] | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            date: null,
            time: null,
            year: null,
            month: null,
        } as Props;
    }
}
```
