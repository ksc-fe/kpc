---
title: 强制取值与step关联
order: 1.1
---

当指定`step`并且同时指定`forceStep`，则输入值除了边界值之外，必须为满足条件`min + step * n`(`n`为整数)的等差数列

```vdt
import {Spinner} from 'kpc';

<div>
    <Spinner v-model="value1" max={10} min={0} step={1.2} forceStep />
    <Spinner v-model="value2" max={10} min={-10} step={2} forceStep />
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
