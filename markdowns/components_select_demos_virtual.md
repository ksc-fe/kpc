---
title: 虚拟列表
order: 14
---

`virtual`属性开启虚拟列表

```vdt
import {Select, Option} from 'kpc';

<div>
    <Select v-model="day" virtual>
        <Option v-for={this.get('data')} value={$value.value}>
            {$value.label}
        </Option>
    </Select>
</div>
```

```ts
interface Props {
    day?: string | null
    data: any[]
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            day: null,
            data: []
        } as Props;
    }

    init() {
        const arr = [];
        for (let index = 0; index < 10000; index++) {
            arr.push({
                value: index,
                label: `测试${index}`
            });
        }
        this.set({data: arr});
    }
}
```
