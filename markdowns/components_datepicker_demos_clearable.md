---
title: 可清空
order: 1
---

添加`clearable`属性，可以清空当前日期。

```vdt
import {Datepicker} from 'kpc';

<Datepicker clearable v-model="date"/>
```

```ts
interface Props {
    date?: string | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            date: null,
        } as Props;
    }
}
```
