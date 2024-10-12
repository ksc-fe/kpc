---
title: 尺寸
order: 4
---

尺寸大小：`large`, `default`, `small`, `mini`

```vdt
import {Tip} from 'kpc';

<div>
    <Tip v-for={this.get('sizes')}
        type="primary"
        size={$value}
    >{$value}</Tip>
    <h3>带关闭按钮</h3>
    <Tip v-for={this.get('sizes')}
        type="primary"
        size={$value}
        closable
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
            sizes: ['large', 'default', 'small', 'mini'] as const
        };
    }
}
```
