---
title: 最大和最小日期
order: 2
---

通过`max`和`min`可以给组件指定最大和最小选择日期。

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker v-model="from" placeholder="开始日期"
        max={this.get('to')}
        min={new Date()}
    /> ~
    <Datepicker v-model="to" placeholder="结束日期"
        min={this.get('from')}
    />
    <br />
    <br />
    <Datepicker v-model="fromTime" placeholder="开始时间"
        type="datetime"
        max={this.get('toTime') || new Date()}
    /> ~
    <Datepicker v-model="toTime" placeholder="结束时间"
        type="datetime"
        min={this.get('fromTime')}
        max={new Date()}
    />
</div>
```

```ts
interface Props {
    from?: string
    to?: string
    fromTime?: string
    toTime?: string
}

export default class extends Component<Props> {
    static template = template;
}
```
