---
title: 基础使用
order: 0
---

基础用法，通过`v-model`双向绑定，值为任意合法的日期或时间字符串，组件最终都会处理成时间字符串，
日期信息将被忽略。添加`multiple`属性可以支持多选；通过`min` `max`属性可以指定最小最大可选时间

```vdt
import {Timepicker} from 'kpc';

<div>
    <Timepicker v-model="time"
        min="01:34:56"
        max="15:02:59"
    />
    You selected: {this.get('time')}
    <br /><br />
    <Timepicker v-model="timeArray"
        multiple
        clearable
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
    }
}
```
