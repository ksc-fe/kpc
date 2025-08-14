---
title: 选择年、月
order: 5.1
---

将`type`属性指定为`year`或`month`可以只选择“年”或“月”

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker type="year" v-model="year" />
    <Datepicker type="month" v-model="month" clearable />
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
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            year: null,
            month: null,
        } as Props;
    }
}
```
