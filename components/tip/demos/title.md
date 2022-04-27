---
title: 展示标题
order: 2
---

通过`title`扩展点，可以自定义标题内容

```vdt
import {Tip} from 'kpc';

<div>
    <Tip v-for={this.get('types')}
        key={$value}
        type={$value}
        closable
    >
        <b:title>{$value}</b:title>
        This is a {$value} tip.
    </Tip>
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
