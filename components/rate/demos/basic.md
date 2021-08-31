---
title: 基础用法
order: 0
---

通过`value`设置组件的值，当添加`half`属性时，支持选中半星

```vdt
import {Rate} from 'kpc/components/rate';

<div>
    <Rate v-model="value1" />
    <br />
    <Rate v-model="value2" half />
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            value1: 2, 
            value2: 2.5
        };
    }
}
```
