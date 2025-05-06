---
title: 固定时间点
order: 2
---

当指定了`step`属性时，组件将展示成`Select`样式，只能选择固定的几个时间点。通过`min`和`max`限定
选择时间范围（默认：00:00:00 ~ 23:59:59），`step`指定步长，它们值类型都为时间字符串

> 可以通过`showFormat`或`format`来格式化时间字符串，来隐藏“秒”

```vdt
import {Timepicker} from 'kpc';

<div>
    <Timepicker class="time"
        v-model="time"
        step="00:30:00"
    />
    You selected: {JSON.stringify(this.get('time'))}
    <br /><br />
    <Timepicker v-model="timeArray"
        multiple
        clearable
        step="00:30:00" 
        min="09:00:00"
        max="18:00:00"
    />
    You selected: {JSON.stringify(this.get('timeArray'))}
</div>
```

```ts
interface Props {
    time?: string | null
    timeArray?: string[]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            time: null,
            timeArray: []
        } as Props;
    };
}
```
