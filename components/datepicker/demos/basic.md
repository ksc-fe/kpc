---
title: 基本用法
order: 0
---

基本用法和禁用状态

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker v-model="date" ref="__demo" />
    <Datepicker v-model="date" flat />
    <Datepicker disabled value="2018-01-01"/>
</div>
```

```styl
.k-datepicker
    margin-right 20px
```

```ts
interface Props {
    date?: string | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            date: null
        } as Props;
    }
}
```
