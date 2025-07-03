---
title: 选择年、月、周、季度
order: 5.1
---

将`type`属性指定为`year`或`month``或`week``或`quarter`可以只选择“年”或“月””或“周””或“季度”

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker type="year" v-model="year" />
    <Datepicker type="month" v-model="month" clearable />
    <Datepicker type="week" v-model="week" clearable />
    <Datepicker type="quarter" v-model="quarter" clearable />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```

```ts
interface Props {
    year?: string | null
    month?: string | null
    week?: string | null
    quarter?: string | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            year: null,
            month: null,
            week: null,
            quarter: null,
        } as Props;
    }
}
```
