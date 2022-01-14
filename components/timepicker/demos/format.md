---
title: 格式化时间 
order: 4 
---

组件内部使用[dayjs][1]处理日期对象，通过`format`属性，可以指定日期格式化字符串，默认的格式为：
`HH:mm:ss`

`format`会同时格式化展示的字符串和最终的`value`值，如果你想分别对它们格式化，可以通过`showFormat`格式化
展示的日期，通过`valueFormat`格式化`value`值，并且它们的优先级比`format`高

> 如果你想给组件传入初始`value`值，但是该字符串不是默认格式，则必须指定`format`或者`valueFormat`。同时该
> 属性也可以作用于`max` `min`属性

```vdt
import {Timepicker} from 'kpc';

<div>
    <Timepicker 
        v-model="time1"
        min="01:34 am"
        max="03:02 pm" 
        format="hh:mm a"
    />
    <span>You selected: {this.get('time1')}</span>
    <br /><br />
    <Timepicker v-model="time2"
        step="00:30:00"
        showFormat="HH:mm"
    />
    <span>You selected: {this.get('time2')}</span>
    <br /><br />
    <Timepicker
        v-model="time3"
        step="00:30:00"
        range 
        clearable
        valueFormat="HH:mm:ss.SSS"
        showFormat="HH:mm"
    />
    <span>You selected: {JSON.stringify(this.get('time3'))}</span>
</div>
```

```ts
interface Props {
    time1?: string | null
    time2?: string | null
    time3?: [string, string] | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            tiem1: null,
            time2: null,
            time3: null
        } as Props;
    };
}
```

[1]: https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#list-of-all-available-formats
