---
title: 基础用法
order: 0
---

标签类型：`default`, `primary`, `success`, `warning` `danger`

```vdt
import {Tip} from 'kpc';

<div>
    <Tip v-for={this.get('types')}
        type={$value}
    >{$value}</Tip>
</div>
```

```styl
.k-tip
    margin-bottom 8px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            types: ['default', 'primary', 'success', 'warning', 'danger'] as const
        };
    }
}
```
