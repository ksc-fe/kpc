---
title: 基础用法
order: 0
---

通过`size`属性可以指定组件尺寸: `large` `default` `small` `mini`

```vdt
import {Spin} from 'kpc';

<div>
    <Spin v-for={this.get('sizes')}
        size={$value}
    />
</div>
```

```styl
.k-spin
    margin-right 16px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            sizes: ['large', 'default', 'small', 'mini'] as const
        }
    }
}
```
