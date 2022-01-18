---
title: 最大/小值及步长
order: 1
---

`max`和`min`可指定取值范围，`step`指定步长

```vdt
import {Spinner} from 'kpc';

<div>
    <Spinner v-model="value1" max={10} min={0} step={1.2} />
    <Spinner v-model="value2" max={10} min={-10} step={0.1} />
</div>
```

```styl
.k-spinner
    margin-right 20px
```

```ts
interface Props {
    value1?: number
    value2?: number
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            value1: 0,
            value2: 0
        };
    }
}
```
