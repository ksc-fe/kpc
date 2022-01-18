---
title: 精度
order: 1.3
---

给组件添加`precision`属性可以指定输入值的小数位数，当指定为`0`时，则只能输入整数

```vdt
import {Spinner} from 'kpc';

<div>
    <Spinner v-model="value1"
        max={10}
        min={0}
        precision={0}
    />
    <Spinner v-model="value2"
        max={10}
        min={-10} 
        step={0.1}
        precision={1}
    />
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
