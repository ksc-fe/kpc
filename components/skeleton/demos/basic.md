---
title: 基础用法
order: 0
---

通过`value`设置组件的值，当添加`half`属性时，支持选中半星

```vdt
import {Skeleton} from 'kpc';

<div>
    <Skeleton />
</div>
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
            value1: 2, 
            value2: 2.5
        };
    }
}
```
